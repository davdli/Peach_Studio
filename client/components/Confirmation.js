import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'

const ConfirmationPage = () => {
  return (
    <div>
      <div className='confirmation-wrapper'>
        <h1>Thank you for shopping with us!</h1>
        <br />
        <div className="confirmation-order">
          <h3 style={{marginLeft: '90px'}}>Your order is confirmed</h3>
          <p style={{marginLeft: '90px'}}>You'll receive an email when your order is ready.</p>
        </div>
        <br />
        <div className="customer-info">
          <h3 style={{marginLeft: '90px'}}>Customer Information</h3>
          <div className="customer-details">
            <div>
              <p style={{fontWeight: 'bolder'}}>Contact Information</p>
              <p>customer@fakeemail.com</p>
              <br />
              <p style={{fontWeight: 'bolder'}}>Shipping Address</p>
              <p>123 Fake Stret, Fake City</p>
            </div>
            <div>
              <p style={{fontWeight: 'bolder'}}>Payment Method</p>
              <p>Credit Card</p>
              <br />
              <p style={{fontWeight: 'bolder'}}>Billing Address</p>
              <p>123 Fake Street, Fake City</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    <Footer></Footer>
    </div>
  )
}

export default ConfirmationPage;
