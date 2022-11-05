function Menu() {
  return (
    <div className="menu" style={styles.menu}>
      <h2 style={{ paddingLeft: 8, textAlign: "center" }}>iPod.js</h2>
      <h3 style={styles.list}>Games</h3>
      <h3 style={styles.list}>Music</h3>
      <h3 style={styles.list}>Settings</h3>
      <h3 style={styles.list}>Coverflow</h3>
    </div>
  );
}

let styles = {
  menu: {
    backgroundColor: "lightseagreen",
    color: "white",
    width: "50%",
    height: "100%",
    boxShadow: "0 0 20px 4px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  list: {
    border: "1px solid white",
    fontSize: "20px",
    fontWeight: "400",
    height: 54,
    margin: 0,
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "ghostwhite",
    color: "black",
    textAlign: "center",
  },
};

export default Menu;
