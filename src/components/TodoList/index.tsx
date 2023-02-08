import {
  Alert,
  Box,
  Checkbox,
  Divider,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Check, CheckCircle, NoteBlank, Trash } from "phosphor-react";
import type { Todo } from "../../types/Todo";
import { useCallback } from "react";

export type TodoListProps = {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

export function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  if (!todos.length) {
    return (
      <>
        <Divider />
        <Flex align="center" justify="center" direction="column" gap={3} p={16}>
          <Text>
            <NoteBlank size={48} />
          </Text>
          <Text>No todos yet</Text>
        </Flex>
      </>
    );
  }

  return (
    <>
      {todos.map((todo) => (
        <Box key={todo.id} mb={2}>
          <TodoListItem
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        </Box>
      ))}
    </>
  );
}

type TodoListItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function TodoListItem({
  todo: { id, text, completed },
  onToggle,
  onDelete,
}: TodoListItemProps) {
  const handleAction = useCallback(
    (cb: (id: string) => void) => {
      return () => cb(id);
    },
    [id]
  );

  return (
    <Alert
      status={completed ? "success" : "info"}
      variant="left-accent"
      rounded="lg"
    >
      <Checkbox
        checked={completed}
        onChange={handleAction(onToggle)}
        icon={completed ? <Check /> : <></>}
        colorScheme="green"
      >
        {completed ? <del>{text}</del> : text}
      </Checkbox>

      <Box ml="auto">
        <IconButton
          aria-label="Delete todo"
          icon={<Trash />}
          onClick={handleAction(onDelete)}
          variant="ghost"
          colorScheme="red"
          isRound={true}
          size="sm"
        />
      </Box>
    </Alert>
  );
}
