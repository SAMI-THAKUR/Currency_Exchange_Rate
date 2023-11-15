import { Note, Card } from "./components/";
import "./App.css";
import UseInfo from "./hooks/useinfo";
import useName from "./hooks/useName";
import { useEffect, useState } from "react";
import codeToCountry from "./components/data";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = UseInfo(from);
  const option = Object.keys(codeToCountry);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to.toLowerCase()]);
  };

  //----------------- Hooks-------------------------- //
  useEffect(convert, [from, to, amount, currencyInfo]);
  const toMoney = useName(to);
  const fromMoney = useName(from);
  // const PastData = usePast(from, to);
  // console.log(PastData);

  return (
    <>
      <Note />
      <div className="Box">
        <Card
          name="From"
          amount={amount}
          options={option}
          selected={from}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          money={fromMoney}
        ></Card>
        <button onClick={swap}>
          <i className="fa-solid fa-right-left"></i>
        </button>
        <Card
          name="To"
          amount={convertedAmount}
          options={option}
          selected={to}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => {
            setTo(currency);
          }}
          disabledin={true}
          money={toMoney}
        ></Card>
      </div>
    </>
  );
}

export default App;
