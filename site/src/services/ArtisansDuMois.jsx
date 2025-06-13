import  {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

export default function Atdm() {

  const [artisans, setArtisans] = useState([]);

  const getArtisan = async () => {
    const res = await fetch ("http://localhost:3000/atdm");
    const json = await res.json();
    setArtisans (json);
  }
  
  useEffect (() => {
    getArtisan();
  },[])

return (

    <>
        
            {artisans.map(artisan => (
                <Card className="mb-3">
                <Card.Body>
                <p>Nom: {artisan.nom}</p>
                <p>Note: <Rating initialValue={artisan.note} allowFraction size={25}/></p>
                <p>Sapécialité: {artisan.specialite}</p>
                <p>Localisation: {artisan.ville}</p>
                </Card.Body>
                </Card>
            ))}
            
            
        
    </>


)
}