import Flag from "react-world-flags";
import codeToCountry from "./data";

const Card = (p) => {
  const {
    name,
    amount,
    options = [],
    selected = "usd",
    onAmountChange,
    onCurrencyChange,
    disabledin = false,
    money,
  } = p;
  let flag = codeToCountry[selected.toUpperCase()];
  return (
    <div className="inputBox">
      <h3>
        {name} {selected.toUpperCase()}
        <br />
        {money}
        <br />
      </h3>
      <h2>{flag}</h2>
      <Flag
        className="Flag"
        code={flag.toLowerCase()}
        fallback={<span>Unknown</span>}
      />
      <select
        name="currency"
        id=""
        value={selected}
        onChange={(e) => {
          onCurrencyChange && onCurrencyChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
      <input
        min={0}
        step={0.25}
        disabled={disabledin}
        type="number"
        name=""
        id="amnt"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => {
          onAmountChange && onAmountChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Card;
