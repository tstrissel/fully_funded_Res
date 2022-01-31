import styles from "./gridComp.module.css";
import Link from "next/link";
import SearchFilter from "../SearchFilter/SearchFilter";

import { useState } from "react";
import GridView from "./GridView";
import SearchIcon from "../..//public/FFR-assets/Icons/search_icon.svg";
import Image from "next/image";

export default function GridComp({ fellowship }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [toggleSorted, setToggleSorted] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [resultPopup, setResultPopup] = useState(false);
  const [country, setCountry] = useState();
  const [type, setType] = useState(false);
  const [eligibility, setEligibility] = useState();
  const [duration, setDuration] = useState();
  const [fee, setFee] = useState(false);
  const [field, setField] = useState();

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
          <div>
            <button
              className={styles.buttonFilters}
              onClick={() => setButtonPopup(true)}
            >
              Filters:
            </button>
          </div>

          <SearchFilter trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              <h1 className="label">Filter open calls by</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <h1>location</h1>
                <label htmlFor="location">location:</label>
                <select
                  className="select"
                  onChange={(e) => setCountry(e.target.value)}
                  id="location"
                  name="location"
                >
                  <option isdisabled="true">select country</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>

                  <option value="India">India</option>
                  <option value="England">England</option>
                </select>
              </div>
              <div>
                <h1>type</h1>
                <input
                  type="checkbox"
                  id="production"
                  name="production"
                  onChange={(e) => setType("Production")}
                />
                <label htmlFor="production">production</label>
                <input
                  type="checkbox"
                  id="Exhibition"
                  name="Exhibition"
                  onChange={(e) => setType("Exhibition")}
                />
                <label htmlFor="Exhibition">Exhibition</label>
                <input
                  type="checkbox"
                  id="Research"
                  name="Research"
                  onChange={(e) => setType("Research")}
                />
                <label htmlFor="Research">Research</label>
              </div>

              <div>
                <h1>Eligibility</h1>
                <label htmlFor="Eligibility">Eligibility:</label>
                <select
                  id="Eligibility"
                  name="Eligibility"
                  onChange={(e) => setEligibility(e.target.value)}
                >
                  <option isdisabled="true">select criteria</option>
                  <option value="elig one">elig one</option>
                  <option value="elig two">elig two</option>
                  <option value="elig three">elig three</option>
                  <option value="elig four">elig four</option>
                </select>
              </div>

              <div>
                <h1>Application Fee</h1>
                <input
                  type="checkbox"
                  id="Without Application Fee"
                  name="Without Application Fee"
                  // onChange={(e) => setFee(e.target.value)}
                />
                <label htmlFor="Without Application Fee">
                  Without Application Fee
                </label>
              </div>

              <div>
                <h1>Duration</h1>
                <label htmlFor="Duration">Duration:</label>
                <select
                  id="Duration"
                  name="Duration"
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option isdisabled="true">select residency duration</option>
                  <option value="duration one">duration one</option>
                  <option value="duration two">duration two</option>
                  <option value="duration three">duration three</option>
                  <option value="duration four">duration four</option>
                </select>
              </div>

              <div>
                <h1>Field</h1>
                <input
                  type="checkbox"
                  id="Visual"
                  name="Visual"
                  onChange={(e) => setField("Visual")}
                />
                <label htmlFor="Visual">Visual</label>
                <input
                  type="checkbox"
                  id="Multidisciplinary"
                  name="Multidisciplinary"
                  onChange={(e) => setField("Multidisciplinary")}
                />
                <label htmlFor="Multidisciplinary">Multidisciplinary</label>
                <input
                  type="checkbox"
                  id="Curatorial"
                  name="Curatorial"
                  onChange={(e) => setField("Curatorial")}
                />
                <label htmlFor="Curatorial">Curatorial</label>
                <input
                  type="checkbox"
                  id="Sound"
                  name="Sound"
                  onChange={(e) => setField("Sound")}
                />
                <label htmlFor="Sound">Sound</label>
                <input
                  type="checkbox"
                  id="Literature"
                  name="Literature"
                  onChange={(e) => setField("Literature")}
                />
                <label htmlFor="Literature">Literature</label>
                <input
                  type="checkbox"
                  id="Performance"
                  name="Performance"
                  onChange={(e) => setField("Performance")}
                />
                <label htmlFor="Performance">Performance</label>
                <input
                  type="checkbox"
                  id="Dance"
                  name="Dance"
                  onChange={(e) => setField("Dance")}
                />
                <label htmlFor="Dance">Dance</label>
              </div>

              <button type="submit"> Search </button>
            </form>
          </SearchFilter>
          {/* 
          <div>
            <div>
              <select className={styles.dropdownBtn} name="dateOrg">
                <label className="label" htmlFor="dateOrg">
                  sort by:
                </label>
                <option value="deadline-approaching">
                  Sort by: Deadline approaching
                </option>
                <option value="recently-added">Sort by: Recently added</option>
              </select>
            </div>
          </div> */}
          <button
            className={styles.dropdownBtn}
            onClick={() => setToggleSorted(!toggleSorted)}
          >
            {toggleSorted
              ? "Sort by: Deadline approaching"
              : " Sort by: Recently added"}
          </button>

          <button
            className={styles.toggleBtn}
            onClick={() => setToggleViewMode(!toggleViewMode)}
          >
            {toggleViewMode ? "view as: Cards" : " view as: List"}
          </button>
        </div>
        <div>
          <form className="is-align-content-end" onSubmit={handleSubmit}>
            <div className="control is-flex has-addons">
              <input
                className={styles.searchBar}
                type="search"
                name="search"
                id="search"
                role="search"
                placeholder="Search Opportunities....."
              />
              <div>
                <button className={styles.searchBtn} type="submit">
                  <Image
                    className={styles.btnSearchIcon}
                    src={SearchIcon}
                    alt="search"
                  ></Image>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ul className={styles.wrapper}>
        {fellowship
          .filter((val) => {
            if (searchTerm == "") {
              return true;
            } else {
              return val.fields.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            }
          })
          .filter((fellowship) => {
            return country
              ? fellowship?.fields?.location?.toLowerCase() ===
                  country.toLowerCase()
              : true;
          })
          .filter((fellowship) => {
            return type
              ? fellowship?.fields?.type?.toLowerCase() === type.toLowerCase()
              : true;
          })
          .filter((fellowship) => {
            return eligibility
              ? fellowship?.fields?.eligibility?.toLowerCase() ===
                  eligibility.toLowerCase()
              : true;
          })
          .filter((fellowship) => {
            return duration
              ? fellowship?.fields?.duration?.toLowerCase() ===
                  duration.toLowerCase()
              : true;
          })
          .filter((fellowship) => {
            return field
              ? fellowship?.fields?.field?.toLowerCase() === field.toLowerCase()
              : true;
          })

          .map((fellowship) => {
            const timeStamp = fellowship.sys.createdAt;

            const {
              title,
              slug,
              category,
              money,
              paragraph,
              thumbnail,
              location,
              type,
            } = fellowship.fields;

            // if (toggleSorted === true) {
            //   timeStamp.sort((a, b) => {
            //     if (toggleSorted === true) {
            //       return a - b;
            //     } else {
            //       // create deadline time
            //       // sort by deadline time
            //     }
            //   });
            // }

            console.log(timeStamp, "togglesorted");

            if (toggleViewMode === false) {
              return (
                <div className={styles.cards} key={fellowship.sys.id}>
                  <GridView
                    title={title}
                    slug={slug}
                    category={category}
                    money={money}
                    paragraph={paragraph}
                    thumbnail={thumbnail}
                    fellowship={fellowship}
                    location={location}
                    type={type}
                    timeStamp={timeStamp}
                  />
                </div>
              );
            } else if (toggleViewMode === true) {
              //list view
              return (
                <div className={styles.cards} key={fellowship.sys.id}>
                  <div>
                    {title}

                    <ul>
                      <li>{slug}</li>
                      <li>{category}</li>
                      <li>location</li>
                      <li>{money}</li>
                    </ul>
                    <p>{paragraph}</p>
                    <p>{timeStamp}</p>

                    <button
                      className="button is-text has-text-weight-bold"
                      onClick={() => setResultPopup(true)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              );
            }
          })}
      </ul>
    </div>
  );
}
