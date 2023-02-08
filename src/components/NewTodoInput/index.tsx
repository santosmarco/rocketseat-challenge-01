import { Button, Grid, GridItem, Input } from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
import { useCallback, useState, type ChangeEvent } from "react";

export type NewTodoInputProps = {
  onSubmit: (todoText: string) => void;
};

export function NewTodoInput({ onSubmit }: NewTodoInputProps) {
  const [todoText, setTodoText] = useState("");

  const handleTodoTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTodoText(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    onSubmit(todoText);
    setTodoText("");
  }, [onSubmit, todoText]);

  return (
    <Grid templateColumns="repeat(10, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <Input
          value={todoText}
          onChange={handleTodoTextChange}
          placeholder="Add a new todo..."
          bg="gray.700"
        />
      </GridItem>

      <GridItem colSpan={2}>
        <Button
          onClick={handleSubmit}
          rightIcon={<PlusCircle size={18} />}
          colorScheme="blue"
          width="100%"
        >
          Add
        </Button>
      </GridItem>
    </Grid>
  );
}
