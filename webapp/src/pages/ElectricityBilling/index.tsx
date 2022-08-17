import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    SimpleGrid,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Input,
    Stack, Select
} from '@chakra-ui/react'
import {BiChevronDown} from "react-icons/bi";


export const ElectricityBilling = () => {
    return (
        <>
            <SimpleGrid columns={2} spacing={40}>
                <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                    <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                        <text> Concession: </text>
                        <Stack spacing={20} direction={['column', 'row']}>
                            <Select placeholder="Select Option">
                                <option value="'option1">TECHWON </option>
                                <option value="'option2">DYNAMIC </option>
                            </Select>
                            <Button colorScheme="teal" variant="outline">
                                Apply
                            </Button>
                        </Stack>
                    </SimpleGrid>
                </Box>

                <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}} >
                    <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                        <text>View By: </text>
                        <Stack spacing={20} direction={['column', 'row']}>
                            <Select placeholder="Select Option">
                                <option value="'option1">YEAR </option>
                                <option value="'option2">MONTH </option>
                                <option value="'option2">DAY </option>
                            </Select>
                               <Input className="input"
                                      placeholder="Select Date and Time"
                                      type="datetime-local"
                                      width= "50%"

                               />
                        </Stack>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>

        <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
            <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                <TableContainer display="block" maxWidth="100%">
                    <Table variant="striped" size='sm'>
                        <Thead>
                            <Tr>
                                <Th align='center'>Name</Th>
                                <Th align='center'>Bill Date</Th>
                                <Th align='center'>Bill Amount(RM)</Th>
                                <Th align='center'>Consumption(kWh)</Th>
                                <Th align='center'>Cost(RM)</Th>
                                <Th align='center'>Imbalance Cost Pass-Through (RM)</Th>
                                <Th align='center'>Current Month Usage (RM)</Th>
                                <Th align='center'>Current Month Usage (RM)</Th>
                                <Th align='center'>GST (RM)</Th>
                                <Th align='center'>Feed-In Tariff (RM)</Th>
                                <Th align='center'>Actions</Th>
                            </Tr>
                        </Thead>
                            <Tbody>
                                <Tr>
                                    <Input htmlSize={4} placeholder=' ' />
                                </Tr>
                                <Tr>
                                    <Th>Shah Alam</Th>
                                    <Th>Date</Th>
                                    <Th>5900.91</Th>
                                    <Th> 55657.59</Th>
                                    <Th> 12</Th>
                                    <Th> 12</Th>
                                    <Th> 12</Th>
                                    <Th> 12</Th>
                                    <Th> 12 </Th>
                                    <Th> 12</Th>
                                    <Button>
                                        Details
                                    </Button>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </SimpleGrid>
            </Box>

        </>
    );
};

