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
            <div className="field has-addons">

              <label className="label" htmlFor="dateOrg">view as:</label>
              <button className="button" onClick={() => setToggleViewMode(!toggleViewMode)}>
                {toggleViewMode ? "cards" : " list "}
              </button>
            </div>
            <div className="field has-addons">
              <label className="label" htmlFor="dateOrg">sort by:</label>
                <div className="control">
                  <div className="select">
                    <select name="dateOrg">
                      <option className="btnFont" value="deadline-approaching">deadline approaching</option>
                      <option  className="btnFont" value="recently-added">recently added</option>
                    </select>
                  </div>
                </div>
            </div>
              <button className={styles.buttonFilters} className="button" onClick={() => setButtonPopup(true)}>
                Filters:
              </button>
            <div className="field has-addons">
            <SearchModal trigger={buttonPopup} setTrigger={setButtonPopup}>
              <form className="control" role="searchbox" onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="search"
                  name="search"
                  id="search"
                  role="search"
                  placeholder="Search Opportunities....."
                />
                <button className="button is-family-secondary" type="submit">Search Button</button>
              </form>
            </SearchModal>
            </div>

          </div>
          <div className="searchBar">
            <form  className="field has-addons has-addons-right" onSubmit={handleSubmit}>
              <div className="control">
                <input
                  className="input"
                  type="search"
                  name="search"
                  id="search"
                  role="search"
                  placeholder="Search Opportunities..."
                />
              </div>
              <div>
                <button className="button is-primary"  type="submit"></button>
              </div>
            </form>
          </div>
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
                <div className="cards">
                <div className={styles.cards} key={fellowship.sys.id}>
                  <div>
                    {/* {title} */}
                    <img
                      className={styles.cardImg}
                      src={thumbnail.fields.file.url}
                    />
                    <ul>
                      <li className="title mg-small">{slug}</li>
                      <li className="title is-6 mg-small">{category}</li>
                      <li className="title is-6 mg-small">location</li>
                      <li className="title is-6 mg-small">{money}</li>
                    </ul>
                    <p className="card-content">{paragraph}</p>
                    <button className="button is-text mg-small" onClick={() => setResultPopup(true)}>
                      Read more
                    </button>
                    <button className="button is-ghost mg-small" onClick={() => setResultPopup(true)}>
                      Visit Website
                    <img src="/public/favicon.ico"/>
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
              </div>       
              );
            })}
        </ul>
      </div>
  );
}
