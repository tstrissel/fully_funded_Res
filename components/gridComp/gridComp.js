import styles from "./gridComp.module.css";
import Link from "next/link";
import SearchModal from "../SearchModal/SearchModal";

import { useState } from "react";

export default function GridComp({ fellowship }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <button onClick={() => setButtonPopup(true)}>Open Popup</button>

      <SearchModal trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form>
          <input type="text" placeholder="Search..." onChange={handleChange} />
          <button type="submit">Search Button</button>
        </form>
      </SearchModal>

      {/* <button onClick={() => setToggleViewMode(!toggleViewMode)}>
        {toggleViewMode ? "grid" : "list"}
      </button> */}

      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
        <button type="submit">Search Button</button>
      </form>

      {fellowship
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((fellowship) => {
          return (
            <ul key={fellowship.sys.id} className={styles.wrapper}>
              {fellowship.fields.title}
              <img
                src={fellowship.fields.thumbnail.fields.file.url}
                height="300px"
                width="350px"
              />
            </ul>
          );
        })}
    </div>
  );
}
