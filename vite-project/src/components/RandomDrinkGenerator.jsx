import { useState, useEffect } from "react";
export default function RandomDrinkGenerator() {
    let [data, setData] = useState([])
    useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                        const jsonData = await response.json()
                        return setData(jsonData) 
                        
                    }catch (error){
                        console.error('Error fetching data:', error)
                    }
                };
         
                fetchData();
            },[])
        console.log(data)
        return (
            <div>
                           <h1>Cocktail Of The Day</h1> 
                        {Object.values(data).map((value, index) =>  (
                        <h3 key={index}>{value = data?.drinks[index]?.strDrink} </h3> 
                        ))}
                        {Object.values(data).map((value, index) =>  (
                        <img src={value = data?.drinks[index]?.strDrinkThumb} /> 
                        ))}
                        {Object.values(data).map((child, index) =>  (
                        <ul>
                            <li key={index}>{data?.drinks[index]?.strIngredient1}</li> 
                            <li key={index}>{data?.drinks[index]?.strIngredient2}</li> 
                            <li key={index}>{data?.drinks[index]?.strIngredient3}</li> 
                            <li key={index}>{data?.drinks[index]?.strIngredient4}</li> 
                        </ul>  
                        ))}
                        
                        {Object.values(data).map(( value, index) => (
                            <span>{data?.drinks[index]?.strInstructions}</span>
                        ))}    
            </div>
        )
    }
    


