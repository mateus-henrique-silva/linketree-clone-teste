import React, {useState,useEffect} from 'react';
import { initializeApp } from "firebase/app";
import {addDoc, getFirestore, collection } from "firebase/firestore";

export const Form = ({ onSubmit }) => {
// Initialize FireBase

const firebaseApp= initializeApp({
  apiKey: "AIzaSyAdrSN_7gE_mNCC58xVpcSDoqqc57IN_WQ",
  authDomain: "lider-brasil-distribuidora.firebaseapp.com",
  projectId: "lider-brasil-distribuidora",
  storageBucket: "lider-brasil-distribuidora.appspot.com",
  messagingSenderId: "706465925245",
  appId: "1:706465925245:web:bafedfde969dd3aca94914",
  measurementId: "G-KS7QJDBBYV"
});



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const db = getFirestore(firebaseApp);
  const collectionUsers = collection(db, "users")
  async function createUser(){
    const user = await
  }

// useEffect(()=>{
//   const postUsers = async ()=>{
//     const data = await addDoc(collectionUsers)
//     console.log(data)
//   }; postUsers()
// },[])



//End FireBase

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <div className="form-group">
        <button onClick={createUser} className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
