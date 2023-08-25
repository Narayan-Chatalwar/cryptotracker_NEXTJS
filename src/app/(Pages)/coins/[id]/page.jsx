"use client";
import { SingleCoin } from "@/app/config/api";
import { AppState } from "@/app/Context/AppContext";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import parse from "html-react-parser";
import CoinInfo from "@/app/Components/CoinInfo";
import { LinearProgress, Typography } from "@mui/material";
import { numberWithCommas } from "@/app/Components/Carousel";
const page = ({ params }) => {
  const [coin, setCoin] = useState([]);
  const { currency, symbol } = AppState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(params.id));
    setCoin(data);
  };
  useEffect(() => {
    fetchCoin();
  }, [currency]);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* sidebar */}
        <img
          src={coin?.image?.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={styles.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={styles.description}>
          {parse(`${coin?.description?.en.split(". ")[0]}`)}.
        </Typography>
        <div className={styles.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={styles.heading}>
              Rank: &nbsp;
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={styles.heading}>
              Current Price: &nbsp;
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data?.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={styles.heading}>
              Market Cap: &nbsp;
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data?.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
            </Typography>
          </span>
        </div>
      </div>
      {/* chart */}
      <CoinInfo coin={coin} />
    </div>
  );
};

export default page;
