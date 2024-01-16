"use client";
import { app, auth, firestoreDb } from "../firebase/config";
import {
  collection,
  getDocs,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import { getAuth, deleteUser } from "firebase/auth";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import Nav from "@/app/components/nav";
import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import JoditEditor from "jodit-react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const editor=useRef(null)

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
   

    function handleChange(event) {
      setFile(event.target.files[0]);
     }


  
 
   const handleUpdate = async () => {
    setLoading(true)
   
    const taskDocRef = doc(firestoreDb, 'privacypolicy','a5iNFh0TOx3zEPnGscNB')
   
      await updateDoc(taskDocRef, 
        {
        title: title,
        desc: desc
      }
      )
      setLoading(false)
      alert("Data is Updated");
       
  }


  
  const [user_, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)


        const q = query(
          collection(firestoreDb, "privacypolicy")
        );

        let getdataArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          getdataArr.push({ ...doc.data(), id: doc.id });
        });
        setTitle(getdataArr[0].title)
        setDesc(getdataArr[0].desc)
        setLoading(false)
       
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

//   console.log(items); // true

  return (
    <>
    {loading ?  <div className="loading"></div>  : <span> Not loading</span>}
    <div className='wrapper'>
      <Nav />
      <Sidebar />

      <div className="content-wrapper">
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
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
        <div className="col-sm-10">
        <input type="text" className="form-control"  defaultValue={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title"/>
        </div>
        </div>

        <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
        <JoditEditor
                    ref={editor}
                    value={desc}
                    onChange={newDesc=> setDesc(newDesc)}
                    
                />
        {/* <textarea  className="form-control" defaultValue={desc} onChange={(e) => setDesc(e.target.value)} rows="7"></textarea> */}
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
