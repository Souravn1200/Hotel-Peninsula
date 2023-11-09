import Featured from "../components/Featured";
import Newsletter from "../components/Newsletter";
import Pagetitle from "../components/Pagetitle";
import Peoplecomment from "../components/Peoplecomment";


const Home = () => {
    return (
        <div>
            <Pagetitle title={'Home page'}></Pagetitle>
            <Featured></Featured>
            <Newsletter></Newsletter>
            <Peoplecomment></Peoplecomment>
            
        </div>
    );
};

export default Home;