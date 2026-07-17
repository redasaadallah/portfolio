import "./style/Home.css"
import React,{useState,useEffect} from "react";
import email from "./img/gmail.png"
import git from "./img/github.png"
import linkedin from "./img/linkedin.png"
import whatsapp from "./img/whatsapp.png"
import code from "./img/code.png"
import education from "./img/education.png"
import home from "./img/home.png"
import manager from "./img/manager.png"
import sartaficat from "./img/cartaficat.png"
import competance from "./img/competence.png"
import {en,fr} from "./langue"
import cv1 from "./cv/CV SAADALLAH REDA FR.pdf"
import cv2 from "./cv/CV SAADALLAH REDA EN.pdf"
import { motion } from "framer-motion";

// "homepage": "https://redasaadallah.github.io/portfolio",
function Home({homes,experiences,competences,certificates}){
    const [show,setshow]=useState(false)
       const [show1,setshow1]=useState(false)
const [langue, setlangue] = useState(() => {
  return localStorage.getItem("LN") || "en";
});            const [showl,setshowl]=useState(false)
        // Save to localStorage when the name changes
                useEffect(() => {
                              localStorage.setItem("LN", langue);
                              }, [langue]);
  // Load from localStorage when the component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("LN");
    console.log(savedName)
    if (savedName) {
      setlangue(savedName);
    }
  }, []);
    return(<>
    {/* ============================================================= */}
    <div class="header">
    <h1 class="me">{langue==="en"?en.titre:fr.titre}</h1> 
     <ul id="menu">
        <li onClick={homes} class="link"><button style={{color:"aqua", borderBottom:"2px solid"}} class="inlink" href="www.facebook.com"><i class="icon fa-solid fa-house"></i>{langue==="en"?en.home:fr.home}</button></li> 
        {/* <li class="link"><button class="inlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
        <li onClick={competences} class="link"><button class="inlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
        <li onClick={experiences} class="link"><button class="inlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
        <li onClick={certificates} class="link"><button class="inlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
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
        <li onClick={homes} style={{backgroundColor:"#c97a05",borderRadius:"5px",width:"70%",height:"7%",textAlign:"center"}} class="conlink"><button style={{color:"white"}}  class="coninlink" href="www.facebook.com"><i style={{color:"white"}} class="icon fa-solid fa-house"></i> {langue==="en"?en.home:fr.home}</button></li> 
        <li onClick={competences} class="conlink"><button class="coninlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
        <li onClick={experiences} class="conlink"><button class="coninlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
        <li onClick={certificates} class="conlink"><button class="coninlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
      <button onClick={()=>{langue==="en"?setlangue("fr"):setlangue("en")}} id="languetele">{langue==="en"?"Language: English":"Langue: Français"} <i class="bi bi-translate"></i></button>
     
     </ul>
        
        </div>
        <div onClick={()=>setshow(false)} className={show===false?"coverdiv":"coverdiv1"}></div></div>}
{/* ============================================================================================================================ */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay:0,ease: "linear" }}
        viewport={{ once: true, amount: 0 }}
        className="body">
        <div class="img1">
            <h1 class="typing"><span>{langue==="en"?en.b:fr.b} </span>&nbsp;<span> {langue==="en"?en.b1:fr.b1} </span> <span> Reda</span> <span> SAADALLAH.</span></h1>
            <h3 class="hix"><span class="job">{langue==="en"?en.b2:fr.b2}  &nbsp;<i class="fa-regular fa-heart"></i> {langue==="en"?en.b3:fr.b3}</span></h3>
            <h3 class="hi">{langue==="en"?en.pre1:fr.pre1}<br/><br/> {langue==="en"?en.pre2:fr.pre2}
 <br/><br/>{langue==="en"?en.pre3:fr.pre3}
</h3>
<div style={{display:"flex",gap:"5px",marginTop:"10px"}} className="contact">
<a  href="https://www.linkedin.com/in/reda-saadallah-795776246" ><img class="apps" width="40px"  src={linkedin} alt=""/></a>
<a  href="https://github.com/redasaadallah" ><img class="apps" width="40px"  src={git} alt=""/></a>
<a  href="mailto:redasaadallah77@gmail.com"><img class="apps" width="40px"  src={email} alt=""/></a>
<a  href="https://wa.me/212625700603" ><img class="apps" width="40px"  src={whatsapp} alt=""/></a>
</div >
<button  class="download" onClick={()=>setshow1(true)} >{langue==="en"?en.cv:fr.cv}</button>
      
        </div>
         <div class="img2">
            <img class="reda" src={code} alt=""/>
        
    </div>
    </motion.div>
{/* ======================================================================================= */}
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay:0,ease: "linear" }}
viewport={{ once: true, amount: 0 }}
className="formation">
<div><img src={education} alt="image"/></div>

<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
<h1>{langue==="en"?en.Edu:fr.Edu} </h1>
{/* ============================================= */}
<div id="secfor">
    <h1 style={{color:"#5B3FE8"}}>2023 – 2026</h1>
    <h2>{langue==="en"?en.Final:fr.Final} </h2>
    <h3 >{langue==="en"?en.Major1:fr.Major1}</h3>
    <p >{langue==="en"?en.Fac:fr.Fac}</p>

</div>
{/* ==================================== */}
<div id="secfor">
<h1 style={{color:"#3158E8"}}>2022 – 2023</h1>
<h2>{langue==="en"?en.Bach:fr.Bach}</h2>
<h3 >{langue==="en"?en.Spe:fr.Spe}</h3>
<p >{langue==="en"?en.fac1:fr.fac1}</p>
</div>

{/* ==================================================== */}
<div id="secfor">
< h1 style={{color:"#FF9D2E"}}>2020 – 2022 :</h1>
<h2>{langue==="en"?en.bach1:fr.bach1}</h2>
<h3>{langue==="en"?en.spe:fr.spe}</h3>
<p>{langue==="en"?en.fac1:fr.fac1}</p>

</div>
{/* ===================================================== */}
<div id="secfor">
<h1 style={{color:"#E83D8C"}}>2018 – 2019 </h1>
<h2>{langue==="en"?en.Bac:fr.Bac}</h2>
</div>
</div>

</motion.div>
{/* ======================================================================================== */}
<div className="menudown">
<div onClick={homes}>
    <img src={home} alt="image"/>
    <h1>{langue==="en"?en.home:fr.home}</h1>
</div>
<div onClick={competences}>
    <img src={competance} alt="image"/>
    <h1>{langue==="en"?en.skills:fr.skills}</h1>
</div>
<div onClick={experiences}>
    <img src={manager} alt="image"/>
    <h1>{langue==="en"?en.experiences:fr.experiences}</h1>
</div>
<div onClick={certificates}>
    <img src={sartaficat} alt="image"/>
    <h1>{langue==="en"?en.certificates:fr.certificates}</h1>
</div>
</div>
{/* ======================================================================================= */}
{show1 &&<>
<div className="cv">
    <a href={cv1} target="_blank" rel="noopener noreferrer" style={{ animationDuration: "0s" }} className="download">{langue==="en"?en.ve1:fr.ve1}</a>
        <a href={cv2} target="_blank" rel="noopener noreferrer" style={{ animationDuration: "0s" }} className="download">{langue==="en"?en.ve2:fr.ve2}</a>
</div>
<div onClick={()=>setshow1(false)} className="cvcover"></div></>}
    </>);
}
export default Home;