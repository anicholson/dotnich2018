import { h, Component } from "preact";
import { Writing, Bio, CV, Contact } from "../icons";
import { Link } from "react-router-dom";

//import styles from "./site_nav.module.scss";

const styles = {}

class SiteNav extends Component {
  render() {
    let s = this.props.size;
    return (
      <div className={styles.container}>
        <ul className={styles.siteNav}>
          <li>
            <Link to="/writing">
              <Writing size={s} />
            </Link>
          </li>
          <li>
            <Link to="/bio">
              <Bio size={s} />
            </Link>
          </li>
          <li>
            <Link to="/cv">
              <CV size={s} />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Contact size={s} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SiteNav;
