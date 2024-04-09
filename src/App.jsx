import { Note, Card } from "./components/";
import "./App.css";
import UseInfo from "./hooks/useinfo";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import codeToCountry from "./data/CoutryCode.js";
import { setCA } from "./features/currency.js";
import { setFrom, setTo } from "./features/currency.js";

function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.currency.amount);
  const base = useSelector((state) => state.currency.base);
  const target = useSelector((state) => state.currency.target);
  const currencyInfo = UseInfo(base);
  const option = Object.keys(codeToCountry);

  const swap = () => {
    let temp = base;
    dispatch(setFrom(target));
    dispatch(setTo(temp));
  };

  const convert = () => {
    if (currencyInfo[target]) {
      let rate = currencyInfo[target];
      let result = amount * rate;
      dispatch(setCA(result));
    }
  };

  //----------------- Hooks-------------------------- //
  useEffect(convert, [amount, currencyInfo, target, base]);

  return (
    <>
      <Note />
      <div className="Box">
        <Card name="From" options={option}></Card>
        <button onClick={swap}>
          <i className="fa-solid fa-right-left"></i>
        </button>
        <Card name="To" options={option} disabledin={true}></Card>
      </div>
    </>
  );
}

export default App;
