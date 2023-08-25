"use client";
import { Container, Typography } from "@mui/material";
import React from "react";
import styles from "../Styles/Banner.module.css";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container className={styles.bannerContent}>
        <div className={styles.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "darkgray",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
