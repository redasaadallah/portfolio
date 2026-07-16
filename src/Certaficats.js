import "./style/Certaficat.css"
import React,{useState,useEffect} from "react";
import python from "./certif/python.png"
import competance from "./img/competence.png"
import manager from "./img/manager.png"
import sartaficat from "./img/cartaficat.png"
import phpsql from "./certif/phpsql.png"
import home from "./img/home.png"
import exel from "./certif/exel.jpg"
import ihssaa from "./certif/ihssaa.png"
import javacphp from "./certif/javac++php.jpg"
import Ai from "./certif/AI.png"
import m1 from "./certif/1.png"
import m2 from "./certif/2.png"
import m3 from "./certif/3.png"
import m4 from "./certif/4.png"
import m5 from "./certif/5.png"
import m6 from "./certif/6.png"
import m7 from "./certif/7.png"
import {en,fr} from "./langue"
import pythonpdf from "./certifpdf/Introduction to python.pdf"
import aipdf from "./certifpdf/introduction to AI.pdf"
import ihssaapdf from "./certifpdf/ihssaa.pdf"
import javacphppdf from "./certifpdf/javac++php.pdf"
import phpsqlpdf from "./certifpdf/PHP AND SQL.pdf"
import exelpdf from "./certifpdf/exel.pdf"
import c1 from './certifpdf/1.pdf'
import c2 from './certifpdf/2.pdf'
import c3 from './certifpdf/3.pdf'
import c4 from './certifpdf/4.pdf'
import c5 from './certifpdf/5.pdf'
import c6 from './certifpdf/6.pdf'
import c7 from './certifpdf/7.pdf'
import { motion } from "framer-motion";

function Certaficats({homes,experiences,competences,certificates}){
    const [show,setshow]=useState(false)
       const [show1,setshow1]=useState(false)

    const [langue,setlangue]=useState("en")
        const [showl,setshowl]=useState(false)
         // Save to localStorage when the name changes
     const [mounted, setMounted] = useState(false);
                 useEffect(() => {
                 if (mounted) {
                     localStorage.setItem("LN", langue);
                 } else {
                     setMounted(true);
                 }
                 }, [langue]);
      // Load from localStorage when the component mounts
      useEffect(() => {
        const savedName = localStorage.getItem("LN");
        if (savedName) {
                console.log(savedName)

          setlangue(savedName);
        }
      }, []);
    return(<>
    <div class="header">
        <h1 class="me">{langue==="en"?en.titre:fr.titre}</h1> 
         <ul id="menu">
            <li onClick={homes} class="link"><button class="inlink" href="www.facebook.com"><i class="icon fa-solid fa-house"></i>{langue==="en"?en.home:fr.home}</button></li> 
            {/* <li class="link"><button class="inlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
            <li onClick={competences} class="link"><button class="inlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
            <li onClick={experiences} class="link"><button class="inlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
            <li onClick={certificates} class="link"><button style={{color:"aqua", borderBottom:"2px solid"}} class="inlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
         </ul>
          <div style={{position:"relative"}}>
     <button onClick={()=>{showl?setshowl(false):setshowl(true)}} id="langue">{langue==="en"?"Language:":"Langue:"}{langue==="en"?"En":"Fr"} <i class="bi bi-translate"></i></button>
     <div style={{display:showl?'flex':'none'}} id="menu-langue">

        <button onClick={()=>{setlangue("en");setshowl(false);setshow1(false)}} style={{width:"80%",padding:"0",height:"31%"}} className="download">{langue==="en"?"English":"Anglais"}</button>
        <button onClick={()=>{setlangue("fr");setshowl(false);setshow1(false)}} style={{width:"80%",padding:"0",height:"30%"}} className="download">{langue==="en"?"French":"Français"}</button>

     </div>
     </div>
         <button onClick={()=>{setshow(true);}} className="btnmenu"><i class="bi bi-list"></i></button>
        </div>
         
        {show &&
            <div  className={show===false?"showedmenu":"showedmenu1"}>
            <div className="conmenu">
                <ul id="conmenu">
            <li onClick={homes}  class="conlink"><button   class="coninlink" href="www.facebook.com"><i  class="icon fa-solid fa-house"></i> {langue==="en"?en.home:fr.home}</button></li> 
            {/* <li class="conlink"><button class="coninlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
            <li onClick={competences} class="conlink"><button class="coninlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
            <li onClick={experiences} class="conlink"><button class="coninlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
            <li onClick={certificates} style={{backgroundColor:"#c97a05",borderRadius:"5px",width:"70%",height:"7%",textAlign:"center"}} class="conlink"><button style={{color:"white"}} class="coninlink" href="#"><i style={{color:"white"}} class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
          <button onClick={()=>{langue==="en"?setlangue("fr"):setlangue("en")}} id="languetele">{langue==="en"?"Language: English":"Langue: Français"} <i class="bi bi-translate"></i></button>
         
         </ul>
            
            </div>
            <div onClick={()=>setshow(false)} className={show===false?"coverdiv":"coverdiv1"}></div></div>}
    
   {/* ======================================================================= */}
   <div className="cer">
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={python}/>
        <a href={pythonpdf} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
     <motion.div 
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.1,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
     >
        <img className="imgg" src={phpsql}/>
        <a href={phpsqlpdf} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
     <motion.div 
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.2,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
     >
        <img className="imgg" src={exel}/>
        <a href={exelpdf} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
     <motion.div 
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.3,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
     >
        <img className="imgg" src={javacphp}/>
        <a href={javacphppdf} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.4,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={ihssaa}/>
        <a href={ihssaapdf} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.5,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={Ai}/>
        <a href={aipdf} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.6,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m1}/>
        <a href={c1} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.7,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m2}/>
        <a href={c2} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.8,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m3}/>
        <a href={c3} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0.9,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m4}/>
        <a href={c4} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:1,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m5}/>
        <a href={c5} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:1.1,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m6}/>
        <a href={c6} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:1.2,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
    >
        <img className="imgg" src={m7}/>
        <a href={c7} target="_blank" className="download">{langue==="en"?en.t:fr.t}</a>
    </motion.div>
   </div>

{/* ======================================================================================== */}
<div className="menudown">
<div onClick={homes}>
    <img src={home}/>
    <h1>{langue==="en"?en.home:fr.home}</h1>
</div>
<div onClick={competences}>
    <img src={competance}/>
    <h1>{langue==="en"?en.skills:fr.skills}</h1>
</div>
<div onClick={experiences}>
    <img src={manager}/>
    <h1>{langue==="en"?en.experiences:fr.experiences}</h1>
</div>
<div onClick={certificates}>
    <img src={sartaficat}/>
    <h1>{langue==="en"?en.certificates:fr.certificates}</h1>
</div>
</div>
{/* ======================================================================================= */}

    </>);
}
export default Certaficats;