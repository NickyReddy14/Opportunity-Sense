import React,{useState,useEffect} from 'react'
import { Link,Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"
import './MyProfile.css'
import './bgstatic.css'

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
    <div className='back'>       
        <Header/>
        <center>
        <div className="profile bg-light card " style={{"margin":"100px","width": "25.5rem"}}>
                            <img 
                                className="round-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
                                height="300" width="auto"
                                alt="user photo"
                            />
        <div className='myprof_container'>
               <h2>{data.fullname}</h2>
                                    <p>College ID {data.collegeId}</p>
                                    <p>Email ID: {data.email} CGPA</p>
                                    <p>Branch: {data.branch}</p>
                                    <p>Mobile Number: {data.mobile}</p>
                                    <p>Github Handle: {data.github}</p>
                                    <p>LinkedIn Handle: {data.linkedin}</p>
                                    <p>Password: {data.password}</p>
                                    <p>CGPA: {data.cgpa}</p>
                            </div>
        </div>
        </center>
        </div>
)
}

export default MyProfile