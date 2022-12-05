import React, {Component} from 'react';
import Link from 'next/link';
import styles from "../styles/Login.module.css";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      
    }
  }

  render(){
    return (
       
      <form action="api/loginAPI" method="post">
      <div>
        <Link href="../">Return Home</Link>
      </div>
      <h1 className={styles.title}>login</h1>
      <div>
        <label>Username</label>
        <input name="username" id="username" onChange={(e) => this.setState({username: e.target.value})}></input>
      </div>
      <div>
        <label>Password</label>
        <input name="password" id="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}></input>
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
}
