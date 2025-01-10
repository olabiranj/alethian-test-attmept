import { Button, Card, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar/Navbar";
import { DoctorCard } from "./components/DoctorCard/DoctorCard";
import { GlobeIcon } from "./assets/icons/GlobeIcon";
import { Filter } from "./components/Filter/Filter";
import { useDoctorsHook } from "./providers/DoctorsProvider";

function App() {
  const doctorData = useDoctorsHook();
  return (
    <VStack p={4}>
      <Navbar />
      <VStack
        p={10}
        bg="#F9FAFB"
        w="full"
        borderRadius={30}
        alignItems="flex-start"
      >
        <Heading size="xl">
          Migraine Illness with Agile Health Insurance
        </Heading>
        <Text fontWeight="bold" size="md" mt={5}>
          1000+ Results
        </Text>
        <HStack w="full" justifyContent="space-between" alignItems="flex-start">
          <VStack w="73%" gap={7}>
            {doctorData.map((doctor, i) => (
              <DoctorCard key={i} doctor={doctor} />
            ))}
          </VStack>
          <VStack w="25%" gap={7}>
            <Card
              w="full"
              borderRadius={20}
              p={5}
              border="1px solid #EAECF0"
              shadow={0}
            >
              <VStack gap={5}>
                <iframe
                  width="100%"
                  height="300"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
                <Button variant="outline" w="-webkit-fit-content" mx="auto">
                  <GlobeIcon mr={2} />
                  View in a map
                </Button>
              </VStack>
            </Card>
            <Filter/>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default App;
