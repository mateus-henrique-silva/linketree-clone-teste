import React, {useState,u} from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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



  const onSubmit = ()=>{
    return console.log("Hello world");
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const db = getFirestore(firebaseApp);





//End FireBase

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
