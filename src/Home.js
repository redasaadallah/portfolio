import "./style/Home.css"
import React,{useState,useEffect} from "react";
import email from "./img/gmail.png"
import git from "./img/github.png"
import linkedin from "./img/linkedin.png"
import whatsapp from "./img/whatsapp.png"
import redasaad from "./img/redasaad.jpg"
import education from "./img/education.png"
import home from "./img/home.png"
import manager from "./img/manager.png"
import sartaficat from "./img/cartaficat.png"
import competance from "./img/competence.png"
import {en,fr} from "./langue"
import cv1 from "./cv/CV SAADALLAH REDA FR.pdf"
import cv2 from "./cv/CV SAADALLAH REDA EN.pdf"
// "homepage": "https://redasaadallah.github.io/portfolio",
function Home({homes,experiences,competences,certificates}){
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
     <button onClick={()=>{showl?setshowl(false):setshowl(true)}} id="langue">{langue==="en"?"Language:":"Langue:"}{langue==="en"?"En":"Fr"} <i class="bi bi-translate"></i></button>
     <div style={{display:showl?'flex':'none'}} id="menu-langue">
                <button onClick={()=>{setshowl(false)}} style={{width:"21%",padding:"0",borderRadius:"50%",height:"22%",textAlign:"center",animationDuration:"0s"}} className="download"><i style={{fontSize:"1.5vw",margin:"0",textAlign:"center"}} class="bi bi-x"></i></button>

        <button onClick={()=>{setlangue("en");setshowl(false);}} style={{width:"80%",padding:"0",height:"31%",animationDuration:"0s"}} className="download">{langue==="en"?"English":"Anglais"}</button>
        <button onClick={()=>{setlangue("fr");setshowl(false)}} style={{width:"80%",padding:"0",height:"30%",animationDuration:"0s"}} className="download">{langue==="en"?"French":"Français"}</button>

     </div>
     <button onClick={()=>{setshow(true);}} className="btnmenu"><i class="bi bi-list"></i></button>
    </div>
     
    {show &&
        <div  className={show===false?"showedmenu":"showedmenu1"}>
        <div className="conmenu">
            <ul id="conmenu">
        <li onClick={homes} style={{backgroundColor:"#c97a05",borderRadius:"5px",width:"70%",height:"7%",textAlign:"center"}} class="conlink"><button style={{color:"white"}}  class="coninlink" href="www.facebook.com"><i style={{color:"white"}} class="icon fa-solid fa-house"></i> {langue==="en"?en.home:fr.home}</button></li> 
        {/* <li class="conlink"><button class="coninlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
        <li onClick={competences} class="conlink"><button class="coninlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
        <li onClick={experiences} class="conlink"><button class="coninlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
        <li onClick={certificates} class="conlink"><button class="coninlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
      <button onClick={()=>{langue==="en"?setlangue("fr"):setlangue("en")}} id="languetele">{langue==="en"?"Language: English":"Langue: Français"} <i class="bi bi-translate"></i></button>
     
     </ul>
        
        </div>
        <div onClick={()=>setshow(false)} className={show===false?"coverdiv":"coverdiv1"}></div></div>}
{/* ============================================================================================================================ */}
        <div className="body">
        <div class="img1">
            <h1 class="typing"><span>{langue==="en"?en.b:fr.b} </span>&nbsp;<span> {langue==="en"?en.b1:fr.b1} </span> <span> Reda</span> <span> SAADALLAH.</span></h1>
            <h3 class="hix"><span class="job">{langue==="en"?en.b2:fr.b2}  &nbsp;<i class="fa-regular fa-heart"></i> {langue==="en"?en.b3:fr.b3}</span></h3>
            <h3 class="hi">{langue==="en"?en.pre1:fr.pre1}<br/><br/> {langue==="en"?en.pre2:fr.pre2}
 <br/><br/>{langue==="en"?en.pre3:fr.pre3}
</h3>
<div className="contact">
<a  href="https://www.linkedin.com/in/reda-saadallah-795776246" ><img class="apps" width="40px"  src={linkedin} alt=""/></a>
<a  href="https://github.com/redasaadallah" ><img class="apps" width="40px"  src={git} alt=""/></a>
<a  href="mailto:redasaadallah77@gmail.com"><img class="apps" width="40px"  src={email} alt=""/></a>
<a  href="https://wa.me/212625700603" ><img class="apps" width="40px"  src={whatsapp} alt=""/></a>
</div >
<button  class="download" onClick={()=>setshow1(true)} >{langue==="en"?en.cv:fr.cv}</button>
        </div>
         <div class="img2">
            <img class="reda" src={redasaad} alt=""/>
        
    </div>
    </div>
{/* ======================================================================================= */}
<div className="formation">
<div><img src={education}/></div>
<div><h1>{langue==="en"?en.edu:fr.edu} </h1>
<p><span className="bidaya">2025 – {langue==="en"?en.In:fr.In}</span> {langue==="en"?en.Final:fr.Final} <br/>
<span className="tkohz">{langue==="en"?en.Fac:fr.Fac}</span><br/>
<span className="tkohz">{langue==="en"?en.Major1:fr.Major1}</span></p>
<p><span className="bidaya">2022 – 2023 :</span> {langue==="en"?en.Bach:fr.Bach}<br/>
<span className="tkohz">{langue==="en"?en.fac1:fr.fac1}</span><br/>
<span className="tkohz">{langue==="en"?en.Spe:fr.Spe}</span></p>
<p><span className="bidaya">2020 – 2022 :</span> {langue==="en"?en.bach1:fr.bach1} <br/>
<span className="tkohz">{langue==="en"?en.fac1:fr.fac1}</span><br/> 
<span className="tkohz">{langue==="en"?en.spe:fr.spe}</span></p>
<p><span className="bidaya">2018 – 2019 :</span> {langue==="en"?en.Bac:fr.Bac}</p>

</div>

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
{show1 &&<>
<div className="cv">
    <a href={cv1} target="_blank" style={{ animationDuration: "0s" }} className="download">{langue==="en"?en.ve1:fr.ve1}</a>
        <a href={cv2} target="_blank" style={{ animationDuration: "0s" }} className="download">{langue==="en"?en.ve2:fr.ve2}</a>
</div>
<div onClick={()=>setshow1(false)} className="cvcover"></div></>}
    </>);
}
export default Home;