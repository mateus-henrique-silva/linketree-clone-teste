import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import "./form.css"

export const Form = ({ onSubmit }) => {
  // Initialize FireBase

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyAdrSN_7gE_mNCC58xVpcSDoqqc57IN_WQ",
    authDomain: "lider-brasil-distribuidora.firebaseapp.com",
    projectId: "lider-brasil-distribuidora",
    storageBucket: "lider-brasil-distribuidora.appspot.com",
    messagingSenderId: "706465925245",
    appId: "1:706465925245:web:bafedfde969dd3aca94914",
    measurementId: "G-KS7QJDBBYV",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const db = getFirestore(firebaseApp);
  const collectionUsers = collection(db, "users");
  async function createUser() {
    const user = await addDoc(collectionUsers, { name, email });
    console.log(user);
    document.location.reload(true);
    btn.style.display = 'none';
  }

  // useEffect(()=>{
  //   const postUsers = async ()=>{
  //     const data = await addDoc(collectionUsers)
  //     console.log(data)
  //   }; postUsers()
  // },[])

  //End FireBase

  return (
    <>
      <div className="form-group">
        <input
          className="form-control"
          value={name}
          id="name"
          placeholder="nome..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <button id="button-form" onClick={createUser} className="form-control btn btn-primary">
          Assinar
        </button>
      </div>
    </>
  );
};
export default Form;
