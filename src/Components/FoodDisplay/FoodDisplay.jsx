import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({catogary}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <h1 className='not-yet'>Food items is Loading from MongoDB cloud which is not set in hosting!!</h1>
        <div className="food-display-list">
            {food_list.map((item, index)=>{

              if(catogary==="All" || catogary==item.category){

                return <FoodItem key={index} 
                                 id={item._id} 
                                 name={item.name} 
                                 description={item.description} 
                                 price={item.price} 
                                 image={item.image}
                                 />
              }

                

            })}
        </div>
    </div>
  )
}

export default FoodDisplay;
