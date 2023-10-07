import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="bg-[#0E063D]">
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>  
            <div><Toaster/></div>
         
        </div>
    );
};

export default Root;