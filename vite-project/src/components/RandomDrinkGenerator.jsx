import { useState, useEffect } from "react";
import { Children } from "react";
export default function RandomDrinkGenerator() {
    const result = []
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
                             <ul>
                                <li>{data?.drinks['0']?.strIngredient1}</li> 
                                <li>{data?.drinks['0']?.strIngredient2}</li> 
                                <li>{data?.drinks['0']?.strIngredient3}</li> 
                                <li>{data?.drinks['0']?.strIngredient4}</li> 
                             </ul>
                        </div>
                
            </div>
        )
    }
    


