import Actu from "../components/Actu";
import Concerts from "../components/Concerts";
import Programmation from "../components/Program"
import Shop from "../components/Shop";
import CarteMini from "../components/CarteMini";
import Loader from "../components/LocalDatasLoader";


function Home() {
    return (
        <>
            <Loader/>
            <Concerts />
            <Actu />            
            <Shop/>            
            <CarteMini/>
            
      </>  
    );
};

export default Home;