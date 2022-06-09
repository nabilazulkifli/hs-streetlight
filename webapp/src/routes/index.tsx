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
                        <Route path="/app" element={<MainLayout/>}>
                            <Route path="/app/dashboard" element={<Dashboard/>}/>
                        </Route>
                    </Routes>
                }
            </BrowserRouter>
        </>
    )
}
