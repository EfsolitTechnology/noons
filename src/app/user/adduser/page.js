"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import {  userRegistersec } from "@/app/utils/configfunction";

export default function Page() {
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [owner, setOwner] = useState("");
    useEffect(() => {

    const userSession = localStorage.getItem("user");
      const user_data = JSON.parse(userSession);
      setOwner(user_data.user_id)
      setRole("4");

    
    },[])

    const handleSubmit= async()=>{
        
        const password =Math.random().toString(36).slice(2, 10)
        // alert(password);
           const detail = {email:email,password:password,role:role,name:name,mobile:mobile,owner:owner}
           const res=await userRegistersec(detail)
           setEmail('');
           setName('');
           setMobile('');
           console.log(res);
  
           
      }
  return (
    <>
      <div className="wrapper">
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
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
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
                  <h3 className="card-title">Add User</h3>
                </div>

                <div className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Mobile
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Mobile"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div className="card-footer center">
                    <button
                      onClick={() => handleSubmit()}
                      className="btn btn-dark"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </>
  );
}
