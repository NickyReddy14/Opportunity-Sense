import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"
import './bgstatic.css'

const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    const [y,setY] = useState("")
    useEffect(()=>{
        //axios.get('http://localhost:5000/getcomp').then(res => setData(res.data.filter(profile=>profile.eligibility<=localStorage.getItem('cgpaa')))) 
                axios.get('http://localhost:5000/getcomp').then(res => 

    !search ? setData(res.data.filter(profile=>profile.eligibility<=localStorage.getItem('cgpaa'))): setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))

        axios.get('http://localhost:5000/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(
            res =>  setY(res.data._id)
        )

    },[search])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    console.log(tokenn)



    const searchHandler = e =>{
        e.preventDefault();
        console.log(search);
        axios.get('http://localhost:5000/getcomp').then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))
    
    }
    
    
    return (
        <div className='back'>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Companies Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and Apply Companies <span style={{color:"blue"}}> 🤝 </span></h3>

                    <form className="d-flex" onSubmit={searchHandler} >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter to Search" aria-label="Search" />
                        <input className="btn btn-outline-success" type="submit" value="Search" />
                    </form>
                    
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
                                src="https://assets-global.website-files.com/5d9bc5d562ffc22c37470958/5fce6ee18b204291c8598510_React%20Native%20Developer%20Hiring%20Guide.svg"
                                height="200" width="300"
                                alt="user photo"
                            />
                            <div>
                            <h2 style={{"color":"green"}}>{profile.compname}</h2>
                                <p>Company Mail ID: {profile.email}</p>
                                <p>Minimum Eligibility: {profile.eligibility} CGPA</p>
                                <p>Last date of application: {profile.lastdate}</p>
                                {/* <p>{profile.mobile}</p>*/}
                                <Link to={`/indprofile/${profile._id}/${y}`} className="btn btn-primary">View Profile</Link><br /><br />
                            </div>

                            
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                


            </section>


            { tokenn === "undefined" && <Navigate to="/login" />}

        </div>
    )
}

export default Dashboard
