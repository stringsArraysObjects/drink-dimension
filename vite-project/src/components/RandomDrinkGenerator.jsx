import { useState, useEffect } from "react";

export default function RandomDrinkGenerator() {
    
    let [data, setData] = useState([])
    useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                        const jsonData = await response.json()
                        return jsonData
                        
                    }catch (error){
                        console.error('Error fetching data:', error)
                    }
                };
         
                fetchData().then(setData)
    },[])
        console.log(data)
        return (
            <div>
                
                        <div>
                            <h3>{data?.drinks['0']?.strDrink}</h3>
                            <img src={data?.drinks['0']?.strDrinkThumb}/>  
                        </div>    
                        <div>
                             {Object.values(data).map((value, index) =>  (
                                <span key={index}>{value = data?.drinks['0']?.strIngredient1} </span> 
                                ))}    
                        </div>
                
            </div>
        )
    }
    


