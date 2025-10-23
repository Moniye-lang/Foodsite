import Nav from "./head/nav";
import Hero from "./head/hero";
import Homemenu from "./BOM/homemenu";
import M_about from "./BOM/miniabout";
import Events from "./BOM/events";
import Delivery from "./BOM/delivery";
import Wcs from "./BOM/wcs";
import SubBandA from "./BOM/subB&A";


export default function Home(){
    return(
        <div>
            <Hero></Hero>
            <Homemenu></Homemenu>
            <M_about/>
            <Events></Events>
            <Delivery></Delivery>
            <Wcs></Wcs>
            <SubBandA></SubBandA>
        </div>
    )
}

