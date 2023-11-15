import { useEffect } from "react";
import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2327999802msha45bc3f088a87adp1d0a78jsna49b4069d958",
    "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
  },
};

function useName(currency) {
  const [toCurrency, settoCurrency] = useState("MONEY");
  useEffect(() => {
    fetch(
      "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        settoCurrency(response["symbols"][currency.toUpperCase()]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currency]);
  return toCurrency;
}

export default useName;
