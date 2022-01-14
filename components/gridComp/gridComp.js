import styles from "./gridComp.module.css";
import Link from "next/link";
import SearchModal from "../SearchModal/SearchModal";

import { useState } from "react";

export default function GridComp({ fellowship }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      /**
       * Take the form's submit event and grab the target, extend it with the input by the name of the input
       * @type {HTMLFormElement & { search: HTMLInputElement }}
       */
      const target = event.target;

      setSearchTerm(target.search.value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => setButtonPopup(true)}>Open Popup</button>

      <SearchModal trigger={buttonPopup} setTrigger={setButtonPopup}>
        <form role="searchbox" onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            id="search"
            role="search"
            placeholder="Search..."
          />
          <button type="submit">Search Button</button>
        </form>
      </SearchModal>

      {/* <button onClick={() => setToggleViewMode(!toggleViewMode)}>
        {toggleViewMode ? "grid" : "list"}
      </button> */}

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          role="search"
          placeholder="Search..."
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
