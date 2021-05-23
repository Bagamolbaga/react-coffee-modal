import React from "react";
import { Context } from "./context";

import './styles.sass'

import Header from "./components/Header.jsx";
import MilkOptions from "./components/MilkOptions.jsx";
import SyroupOptions from "./components/SyroupOptions.jsx";
import ChocoladeOptions from "./components/ChocoladeOptions.jsx";
import TotalSum from "./components/TotalSum.jsx";

export default function App() {
  let [count, setCount] = React.useState(1);

  let [cartSum, setCartSum] = React.useState(125);

  let [milkOptions, setMilkOptions] = React.useState([
    { id: 0, tittle: "Full milk", price: 0, checked: false },
    { id: 1, tittle: "Skim milk", price: 0, checked: false },
    { id: 2, tittle: "Soy milk", price: 20, checked: false }
  ]);

  let [syroupOptions, setSyroupOptions] = React.useState([
    { id: 0, tittle: "Nutty", price: 10, checked: false },
    { id: 1, tittle: "Charry", price: 10, checked: false },
    { id: 2, tittle: "Chcolate", price: 10, checked: false }
  ]);

  let [chocoladeOptions, setChocoladeOptions] = React.useState([
    { id: 0, tittle: "Toblerone", price: 70, checked: false },
    { id: 1, tittle: "Patchi", price: 60, checked: false },
    { id: 2, tittle: "Spartak", price: 40, checked: false }
  ]);

  React.useEffect(() => {
    let getSum = () => {
      let mSum = milkOptions.filter((item) => item.checked);
      let sSum = syroupOptions.filter((item) => item.checked);
      let cSum = chocoladeOptions.filter((item) => item.checked);

      let mEl = mSum.length !== 0 ? mSum[0].price : 0;
      let sEl = sSum.length !== 0 ? sSum[0].price : 0;
      let cEl = cSum.length !== 0 ? 0 : 0;

      cSum.forEach((item) => {
        cEl += item.price;
      });

      let SUM = 125;

      setCartSum(SUM + mEl + sEl + cEl);
    };

    getSum();
  }, [milkOptions, syroupOptions, chocoladeOptions]);

  let radioButtonsHandler = (event, id) => {
    if (event.target.name === "milk") {
      setMilkOptions(
        milkOptions.map((item) => {
          if (item.id === id) {
            item.checked = true;
          } else {
            item.checked = false;
          }
          return item;
        })
      );
    } else if (event.target.name === "syroup") {
      setSyroupOptions(
        syroupOptions.map((item) => {
          if (item.id === id) {
            item.checked = true;
          } else {
            item.checked = false;
          }
          return item;
        })
      );
    } else if (event.target.name === "chocolade") {
      setChocoladeOptions(
        chocoladeOptions.map((item) => {
          if (item.id === id && item.checked === false) {
            item.checked = true;
          } else if (item.id === id && item.checked === true) {
            item.checked = false;
          }
          return item;
        })
      );
    }
  };

  let resetHandler = (event) => {
    if (event.target.getAttribute("name") === "s") {
      setSyroupOptions(
        syroupOptions.map((item) => {
          item.checked = false;
          return item;
        })
      );
    } else if (event.target.getAttribute("name") === "c") {
      setChocoladeOptions(
        chocoladeOptions.map((item) => {
          item.checked = false;
          return item;
        })
      );
    }
  };

  let countHandler = (event) => {
    if (event.target.name === "minus" && count > 1) {
      setCount(count - 1);
    } else if (event.target.name === "plus" && count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <Context.Provider
      value={{
        count,
        cartSum,
        countHandler,
        milkOptions,
        syroupOptions,
        chocoladeOptions,
        resetHandler,
        radioButtonsHandler
      }}
    >
      <div className="container">
        <Header />
        <MilkOptions />
        <SyroupOptions />
        <ChocoladeOptions />
        <TotalSum />
      </div>
    </Context.Provider>
  );
}
