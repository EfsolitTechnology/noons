'use client';
import Link from 'next/link'
import'../../../../public/auth/css/loginstyle.css'
import'../../../../public/auth/css/login.css'
import { useRouter } from 'next/navigation';
import React, { useContext, useState }   from 'react'
import {userRegister} from '../../utils/configfunction'
import { FaEnvelope,FaLock   } from "react-icons/fa";
import Image from 'next/image';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    // const [createUserWithEmailAndPassword]= useCreateUserWithEmailAndPassword(auth);

    const router = useRouter();
    
    // const login=()=>{
    //     alert(email);
    //     alert(password)
    // }
    const handleSignUp= async()=>{
      alert(email);
      alert(role); 
         const detail = {email:email,password:password,role:role}
         const res=await userRegister(detail)
         console.log(res);

         setEmail('');
         setPassword('');
         setRole('');
    }
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <div  className="sign-in-form">
            <h2 className="title">Register</h2>
            {/* <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div> */}
            <div className="input-field">
              <i><FaEnvelope/></i>

              <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i><FaLock/></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className=" btnone">
              <select  className=" input-field  " onChange={(e) => setRole(e.target.value)} style={{width: '380px'}}>
                <option value="">Select Role Type</option>
                <option value="2">B2B</option>
                <option value="3">Individual</option>
              </select>
            </div>
            
          

          <button  onClick={() => handleSignUp()}  className="btn solid" >Register</button>
          <p>Have an account? <Link href="/Auth/Login">Login</Link></p>
            
            
            
          </div>
          
        </div>
      </div>
      <div className="panels-container"> 
            <div className="panel left-panel">
        
            <Image src={require('../../../../public/img/Scooter.png')} className="image" width={0}
  height={0} style={{ width: '100%', height: 'auto' }} alt="" />
            </div>
          
          </div>
  </div> 
  )
}
