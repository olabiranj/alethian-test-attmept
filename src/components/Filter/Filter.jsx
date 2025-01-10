import {
  Card,
  Checkbox,
  Divider,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Filter = () => (
  <Card w="full" borderRadius={20} p={5} border="1px solid #EAECF0" shadow={0}>
    <HStack justifyContent="space-between">
      <Text fontWeight="bold" fontSize="xl">
        All Filter
      </Text>
      <Text fontSize="md" as="u">
        All Filter
      </Text>
    </HStack>
    <Divider my="4" />
    <VStack gap={5}>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold">Select Month</Text>
        <Select placeholder="July 2024" />
      </VStack>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold">Visit Type</Text>
        <Select placeholder="In-Person" />
      </VStack>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold">
          Preferred Time
        </Text>
        <Checkbox color="primary.800" value="naruto">
          Early Morning (Before 9am)
        </Checkbox>
      </VStack>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold">
          Preferred Time
        </Text>
        <Checkbox color="primary.800" value="naruto">
          Early Morning (Before 9am)
        </Checkbox>
      </VStack>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold">
          Preferred Time
        </Text>
        <Checkbox color="primary.800" value="naruto">
          Early Morning (Before 9am)
        </Checkbox>
      </VStack>
    </VStack>
  </Card>
);
