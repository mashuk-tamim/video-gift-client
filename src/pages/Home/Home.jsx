import Banner from "./HomeComponents/Banner";
import Navbar from "./HomeComponents/Navbar";
import Services from "./HomeComponents/Services";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;