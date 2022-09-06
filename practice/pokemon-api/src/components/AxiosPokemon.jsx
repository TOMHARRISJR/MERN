import React,{useState} from "react";
import axios from "axios";

const AxiosPokemon =()=>{
    
    let[pokemon, setPokemon] = useState([])

    const getData = ()=>{
        
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
            
            .then(response=>{
                console.log("the response",response)
                setPokemon(response.data.results)
            })
    }


    return(
        <div>
            <button onClick={getData}>Fetch Pokemon</button>
            <div>
                <ul className="list">
            {
                pokemon.map((pokemonObj, index)=>{
                    return(
                            <li className="list1">{pokemonObj.name}</li>
                        )
                })
                        }
                </ul>
            </div>
        </div>
    )
}
                                

export default AxiosPokemon;