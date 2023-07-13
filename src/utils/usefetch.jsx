import axios from "axios"
import { useEffect, useState } from "react"

const usefetch = (URL)=>{
    const [ApiData , setApiData] = useState([])
    useEffect(()=>{
        GetIssuesInfo()
    } , [])
    const GetIssuesInfo = ()=>{
        axios.get(URL)
        .then((res)=>{
            setApiData(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return {ApiData}
}
export {usefetch}