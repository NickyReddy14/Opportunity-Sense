import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"
import './bgstatic.css'

const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    console.log(tokenn)
    
    return (
        <div className='back'>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Companys Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and Analys companies <span style={{color:"blue"}}> 🤝 </span></h3>
                    
                </div>
            </nav>

            <div className="profiles ">
                <div className = "row" >
                    {data.length>=1 ? 
                    data.map(profile => 
                        <div className='col-md-4'>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}>
                        <center>
                            <img 
                                className="round-img"
                                src="https://cdn.pixabay.com/photo/2016/03/23/22/26/user-1275780_960_720.png"
                                height="200" width="300"
                                alt="user photo"
                            />
                            <div>
                                <h2 style={{"color":"green"}}>{profile.fullname}</h2>
                                <h3>{profile.collegeId}</h3>
                                <h4>{profile.branch}</h4>
                                <p>{profile.email}</p>
                                {/* <p>{profile.mobile}</p>*/}
                                <Link to={`/indprofile/${profile._id}`} className="btn btn-primary">View Profile</Link>
                            </div>

                            <ul>
                                {profile.skill.split(",").map(skill => <li className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
                                    )}
                                
                            </ul>
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                


            </section>

            

        </div>
    )
}

export default Dashboard
