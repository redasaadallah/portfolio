import './App.css';
import Home from "./Home"
import Certaficats from './Certaficats';
import Experiences from './Experiences';
import Competences from './Competences';
import React,{useState,useEffect} from "react";
function App() {
  const [courent,setcourent]=useState(0)
  useEffect(() => {
    // à chaque changement de page → remonter en haut
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // ou "auto" si tu ne veux pas d’animation
    });
  }, [courent]); // se déclenche quand "page" change
  return (
    <>
{courent === 0 && <Home homes={() => setcourent(0)} competences={() => setcourent(1)} experiences={() => setcourent(2)} certificates={() => setcourent(3)}/>}
{courent === 1 && <Competences homes={() => setcourent(0)} competences={() => setcourent(1)} experiences={() => setcourent(2)} certificates={() => setcourent(3)}/>}
{courent === 2 && <Experiences homes={() => setcourent(0)} competences={() => setcourent(1)} experiences={() => setcourent(2)} certificates={() => setcourent(3)}/>}
{courent === 3 && <Certaficats homes={() => setcourent(0)} competences={() => setcourent(1)} experiences={() => setcourent(2)} certificates={() => setcourent(3)}/>}


    </>
  );
}

export default App;
