import { useNavigate } from "react-router-dom";
const Lander = () => {
    const nav = useNavigate()
    return (
        <div className="container vh-100 d-flex align-items-center">
            <div>

            <div className=" d-flex flex-row flex-wrap align-items-center justify-content-center mb-2">

                <div className="col-sm">
                    <img src="https://ngratesc.sirv.com/ZTX/lander.png" className="img-fluid" alt="Mockup of purple pgaes" />
                </div>
                <div className="col-sm text-center text-md-start">

                    <div>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-md-start">
                            <div className="rounded ">
                                
                            <img src="https://ngratesc.sirv.com/ZTX/ztx_logo.png" className="mt-3" width={100} alt="ZTX logo"/>

                            </div>
                            <div>
                                <h1 className="display-3 mt-4 fw-bold p_text">
                                    <span>ZTX</span>
                                </h1>
                            </div>

                        </div>

                        <p className="fst-italic p_text">Find Businesses & Connect Instantly.</p>
                        <p>ZTX is a business directory app that makes it effortless to discover and connect with local businesses in your area</p>
                        <p className="p_text">Sign Up for Early Access</p>
                        <button className="btn p_btn me-2" onClick={() => {
                            sessionStorage.setItem("type", "individual")
                            nav("/authenticate")
                        }}>Sign Up</button>
                        
                    </div>
                </div>
            </div>
            {/* <Socials/> */}
            {/* <div className="mt-2 text-center">
                <small><a href="/legal/privacy-policy" className="p_text">Privacy Policy</a></small>
            </div> */}
            </div>

        </div>
    )
}

export default Lander