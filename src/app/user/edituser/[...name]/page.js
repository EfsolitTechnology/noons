"use client";
import {  firestoreDb,storage } from "../../../firebase/config";
import {
  collection,
  getDocs,
  query,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Nav from "@/app/components/nav";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";

export default function Page({params}) {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [imageUpload, setImageUpload] = useState("");

    const [user_id, setUserid] = useState(params.name[0]);

    const [nuser_id, setNuserid] = useState(params.name[1]);

    
 
 
   const handleUpdate = async () => {
    setLoading(true);

    if (imageUpload) {

    const imageRef = ref(storage, `upload/profile/${imageUpload.name}`);
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        

        setimageUrl(url);

        const taskDocRef =  doc(firestoreDb, 'user',nuser_id)
   
       updateDoc(taskDocRef, 
        {
        name: name,
        mobile: mobile,
        address: address,
        city: city,
        country: country,
        state: state,
        zip: zip,
        profile:url

      }
      )
        // getdataArr_n.push({ ...url})
      });
      setLoading(false)
    });
  
      alert("Data is Updated");
  }
  else{
  
    
    const taskDocRef =  doc(firestoreDb, 'user',nuser_id)
   
    updateDoc(taskDocRef, 
     {
     name: name,
     mobile: mobile,
     address: address,
     city: city,
     country: country,
     state: state,
     zip: zip

   }
   
   )
   setLoading(false)
   alert("Data is Updated But Image Not Updated");

  }
       
  }


  
  const [user_, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {

        setLoading(true)


        const q = query(
          collection(firestoreDb, "user"),
          where("userId", "==", user_id)
        );
        

        let getdataArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          getdataArr.push({ ...doc.data(), id: doc.id });
        });
        console.log(getdataArr);
          setName(getdataArr[0].name);
          setEmail(getdataArr[0].email);
          setMobile(getdataArr[0].mobile);
          setAddress(getdataArr[0].address);
          setCity(getdataArr[0].city);
          setCountry(getdataArr[0].country);
          setState(getdataArr[0].state);
          setZip(getdataArr[0].zip);
        setUser(getdataArr);
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    })();
  }, [user_id,nuser_id]);

//   console.log(items); // true

  return (
    <>
    {loading ?  <div className="loading"></div>  : <span></span>}
    <div className='wrapper'>
      <Nav />
      <Sidebar />

      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className="m-0">Users</h1>
                </div>
                
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Edit User</li>
                </ol>
                </div>
            </div>

            </div>
           
        </div>

        
        <div className="row container">
        <div className="col-md-8">

        <div className="card card-dark">
        <div className="card-header">
        <h3 className="card-title">Edit Details</h3>
        </div>

        <div className="form-horizontal">
        
        <div className="card-body" >
        <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
        <input type="text" className="form-control"  defaultValue={name} onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
        </div>
        </div>
        <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
        <input type="email" className="form-control" readOnly  defaultValue={email}   placeholder="Email"/>
        {/* <input type="email" className="form-control" value={email}  onChange={(e)=> setEmail(e.target.value)}  placeholder="Email"/> */}
        </div>
        </div>
        <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Mobile</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" id="inputEmail3" defaultValue={mobile} onChange={(e)=> setMobile(e.target.value)} placeholder="Mobile"/>
        </div>
        </div>
        <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Profile Image</label>
        <div className="col-sm-10">
        <input type="file" className="form-control"   accept="image/*" onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}/>
        </div>
        </div>
        <div className="form-group row">
        <label  className="col-sm-2 col-form-label">City</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" defaultValue={city} onChange={(e)=> setCity(e.target.value)} placeholder="City"/>
        </div>
        </div>
        <div className="form-group row">
        <label  className="col-sm-2 col-form-label">State</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" defaultValue={state} onChange={(e)=> setState(e.target.value)} placeholder="State"/>
        </div>
        </div>
        <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Zip Code</label>
        <div className="col-sm-10">
        <input type="number" className="form-control" defaultValue={zip}  onChange={(e)=> setZip(e.target.value)} placeholder="ZIp Code"/>
        </div>
        </div>
        <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Country</label>
        <div className="col-sm-10">
        <input type="text" className="form-control" defaultValue={country} onChange={(e)=> setCountry(e.target.value)} placeholder="Country"/>
        </div>
        </div>
        <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Address</label>
        <div className="col-sm-10">
        <textarea  className="form-control" defaultValue={address} onChange={(e) => setAddress(e.target.value)} rows="3"/>
        </div>
        </div>

        </div>
      

        <div className="card-footer">
        <button onClick={() => handleUpdate()} className="btn btn-dark">Update</button>
        </div>
          
         

        </div>
        </div>

        </div>

        </div>






 


        </div>
            <hr/>
            

      <Footer />
      </div>
    </>
  );
}
