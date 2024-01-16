'use client'
import React, {  useState } from "react";

import Image from "next/image";
import "../../../../public/auth/css/loginstyle.css";
import "../../../../public/auth/css/login.css";
import { auth, firestoreDb } from "../../firebase/config";
import { FaUser, FaLock } from "react-icons/fa";
import useAuth from "@/app/utils/useauth";
import { userLogin } from "@/app/utils/configfunction";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  // if (localStorage.getItem('user') != null) {
  // const get_user_data = localStorage.getItem('user');
  // console.log(get_user_data);
  // const user_data=JSON.parse(get_user_data);
  // // var email= get_user_data{email};
  // console.log(user_data["email"] );
  // }
  const setUser = useAuth((state) => state.setUser);

  const handleSignUp = async () => {
    try {
      const detail = { email: email, password: password };
      const res = await userLogin(detail);
      console.log(res.error)

      const q = query(
        collection(firestoreDb, "user"),
        where("userId", "==", res.user.uid)
      );

      let getdataArr = [];

      setLoading(true);

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        getdataArr.push({ ...doc.data(), id: doc.id });
      });
      //   console.log(getdataArr);
      console.log(getdataArr);
      // console.log("Hello");
      //   console.log(getdataArr[0].role);
      //   setRole(getdataArr[0].role)
      //   console.log(role)
      setLoading(false);

      if (localStorage.getItem("user") == null) {
        var getData = {
          email: res.user.email,
          user_id: res.user.uid,
          role: getdataArr[0].role,
          name: getdataArr[0].name,
          image: getdataArr[0].profile,
          login: true,
        };
        localStorage.setItem("user", JSON.stringify(getData));

        setUser(JSON.stringify(getData));
        //  const setUser = useAuth(state=>state.setUser);
        //  const state_data=setUser( JSON.stringify(getData));

        // console.log(state_data);
      }

      // router.push('/');
      window.open("/", "_self");
      //redirect('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      {loading ?  <div className="loading"></div>  : <span> Not loading</span>}
      
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form">
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className="forgotp" >
                  <a href="./forgot.html"> <span>Forgot passwword</span></a>
                  </div> */}
            {/*  */}

            <button
              onClick={() => handleSignUp()}
              value="Login"
              className="btn solid"
            > 
              Login
              
            </button>
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <Image
            src={require("../../../../public/img/Scooter.png")}
            className="image"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
