import "./style/Competences.css"
import React,{useState,useEffect} from "react";
import home from "./img/home.png"
import competance from "./img/competence.png"
import manager from "./img/manager.png"
import sartaficat from "./img/cartaficat.png"
import {en,fr} from "./langue"
import SkillCard from "./SkillCard";
import {langage,framework,conception,bureatique,base,IDE,carte,ops} from "./data";

function Competences({homes,experiences,competences,certificates}){
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
            if (savedName) {
              setlangue(savedName);
                  console.log(savedName)

            }
          }, []);
    //=============================motion==========================
    const variant={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                duration:0.5
            }
        }
    }  
    function getRandomPrettyColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 65 + Math.floor(Math.random() * 16); // 65% à 80%
  const lightness = 55 + Math.floor(Math.random() * 16);  // 55% à 70%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
    return(<>
    {/* ============================================================= */}
        <div class="header">
        <h1 class="me">{langue==="en"?en.titre:fr.titre}</h1> 
         <ul id="menu">
            <li onClick={homes} class="link"><button class="inlink" href="www.facebook.com"><i class="icon fa-solid fa-house"></i>{langue==="en"?en.home:fr.home}</button></li> 
            {/* <li class="link"><button class="inlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
            <li onClick={competences} class="link"><button style={{color:"aqua", borderBottom:"2px solid"}} class="inlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
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
            <li onClick={homes}  class="conlink"><button   class="coninlink" href="www.facebook.com"><i  class="icon fa-solid fa-house"></i> {langue==="en"?en.home:fr.home}</button></li> 
            {/* <li class="conlink"><button class="coninlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
            <li onClick={competences} style={{backgroundColor:"#c97a05",borderRadius:"5px",width:"77%",height:"7%",textAlign:"center"}} class="conlink"><button style={{color:"white"}} class="coninlink" href="#"><i style={{color:"white"}} class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
            <li onClick={experiences} class="conlink"><button class="coninlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
            <li onClick={certificates} class="conlink"><button class="coninlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
          <button onClick={()=>{langue==="en"?setlangue("fr"):setlangue("en")}} id="languetele">{langue==="en"?"Language: English":"Langue: Français"} <i class="bi bi-translate"></i></button>
         
         </ul>
            
            </div>
            <div onClick={()=>setshow(false)} className={show===false?"coverdiv":"coverdiv1"}></div></div>}
   
      
   {/* ======================================================================= */}
    <div style={{marginTop:"150px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s1:fr.s1}</h1>
    <div 
    id="comp">
        {langage.map((emp,index)=>(
        <SkillCard
            key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        ))}
    </div>
    </div>
    {/* ============================================= */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s2:fr.s2}</h1>
    <div id="comp">
        {framework.map((emp,index)=>(
             <SkillCard
             key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
       ))}
    </div></div>
    {/* ================================ */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s6:fr.s6}</h1>
    <div id="comp">
        {base.map((emp,index)=>(
              <SkillCard
              key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        ))}
    </div></div>
    {/* ================================ */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">DevOps & Cloud</h1>
    <div id="comp">
        {ops.map((emp,index)=>(
              <SkillCard
              key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        ))}
    </div></div>
    {/* ========================================= */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s3:fr.s3}</h1>
    <div id="comp">
        {IDE.map((emp,index)=>(
             <SkillCard
             key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        ))}
    </div></div>
    {/* =============================== */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s4:fr.s4}</h1>
    <div id="comp">
        {conception.map((emp,index)=>(
              <SkillCard
              key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        ))}
    </div></div>
    {/* ================================ */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s5:fr.s5}</h1>
    <div id="comp">
        {bureatique.map((emp,index)=>(
              <SkillCard
              key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        ))}
    </div></div>
    
    {/* ============================================= */}
    <div style={{marginTop:"50px"}} className="competence">
    <h1 id="titsk">{langue==="en"?en.s7:fr.s7}</h1>
    <div id="comp">
        {carte.map((emp,index)=>(
              <SkillCard
              key={index}
            time={index*0.3}
            level={langue==="en"?en.s8:fr.s8}
            logo={emp.image}

            name={emp.nom}

            percentage={emp.per}

            color={getRandomPrettyColor()}

            />
        
        ))}
    </div></div>
   
   {/* ======================================================================= */}
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

{/* ======================================================================================== */}


{/* ======================================================================================= */}

    </>);
}
export default Competences;