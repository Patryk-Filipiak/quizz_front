import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./PageNotFound";
import { AccountPage } from "./AccountPage/AccountPage";
import { PendingPage } from "./PendingPage/PendingPage";
import React from "react";

export const Router:React.FC <{ className?: string }> = ( { className = ''} ) => {

   

    return (
    <Routes> 
        <Route path="/404" element={<PageNotFound />}/> 
        <Route path="/account"  element={<AccountPage />} /> 
        <Route path="/pending"  element={<PendingPage />} /> 
        <Route path="*" element={<Navigate to="/404"/>} />
    </Routes>);
}


