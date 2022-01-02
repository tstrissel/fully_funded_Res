import styles from "./gridComp.module.css";
import Link from "next/link";
import { useState } from "react";

export default function GridComp({ artist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
    console.log(isOpen, "HERE IS STATE");
  };

  return (
    <div>
      <button onClick={() => setToggleViewMode(!toggleViewMode)}>
        {toggleViewMode ? "grid" : "list"}
      </button>

      <button onClick={handleClick}>Filter Button</button>
      <h2>Here is the search bar</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {artist
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((artist) => {
          return (
            <ul key={artist.sys.id} className={styles.wrapper}>
              {artist.fields.title}
              <img
                src={artist.fields.thumbnail.fields.file.url}
                height="300px"
                width="350px"
              />
            </ul>
          );
        })}
    </div>
  );
}
