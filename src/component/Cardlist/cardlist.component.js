import React from "react";
import Card from "../card/card.component";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            name={robots[i].name}
            id={robots[i].id}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
