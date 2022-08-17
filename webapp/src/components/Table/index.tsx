import React from 'react';
import { TableContainer,Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'



const SummaryTable = () => {
    return (
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>Concession</Th>
                        <Th>Total Power Consumption (KWh)</Th>
                        <Th>Uptime (Lamp Up/ Total Lamp)</Th>
                        <Th>Downtime (Lamp Down/ Total Lamp)</Th>
                        <Th>Accumulated Electricity Bill (RM)</Th>
                        <Th>Accumulated Carbon Footprint (Metric Ton)</Th>
                        <Th>Energy Savings (KWh)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>TECHWON</Td>
                        <Td>26123.15</Td>
                        <Td>511/1033</Td>
                        <Td>482/1033</Td>
                        <Td>5316.01</Td>
                        <Td>18.36</Td>
                        <Td>0</Td>
                    </Tr>
                    <Tr>
                        <Td>DYNAMIC</Td>
                        <Td>4920.47</Td>
                        <Td>64/96</Td>
                        <Td>32/96</Td>
                        <Td>1001.01</Td>
                        <Td>3.46</Td>
                        <Td>0</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};



export default SummaryTable;
