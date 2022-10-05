import { useState } from "react";
import Header from "./Components/Header";
import Left from "./Components/Left";
import Article from "./Components/Article";
import Right from "./Components/Right";
import Footer from "./Components/Footer";
import plus from "./Icons/plus.png";
import minus from "./Icons/minus.png";
import "./App.css";

function PlusMinus(props) {
  const handleIcons = function (e) {
    const sign = e.target.className;

    if (!sign) return;

    if (sign === "plus") {
      props.handle({ section: props.section, value: 1 });
    } else {
      props.handle({ section: props.section, value: -1 });
    }
  };

  return (
    <>
      <img
        src={plus}
        alt="plus"
        className="plus"
        onClick={(e) => handleIcons(e)}
      />
      <img
        src={minus}
        alt="minus"
        className="minus"
        onClick={(e) => handleIcons(e)}
      />
    </>
  );
}

function Data(props) {
  return (
    <div>
      Header: {props.data.header}, Left: {props.data.left}, Article:{" "}
      {props.data.article}, Right: {props.data.right}, Footer:{" "}
      {props.data.footer}
    </div>
  );
}

function App() {
  const [data, setData] = useState({
    header: 0,
    left: 0,
    article: 0,
    right: 0,
    footer: 0,
  });

  const handleData = function (clickedIcon) {
    const { section, value } = clickedIcon;
    const updatedValue = data[`${section}`] + value;
    const updatedData = { [section]: updatedValue };
    setData({ ...data, ...updatedData });
  };

  return (
    <div className="App">
      <Header data={data} handle={handleData} />
      <Left data={data} handle={handleData} />
      <Article data={data} handle={handleData} />
      <Right data={data} handle={handleData} />
      <Footer data={data} handle={handleData} />
    </div>
  );
}

export { App, Data, PlusMinus };
