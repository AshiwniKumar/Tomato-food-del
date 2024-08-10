import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'

const Home = () => {

    const [catogary, setCatogary] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu catogary={catogary} setCatogary={setCatogary}/>
      <FoodDisplay catogary={catogary}/>
     
    </div>
  )
}

export default Home
