import React from "react";

export const Searchbox = ({searchChange}) => {
  return (
    <div className="p2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Monster"
        style={{borderRadius:'40px' , border:'none', outline:'none'}}
        onChange ={searchChange}
      />
    </div>
  );
};
