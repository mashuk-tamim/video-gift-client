import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/HomeComponents/Navbar";
import Footer from "../pages/Home/HomeComponents/Footer";


const MainLayout = () => {
    return (
        <div className="bg-[#e9e9eb] font-inter">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
		</div>
	);
};

export default MainLayout;