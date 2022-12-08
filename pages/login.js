import React, {Component} from 'react';
import connectMongo from '../backend/importConnectMongodb';
import loginSchema from '../backend/loginSchema';
import mongoose from 'mongoose';

import Link from 'next/link';

import styles from "../styles/Login.module.css";

connectMongo();

function Login (props){

    return (
      <form action="api/loginAPI" method="get">
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
        <button type="submit" onClick={getRequest}>Login</button>
      </div>
      <div>
        <Link href="register" id={styles.login}>Register new user</Link>
      </div>
    </form>
  );
  

  async function getRequest(res,req){
    const {username, password} = req.body
    const login = await loginSchema.findOne({username,password})
    if(!login){
      return res.json({status: "incorrect password"})
    }
    else{
      console.log(username + password)
      // const obj = {name: 'me'}
      // jsonfile.writeFile('../../fromDatabase.json', obj)
      // .then(res => {
        //     console.log('write complete')
        // })
        // .catch(error => console.log(error))
        // res.status(200).json(login)
        
      }
      
    }
}
  
  
export default Login