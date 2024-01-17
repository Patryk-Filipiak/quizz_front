import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../Components/Pages/PageNotFound";
import { AccountPage } from "../Components/Pages/AccountPage/AccountPage";
import { PendingPage } from "../Components/Pages/PendingPage/PendingPage";
import React from "react";

 const WrapContentClass:React.FC<{
    children: React.ReactElement;
    className: string;
 }> = ({ children, className }) => {
        return React.cloneElement(children, {
          className: `${children.props.className || ''} ${className}`
        });
      };

export const AppRouter:React.FC <{ className?: string }> = ( { className = ''} ) => {

   

    return (
    <Routes> 
        <Route path="/404" element={<WrapContentClass className={className}>
            <PageNotFound />
        </WrapContentClass>} /> 
        <Route path="/account"  element={<WrapContentClass className={className}>
            <AccountPage />
        </WrapContentClass>} /> 
        <Route path="/pending"  element={<WrapContentClass className={className}>
            <PendingPage />
        </WrapContentClass>} /> 
        <Route path="*" element={<WrapContentClass className={className}>
            <Navigate to="/404"/>
        </WrapContentClass>} />
    </Routes>);
}


