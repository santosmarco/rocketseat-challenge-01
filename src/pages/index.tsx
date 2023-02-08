import { Box, Container } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import { Header } from "../components/Header";
import { NewTodoInput } from "../components/NewTodoInput";
import type { Todo } from "../types/Todo";
import { Summary } from "../components/Summary";
import { TodoList } from "../components/TodoList";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = useCallback((todoText: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: nanoid(),
        text: todoText,
        completed: false,
      },
    ]);
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <Head>
        <title>TodoApp</title>
        <meta name="description" content="TodoApp" />
      </Head>

      <Header />

      <main>
        <Container>
          <Box mt={-5}>
            <NewTodoInput onSubmit={handleAddTodo} />
          </Box>

          <Box mt={12}>
            <Summary todos={todos} />
          </Box>

          <Box mt={4}>
            <TodoList
              todos={todos}
              onToggleTodo={handleToggleTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Home;
