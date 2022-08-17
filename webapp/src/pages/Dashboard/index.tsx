import {Box, chakra, SimpleGrid} from "@chakra-ui/react";
import {StatsCard} from "../../components/StatsCard";
import {GoLocation} from "react-icons/go";
import {FiServer} from "react-icons/fi";
import {BsPerson} from "react-icons/bs";
import TotalPowerConsumptionChart from "../../components/TotalPowerConsumption";
import LineChart from "../../components/Charts/LineChart";
import MonthlyPowerConsumption from "../../components/MonthlyPowerConsumption";
import {BarChart,EleBarChart} from "../../components/Charts/BarChart";
import ElectricityBill from "../../components/ElectricityBill"
import {BiCheckSquare} from "react-icons/bi"
import {RiCheckboxIndeterminateLine} from "react-icons/ri"
import SummaryTable from "../../components/Table"

export const Dashboard = () => {
    return (
        <>
            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 4}} spacing={{base: 5, lg: 8}}>
                    <StatsCard
                        title={'Total Power Consumption'}
                        stat={'5,000'}
                        icon={<BsPerson size={'3em'} />}
                    />
                    <StatsCard
                        title={'Accumulated Electricity Bill'}
                        stat={'1,000'}
                        icon={<FiServer size={'3em'}/>}
                    />
                    <StatsCard
                        title={'Carbon Footprint'}
                        stat={'7'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                    <StatsCard
                        title={'Total Current In Use Now'}
                        stat={'7'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                </SimpleGrid>
            </Box>

            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing={{base: 5, lg: 8}}>
                    <StatsCard
                        title={'Uptime (Lamp Up/Total Lamp) (xxx %)'}
                        stat={'5,000'}
                        icon={<BsPerson size={'3em'} />}
                    />
                    <StatsCard
                        title={'Carbon Footprint Savings'}
                        stat={'1,000'}
                        icon={<FiServer size={'3em'}/>}
                    />
                    <StatsCard
                        title={'Energy Savings'}
                        stat={'7'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                </SimpleGrid>
            </Box>

            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 3}} spacing={{base: 5, lg: 8}}>
                    <TotalPowerConsumptionChart
                        title={"Total Power Consumption"}
                        percentage={5}
                        chart={<LineChart />}
                    />
                    <MonthlyPowerConsumption
                        title={"Monthly Power Consumption"}
                        percentage={5}
                        chart={<BarChart />}
                    />
                    <ElectricityBill
                        title={"Electricity Bill"}
                        percentage={5}
                        chart={<EleBarChart />}
                    />
                </SimpleGrid>
            </Box>

            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 2}} spacing={{base: 5, lg: 8}}>
                    <StatsCard
                        title={'Uptime'}
                        stat={'615 Active'}
                        icon={<BiCheckSquare size={'3em'}/>}
                    />
                    <StatsCard
                        title={'Downtime'}
                        stat={'514 Inactive'}
                        icon={<RiCheckboxIndeterminateLine size={'3em'}/>}
                    />
                </SimpleGrid>
            </Box>

            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                    {<SummaryTable/>}
                </SimpleGrid>
            </Box>

            <Box maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <SimpleGrid columns={{base: 1, md: 4}} spacing={{base: 5, lg: 8}}>
                    <StatsCard
                        title={'Location'}
                        stat={'Shah Alam'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                    <StatsCard
                        title={'Majlis'}
                        stat={'1'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                    <StatsCard
                        title={'No if Sections'}
                        stat={'15'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                    <StatsCard
                        title={'No of Feeder Pillars'}
                        stat={'33'}
                        icon={<GoLocation size={'3em'}/>}
                    />
                </SimpleGrid>
            </Box>
        </>
    )
}
