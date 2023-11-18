import Flag from "react-world-flags";
import codeToCountry from "./CoutryCode";
import codeToCountryWithCurrencyNames from "./CurrencyName.js";
import codeToCountryNames from "./CountryName.js";

const Card = (p) => {
  const {
    name,
    amount,
    options = [],
    selected = "usd",
    onAmountChange,
    onCurrencyChange,
    disabledin = false,
  } = p;
  let flag = codeToCountry[selected.toUpperCase()];
  let currency = codeToCountryWithCurrencyNames[selected.toUpperCase()];
  return (
    <div className="inputBox">
      <h3>
        {name} {selected.toUpperCase()}
        <br />
        {currency}
        <br />
      </h3>
      <Flag
        className="Flag"
        code={flag.toLowerCase()}
        fallback={<span>Unknown</span>}
      />
      <h2>{flag}</h2>
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
            {option} {codeToCountryNames[option.toUpperCase()]}
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
