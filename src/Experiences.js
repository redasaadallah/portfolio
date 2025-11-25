import "./style/Projects.css"
import React,{useState,useEffect,useRef} from "react";
import home from "./img/home.png"
import competance from "./img/competence.png"
import manager from "./img/manager.png"
import sartaficat from "./img/cartaficat.png"
import pro from "./img/pro.png"
import dentiste from "./img/dentiste.png"
import danone from "./img/danone.png"
import fst from "./img/fst.png"
import {en,fr} from "./langue"

import {mylibrary,dannone,cabinet,paneau,mnist,format,traitement,hotel,sms} from "./projectdata"
function Experiences({homes,experiences,competences,certificates}){

    const [show,setshow]=useState(false)
        const [langue,setlangue]=useState("en")
        const [showl,setshowl]=useState(false)
       const screen = window.innerWidth < 500;
       const [visible,setvisible]=useState(0)
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
              setlangue(savedName);
                  console.log(savedName)

            }
          }, []);
    // ==============================================================================================
       const [count, setCount] = useState(0);
       const [len,setlen]=useState(0)
    useEffect(() => {
    // Run this function every 1000 milliseconds (1 second)
    const interval = setInterval(() => {
      setCount((prev) => prev + 1); // Increment count
      if(count===len)setCount(0)
    }, 2000);
    
    // Cleanup function to stop the interval when component unmounts
    return () => clearInterval(interval);
  }, [count,len]);
