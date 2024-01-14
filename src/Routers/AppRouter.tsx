import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../Components/Pages/PageNotFound";
import { AccountPage } from "../Components/Pages/AccountPage/AccountPage";
import { PendingPage } from "../Components/Pages/PendingPage/PendingPage";

export const AppRouter:React.FC = () => (
    <Routes> 
        <Route path="/404" element={<PageNotFound
            />} /> 
        <Route path="/account"  element={<AccountPage
            />} /> 
        <Route path="/pending"  element={<PendingPage
            />} /> 
        <Route path="*" element={<Navigate to="/404"/>} />
    </Routes>);