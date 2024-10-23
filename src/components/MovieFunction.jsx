import React, { useEffect, useState } from 'react';

export default function MovieFunction({data}){
    const [colorS, setColorS] = useState({color: "#62ff4e", text: "Disponible"});
    const [image, setImage] = useState("src/assets/movies/COCO.jpg");
    
    const selectColorAndText = (type) => {
        switch (type) {
            case 1:
                setColorS({color: "#62ff4e", text: "Disponible"})
                break;
        
            case 2:
                setColorS({color: "#ff9b28", text: "LLeno"})
                break;
        
            case 3:
                setColorS({color: "#d66666", text: "Terminó"})
                break;
        
            default:
                setColorS({color: "#62ff4e", text: "Disponible"})
                break;
        }
    }

    const selectImage = (movieNumber) => {
        switch (movieNumber) {
            case 1:
                setImage("src/assets/movies/COCO.jpg")
                break;
                
            case 2:
                setImage("src/assets/movies/Coraline.jpg")
                break;
                
            case 3:
                setImage("src/assets/movies/Deborha.jpg")
                break;
                
            case 4:
                setImage("src/assets/movies/Pooh.jpg")
                break;
                
            case 5:
                setImage("src/assets/movies/Abracadabra.jpg")
                break;
                
            case 6:
                setImage("src/assets/movies/Zombies.jpg")
                break;
                
            case 7:
                setImage("src/assets/movies/Megan.jpg")
                break;
                
            default:
                setImage("src/assets/movies/COCO.jpg")
                break;
        }
    }

    useEffect(() => {
      selectColorAndText(data.status);
      selectImage(data.movie);
    }, [])
    
    
    return (
        <div className="movieFunctionContainer" style={{backgroundImage: `url('${image}')`}}>
            <div className="capa">
                <h2>{data.name}</h2>
                <p className="date">{data.date} - {data.hour} PM</p>
                <p className="status" style={{color: colorS.color}}>{colorS.text}</p>
            </div>
        </div>
    );
}