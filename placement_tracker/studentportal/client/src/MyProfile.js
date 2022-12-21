import React,{useState,useEffect} from 'react'
import { Link,Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"
import './MyProfile.css'

export const MyProfile = () =>{

    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    useEffect(()=>{
        axios.get('http://localhost:5000/MyProfile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data)) 

    })
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    console.log(tokenn)

return(
    <div>       
        <Header/>
        <div className='myprof_container'>
            <h1>My Profile</h1>
            <p>Name: {data.fullname}<br/>College ID: {data.collegeId}<br/>Email ID: {data.email}<br/>Branch: {data.branch}<br/>Mobile Number: {data.mobile}<br/>Github Handle: {data.github}<br/>LinkedIn Handle: {data.linkedin}<br/>Password: {data.password}<br/>CGPA: {data.cgpa}</p>   
        </div>
    </div>
)
}

export default MyProfile