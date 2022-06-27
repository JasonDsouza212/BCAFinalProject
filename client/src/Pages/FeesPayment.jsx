import React, { useState } from 'react'
import HomeHelper from '../Components/HomeHelper'
import StripeCheckout from 'react-stripe-checkout';
// import img from './fees.jpg'
export default function FeesPayment() {
  const[paid,setPaid]=useState("FEES NOT PAID");
  const[paidc,setPaidc]=useState("red")
  const token=()=>{
    setPaid("FEES PAID")
    setPaidc("green")
    alert("PAYMENT SUCCESSFUL")
  }
  const mystyle = {
 position:"relative",
 top:"120px",
 textAlign: 'center',
    
  };
  return (
    <>
     <HomeHelper />
     <div style={mystyle}>
     <div>
     <h1 style={{color:"#007bff"}}>YOU CAN PAY YOUR FEES HERE</h1>
     
     {/* <img style={{width:"300px"}} src={img} alt="" /><br></br><br></br> */}
     <h5 style={{color:paidc}}>{paid}</h5>
     <StripeCheckout
        token={token}
        stripeKey="pk_test_51LAyU9SJzQ1pW9BJmNlzhU7XSWzUlKoaXFR8iXNipPbpNUPVMO53HUtik66SC3kuVy86o5oSsfaFhR8CwkBNiqh100ghERxk3S"
        shippingAddress
        billingAddress
        amount={7700000} // cents
       currency="INR"
      />
    </div>
    </div>
    </>
  )
}

