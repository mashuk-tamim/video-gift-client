import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
		<div className="bg-[#e9e9eb] font-inter">
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;