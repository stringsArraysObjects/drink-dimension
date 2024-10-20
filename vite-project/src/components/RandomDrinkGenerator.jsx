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
                             
                            {/* <h3>{data?.drinks?.strDrink}</h3>
                            <img src={data?.drinks?.strDrinkThumb}/>  
                            </div>     */}
                        {/* <div>
                              <ul>
                                <li>{data?.drinks['0']?.strIngredient1}</li> 
                                <li>{data?.drinks['0']?.strIngredient2}</li> 
                                <li>{data?.drinks['0']?.strIngredient3}</li> 
                                <li>{data?.drinks['0']?.strIngredient4}</li> 
                             </ul> 
                        </div> */}
                
            </div>
        )
    }
    


