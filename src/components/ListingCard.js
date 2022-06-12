import React, { useState } from "react";

function ListingCard({ id, description, image="https://via.placeholder.com/300x300", location, deleteListing }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleClick(e) {
    setIsLiked(!isLiked);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => deleteListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
