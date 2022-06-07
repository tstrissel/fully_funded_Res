import styles from "./FellowshipFilters.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function SearchFilters({ onApplyFilters, isOpen, onClose }) {
  const [country, setCountry] = useState();
  const [type, setType] = useState({});
  const [eligibility, setEligibility] = useState();
  const [duration, setDuration] = useState();
  // const [fee, setFee] = useState(false);
  const [field, setField] = useState({});

  const handleApplyFilters = () => {
    onApplyFilters({
      country,
      type,
      eligibility,
      duration,
      field,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      header={
        <h3 className={styles.searchFilterTitle}>Filter open calls by</h3>
      }
    >
      <div className={styles.container}>
        <div>
          <div>
            <h1 className={styles.searchFilterSub}>Location</h1>

            {/* <label htmlFor="location" >location:</label> */}
            <select
              className={styles.selectBox}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="location"
              name="location"
            >
              <option value="">Select Country</option>
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

          <div>
            <h1 className={styles.searchFilterSub}>Type</h1>

            {["Production", "Exhibition", "Research"].map((val, index) => (
              <div key={`${val}-${index}`}>
                <input
                  type="checkbox"
                  className={styles.checkBox}
                  id={val}
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
                <label htmlFor={val}>{val}</label>
              </div>
            ))}
          </div>

          <div>
            <h1 className={styles.searchFilterSub}>Eligibility</h1>
            {/* <label htmlFor="Eligibility">Eligibility:</label> */}
            <select
              className={styles.selectBox}
              id="Eligibility"
              name="Eligibility"
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
            >
              <option value="">select criteria</option>
              <option value="elig one">elig one</option>
              <option value="elig two">elig two</option>
              <option value="elig three">elig three</option>
              <option value="elig four">elig four</option>
            </select>
          </div>

          <div>
            <h1 className={styles.searchFilterSub}>Application Fee</h1>
            <div>
              <input
                type="checkbox"
                id="Without Application Fee"
                name="Without Application Fee"
                // onChange={(e) => setFee(e.target.value)}
              />
              <label htmlFor="Without Application Fee">No Fees</label>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className={styles.searchFilterSub}>Duration</h1>
            {/* <label htmlFor="Duration">Duration:</label> */}
            <select
              className={styles.selectBox}
              id="Duration"
              name="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">select residency duration</option>
              <option value="duration one">duration one</option>
              <option value="duration two">duration two</option>
              <option value="duration three">duration three</option>
              <option value="duration four">duration four</option>
            </select>
          </div>

          <div>
            <h1 className={styles.searchFilterSub}>Field</h1>

            {[
              "Visual",
              "Multidisciplinary",
              "Curatorial",
              "Sound",
              "Literature",
              "Performance",
              "Dance",
            ].map((val, index) => (
              <div key={`${val}-${index}`}>
                <input
                  type="checkbox"
                  id={val}
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
                <label htmlFor={val}>{val}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={handleApplyFilters}>
          Search
        </button>
      </div>
    </Modal>
  );
}
