import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";

function Faq() {
    const [datas, setDatas] = useState([]);
    const [localDatas,setLocalDatas] = useLocalStorage("questions")

    
    async function fetchWordPressData() {
        try {
            const response = await fetch("https://nationsoundluc.rf.gd/wp/wp-json/acf/v3/questions");
            // const response = await fetch("http://localhost/ns_hl_wp/wp-json/acf/v3/questions");
            const data = await response.json();
            //console.log(data)
            if (data.code === "rest_no_route") { throw "error:rest_no_route" }
            else {
                setDatas(data);
                setLocalDatas(data)
            };

        } catch (error) {
            //("Une erreur est survenue dans l'appel API: ")
            //(error)
        }
    }
    useEffect(() => {
        //(localDatas);
        if (localDatas) {//("uselocalstorage");
            setDatas(localDatas)}
        fetchWordPressData();
    }, []);
    

    

    function Question() {
        if (datas.length > 0) {
            return (
                <>
                    <Row className="lightningBg border rounded ">
                    <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">FOIRE AUX QUESTIONS</h1>
                        {datas.map((item) => (

                            <Col className="col-11 m-2 bg-light border rounded d-flex flex-column" key={item.id }>

                                <h2 className="text-center bg-light border rounded shadow "> {item.acf.question}</h2>
                                <p className="text-center p-3 "> {item.acf.reponse}</p>
                                

                            </Col>
                        ))}
                    </Row>
                </>
            )
        } else return (
            <>
                <Row className="lightningBg border rounded ">
                <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold ">FOIRE AUX QUESTIONS</h1>

                </Row>
                <div className=" p-3 m-2 bg-light border rounded shadow ">
                <Image src="/images/loading.gif" width={300 + 'px'} className="p-5 m-5" />
                </div>
            </>
        )

    }





    return (
        <div>

            <Question />
        </div>
    );
};

export default Faq;