import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";


const Meal = () => {
  const [search, setSearch] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [item, setItem] = useState<any>("");
  const [url, setUrl] = useState<string>(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha: string) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };



   const searchRecipe=(evt: React.KeyboardEvent<HTMLInputElement>)=>{
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }


  return (
    <div className="main">
      <div className="heading">
        <h1>&#9995;Hey food lovers!</h1>
        <h4>Search your food recipe here!</h4>
      </div>
      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchRecipe}
        />
      </div>

      <div className="container">
        {show ? <MealItem data={item} /> : "Not Found"}
      </div>

      <div className="indexContainer">
        <RecipeIndex alphaIndex={(alpha: string) => setIndex(alpha)} />
      </div>
    </div>
  );
};

export default Meal;

