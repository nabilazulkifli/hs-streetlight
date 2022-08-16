import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const TableData =() =>{
    return(
        <TableContainer>
        <Table size='md' variant='striped'>
            <Thead>
                <Tr>
                    <Th>Concession</Th>
                    <Th>Total Power Consumption (KWH)</Th>
                    <Th>Uptime (Lamp Up/ Total Lamp)</Th>
                    <Th>Downtime (Lamp Down/ Total Lamp)</Th>
                    <Th>Accumulated Electricity Bill (RM)</Th>
                    <Th>Accumulated Carbon Footprint (Metric Ton)</Th>
                    <Th>Energy Savings (KWh)</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>DYNAMIC</Td>
                    <Td isNumeric> 26123.15</Td>
                    <Td>511/1033</Td>
                    <Td>482/1033</Td>
                    <Td isNumeric>5316.01</Td>
                    <Td isNumeric>18.36</Td>
                    <Td isNumeric>0</Td>
                </Tr>
                <Tr>
                    <Td>TECHWON</Td>
                    <Td isNumeric> 4920.47</Td>
                    <Td>64/96</Td>
                    <Td>32/96</Td>
                    <Td isNumeric>1001.01</Td>
                    <Td isNumeric>3.46</Td>
                    <Td isNumeric>0</Td>
                </Tr>
            </Tbody>
        </Table>
</TableContainer>
    )
}

export default TableData;

