
import Banner from "./HomeComponents/Banner";
import BookCall from "./HomeComponents/BookCall";
// import Footer from "./HomeComponents/Footer";
import Navbar from "./HomeComponents/Navbar";
import ServiceCards from "./HomeComponents/ServiceCards";
import Services from "./HomeComponents/ServicesMenu/Services";
import ThemePark from "./HomeComponents/ServicesMenu/ThemePark";


const Home = () => {
    return (
		<div>
			<Navbar></Navbar>
			<div className="space-y-20">
				<Banner></Banner>
				<Services></Services>
                <ThemePark></ThemePark>
                <ServiceCards></ServiceCards>
                <BookCall></BookCall>
                {/* <Footer></Footer> */}
			</div>
		</div>
	);
};

export default Home;