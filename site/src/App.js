import './App.css';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Figure } from 'react-bootstrap';
import Accueil from "./pages/Accueil";
import Alimentation from "./pages/Alimentation";
import Batiment from "./pages/Batiment";
import Fabrication from "./pages/Fabrication";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Navigation from './components/Navigation';
import CardIndividual from './services/CardIndividual';

document.body.addEventListener("click", function(){
    let navBar = document.getElementById("responsive-navbar-nav");
    navBar.classList.remove("show");
});

function topFunction() {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


function App() {
  return (
    <div>
      <header>
        <Navigation/>
      </header>
      <main>
      </main>
        <Routes>
          <Route path="/" element = {<Accueil/>}></Route>
          <Route path="Services" element = {<Services/>}></Route>
          <Route path="Alimentation" element = {<Alimentation/>}></Route>
          <Route path="Bâtiment" element = {<Batiment/>}></Route>
          <Route path="Fabrication" element = {<Fabrication/>}></Route>
          <Route path="/artisans/:id" element = {<CardIndividual/>}></Route>
          <Route path="Error" element = {<Error/>}></Route>
        </Routes>

      <footer>
        <div id='footer'>
          <div className='container ms-4'>
            <Figure>
              <a href='https://www.auvergnerhonealpes.fr/' target='blank'><Figure.Image src='logoARA.png'/></a>
            </Figure>
          </div>
          <div className='texteFooter'>
            <p>
              101 cours Charlemagne <br></br>
              CS 20033 <br></br>
              69269 LYON CEDEX 02 <br></br>
              FRANCE <br></br>
              +33 (0) 4 26 73 40 00
            </p>
          </div>
          <div id='linksFooter'>
            <div className='linksFooter'>
              <Link to="Error" onClick={topFunction}>Données personnelles</Link>
              <Link to="Error" onClick={topFunction}>Accessibilité</Link>
              <Link to="Error" onClick={topFunction}>Presse</Link>
            </div>
            <div className='linksFooter'>
              <Link to="Error" onClick={topFunction}>Marchés publics</Link>
              <Link to="Error" onClick={topFunction}>Venir à la région</Link>
              <Link to="Error" onClick={topFunction}>Contacts</Link>
            </div>
            <div className='linksFooter'>
              <Link to="Error" onClick={topFunction}>Politique des cookies</Link>
              <Link to="Error" onClick={topFunction}>Gestion des cookies</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
}

export default App;
