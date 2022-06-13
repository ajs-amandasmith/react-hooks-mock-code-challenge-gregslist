import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(items => setListings(items))
  },
  []
  )

  function deleteListing(id) {
    const newListings = listings.filter(listing => listing.id !== id);
    setListings(newListings);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }
  
  return (
    <div className="app">
      <Header handleSearchChange={handleSearchChange} search={search} />
      <ListingsContainer listings={listings} deleteListing={deleteListing} search={search} />
    </div>
  );
}

export default App;


// I can search for listings by their name.


// Advanced Deliverables
// These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

// You'll have to add additional elements for these features. Feel free to style them however you see fit!

// Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

// As a user:

// I can sort the listings alphabetically by location.
// I can create a new listing by submitting a form, and persist the changes to the backend.