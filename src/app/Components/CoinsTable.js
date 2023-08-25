import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { AppState } from "../Context/AppContext";
import axios from "axios";
import styles from "../Styles/CoinsTable.module.css";
import {
  Container,
  createTheme,
  LinearProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { palette } from "@mui/system";
import { Tab } from "@mui/base";
import { useRouter } from "next/navigation";
import { numberWithCommas } from "./Carousel";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { currency, symbol } = AppState();
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
      type: "dark",
    },
  });

  useEffect(() => {
    fetchCoins();
  }, [currency, page]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{ margin: 18, fontFamily: "Montserrat" }}
          >
            Cryptocurrency Prices by Market Cap
          </Typography>
          <TextField
            label="Search For a Crypto Currency.."
            variant="outlined"
            styles={{ marginBottom: 20, width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TableContainer>
            {loading ? (
              <LinearProgress style={{ backgroundColor: "gold" }} />
            ) : (
              <>
                <Table>
                  <TableHead style={{ backgroundColor: "#EEBC!D" }}>
                    <TableRow>
                      {["Coin", "Price", "24h Change", "Market Cap"].map(
                        (head) => (
                          <TableCell
                            style={{
                              color: "black",
                              fontWeight: "700",
                              fontFamily: "Montserrat",
                            }}
                            key={head}
                            align={head === "Coin" ? "" : "right"}
                          >
                            {head}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {handleSearch()
                      .slice((page - 1) * 10, (page - 1) * 10 + 10)
                      .map((row) => {
                        const profit = row.price_change_percentage_24h > 0;
                        return (
                          <TableRow
                            onClick={() => router.push(`/coins/${row.id}`)}
                            className={styles.row}
                            key={row.name}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{
                                display: "flex",
                                gap: 15,
                                color: "white",
                              }}
                            >
                              <img
                                src={row?.image}
                                alt={row.name}
                                height="50"
                                style={{ marginBottom: 10 }}
                              />
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span
                                  style={{
                                    textTransform: "uppercase",
                                    fontSize: 22,
                                  }}
                                >
                                  {row.symbol}
                                </span>
                                <span style={{ color: "darkgray" }}>
                                  {row.name}
                                </span>
                              </div>
                            </TableCell>

                            <TableCell align="right" style={{ color: "white" }}>
                              {symbol}
                              {numberWithCommas(row.current_price.toFixed(2))}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                color: profit > 0 ? "rgb(14, 203, 129" : "red",
                                fontWeight: 500,
                              }}
                            >
                              {profit && "+"}
                              {row.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                            <TableCell align="right" style={{ color: "white" }}>
                              {symbol}
                              {numberWithCommas(
                                row.market_cap.toString().slice(0, -6)
                              )}
                              M
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </>
            )}
          </TableContainer>
          <Pagination
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              color: "gold",
            }}
            className={styles.pagination}
            count={(handleSearch()?.length / 10).toFixed(0)}
            onChange={(e) => setPage(e.target.value)}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default CoinsTable;
