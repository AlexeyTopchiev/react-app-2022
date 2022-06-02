import React, { useState, useEffect } from "react"

import Categories from "../components/Categories"
import Sort from "../components/Sort"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://6296129b810c00c1cb6e83c7.mockapi.io/items")
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </>
  )
}

export default Home
