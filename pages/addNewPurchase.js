import React, {Component} from 'react';
import Link from 'next/link';

import data from "../backend/fromDatabase.json"

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "",
      quantity: "",
      amountAtPurchase: "",
      dateOfPurchases: "",
    }
  }

  render(){
    return (
       
      <form action="api/stockPurchaseAPI" method="post">
      <div>
        <Link href="../">Return Home</Link>
      </div>
      <h1>Add New Stock Purchase</h1>
      <div>
        <label >Ticker Symbol</label>
        <input name="ticker" id="ticker" onChange={(e) => this.setState({username: e.target.value})}></input>
      </div>
      <div>
        <label>quantity</label>
        <input name="quantity" id="quantity" onChange={(e) => this.setState({password: e.target.value})}></input>
      </div>
      <div>
        <label>cost at time of purhcase</label>
        <input name="amountAtPurchases" id="amountAtPurchases" onChange={(e) => this.setState({password: e.target.value})}></input>
      </div>
      <div>
        <label>Date of Purchase</label>
        <input name="dateOfPurchases" id="dateOfPurchases" onChange={(e) => this.setState({password: e.target.value})}></input>
      </div>
      <div>
        <button type="submit" >Submit</button>
      </div>
      <label name="username">{data.username}</label>
      <label name="_id">{data._id}</label>
    </form>
  );
}
}