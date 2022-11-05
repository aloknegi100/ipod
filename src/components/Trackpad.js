function Trackpad() {
  return (
    <div style={styles.outer} className="outer">
      <h1 style={styles.b1}>
        <i class="fa-solid fa-bars"></i>
      </h1>
      <h1 style={styles.b2}>
        <i class="fa-solid fa-forward-fast"></i>
      </h1>
      <h1 style={styles.b3}>
        <i class="fa-solid fa-forward"></i> <i class="fa-solid fa-pause"></i>
      </h1>
      <h1 style={styles.b4}>
        <i class="fa-solid fa-backward-fast"></i>
      </h1>
      <div className="inner" style={styles.inner}>
        <h3>Select</h3>
      </div>
    </div>
  );
}

let styles = {
  outer: {
    height: "250px",
    width: "250px",
    borderRadius: "50%",
    position: "relative",
    backgroundColor: "white",
  },
  inner: {
    backgroundColor: "grey",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  b1: {
    position: "absolute",
    left: "44%",
    top: "1%",
    color: "grey",
  },
  b2: {
    position: "absolute",
    left: "78%",
    color: "grey",
    top: "35%",
  },
  b3: {
    position: "absolute",
    left: "38%",
    color: "grey",
    top: "66%",
  },
  b4: {
    position: "absolute",
    left: "10%",
    color: "grey",
    top: "35%",
  },
};
export default Trackpad;
