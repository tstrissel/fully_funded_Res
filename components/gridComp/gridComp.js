import styles from "./gridComp.module.css";
import Link from "next/link";
import SearchModal from "../SearchModal/SearchModal";

import { useState } from "react";

export default function GridComp({ artist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClick = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
    console.log(isOpen, "HERE IS STATE");
  };

  return (
    <div>
      <h1>Here is the modal page</h1>

      <button onClick={() => setButtonPopup(true)}>Open Popup</button>

      <SearchModal trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>HERE I AM!</h3>
        <h2>This is my button triggered popup</h2>
      </SearchModal>

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
