import React, {Component} from 'react';
import Link from 'next/link';

import data from "../backend/fromDatabase.json"

export default class login extends Component {
  constructor(props) {
    super(props);
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
        <input name="ticker" id="ticker" ></input>
      </div>
      <div>
        <label>quantity</label>
        <input name="quantity" id="quantity"></input>
      </div>
      <div>
        <label>cost at time of purhcase</label>
        <input name="amountAtPurchases" id="amountAtPurchases" ></input>
      </div>
      <div>
        <label>Date of Purchase</label>
        <input name="dateOfPurchases" id="dateOfPurchases" ></input>
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