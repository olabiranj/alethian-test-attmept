import {
  Button,
  Flex,
  HStack,
  Select,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "../../assets/icons/SearchIcon";

export const Navbar = () => {
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      align="center"
      bgGradient="linear(to-r, #FFECF4, #CDC9FF)"
      borderRadius={30}
      py={4}
      px={10}
    >
      <HStack
        bg="white"
        py={2}
        px={4}
        borderRadius={30}
        divider={<StackDivider borderColor="gray.200" />}
      >
        <Text mr={10}>Migraine</Text>
        <Text mr={5}>40361</Text>
        <HStack>
          <Select
            variant="flushed"
            placeholder="Agile Health Insurance"
            mr={5}
          />
          <SearchIcon />
        </HStack>
      </HStack>
      <HStack spacing={5}>
        <Button colorScheme="teal" variant="link">
          Contact Us
        </Button>
        <Button variant="rounded_solid">Sign In</Button>
      </HStack>
    </Flex>
  );
};
