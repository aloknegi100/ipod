function Music() {
  return (
    <div className="menu" style={styles.menu}>
      <h2 style={{ paddingLeft: 8, textAlign: "center" }}>iPod.js</h2>
      <h3 style={styles.list}>All Songs</h3>
      <h3 style={styles.list}>Artists</h3>
      <h3 style={styles.list}>Albums</h3>
      <h3 style={styles.list}>
        press <i class="fa-solid fa-backward-fast"></i> to go back
      </h3>
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
    fontSize: "15px",
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

export default Music;
