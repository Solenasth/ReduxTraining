import React from "react";
import { render } from "react-dom";
//demo, feel free to always delete
import Demo from "./containers/Demo.jsx";
//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faDiceD20);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
