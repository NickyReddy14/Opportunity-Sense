import React from 'react'
import { Link } from 'react-router-dom'
import './bgstatic.css'
import './vjitlogo.png'

const Home = () => {
    return (
        <div className='back'>
            <center>
                
                <section>
                <img src={require('./vjitlogo.png')} height="300px" width="auto"/>
                        <h1 style={{"marginTop":"100px"}}>VJIT Placement Portal</h1>
                        <p >
                            Create a Student Profile and find your position in the Company.
                        </p>
                        
                        <Link to='/register' className="btn btn-primary">Sign Up</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/login' className="btn btn-success">Sign In</Link>
                    
                </section>
                
                
            </center>
        </div>
        
    )
}

export default Home


