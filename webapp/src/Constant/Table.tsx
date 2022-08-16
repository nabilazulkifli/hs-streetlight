import React from "react";

export const data = React.useMemo(
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
export const column = React.useMemo(
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