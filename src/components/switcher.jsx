import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { PiArrowUpThin } from "react-icons/pi";



export default function Switcher(){
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
        return()=>{
            window.removeEventListener("scroll", () => {
                setScroll(window.scrollY > 50);
            });
        }
    }, []);

  

 

    const scrollTop = () =>{
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
          });
    }

    return(
        <>
         <Link to="#" onClick={()=>scrollTop()} id="back-to-top" className={`back-to-top fixed text-2xl ps-[6px] pt-[6px] font-thin rounded-full z-10 bottom-5 right-5 size-9 text-center bg-teal-500 text-white leading-9  ${scroll ? 'block' : 'hidden' }`}><PiArrowUpThin/></Link>
        </>
    )
}