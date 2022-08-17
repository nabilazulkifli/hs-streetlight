import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export const ReportView = () => {
  return (
    <>
      <Heading fontSize={"4xl"}>Report View</Heading>
      <Spacer />
      {/* <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup> */}
      <Box maxW="10xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={[2, 2, 6]} spacing={{ sm: 8, md: 9 }}>
          <Text fontSize="lg" fontWeight="bold" mb="6px">
            Concession:
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb="6px">
            Majlis:
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb="6px">
            Section:
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb="6px">
            Road:
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb="6px">
            Feeder Pillar:
          </Text>
          <Text />

          <Select placeholder="Select" name="consession">
            <option value="option1">TECHWON</option>
            <option value="option2">DYNAMIC</option>
          </Select>
          <Select placeholder="Select" name="majlis">
            <option value="option1">TECHWON</option>
            <option value="option2">DYNAMIC</option>
          </Select>
          <Select placeholder="Select" name="section">
            <option value="option1">TECHWON</option>
            <option value="option2">DYNAMIC</option>
          </Select>
          <Select placeholder="Select" name="road">
            <option value="option1">TECHWON</option>
            <option value="option2">DYNAMIC</option>
          </Select>
          <Select placeholder="Select" name="feeder_pillar">
            <option value="option1">TECHWON</option>
            <option value="option2">DYNAMIC</option>
          </Select>
          <Button colorScheme="teal" variant="solid">
            Apply
          </Button>
        </SimpleGrid>
      </Box>
    </>
  );
};
