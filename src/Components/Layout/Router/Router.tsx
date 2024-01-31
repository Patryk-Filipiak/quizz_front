import { Navigate, Route, Routes } from "react-router-dom"; 
import React from "react";
import { PageNotFound } from "../../../Pages/PageNotFound"; 
import { PendingPage } from "../../../Pages/PendingPage/PendingPage";
import { Start } from "../../../Pages/Start/Start";
import { AppContextInterface } from "../../../Context/types"; 
import { Account } from "../../../Pages/account/Account";

export const Router:React.FC <{ className?: string, context: AppContextInterface }> = ( { className = '', context} ) => {
    return (
    <Routes> 
        <Route path="/404" element={<PageNotFound />}/> 
        <Route path="/"  element={<Start context={context}
        />} /> 
        <Route path="/account"  element={<Account/>} /> 
        <Route path="/pending"  element={<PendingPage />} /> 
        <Route path="*" element={<Navigate to="/404"/>} />
    </Routes>);
}


