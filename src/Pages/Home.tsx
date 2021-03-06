import first_image from '../Assets/home_page.png'
import second_image from '../Assets/home_page_two.png'
import third_image from '../Assets/home_page_three.png'
import { flexStyle } from '../Components/CssStyles';
import { Fade } from 'react-awesome-reveal';

const Home = () =>{
    return(
        <div className=" container general_background text-white">
            <Fade direction="down" cascade={true}>
           <div className={`${flexStyle}`}>
               <div className="col-sm">
                <h1 className="general_bigText">AURORA</h1>
               </div>
               <div className="col-sm">
                <img src={first_image} width="400" alt=""/>
               </div>
           </div>
           </Fade>
           <Fade direction="down" cascade={true}>
           <div className={`${flexStyle}`}>
                <div className="col-sm">
                    <img src={second_image} width="400" alt=""/>
                </div>
                <div className="col-sm">
                    <h1 className="general_bigText">WHY AURORA?</h1>
                    <p>
                        Well because we are the first and  only people who understand what you need,
                        running a business can be tough at times. Having to arrange appointments, work schedules,
                        designing marketing items, pay rolls and getting your name out there its a all a lot. Thats 
                        were we come in, we have a management system for everything and the ones we dont, we make them without 
                        an extra cost to you. Automate your workflow and check your balances its as simple as that.
                    </p>
                </div>
           </div>
           </Fade>
           <Fade direction="down" cascade={true}>
           <div className={`${flexStyle}`}>
               <div className="col-sm">
                    <h1 className="general_bigText"> WHAT DO I REALLY NEED?</h1>
                    <p>
                        Sometimes what you just need is a website to boost up your sales or advertising material,
                        maybe you already have this but your workspace is a mess. Well whatever the case is from websites to marketing 
                        to organizing your work we have every tool in the box. Contact us today and we will prep up the best antidote for your business. 
                    </p>
                    <button className="btn general_button text-white">Contact Us</button>
               </div>
               <div className="col-sm">
                    <img src={third_image} className="img-fluid" alt=""/>
               </div>
           </div>
           </Fade>
         
        </div>
    )
}

export default Home;