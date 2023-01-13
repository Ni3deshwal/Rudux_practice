import { Route, Routes } from "react-router-dom";
import Page404 from "../components/Page404";
import ProductDetails from "../components/ProductDetails";
import ProductListing from "../components/ProductListing";

function AllRoutes()
{
    return(
        <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<Page404 />} />


        </Routes>
    )
}
export default AllRoutes