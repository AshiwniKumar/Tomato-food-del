import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({catogary, setCatogary}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu!</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectabe array of dishes crafted with the finest ingridients and culinary expertise.Our mission is to satisfy your cravings and rlrvated your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">

        {menu_list.map((item, index)=>{
            return(
                <div onClick={()=>setCatogary(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={catogary===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
