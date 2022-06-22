
//A react functional component
import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {

    //geting these values from useFetch function in useFetch.js
    const { loading, error, data } = useFetch('http://localhost:1337/api/units')

    //when loading is true we want to display a loading message
    if (loading) return <p>Loading...</p>
    if (loading) return <p>Error </p>

      console.log(data)




  return (
    <div>
        {data.data.map(unit => (

          //parent element must have key property
          //each review has an id this is the key
          <div key ={unit.id} className="review-card">
            


           

          

            
        
            <Link to={`/details/${unit.id}`}>{unit.attributes.title}</Link>

            </div>
          


        ))}
        </div>
  )
}

//React function component "rfc"
