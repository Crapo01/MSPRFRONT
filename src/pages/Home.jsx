import Actu from "../components/Actu";
import Concerts from "../components/Concerts";
import Shop from "../components/Shop";
import MapMini from "../components/MapMini";
import Loader from "../components/LocalDatasLoader";


function Home() {
    return (
        <>
            <Loader/>
            <Concerts />
            <Actu />            
            <Shop/>            
            <MapMini/>
            
      </>  
    );
};

export default Home;