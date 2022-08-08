import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function SharedLayout() {
    return (
        <div className='App'>
            <Outlet />
        </div>
    )
}