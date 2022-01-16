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
      <div className={styles.searchOpt}>
        <div className={styles.searchMain}>
          <button onClick={() => setButtonPopup(true)}>Filters:</button>

          <SearchModal trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form role="searchbox" onSubmit={handleSubmit}>
              <input
                type="search"
                name="search"
                id="search"
                role="search"
                placeholder="Search Opportunities....."
              />
              <button type="submit">Search Button</button>
            </form>
          </SearchModal>

          <label for="dateOrg">sort by:</label>

          <select name="dateOrg">
            <option value="deadline-approaching">deadline approaching</option>
            <option value="recently-added">recently added</option>
          </select>

          <button onClick={() => setToggleViewMode(!toggleViewMode)}>
            {toggleViewMode ? "grid" : "list"}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            id="search"
            role="search"
            placeholder="Search Opportunities....."
          />
          <button type="submit">Search Button</button>
        </form>
      </div>

      <ul className={styles.wrapper}>
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
              <div className={styles.cards} key={fellowship.sys.id}>
                <div>
                  {fellowship.fields.title}
                  <img
                    src={fellowship.fields.thumbnail.fields.file.url}
                    height="300px"
                    width="350px"
                  />
                  <ul>
                    <li>{fellowship.fields.category}</li>
                    <li>location</li>
                    <li>{fellowship.fields.money}</li>
                  </ul>
                  <p>{fellowship.fields.paragraph}</p>
                  {/* <p>{fellowship.fields.secondparagraph}</p> */}
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
