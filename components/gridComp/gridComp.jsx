import styles from "./gridComp.module.css";
import Link from "next/link";
import FellowshipFilters from "../FellowshipFilters/FellowshipFilters";
import { useState, useEffect } from "react";
import GridView from "./GridView";
import SearchIcon from "../..//public/FFR-assets/Icons/search_icon.svg";
import Image from "next/image";

export default function GridComp({ fellowship }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [sortByDeadline, setSortByDeadline] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [resultPopup, setResultPopup] = useState(false);
  // const [sortDirection, sortDirectionSet] = useState("ASC");
  const [filteredFellowships, filteredFellowshipsSet] = useState(fellowship);

  const closeFilters = () => setIsFiltersOpen(false);

  const applySearchTerm = () => {
    filteredFellowshipsSet(
      fellowship.filter((val) => {
        if (searchTerm.trim() === "") {
          return true;
        } else {
          return val.fields.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
      })
    );
  };

  const onApplyFilters = ({ country, type, eligibility, duration, field }) => {
    filteredFellowshipsSet(
      fellowship
        .filter((fellowship) => {
          return country
            ? fellowship?.fields?.location?.toLowerCase() ===
                country.toLowerCase()
            : true;
        })
        .filter((fellowship) => {
          const arrayOfValidTypes = Object.entries(type)
            .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
            .map(([fieldName]) => fieldName.toLowerCase());

          return arrayOfValidTypes.length > 0
            ? arrayOfValidTypes.includes(
                fellowship?.fields?.type?.toLowerCase()
              )
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
          const arrayOfValidFields = Object.entries(field)
            .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
            .map(([fieldName]) => fieldName.toLowerCase());

          return arrayOfValidFields.length > 0
            ? arrayOfValidFields.includes(
                fellowship?.fields?.field?.toLowerCase()
              )
            : true;
        })
        .sort((a, b) => {
          // Sorting By Deadline
          if (sortByDeadline) {
            return new Date(a.fields.deadline) - new Date(b.fields.deadline);
          }

          // Sorting By Date Added
          return new Date(a.sys.createdAt) - new Date(b.sys.createdAt);
        })
    );

    closeFilters();
  };

  // useEffect(() => {
  //   applyFilters();
  // }, [sortByDeadline]);

  return (
    <div>
      <div className={styles.searchOpt}>
        <div className={styles.searchMain}>
          <div>
            <button
              className={styles.buttonFilters}
              onClick={() => setIsFiltersOpen(true)}
            >
              Filters:
            </button>
          </div>

          <FellowshipFilters
            isOpen={isFiltersOpen}
            onClose={closeFilters}
            className={styles.searchFilter}
            onApplyFilters={onApplyFilters}
          />
          <div className={styles.searchThreeButtons}></div>

          <button
            className={styles.dropdownBtn}
            onClick={() => setSortByDeadline(!sortByDeadline)}
          >
            {sortByDeadline
              ? "Sort by: Deadline approaching"
              : "Sort by: Recently added"}
          </button>

          <button
            className={styles.toggleBtn}
            onClick={() => setToggleViewMode(!toggleViewMode)}
          >
            {toggleViewMode ? "view as: Cards" : " view as: List"}
          </button>
        </div>

        <div>
          <div className={styles.searchText}>
            <input
              className={styles.searchBar}
              type="text"
              name="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              id="search"
              role="search"
              placeholder="Search opportunities..."
            />
            <div>
              <button onClick={applySearchTerm} className={styles.searchBtn}>
                <Image
                  className={styles.btnSearchIcon}
                  src={SearchIcon}
                  alt="search"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className={styles.wrapper}>
        {filteredFellowships.map((fellowship) => {
          // console.log(fellowship.fields.deadline, "fields");
          const {
            status,
            title,
            slug,
            category,
            money,
            paragraph,
            thumbnail,
            location,
            type,
            deadline,
          } = fellowship.fields;

          if (toggleViewMode) {
            return (
              <div className={styles.cards} key={fellowship.sys.id}>
                <div>
                  <span>{title}</span>

                  <ul>
                    <li>{slug}</li>
                    <li>{category}</li>
                    <li>{location}</li>
                    <li>{money}</li>
                  </ul>
                  <p>{paragraph}</p>
                  <p>{deadline}</p>

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

          return (
            <div className={styles.cards} key={fellowship.sys.id}>
              <GridView
                status={status}
                title={title}
                slug={slug}
                category={category}
                money={money}
                paragraph={paragraph}
                thumbnail={thumbnail}
                fellowship={fellowship}
                location={location}
                type={type}
                deadline={deadline}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
