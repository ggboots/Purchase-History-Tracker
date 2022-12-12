import React, {Component} from 'react';
import mongoose from 'mongoose';

import Link from 'next/link';

import styles from "../styles/Login.module.css";


function Login (props){

    return (
      <form action="api/loginAPI" method="post">
      {/* <form> */}
      <div>
        <Link href="../">Return Home</Link>
      </div>
      <h1 className={styles.title}>login</h1>
      <div>
        <label>Username</label>
        <input name="username" id="username"></input>
      </div>
      <div>
        <label>Password</label>
        <input name="password" id="password"></input>
      </div>
      <div>
        <button type="submit" >Login</button>
      </div>
      <div>
        <Link href="register" id={styles.login}>Register new user</Link>
      </div>
    </form>
  );

}
  
  
export default Login