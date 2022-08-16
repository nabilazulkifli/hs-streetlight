
export const summaryData=[
    {
        concession : 26123.15,
        uptime : '511/1033',
        downTime : '482/1033',
        accumulatedElectricity : 5316.01,
        accumulatedCarbonFootprint : 18.36,
        energySavings : 0
    },
    {
        concession : 4920.47,
        upTime : '64/96',
        downTime : '32/96',
        accumulatedElectricity : 1001.01,
        accumulatedCarbonFootprint : 3.46,
        energySavings : 0.
    }
];

export const tableColumn=[
    {
        headersText : 'Concession',
        selector : 'concession',
        textAlign : 'center',
        width : 120,
        sortable : true,
    },
    {
        name : 'Uptime (Lamp Up/ Total Lamp)',
        selector : 'upTime',
        textAlign : 'center',
        width : 170,
        sortable : true,
    },
    {
        name : 'Downtime (Lamp Down/ Total Lamp)',
        selector : 'downTime',
        textAlign : 'center',
        width : 170,
        sortable : true,
    },
    {
        name : 'Accumulated Electricity Bill (RM)',
        selector : 'accumulatedElectricity',
        textAlign : 'center',
        width : 170,
        sortable : true,
    },
    {
        name : 'Accumulated Carbon Footprint (Metric Ton)',
        selector : 'accumulatedCarbonFootprint',
        textAlign : 'center',
        width : 170,
        sortable : true,
    },
    {
        name : 'Energy Savings (KWh)',
        selector : 'energySavings',
        textAlign : 'center',
        width : 150,
        sortable : true,
    },
]