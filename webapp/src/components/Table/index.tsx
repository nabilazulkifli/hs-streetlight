import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

//
// const captionProps={
//     fontStyle:'italic',
// }
//
// const headerRowProps={
//     borderBottom:'1px solid',
//     borderColor: 'gray.500',
// }
//
// const rowProps={
//     striped: {even:{bg:'gray.500'}},
//     borderBottom: '1px solid',
//     borderColor: 'gray.300',
//     _hover:{bg:'blue.500'},
// }
//
// export default function TableSummary(){
//     return(
//         <Table
//         columns={columns}
//         data={data}
//         caption="Summary Table"
//         captionProps={captionProps}
//         headerRowProps={headerRowProps}
//         rowProps={rowProps}
//         p={2}
//         />
//     )
// }
//

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
