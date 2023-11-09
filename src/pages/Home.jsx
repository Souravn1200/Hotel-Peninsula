import Featured from "../components/Featured";
import Newsletter from "../components/Newsletter";
import Pagetitle from "../components/Pagetitle";


const Home = () => {
    return (
        <div>
            <Pagetitle title={'Home page'}></Pagetitle>
            <Featured></Featured>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default Home;