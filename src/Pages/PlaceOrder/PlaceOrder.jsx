import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const {getTotalCartAmount, token, food_list, cartItems,url} = useContext(StoreContext)

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault();
    let ordersItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        ordersItems.push(itemInfo)

        console.log(ordersItems);
      }
    })
    let orderData = {
      address:data,
      items:ordersItems,
      amount:getTotalCartAmount()+2,
    }
    
    console.log(orderData);
    let response = await axios.post(url+"/api/order/place",orderData, {headers:{token}})
    console.log(response)
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Errorrrrrrrrrr")
    }
  }

  return (
   <form onSubmit={placeOrder} className='place-order' action="">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First-Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last-Name' />
        </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Emali address'/>
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Streen name'/>
              <div className="multi-fields">
                  <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City name' />
                  <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State name' />
              </div>
              <div className="multi-fields">
                  <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip-Code' />
                  <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
              </div>
              <input required name='phone' onChange={onChangeHandler} value={data.phone} type="phone-number" placeholder='Phone Number' />
      </div>
      <div className="palce-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                {console.log(getTotalCartAmount)}
                <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>Proceed to Payment</button>
        </div>
      </div>
   </form>
  )
}

export default PlaceOrder
