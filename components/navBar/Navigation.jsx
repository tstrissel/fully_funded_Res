import Navlinks from "./NavLinks"
import styles from "../navBar/NavBar.module.css";


const Navigation = () => {
    return (
          <nav className={styles.Navigation}>
            <Navlinks />
        </nav>
        
     );
}
 
export default Navigation;