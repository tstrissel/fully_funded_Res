import styles from "./gridComp.module.css";
import Link from "next/link";
import SearchModal from "../SearchModal/SearchModal";
import ResultModal from "../resultModal/ResultModal";
import { useRouter } from "next/router";
import { useState } from "react";

export default function GridComp({ fellowship }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [resultPopup, setResultPopup] = useState(false);

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

          <label htmlFor="dateOrg">sort by:</label>

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
            const { title, slug, category, money, paragraph, thumbnail } =
              fellowship.fields;

            return (
              <div className={styles.cards} key={fellowship.sys.id}>
                <div>
                  {title}
                  <img
                    src={thumbnail.fields.file.url}
                    height="300px"
                    width="350px"
                  />
                  <ul>
                    <li>{slug}</li>
                    <li>{category}</li>
                    <li>location</li>
                    <li>{money}</li>
                  </ul>
                  <p>{paragraph}</p>
                  <button onClick={() => setResultPopup(true)}>
                    Read more
                  </button>

                  <ResultModal
                    fellowship={fellowship}
                    trigger={resultPopup}
                    setTrigger={setResultPopup}
                  >
                    <img
                      src={thumbnail.fields.file.url}
                      height="300px"
                      width="350px"
                    />
                    <h1>{slug}</h1>
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p>{money}</p>
                    <p>{paragraph}</p>
                  </ResultModal>

                  {/* <p>{secondparagraph}</p> */}
                  {/* <Link href={"/fellowship/" + slug}>
                    <a>Read more</a>
                  </Link> */}
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
