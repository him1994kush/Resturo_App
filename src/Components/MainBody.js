import React, { useState, useEffect } from "react";
import Card from "./card";

function MainBody() {
  const [foodData, setFoodData] = useState();

  const param = {
    api_key: "Igw1B1NLO6aIiK1Jvz7ihEgLon6XYBmThFShQDML",
    query: "cheese",
    page_size: 2,
  };

  const food_info = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${param.query}&pageSize=${param.page_size}&api_key=${param.api_key}`;

  useEffect(() => {
    fetch(food_info)
      .then((res) => res.json())
      .then((data) =>
        setFoodData(data)
      );
  }, []);
  console.log(foodData);

 

  return (
    <div className="bg-green pt-12">
      <Card />
    </div>
  );
}

export default MainBody;
