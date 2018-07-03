import { h, Component } from "preact";
import { Writing, Bio, CV, Contact } from "../icons";
import { Link } from "react-router-dom";

import { createComponent } from 'preact-fela';

const containerRules = _ => ({
	width: '135px',
	margin: '0 auto'
})

const navRules = _ => ({
	listStyle: 'none',
	padding: 0
})

const Container = createComponent(containerRules, 'div')
const Nav = createComponent(navRules, 'ul')

class SiteNav extends Component {
  render() {
    let s = this.props.size;
    return (
      <Container>
        <Nav>
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
        </Nav>
      </Container>
    );
  }
}

export default SiteNav;
