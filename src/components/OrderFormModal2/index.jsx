"use client"
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const OrderFormModal2 = ({ isModalOpen, setIsModalOpen, currentOrderDetails }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deliveryMethod: 'pickup',
    pickupLocation: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    totalAmount: '',
    streetAddress: "",
    city: "",
    province: ""
  });

  useEffect(() => {
    emailjs.init('WuuAQ1FbvTmeLyXQM'); // Replace with your EmailJS public key
  }, []);

  // Update the form when currentOrderDetails change
  useEffect(() => {

    if (currentOrderDetails) {
      setFormData((prevData) => ({
        ...prevData,
        totalAmount: currentOrderDetails?.totalAmount,
      }));
    }
  }, [currentOrderDetails]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log('first1')
    e.preventDefault();

    const orderDetails = {
      ...formData,
      sendAmount: currentOrderDetails.totalAmount,
      sendCurrency: currentOrderDetails.sendCurrency,
      receiveAmount: currentOrderDetails.receiveAmount,
      receiveCurrency: currentOrderDetails.receiveCurrency,
      rate: currentOrderDetails.rate,
      deliveryFee: formData.deliveryMethod === 'delivery' ? '$30.00' : '$0.00',
    };

    // console.log('first',{
    //   to_email: "info@moneytrust.ca",
    //   cc_email: orderDetails.email,
    //   customer_name: orderDetails.fullName,
    //   customer_email: orderDetails.email,
    //   phone: orderDetails.phone,
    //   // send_amount: `${orderDetails.sendAmount} ${orderDetails.sendCurrency}`,
    //   // receive_amount: `${orderDetails.receiveAmount} ${orderDetails.receiveCurrency}`,
    //   rate: currentOrderDetails?.items?.map((z) => z?.price),
    //   receive_amount:currentOrderDetails?.items?.map((z) => z?.name),
    //   delivery_method: orderDetails.deliveryMethod === 'delivery' ? 'Home Delivery ($30)' : 'Office Pickup (Free)',
    //   pickup_location: orderDetails.pickupLocation,
    //   preferred_date: formData.preferredDate,
    //   delivery_fee: orderDetails.deliveryFee,
    //   total_amount: `${(orderDetails.totalAmount + totalAmount)}`,
    //   street_address: formData.streetAddress, // Include street address
    //   city: formData.city, // Include city
    //   province: formData.province, // Include province
    //   postal_code: formData.postalCode, // Include postal code
    //   order_type: 'Currency Exchange',
    // })

    // Send email via emailjs
    emailjs.send('service_285pths', 'template_236tarq',
      {
        to_email: "info@moneytrust.ca",
        cc_email: orderDetails.email,
        customer_name: orderDetails.fullName,
        customer_email: orderDetails.email,
        phone: orderDetails.phone,
        rate: currentOrderDetails?.items?.map((z) => z?.price),
        receive_amount: currentOrderDetails?.items?.map((z) => z?.name),
        delivery_method: orderDetails.deliveryMethod === 'delivery' ? 'Home Delivery ($30)' : 'Office Pickup (Free)',
        pickup_location: orderDetails.pickupLocation,
        preferred_date: formData.preferredDate,
        delivery_fee: orderDetails.deliveryFee,
        total_amount: `${(orderDetails.totalAmount + totalAmount)}`,
        street_address: formData.streetAddress, // Include street address
        city: formData.city, // Include city
        province: formData.province, // Include province
        postal_code: formData.postalCode, // Include postal code
        order_type: 'Currency Exchange',
      }, 'WuuAQ1FbvTmeLyXQM')
      .then(response => {
        console.log('Success:', response);
        alert('Order submitted successfully! Check your email for confirmation.');
        setIsModalOpen(false); // Close modal on success
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting order. Please try again.');
      });
  };

  const handleBack = () => {
    setIsModalOpen(false); // Close the modal when back is clicked
  };

  const totalAmount = formData.deliveryMethod === 'delivery' ? 30 : 0
  return (
    <>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-[800px] p-0 bg-white">
            <div className="order-form-container">
              <div className="order-form">
                {/* Back Button */}
                <div className="back-button" onClick={handleBack}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back
                </div>

                {/* Order Summary */}
                <div className="order-summary">
                  <h3>Order Summary</h3>
                  <div className="summary-details">
                    {/* <div className="summary-row">
                      <span>You Send:</span>
                      <span>{currentOrderDetails.sendAmount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: currentOrderDetails.sendCurrency
                      })}</span>
                    </div> */}
                    <div className="summary-row">
                      <span>You Receive:</span>
                      <div className='flex flex-col'>
                        {currentOrderDetails?.items?.map((item, i) => (
                          <span key={i}>
                            {/* {currentOrderDetails.receiveAmount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: currentOrderDetails.receiveCurrency
                      })} */}
                            {item?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="summary-row">
                      <span>Exchange Rate:</span>
                      <div className='flex flex-col'>
                        {currentOrderDetails?.items?.map((item, i) => (
                          <span key={i}>
                            {/* {currentOrderDetails.receiveAmount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: currentOrderDetails.receiveCurrency
                      })} */}
                            ${item?.price}
                          </span>
                        ))}
                      </div>
                      {/* <span>1 {currentOrderDetails.sendCurrency} = {currentOrderDetails && currentOrderDetails?.rate?.toFixed(4)} {currentOrderDetails.receiveCurrency}</span> */}
                    </div>
                  </div>
                </div>

                {/* Personal Details Form */}
                <form className="order-form" onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Personal Details</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Address</h3>
                    <div className="form-group">
                      <label htmfor="street">Street Address*</label>
                      <input
                        type="text"
                        name="streetAddress"
                        required
                        value={formData.streetAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmfor="city">City*</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">

                        <label htmfor="province">Province*</label>
                        <select
                          name="province"
                          required
                          value={formData.province}
                          onChange={handleChange}
                        >
                          <option value="">Select Province</option>
                          <option value="AB">Alberta</option>
                          <option value="BC">British Columbia</option>
                          <option value="MB">Manitoba</option>
                          <option value="NB">New Brunswick</option>
                          <option value="NL">Newfoundland and Labrador</option>
                          <option value="NS">Nova Scotia</option>
                          <option value="ON">Ontario</option>
                          <option value="PE">Prince Edward Island</option>
                          <option value="QC">Quebec</option>
                          <option value="SK">Saskatchewan</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmfor="postalCode">Postal Code*</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]" required placeholder="A1A 1A1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3>Delivery Method</h3>
                    <div className="delivery-options">
                      <label className="delivery-option">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="pickup"
                          checked={formData.deliveryMethod === 'pickup'}
                          onChange={handleChange}
                          required
                        />
                        <div>
                          <span className="option-title">Office Pickup (Free)</span>
                          <span className="option-description">Pick up from our office</span>
                        </div>
                      </label>
                      <label className="delivery-option">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value="delivery"
                          checked={formData.deliveryMethod === 'delivery'}
                          onChange={handleChange}
                          required
                        />
                        <div>
                          <span className="option-title">Home Delivery ($30)</span>
                          <span className="option-description">Secure delivery via Canada Post</span>
                        </div>
                      </label>
                    </div>

                    <div id="pickupLocationSection" style={{ display: formData.deliveryMethod === 'pickup' ? 'block' : 'none' }}>
                      <select
                        name="pickupLocation"
                        required
                        value={formData.pickupLocation}
                        onChange={handleChange}
                      >
                        <option value="">Select Pickup Location</option>
                        <option value="Toronto">Toronto: Dynasty Court, 5460 Yonge St Shop 105, North York, ON M2N 6K7</option>
                        <option value="Vancouver">Vancouver: 146 West 3rd Street, North Vancouver, BC V7M 1E8</option>
                      </select>
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="date"
                        id="preferredDate"
                        className='cursor-pointer'
                        name="preferredDate"
                        required
                        value={formData.preferredDate || ''}
                        onChange={handleChange}
                        onFocus={(e) => e.target.showPicker()}
                        onClick={(e) => e.target.showPicker()}
                        onKeyDown={(e) => e.preventDefault()}
                      />
                    </div>

                    {/* <!-- Total Amount Section --> */}
                    <div className="total-section">
                      <div className="total-row">
                        {/* <span>Exchange Amount:</span> */}
                        <span id="exchangeAmount">
                          {/* {currentOrderDetails.sendAmount?.toLocaleString('en-US', {
                            style: 'currency',
                            currency: currentOrderDetails.sendCurrency
                          })} */}
                        </span>
                      </div>
                      <div className="total-row" id="deliveryFeeRow">
                        <span>Delivery Fee:</span>
                        <span>${totalAmount}</span>
                      </div>
                      <div className="total-row total">
                        <span>Total Amount:</span>
                        <span id="totalAmount">
                          {/* {(currentOrderDetails.sendAmount+totalAmount).toLocaleString('en-US', {
                            style: 'currency',
                            currency: currentOrderDetails.sendCurrency
                          })} */}
                          ${currentOrderDetails?.totalAmount + totalAmount}
                        </span>
                      </div>
                    </div>

                  </div>

                  <button type="submit" className="btn border-none bg-[#28c840] w-full text-white hover:opacity-90 hover:bg-[#28c840]">Confirm Order</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderFormModal2;
