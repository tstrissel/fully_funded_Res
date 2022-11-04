import styles from "./Filters.module.css";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import cx from "clsx";

export default function Filters({ onApplyFilters, onClear, isOpen, onClose }) {
  const [country, setCountry] = useState();
  const [type, setType] = useState({});
  const [eligibility, setEligibility] = useState();
  const [duration, setDuration] = useState();
  const [noFees, setNoFees] = useState(false);
  const [field, setField] = useState({});

  // Uncomment to apply filters on each change:
  // useEffect(() => {
  //   handleApplyFilters();
  // }, [country, type, eligibility, duration, field, noFees]);

  const handleApplyFilters = () => {
    onApplyFilters({
      type,
      field,
      noFees,
      country,
      duration,
      eligibility,
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={<h2 className={styles.filtersHeader}>Filter open calls by</h2>}
    >
      <div className={styles.container}>
        <div>
          <div className={styles.field}>
            <label className={styles.filterLabel} htmlFor="filter-location">
              Location
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="filter-location"
              name="location"
              className={cx(styles.selectInput, !country && styles.unselected)}
            >
              <option value="">Select country &nbsp;</option>
              {[
                "France",
                "Germany",
                "India",
                "England",
                "Australia",
                "New Zealand",
                "Tonga",
                "America",
              ].map((datum) => (
                <option key={datum} value={datum}>
                  {datum}
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <div className={styles.field}>
              <legend className={styles.filterLabel}>Type</legend>

              {["Production", "Exhibition", "Research"].map((val) => (
                <label key={val} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={val}
                    name="type"
                    checked={type[val]}
                    onChange={(event) =>
                      setType((prev) => ({
                        ...prev,
                        [val]: event.target.checked,
                      }))
                    }
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.field}>
            <label
              htmlFor={"filter-eligibility"}
              className={styles.filterLabel}
            >
              Eligibility
            </label>
            {/* <label htmlFor="Eligibility">Eligibility:</label> */}
            <select
              className={cx(
                styles.selectInput,
                !eligibility && styles.unselected
              )}
              id="filter-eligibility"
              name="Eligibility"
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
            >
              <option value="">Select criteria &nbsp;</option>
              <option value="elig one">elig one</option>
              <option value="elig two">elig two</option>
              <option value="elig three">elig three</option>
              <option value="elig four">elig four</option>
            </select>
          </div>

          <div className={styles.field} htmlFor={"filter-fee"}>
            <span className={styles.filterLabel}>Application Fee</span>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                value={noFees}
                name="No Fees"
                checked={noFees}
                onChange={(event) => setNoFees(event.target.checked)}
                id="filter-fee"
              />
              <span>No Fees</span>
            </label>
          </div>
        </div>

        <div>
          <div className={styles.field}>
            <label htmlFor={"filter-duration"} className={styles.filterLabel}>
              Duration
            </label>
            {/* <label htmlFor="Duration">Duration:</label> */}
            <select
              className={cx(styles.selectInput, !duration && styles.unselected)}
              id="filter-duration"
              name="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">Select residency duration &nbsp;</option>
              <option value="duration one">duration one</option>
              <option value="duration two">duration two</option>
              <option value="duration three">duration three</option>
              <option value="duration four">duration four</option>
            </select>
          </div>

          <fieldset>
            <div className={styles.field}>
              <legend className={styles.filterLabel}>Field</legend>

              {[
                "Visual",
                "Multidisciplinary",
                "Curatorial",
                "Sound",
                "Literature",
                "Performance",
                "Dance",
              ].map((val) => (
                <label key={val} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={val}
                    name="field"
                    checked={field[val]}
                    onChange={(event) =>
                      setField((prev) => ({
                        ...prev,
                        [val]: event.target.checked,
                      }))
                    }
                  />
                  <span>{val}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.cancelBtn} onClick={onClear}>
          Reset
        </button>
        <button className={styles.confirmBtn} onClick={handleApplyFilters}>
          Search
        </button>
      </div>
    </Modal>
  );
}
