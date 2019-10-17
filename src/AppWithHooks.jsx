import React from "react";
import { render } from "react-dom";
import Demo from "./containers/Demo.jsx";
//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faDiceD20);

function AppWithHooks() {
  return <Demo />;
}

render(<AppWithHooks />, document.getElementById("root"));
