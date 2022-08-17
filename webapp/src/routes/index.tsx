import {
    BrowserRouter,
    Route,
    Routes, Navigate
} from "react-router-dom";
import {Login} from "../pages/Login";
import {DefaultView} from "../pages/Default";
import {MainLayout} from "../layout";
import {Dashboard} from "../pages/Dashboard";
import {ForgetPassword} from "../pages/ForgetPassword";
import {NotFound} from "../pages/NotFound";
import {ElectricityBilling} from "../pages/ElectricityBilling";
import {Tickets} from "../pages/Tickets";
import {Alert} from "../pages/Alert";
import {Report} from "../pages/Report";
import {Analytics} from "../pages/Analytics"

export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                {
                    <Routes>
                        <Route element={<Login/>} path="/login"/>
                        <Route element={<Login/>} path="/"/>
                        <Route element={<ForgetPassword/>} path="/forget-password"/>
                        <Route element={<DefaultView/>} path="/default"/>
                        <Route element={<NotFound/>} path="/404"/>
                        <Route path="/app" element={<MainLayout/>}>
                            <Route path="/app/dashboard" element={<Dashboard/>}/>
                            <Route path="/app/electricity-billing" element={<ElectricityBilling/>} />
                            <Route path="/app/alert" element={<Alert/>}/>
                            <Route path="/app/tickets" element={<Tickets/>} />
                            <Route path="/app/report" element={<Report/>} />
                            <Route path="/app/analytics" element={<Analytics/>} />

                        </Route>
                        {/*<Route path="app/electricity-billing" element={<ElectricityBilling/>} />*/}
                        <Route path="*" element={<Navigate to={"/404"}/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </>
    )
}
