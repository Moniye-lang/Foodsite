import { Route,Routes } from "react-router-dom";
import Hero from "./Home/header/head/hero";
import Home from "./Home/header/mainHome";
import MainAbout from "./About/mainAbout";
import Footer from "./footer/footer";
import Nav from "./Home/header/head/nav";
import Menu from "./Menu/Menu";
import MainPage from "./Pages/Mainpages";
import Articles from "./Pages/Articles";
import Contact from "./Contact/Contactpage";
import './index.css'


export default function App(){
    return(
        <div>
            <Nav></Nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/MainAbout" element={<MainAbout/>}></Route>
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/MainPage" element={<MainPage/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/maindata/:maindataId" element={<Articles/>}></Route>  
        </Routes>
        <Footer></Footer>
        </div>
    ) 
}