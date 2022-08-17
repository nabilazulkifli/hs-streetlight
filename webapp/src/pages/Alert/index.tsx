import React from 'react';
import {
    SimpleGrid,
    Box,
    Button,
    Select,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Input,
    Flex

} from '@chakra-ui/react'
import {BiChevronDown} from "react-icons/bi";


const alertData =[
    {
        address: 'DYNAMIC, Kajang, Sepang POC, Persiaran Semarak Api',
        feederPillar:'ACREL_PROD_0016',
        event: 'Amaran - Kuasa Di Guna Pada Waktu Siang - Kajang, Sepang POC, Persiaran Semarak Api,ARK_MBSA_0016, Jam 07:30:00',
        loggedTime:'2022-08-17 17:19:39',
        status:'PENDING INVESTIGATION'
    }
]

export const Alert = () => {
    return (
        <>
        <SimpleGrid columns={3} spacing={40}>
            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                    <text fontSize='20px'> Status</text>
                    <Select placeholder="Select Option">
                        <option value="'option1">CLOSED </option>
                        <option value="'option2">INVESTIGATION IN PROGRESS </option>
                        <option value="'option2">PENDING INVESTIGATIONS </option>
                        <option value="'option2">RESOLVED </option>
                        <option value="'option2">RESOLVING ISSUE </option>
                    </Select>
                </SimpleGrid>
            </Box>
            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                    <text> Categories</text>
                    <Select placeholder="Select Option">
                        <option value="'option1">DOOR STATU </option>
                        <option value="'option2">MAX VOLTAGE </option>
                        <option value="'option2">MIN VOLTAGE </option>
                        <option value="'option2">NO VOLTAGE </option>
                        <option value="'option2">CURRENT ACTIVE IN A.M</option>
                    </Select>
                </SimpleGrid>
            </Box>
            <SimpleGrid columns={3} >
                <Button colorScheme="teal" variant="outline">
                    Apply
                </Button>
            </SimpleGrid>
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

