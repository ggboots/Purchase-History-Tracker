import styles from "../styles/Login.module.css";

export default function login() {
  return (
    <div>
      <h1 className={styles.title}>login</h1>
      <div>
        <label>Username</label>
        <input type="text" id="username"></input>
      </div>
      <div>
        <label>Password</label>
        <input type="text" id="password" placeholder="password"></input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </div>
  );
}
