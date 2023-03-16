import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function hanldeSearch(e) {
    setSearchQuery(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => (
    selectedCategory === "All" || item.category === selectedCategory
  ))
  .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={hanldeSearch} search={searchQuery} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
