import { Fragment } from "react";
import "./App.css";
import List from "./Components/ListItem";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <List />
    </Fragment>
  );
}

export default App;
