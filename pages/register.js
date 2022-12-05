import React, {Component} from 'react';
import Link from 'next/link';
import styles from "../styles/Register.module.css";

export default class Register extends Component {
  constructor(props) {

    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }
  render(){
    return (
      // <form onSubmit={this.handleSubmit}>
      <form action="api/registerAPI" method="post">
      <h1 className={styles.title}>Register User</h1>
      <div>
        <label>Username</label>
        <input type="username" name="username" id="username" onChange={(e) => this.setState({username: e.target.value})}></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}></input>
      </div>
      <div>
        <button type="submit" >Login</button>
      </div>
      <div>
        <Link href="login" id={styles.login}>already have user</Link>
      </div>
    </form>
  );
}
}