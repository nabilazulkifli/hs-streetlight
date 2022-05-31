import {
    BrowserRouter,
    Route,
    Routes, Navigate
} from "react-router-dom";
import {LoginView} from "../pages/Login";
import {DefaultView} from "../pages/Default";

export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                {
                    <Routes>
                        <Route element={<DefaultView />} path="/" />
                        {/*<Route path="/" element={<UserLayout/>}>*/}
                        {/*    <Route path="/charge-point" element={<ChargePoints/>}/>*/}
                        {/*    <Route path="/event-log" element={<EventLogView/>}/>*/}
                        {/*</Route>*/}
                        <Route element={<LoginView />} path="/login" />
                    </Routes>
                }
            </BrowserRouter>
        </>
    )
}
