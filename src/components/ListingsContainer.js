import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  const displayListings = listings.map(listing => (
    <ListingCard key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} deleteListing={deleteListing} />
  ))

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
