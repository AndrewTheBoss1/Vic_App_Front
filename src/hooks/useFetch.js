import { useEffect, useState} from "react"



const useFetch = (url) => {
    //initialized as null
    const [data, setData ] = useState([]) 
    const [error,  setError] = useState(null)
    const [loading, setLoading] =   useState(true) 



    useEffect( () => {

    
        const fetchData = async () => {

            
            setLoading(true)


            
            try {

               
                const res = await fetch(url)
                const json =  await res.json()

              
                setData(json)
                 
                setLoading(false)

     
            } catch (error)
            {
                //in case of error
                setError(error)
                setLoading(false)

            }

        }


        fetchData()


    }, [url])

    return { loading, error, data }

}

//need to export
export default useFetch