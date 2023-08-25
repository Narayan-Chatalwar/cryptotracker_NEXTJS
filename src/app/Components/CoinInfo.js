import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { AppState } from "../Context/AppContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();

  const [data, setDate] = useState([1, 2, 3]);
  const [value, setValue] = useState([1, 2, 3]);

  const [days, setDays] = useState(1);

  const { currency, symbol } = AppState();

  const fetchHistoricalData = async () => {
    console.log(".........calling...");
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    const date = data.prices?.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleString();
    });

    const value = data.prices?.map((coin) => Number(coin[1]));

    setDate(date);
    setValue(value);
    console.log({ date, value });
    setHistoricalData(data.prices);
  };
  useEffect(() => {
    console.log(".........calling prev...");

    fetchHistoricalData();
  }, [currency, days]);

  return (
    <div>
      {/* <LineChart
        xAxis={[
          {
            data: data,
          },
        ]}
        series={[
          {
            data: value,
          },
        ]}
        width={500}
        height={500}
      /> */}

      <LineChart
        width={1200}
        height={500}
        series={[{ data: value, label: `${coin.id}`, id: "coinId" }]}
        xAxis={[{ scaleType: "point", data: data }]}
        // sx={{
        //   ".MuiLineElement-root, .MuiMarkElement-root": {
        //     strokeWidth: 1,
        //   },
        //   ".MuiLineElement-series-pvId": {
        //     strokeDasharray: "5 5",
        //   },
        //   ".MuiLineElement-series-uvId": {
        //     strokeDasharray: "3 4 5 2",
        //   },
        //   ".MuiMarkElement-root:not(.MuiMarkElement-highlighted)": {
        //     fill: "#fff",
        //   },
        //   "& .MuiMarkElement-highlighted": {
        //     stroke: "none",
        //   },
        // }}
      />
    </div>
  );
};

export default CoinInfo;
