import React from "react";

import SiteNav from "../site_nav";
import Headline from "../headline";

const Homepage = props => {
  let size = 124;
  return (
    <div>
      <Headline />
      <SiteNav size={size} />
    </div>
  );
};

export default Homepage;
