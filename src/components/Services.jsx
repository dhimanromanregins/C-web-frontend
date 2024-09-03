import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Service1 from "./Service1";
import Service2 from "./Service2";

const Services = ()=>{
    const location = useLocation();

    useEffect(()=>{
        const closeMenu = document.getElementsByClassName('menu-close')[0];
        if (closeMenu){
        closeMenu.click();
        };

        setTimeout(()=>{
        const animatedEles = document.getElementsByClassName('aos-init');
        for (let ele of animatedEles){
            ele.classList.add('aos-animate');
        };
        }, 200)
    }, [location.pathname]);

    return(
        <>
            <Service1/>
            <Service2/>
        </>
    );
};

export default Services;