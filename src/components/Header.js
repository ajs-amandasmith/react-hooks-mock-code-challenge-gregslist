import React from "react";
import Search from "./Search";

function Header({ handleSearchChange, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchChange={handleSearchChange} search={search} />
    </header>
  );
}

export default Header;
