import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import type { Todo } from "../../types/Todo";
import type { ComponentProps, ReactNode } from "react";

export type SummaryProps = {
  todos: Todo[];
};

export function Summary({ todos }: SummaryProps) {
  return (
    <Flex align="center" justify="space-between">
      <SummaryItem title="Total" stat={todos.length} colorScheme="blue" />
      <SummaryItem
        title="Completed"
        stat={todos.filter((todo) => todo.completed).length}
        colorScheme="green"
      />
    </Flex>
  );
}

type SummaryItemProps = {
  title: ReactNode;
  stat: ReactNode;
  colorScheme?: ComponentProps<typeof Badge>["colorScheme"];
};

function SummaryItem({ title, stat, colorScheme }: SummaryItemProps) {
  return (
    <Flex align="baseline">
      <Badge colorScheme={colorScheme}>
        <Text display="inline" mr={2}>
          <small>{title}</small>
        </Text>
        {stat}
      </Badge>
    </Flex>
  );
}
