import { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Select,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import useWindowSize from "../../hooks/useWindowSize";

export const Navbar = () => {
  const [showNav, setShowNav] = useState([true]);
  const windowsize = useWindowSize();

  function toggleNav() {
    setShowNav((prevState) => !prevState);
  }

  useEffect(() => {
    if (windowsize.width <= 767) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [windowsize]);
  return (
    <Box position="absolute" zIndex={100} w="full" px={4}>
      <Flex
        w="full"
        justifyContent="space-between"
        align="center"
        bgGradient="linear(to-r, #FFECF4, #CDC9FF)"
        borderRadius={30}
        py={4}
        px={10}
        gap={10}
        flexDirection={["column", "column", "row"]}
        boxShadow={["md", "md", "none"]}
      >
        <HamburgerIcon
          fontSize={30}
          display={["block", "block", "none"]}
          cursor="pointer"
          onClick={toggleNav}
        />
        {showNav && (
          <>
            <HStack
              bg="white"
              py={2}
              px={4}
              borderRadius={30}
              divider={<StackDivider borderColor="gray.200" />}
            >
              <Text mr={[2, 4, 10]}>Migraine</Text>
              <Text mr={[1, 3, 5]}>40361</Text>
              <HStack>
                <Select
                  variant="flushed"
                  placeholder="Agile Health Insurance"
                  mr={[1, 3, 5]}
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
          </>
        )}
      </Flex>
    </Box>
  );
};
