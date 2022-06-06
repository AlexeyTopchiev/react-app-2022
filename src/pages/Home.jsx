import React, { useState, useEffect } from "react"

import Categories from "../components/Categories"
import Sort from "../components/Sort"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState({
    label: "Все",
    value: "All",
    id: 0
  })
  const [activeSort, setActiveSort] = useState({
    label: "популярности ↓",
    value: "rating",
    id: 0
  })

  useEffect(() => {
    getItems()
    window.scrollTo(0, 0)
  }, [activeCategory, activeSort])

  const getItems = () => {
    setIsLoading(true)
    const category =
      activeCategory.id > 0 ? `category=${activeCategory.id}` : ""
    fetch(
      `https://6296129b810c00c1cb6e83c7.mockapi.io/items?${category}&sortBy=${activeSort.value}&order=${activeSort.order}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setIsLoading(false)
      })
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={activeCategory}
          setActiveCategory={category => setActiveCategory(category)}
        />
        <Sort value={activeSort} setActiveSort={sort => setActiveSort(sort)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </div>
  )
}

export default Home
