import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Divider,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MapIcon } from "../../assets/icons/MapIcon";
import { CalendarIcon } from "../../assets/icons/CalendarIcon";
import { InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const DoctorCard = ({ doctor }) => {
  const [showSlot, setShowSlot] = useState(false);
  const toggleSlot = () => {
    setShowSlot((prevState) => !prevState);
  };
  return (
    <Card
      w="full"
      borderRadius={20}
      p={3}
      border="1px solid #EAECF0"
      shadow={0}
    >
      <HStack
        w="full"
        p={3}
        alignItems="flex-start"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <HStack flexWrap="wrap">
          <Image src={doctor.img} alt="Dan Abramov" borderRadius={20} />
          <VStack alignItems="flex-start" spacing={1}>
            <Text fontWeight="bold" fontSize="xl">
              {doctor.name}
            </Text>
            <Text size="md">{doctor.title}</Text>
            <Text size="md">
              <MapIcon mr={1} />
              {doctor.address}
            </Text>
            <Tag size="lg" background="orange.200">
              <StarIcon color="orange.800" mr={2} />
              {doctor.star}
            </Tag>
            <HStack flexWrap="wrap">
              <AvatarGroup size="sm" max={2}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <Text>Dyson, and 2+ more insurance accepted</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack>
          <Button variant="outline">
            <InfoOutlineIcon />
            <Text ml={2} as="span" display={["none", "block", "block"]}>
              More Info
            </Text>
          </Button>
          <Button variant="rounded_solid" onClick={toggleSlot}>
            <CalendarIcon />
            <Text ml={2} as="span" display={["none", "block", "block"]}>
              Book Again
            </Text>
          </Button>
        </HStack>
      </HStack>
      {showSlot && (
        <VStack w="full">
          <Divider />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            dicta commodi! Quis quisquam ratione, officiis asperiores ullam
            magni voluptate architecto tempora quam, nesciunt quod dolorum eius
            nemo odit temporibus consequuntur.
          </Text>
        </VStack>
      )}
    </Card>
  );
};
