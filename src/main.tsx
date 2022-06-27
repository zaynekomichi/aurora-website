import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavbar from './Components/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Management_Systems from './Pages/Management_Systems'
import Monitor_Services from './Pages/Monitor_Services'
import Web_Services from './Pages/Web_Services'
import Custom_Software_Development from './Pages/Custom_Software_Development'
import Pricing from './Pages/Pricing'
import Roadmap from './Pages/Roadmap'
import Careers from './Pages/Careers'
import Support from './Pages/Support'
import Register from './Pages/Register'



ReactDOM.render(
  <React.StrictMode >
    <div className="general_background container-fluid">
    <TopNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={ <Home/> }/>
        <Route path = "about_us" element = { <AboutUs/> } />
        <Route path = "management_systems" element = { <Management_Systems/> } />
        <Route path = "monitor_services" element = { <Monitor_Services/> } />
        <Route path = "web_services" element = { <Web_Services/> } />
        <Route path = "custom_software_development" element = { <Custom_Software_Development/> } />
        <Route path = "pricing" element = { <Pricing/> } />
        <Route path = "roadmap" element = { <Roadmap/> } />
        <Route path = "careers" element = { <Careers/> } />
        <Route path = "support" element = { <Support/> } />
        <Route path = "register" element = { <Register/> } />
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
