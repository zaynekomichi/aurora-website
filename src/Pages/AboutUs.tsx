import { flexStyle } from "../Components/CssStyles";
import tech from "../Assets/tech.png";
import old from "../Assets/old-hospital.png";
import working from "../Assets/working.jpg";
import logo from "../Assets/logo.png";
import { Fade } from "react-awesome-reveal";



const AboutUs=()=>{
    return(
        <div className="container general_background text-white">
           

            {/* First Section */}

            <div className="text-center vh-100 d-flex flex-column align-items-center justify-content-evenly">
                <Fade direction="down" cascade={true}>
                    <div className="1">
                    <h1 className="general_bigText">WE ARE DIGITAL</h1>
                    
                    </div>
                
                    {/* put a picture here */}
                    <div>
                    <img className="img-fluid" src={tech} alt="data"/>
                    </div>
                </Fade>
            </div>

            {/* Second Section */}
            <h1 className="general_bigText">Mmmm where can we start ?</h1>
            <Fade direction="down" cascade={true}>
            <div className={`${flexStyle}`}>
                
                    <div className="col-sm">
                    
                        <h4 className="text-end">2018</h4>
                            <br/>
                        <p>
                            During school break a young intern went to the local maternity hospital to offer his IT services,
                            even though he didnt have much hope of getting the job he tried, suprisingly he got hired and started making a few changes for the
                            hospitals website and the then lacking hospital management system. Fast forward a few months later the head IT consultant retired and the job 
                            was passed down to the young intern who took over the heavy burden of creating a new management system. With no prior experience he welcomed the challenge and got started.
                        </p>
                    </div>
                    <div className="col-sm">
                    
                    <img className="rounded img-fluid" src={old} alt="working"/>
                    
                    </div>
                
            </div>
            </Fade>
            

            {/* Third Section */}
            <Fade direction="up" cascade={true}>
            <div className={`${flexStyle}`}>
                <div className="col-sm">
                    <img className="rounded img-fluid" src={working} alt="working"/>
                </div>
                <div className="col-sm">
                    <h4 className='text-start'>2021</h4>
                    <p>After spending 4 years working tirelessly on one system using equipment with limited capabilities
                        ( <b>A laptop turned to a server, 2gigs of ram,  an AMD E1
                        processor with a dying battery </b>) and a very small office space (<b>2m x 1m</b>), it was finally done, but something didn't sit well
                        with the young intern. He knew more could be done but for different types of hospitals and thus the idea was 
                        born to completely change the way medical institutions collected and stored data. The current setting demanded change,
                        reports were taking too long to compile, appointments were scribbled on pieces of paper and updating data on paper meant 
                        having to rewrite the entire thing. 
                    </p>
                </div>
           </div>
           </Fade>
           <Fade direction="down" cascade={true}>
           <div className={`${flexStyle}`}>
            <div className="col-sm">
                <h4 className="text-end">2022</h4>
                <p>
                    After doing a lot of research and finding out the major causes slowing down digitization in the entire African continent
                    , the young intern decided it was time to hire a team to help him make the system better. A group of young, self motivated
                    individuals came together and started building Aurora.
                    <br/>
                    We could say this is the end to our story but we are just begining, join us on our journey! Everyone is welcome.
                </p>
            </div>
            <div className="col-sm text-end">
                <img className="img-fluid text-center" width="300" src={logo} alt="logo"/>
            </div>
           </div>
           </Fade>
           
        </div>
    )
}

export default  AboutUs;