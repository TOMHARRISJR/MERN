import React,{useState} from "react";


const FetchPokemon =()=>{
    
    let[pokemon, setPokemon] = useState([])

    const getData = ()=>{
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
            .then(response=>{
                return response.json()
            })
            .then(response=>{
                console.log("the response",response)
                setPokemon(response.results)
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
                                

export default FetchPokemon;