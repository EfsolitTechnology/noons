'use-client'
import {auth,firestoreDb,app}  from '../firebase/config';
import { useRouter } from 'next/navigation';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { collection,addDoc, query, where, getDocs, QuerySnapshot, limit, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
export const userRegister= async (data)=>{

        createUserWithEmailAndPassword(auth,data.email,data.password).then((res)=>{
             addDoc(collection(firestoreDb,'user'),{
                userId:res.user.uid,
                name:data.name,
                email: res.user.email,
                role:data.role,
                password:data.password,
                profile:"",
                mobile:data.mobile,
                address:"",
                city:"",
                country:"",
                role:data.role,
                state:"",
                zip:"",
                status:true,
                created: new Date()
            }).then((user_details)=>{
                console.log(user_details)
            })
        console.log(res);
      
    }).catch((error)=>{
        const res="User Already Exists";
        return res;
        // console.log(error.message);
    })
     
   
}
export const userRegistersec= async (data)=>{

    createUserWithEmailAndPassword(auth,data.email,data.password).then((res)=>{
         addDoc(collection(firestoreDb,'user'),{
            userId:res.user.uid,
            name:data.name,
            email: res.user.email,
            role:data.role,
            password:data.password,
            profile:"",
            owner_id:data.owner,
            mobile:data.mobile,
            address:"",
            city:"",
            country:"",
            role:data.role,
            state:"",
            zip:"",
            status:true,
            created: new Date()
        }).then((user_details)=>{
            console.log(user_details)
        })
    console.log(res);
  
}).catch((error)=>{
    const res="User Already Exists";
    return res;
    // console.log(error.message);
})
 

}
export const userLogin= async (data)=>{
    try{
        const res= await  signInWithEmailAndPassword(auth,data.email,data.password)
        return res;
        
    }
    catch(e){
        console.error(e);
    }
}
