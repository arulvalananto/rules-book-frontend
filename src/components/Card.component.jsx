import React from "react";

const Card = ({ number, content, pinned }) => {
  return (
    <div className="p-4 m-2 w-80 max-w-4xl border-black border position relative">
      <h3 className="font-rule mb-2">
        Rule {number > 9 ? number : "0" + number}
      </h3>
      <p className="text-3xl font-content">{content}</p>
      {pinned && (
        <img
          src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-pin-office-those-icons-lineal-color-those-icons.png"
          className="position absolute top-1 right-1"
        />
      )}
    </div>
  );
};

export default Card;
