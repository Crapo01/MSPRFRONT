import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";


function Partenaires() {
    const [datas, setDatas] = useState([]);
    const [sponsors, setSponsors] = useState([]);
    const [technique, setTechnique] = useState([]);
    const [logistique, setLogistique] = useState([]);
    const [alimentation, setAlimentation] = useState([]);

    function sortingPartnersByCategory(category, partner) {
        //console.log(category);        
        category.map((cat) => {
            switch (cat) {
                case "technique":
                    const tempTech = technique;
                    tempTech.push(partner);
                    setTechnique(tempTech)
                    break;
                case "sponsor":
                    const tempSpon = sponsors;
                    tempSpon.push(partner);
                    setSponsors(tempSpon)
                    break;
                case "logistique":
                    const tempLogi = logistique;
                    tempLogi.push(partner);
                    setLogistique(tempLogi)
                    break;
                case "alimentation":
                    const tempAlim = alimentation;
                    tempAlim.push(partner);
                    setAlimentation(tempAlim)
                    break;
            }
        })
    }

    async function fetchWordPressData() {
        try {
            const response = await fetch("https://nationsoundluc.rf.gd/wpdb/wp-json/acf/v3/partenaires");
            // const response = await fetch("http://localhost/ns_hl_wp/wp-json/acf/v3/partenaires");
            const data = await response.json();
            //console.log(data)
            if (data.code === "rest_no_route") { throw "error:rest_no_route" }
            else {
                setDatas(data);
                data.map((item) => sortingPartnersByCategory(item.acf.type, item));
                //console.log("sponsors in use effect");
                //console.log(sponsors);
            };

        } catch (error) {
            //console.log("Une erreur est survenue dans l'appel API: ")
            //console.log(error)
        }
    }
    useEffect(() => {
        fetchWordPressData();
    }, []);


    function Sponsors() {
        if (sponsors.length > 0) {
            return (
                <>
                    <div className="bg-light border rounded ">
                        <div className="lightningBg border rounded ">
                            <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Sponsors</h1>
                        </div>
                        <Row className={"p-3 m-md-5 border rounded bg-secondary justify-content-around"}>
                            {sponsors.map((item) => (

                                <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column" key={item.id + 100}>

                                    <h2 className="text-center"> {item.acf.nom}</h2>
                                    <img src={item.acf.logo.link} alt="" />

                                </Col>
                            ))}
                        </Row>
                    </div>
                </>
            )
        } else return (
            <>
                <div className={"p-3 m-md-5 border rounded bg-secondary"}>
                    <div className="lightningBg border rounded ">
                        <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Sponsors</h1>
                    </div>
                    <Image src="/images/loading.gif" width={300 + 'px'} className="p-5 m-5" />

                </div>
            </>
        )
    }

    function Technique() {
        if (technique.length > 0) {
            return (
                <>
                    <div className="bg-light border rounded ">
                        <div className="lightningBg border rounded ">
                            <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Technique</h1>
                        </div>
                        <Row className={"p-3 m-md-5 border rounded bg-secondary justify-content-around"}>
                            {technique.map((item) => (

                                <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column" key={item.id + 1000}>

                                    <h2 className="text-center"> {item.acf.nom}</h2>
                                    <img src={item.acf.logo.link} alt="" />

                                </Col>
                            ))}
                        </Row>
                    </div>
                </>
            )
        } else return (
            <>
                <div className={"p-3 m-md-5 border rounded bg-secondary"}>
                    <div className="lightningBg border rounded ">
                        <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Technique</h1>
                    </div>
                    <Image src="/images/loading.gif" width={300 + 'px'} className="p-5 m-5" />

                </div>
            </>
        )

    }

    function Logistique() {
        if (logistique.length > 0) {
            return (
                <>
                    <div className="bg-light border rounded ">
                        <div className="lightningBg border rounded ">
                            <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Logistique</h1>
                        </div>
                        <Row className={"p-3 m-md-5 border rounded bg-secondary justify-content-around"}>
                            {logistique.map((item) => (

                                <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column" key={item.id + 10000}>

                                    <h5 className="text-center"> {item.acf.nom}</h5>
                                    <img src={item.acf.logo.link} alt="" />

                                </Col>
                            ))}
                        </Row>
                    </div>
                </>
            )
        } else return (
            <>
                <div className={"p-3 m-md-5 border rounded bg-secondary"}>
                    <div className="lightningBg border rounded ">
                        <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Logistique</h1>
                    </div>
                    <Image src="/images/loading.gif" width={300 + 'px'} className="p-5 m-5" />

                </div>
            </>
        )

    }

    function Alimentation() {
        if (alimentation.length > 0) {
            return (
                <div className="bg-light border rounded ">
                    <div className="lightningBg border rounded ">
                        <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Alimentation</h1>
                    </div>
                    <Row className={"p-3 m-md-5 border rounded bg-secondary justify-content-around"}>
                        {alimentation.map((item) => (

                            <Col className="col-11 col-md-5 col-lg-4 p-3 m-2 bg-light border rounded shadow d-flex flex-column " key={item.id + 100000}>

                                <h5 className="text-center"> {item.acf.nom}</h5>
                                <img src={item.acf.logo.link} alt="" />

                            </Col>
                        ))}
                    </Row>
                </div>
            )
        } else return (
            <>
                <div className={"p-3 m-md-5 border rounded bg-secondary"}>
                    <div className="lightningBg border rounded ">
                        <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">Alimentation</h1>
                    </div>
                    <Image src="/images/loading.gif" width={300 + 'px'} className="p-5 m-5" />

                </div>
            </>
        )

    }





    return (
        <div>
            <div className="lightningBg border rounded ">
                <h1 className="sectionTitle text-center text-light p-3 fs-1 fw-bold">PARTENAIRES</h1>
            </div>
            <nav >
                <Sponsors />
                <Technique />
                <Logistique />
                <Alimentation />

            </nav>
        </div>
    );
};

export default Partenaires;