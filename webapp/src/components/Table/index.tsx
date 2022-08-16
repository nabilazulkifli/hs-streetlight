import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'
import {column,data} from "../Charts/Table";


function SummaryTable() {
    const data = React.useMemo(
        () => [
            {
                concession: 'TECHWON',
                totalPowerConsumption: 26123.15,
                uptime: '511/1033',
                downTime: '482/1033',
                accumulatedElectricity: 5316.01,
                accumulatedCarbonFootprint: 18.36,
                energySavings: 0
            },
            {
                concession: 'DYNAMIC',
                totalPowerConsumption: 4920.47,
                upTime: '64/96',
                downTime: '32/96',
                accumulatedElectricity: 1001.01,
                accumulatedCarbonFootprint: 3.46,
                energySavings: 0
            },
        ],
        [],
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Concession',
                accessor: 'concession',
            },
            {
                Header: 'Total Power Consumption (KWh)',
                accessor: 'totalPowerConsumption',
                isNumeric: true,
            },
            {
                Header: 'Uptime (Lamp Up/ Total Lamp)',
                accessor: 'uptime',
            },
            {
                Header: 'Downtime (Lamp Down/ Total Lamp)',
                accessor: 'downTime',
            },
            {
                Header: 'Accumulated Electricity Bill (RM)',
                accessor: 'accumulatedElectricity',
                isNumeric: true,
            },
            {
                Header: 'Accumulated Electricity Bill (RM)',
                accessor: 'accumulatedElectricity',
                isNumeric: true,
            },
            {
                Header: 'Accumulated Carbon Footprint (Metric Ton)',
                accessor: 'accumulatedCarbonFootprint',
                isNumeric: true,
            },
            {
                Header: 'Energy Savings (KWh)',
                accessor: 'energySavings',
                isNumeric: true,
            },
        ],
        [],
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useSortBy)

    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                isNumeric={column.isNumeric}
                            >(
                                {column.render('Header')}
                                <chakra.span pl='4'>
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <TriangleDownIcon aria-label='sorted descending' />
                                        ) : (
                                            <TriangleUpIcon aria-label='sorted ascending' />
                                        )
                                    ) : null}
                                </chakra.span>
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                    {cell.render('Cell')}
                                </Td>
                            ))}
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}