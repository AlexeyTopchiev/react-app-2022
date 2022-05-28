import { useState } from "react"

function Categories() {
  const categories = [
    { label: "Все", value: "All", id: 0 },
    { label: "Мясные", value: "Meat", id: 1 },
    { label: "Вегетарианская", value: "Vegetables", id: 2 },
    { label: "Гриль", value: "Grill", id: 3 },
    { label: "Острые", value: "Spicy", id: 4 },
    { label: "Закрытые", value: "Closed", id: 5 }
  ]
  const [activeCategory, setActiveCategory] = useState({
    label: "Все",
    value: "All",
    id: 0
  })

  const handleCategory = category => {
    setActiveCategory(category)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map(category => (
          <li
            className={category.id === activeCategory.id ? "active" : ""}
            key={category.id}
            onClick={() => handleCategory(category)}
          >
            {category.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
