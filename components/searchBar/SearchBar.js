import { useState } from "react";

export default function SearchBar({ artist }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2>Here is the search bar</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {artist.filter((val) => {
          if(searchTerm == ""){ 
              return val 
            } else if (val.fields.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
      }).map((val, key) => {
        // console.log(val.fields.title, "HERE IS VAL");
        return (
          <div key={key}>
            <p>{val.fields.title}</p>
          </div>
        );
      })}
    </div>
  );
}
