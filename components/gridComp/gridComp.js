import styles from "./gridComp.module.css";
import Link from "next/link";
import SearchModal from "../SearchModal/SearchModal";

import { useState } from "react";

export default function GridComp({ artist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClick = (event) => {
    // isOpen === false ? setIsOpen(true) : setIsOpen(false);
    // console.log(isOpen, "HERE IS STATE");
    setSearchTerm(event.target.value);
  };

  const handleChange = (event) => {
    // setSearchTerm(event.target.value);
  };

  return (
    <div>
      <button onClick={() => setButtonPopup(true)}>Open Popup</button>

      <SearchModal trigger={buttonPopup} setTrigger={setButtonPopup}>
        {/* <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button type="submit" onClick={handleClick}>
          Search Button
        </button>
      </form> */}
      </SearchModal>

      {/* <button onClick={() => setToggleViewMode(!toggleViewMode)}>
        {toggleViewMode ? "grid" : "list"}
      </button> */}

      <form>
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <button onClick={handleClick}>Search Button</button>
      </form>

      {artist
        // .filter((val) => {
        //   if (searchTerm == "") {
        //     return val;
        //   } else if (
        //     val.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
        //   ) {
        //     return val;
        //   }
        // })
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
