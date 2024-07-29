import { useEffect, useState } from "react"

export const useGet = (url) => {

    const [data, setData] = useState()

    useEffect(() => {
        const api = async() => {
            try {
                const res  = await fetch(url);

                const data = await res.json();
                console.log(data)
                setData(data)
                return true;
            } catch (error) {
                console.log("Error", error.message)
                return false;
            }
        }

        api()
    },[])


  return {
    data
  }
}
