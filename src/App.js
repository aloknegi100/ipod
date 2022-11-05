import Menu from "./components/Menu";
import Games from "./components/Games";
import Music from "./components/Music";
import Settings from "./components/Settings";
import Coverflow from "./components/Coverflow";
import Trackpad from "./components/Trackpad";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      option: 3,
    };
  }

  render() {
    return (
      <div className="App" style={styles.app}>
        <div className="ipod" style={styles.ipod}>
          <div className="screen" style={styles.screen}>
            {this.state.option == 1 && <Menu />}
            {this.state.option == 2 && <Games />}
            {this.state.option == 3 && <Music />}
            {this.state.option == 4 && <Settings />}
            {this.state.option == 5 && <Coverflow />}
          </div>
          <div className="buttons" style={styles.buttons}>
            <Trackpad />
          </div>
        </div>
      </div>
    );
  }
}

let styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background:
      "url(https://img.freepik.com/free-photo/abstract-gradient-neon-lights_23-2149279092.jpg?size=338&ext=jpg&uid=R82994112)",
    backgroundSize: "cover",
  },
  ipod: {
    border: "1px solid black",
    width: "350px",
    height: 600,
    borderRadius: 23,
    boxShadow: "0 0 10px 4px ",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background:
      "url(https://img.freepik.com/free-photo/grey-geometrical-shapes-background_23-2148811539.jpg?w=1380&t=st=1667572110~exp=1667572710~hmac=13490ecd1bcbefe0c5ab364e214a7c284256c86b0776d91ebc02c62cde2cfe86)",
  },
  screen: {
    width: "95%",
    height: "50%",
    overflow: "hidden",
    display: "flex",
    borderRadius: 10,
    background:
      "url(https://img.freepik.com/premium-photo/abstract-background-soma-cube-puzzle-pattern-3d-rendering_118019-1817.jpg?size=626&ext=jpg&uid=R82994112)",
  },
  buttons: {
    width: "100%",
    height: "48%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default App;
