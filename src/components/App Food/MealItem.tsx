import React from "react";
import { useNavigate } from "react-router-dom";

interface MealItemProps {
  data: any[];
}

const MealItem: React.FC<MealItemProps> = ({ data }) => {
  console.log(data);

  const navigate = useNavigate();

  return (
    <>
      {!data ? (
        "Not Found"
      ) : (
        data.map((item) => {
          return (
            <div
              className="card"
              key={item.idMeal}
              onClick={() => navigate(`/${item.idMeal}`)}
            >
              <img src={item.strMealThumb} alt="" />
              <h3>{item.strMeal}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

export default MealItem;
