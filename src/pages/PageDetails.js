import React from 'react'

import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'



export default function ReviewDetails() {

  //should give us id
  const { id } = useParams()
  const { loading, error, data }  = useFetch('http://localhost:1337/api/units/' + id )

  if (loading) return <p>Loading...</p>
  if (loading) return <p>Error </p>
 


  //displays on page 
  return (
    
  )
}
