import React from 'react'
import { Link } from 'react-router-dom'
import './vjitlogo.png'
import './bgstatic.css'

const Home = () => {
    return (
        <div className='back'>
            <center>
                <section>
                <img src={require('./vjitlogo.png')} height="300px" width="auto"/>    
                        <h1 >VJIT Placement Portal</h1>
                        <p >
                            Create a student profile and find your position in companies!
                        </p>
                        
                        
                        <Link to='/login' className="btn btn-success">Admin Login</Link>
                    
                </section>
                
                
            </center>
        </div>
        
    )
}

export default Home


