import React, {useState} from "react";



const FetchCrypto = ()=>{

    let[coins,setCoins] = useState([])
    
    const getData = ()=>{
        
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order-market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response=>{
                return response.json() // so we can parse(read) the response as json ( a format the computer can understand )
            })
            .then(response=>{
                console.log("response from api  is", response);
                setCoins(response);

            })
            .catch(error=>{
                console.log("Something went wrong, could not fetch data from API",error)
            })
        
            console.log("What happens while waiting for response from API")
    }
    
    
    return(
        <div>
            <button onClick={getData}>Get Crypto Data</button>
            {
                coins.map((coinObj, idx)=>{
                    return(
                        <div>
                            <h3>{coinObj.name}</h3>
                            <p>Current Price: ${coinObj.current_price}</p>
                            <p>Market Cap Rank: #{coinObj.market_cap_rank}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchCrypto;