// ==================================================================================================
// ======================================Scroll to the div when it appears
  const div1Ref = useRef(null);
    const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const div8Ref = useRef(null);

    const div9Ref = useRef(null);

  useEffect(() => {
    if (visible===1 && div1Ref.current) {
      div1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===2 && div2Ref.current) {
      div2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===3 && div3Ref.current) {
      div3Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===4 && div4Ref.current) {
      div4Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===5 && div5Ref.current) {
      div5Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===6 && div6Ref.current) {
      div6Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===7 && div7Ref.current) {
      div7Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (visible===8 && div8Ref.current) {
      div8Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
    if (visible===9 && div9Ref.current) {
      div9Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visible]);
    return(<>
     <div class="header">
        <h1 class="me">{langue==="en"?en.titre:fr.titre}</h1> 
         <ul id="menu">
            <li onClick={homes} class="link"><button class="inlink" href="www.facebook.com"><i class="icon fa-solid fa-house"></i>{langue==="en"?en.home:fr.home}</button></li> 
            {/* <li class="link"><button class="inlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
            <li onClick={competences} class="link"><button class="inlink" href="#"><i class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
            <li onClick={experiences} class="link"><button style={{color:"aqua", borderBottom:"2px solid"}} class="inlink" href="#experience"><i class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
            <li onClick={certificates} class="link"><button class="inlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
         </ul>
         <button onClick={()=>{showl?setshowl(false):setshowl(true)}} id="langue">{langue==="en"?"Language:":"Langue:"}{langue==="en"?"En":"Fr"} <i class="bi bi-translate"></i></button>
         <div style={{display:showl?'flex':'none'}} id="menu-langue">
                    <button onClick={()=>{setshowl(false)}} style={{width:"21%",padding:"0",borderRadius:"50%",height:"22%",textAlign:"center"}} className="download"><i style={{fontSize:"1.5vw",margin:"0",textAlign:"center"}} class="bi bi-x"></i></button>
    
            <button onClick={()=>{setlangue("en");setshowl(false)}} style={{width:"80%",padding:"0",height:"31%",animationDuration:"0s"}} className="download">{langue==="en"?"English":"Anglais"}</button>
            <button onClick={()=>{setlangue("fr");setshowl(false)}} style={{width:"80%",padding:"0",height:"30%",animationDuration:"0s"}} className="download">{langue==="en"?"French":"Français"}</button>
    
         </div>
         <button onClick={()=>{setshow(true);}} className="btnmenu"><i class="bi bi-list"></i></button>
        </div>
         
        {show &&
            <div  className={show===false?"showedmenu":"showedmenu1"}>
            <div className="conmenu">
                <ul id="conmenu">
            <li onClick={homes}  class="conlink"><button   class="coninlink" href="www.facebook.com"><i  class="icon fa-solid fa-house"></i> {langue==="en"?en.home:fr.home}</button></li> 
            {/* <li class="conlink"><button class="coninlink" href="img/1.png"><i class="fa-solid fa-list-check"></i>Projects</button></li> */}
            <li onClick={competences} class="conlink"><button  class="coninlink" href="#"><i  class="fa-regular fa-user"></i>{langue==="en"?en.skills:fr.skills}</button></li>
            <li onClick={experiences} style={{backgroundColor:"#c97a05",borderRadius:"5px",width:"70%",height:"7%",textAlign:"center"}} class="conlink"><button style={{color:"white"}} class="coninlink" href="#experience"><i style={{color:"white"}} class="fa-regular fa-file"></i>{langue==="en"?en.experiences:fr.experiences}</button></li>
            <li onClick={certificates} class="conlink"><button class="coninlink" href="#"><i class="bi bi-card-list"></i>{langue==="en"?en.certificates:fr.certificates}</button></li>
          <button onClick={()=>{langue==="en"?setlangue("fr"):setlangue("en")}} id="languetele">{langue==="en"?"Language: English":"Langue: Français"} <i class="bi bi-translate"></i></button>
         
         </ul>
            
            </div>
            <div onClick={()=>setshow(false)} className={show===false?"coverdiv":"coverdiv1"}></div></div>}
  
   {/* ======================================================================= */}
   <h1 className="main">{langue==="en"?en.te1:fr.te1}</h1>
   <div className="projects">
    <div>
        <img src={fst}/>
        <p>{langue==="en"?en.e1:fr.e1}</p>
        <button onClick={()=>{visible===1?setvisible(0):setvisible(1);setlen(11);setCount(0)}} className="download">{visible===1?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div1Ref} style={{display:visible===1?"flex":"none"}}>
        <div>
            <p>
                {langue==="en"?en.ed1:fr.ed1}<br/><br/><u>{langue==="en"?en.en:fr.en}</u> React.js, Java (Spring Boot), Postman, Figma, MySQL, VS Code, IntelliJ 
IDEA, XAMPP, Node.js. 
            </p>
        </div>
        <div><img src={mylibrary[count]}/></div>
    </div>
    <div>
        <img src={danone}/>
        <p>{langue==="en"?en.e2:fr.e2}</p>
        <button onClick={()=>{visible===2?setvisible(0):setvisible(2);setlen(10);setCount(0)}} className="download">{visible===2?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div2Ref}  style={{display:visible===2?"flex":"none"}}>
            <div style={{width:screen?"100%":"80%"}}>
                 <p>
                {langue==="en"?en.ed2:fr.ed2}<br/><br/><u>{langue==="en"?en.en:fr.en}</u> React Native, Java (Spring Boot), Postman, Figma, MySQL, VS Code, 
IntelliJ IDEA, XAMPP, Node.js. 
            </p>
            </div>
            <div className="mobile" style={{width:screen?"80%":"20%",height:"500px"}}><img src={dannone[count]}/></div>
    </div>
    <div>
        <img src={dentiste}/>
        <p>{langue==="en"?en.e3:fr.e3}</p>
        <button onClick={()=>{visible===3?setvisible(0):setvisible(3);setlen(16);setCount(0)}} className="download">{visible===3?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div3Ref}  style={{display:visible===3?"flex":"none"}}>
        <div style={{width:screen?"100%":"80%"}}>
                 <p>
                {langue==="en"?en.ed3:fr.ed3}

<br/><br/><u>{langue==="en"?en.en:fr.en}</u> Python (Kivy, KivyMD, PyMongo), MongoDB, VS Code, PyCharm, 
MongoDB Compass.
            </p>
            </div>
        <div className="mobile"  style={{width:screen?"80%":"20%",height:"500px"}}><img src={cabinet[count]}/></div>
    </div>
    
    </div>
   {/* ======================================================================= */}
   <h1 className="main">{langue==="en"?en.te2:fr.te2}</h1>
   <div className="projects">
    <div>
        <img src={pro}/>
        <p>{langue==="en"?en.e4:fr.e4}</p>
        <button onClick={()=>{visible===4?setvisible(0):setvisible(4);setlen(14);setCount(0)}} className="download">{visible===4?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div4Ref} style={{display:visible===4?"flex":"none"}}>
        <div className="mobile" style={{width:screen?"100%":"80%"}}>
                 <p>
                {langue==="en"?en.ed4:fr.ed4}

<br/><br/><u>{langue==="en"?en.en:fr.en}</u> Python (OpenCV, NumPy, Threading, KivyMD, Socket, TensorFlow, Keras, Pandas), vs code, Raspberry Pi 4. 
            </p>
            </div>
        <div style={{width:screen?"80%":"20%",height:"500px"}}><img src={paneau[count]}/></div>
    </div>
    <div>
        <img src={pro}/>
        <p>{langue==="en"?en.e5:fr.e5}  </p>
        <button onClick={()=>{visible===5?setvisible(0):setvisible(5);setlen(7);setCount(0)}} className="download">{visible===5?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div5Ref} style={{display:visible===5?"flex":"none"}}>
       <div>
            <p>
                {langue==="en"?en.ed5:fr.ed5}
<br/><br/><u>{langue==="en"?en.en:fr.en}</u> Python (Pandas, NumPy, Pillow, Matplotlib), Jupyter Notebook.
 
            </p>
        </div>
        <div><img src={mnist[count]}/></div> 
    </div>
    <div>
        <img src={pro}/>
        <p>{langue==="en"?en.e6:fr.e6}  </p>
        <button onClick={()=>{visible===6?setvisible(0):setvisible(6);setlen(5);setCount(0)}} className="download">{visible===6?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div6Ref} style={{display:visible===6?"flex":"none"}}>
        <div style={{width:screen?"100%":"80%"}}>
                 <p>
                {langue==="en"?en.ed6:fr.ed6}


<br/><br/><u>{langue==="en"?en.en:fr.en}</u> Python (Tkinter, NumPy, Pydub, algorithmes de compression Huffman et RLE), Jupyter Notebook.
            </p>
            </div>
        <div style={{width:screen?"":"30%",height:"300px"}}><img src={format[count]}/></div>
    </div>
    <div>
        <img src={pro}/>
        <p>{langue==="en"?en.e7:fr.e7}   </p>
        <button onClick={()=>{visible===7?setvisible(0):setvisible(7);setlen(5);setCount(0)}} className="download">{visible===7?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div7Ref} style={{display:visible===7?"flex":"none"}}>
        <div>
            <p>
                {langue==="en"?en.ed7:fr.ed7}<br/><br/><u>{langue==="en"?en.en:fr.en}</u> MATLAB.
            </p>
        </div>
        <div><img src={traitement[count]}/></div> 
    </div>
    <div>
        <img src={pro}/>
        <p>{langue==="en"?en.e8:fr.e8}   </p>
        <button onClick={()=>{visible===8?setvisible(0):setvisible(8);setlen(9);setCount(0)}} className="download">{visible===8?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div ref={div8Ref} style={{display:visible===8?"flex":"none"}}>
        <div>
            <p>
                 

{langue==="en"?en.ed8:fr.ed8}<br/><br/><u>{langue==="en"?en.en:fr.en}</u> HTML, CSS, JavaScript, PHP, MySQL, XAMPP, vs code.
            </p>
        </div>
        <div><img src={hotel[count]}/></div> 
    </div>
    <div>
        <img src={pro}/>
        <p>{langue==="en"?en.e9:fr.e9}</p>
        <button onClick={()=>{visible===9?setvisible(0):setvisible(9);setlen(2);setCount(0)}} className="download">{visible===9?langue==="en"?en.m:fr.m:langue==="en"?en.a:fr.a}</button>
    </div>
    <div  ref={div9Ref} style={{display:visible===9?"flex":"none"}}>
         <div style={{width:screen?"100%":"80%"}}>
                 <p>
                {langue==="en"?en.ed9:fr.ed9}<br/><br/><u>{langue==="en"?en.en:fr.en}</u> Java (Swing, OkHttp3), IntelliJ.
            </p>
            </div>
        <div className="mobile" style={{width:screen?"80%":"20%",height:"500px"}}><img src={sms[count]}/></div>
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

    </>);
}
export default Experiences;