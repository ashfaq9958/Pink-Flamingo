import { lazy } from "react";


export const Dashboard = lazy(()=>import('../Dashboard/Dashboard.jsx'))
export const Products = lazy(()=>import('../Products/Products.jsx'))
export const NotFound = lazy(()=>import('../NotFound/NotFound.jsx'))