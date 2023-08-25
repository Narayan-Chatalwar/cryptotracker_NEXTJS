import { useRouter } from "next/navigation";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import styles from "../Styles/Header.module.css";
import { AppState } from "../Context/AppContext";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";

const Header = ({ setDefault, default1s }) => {
  const router = useRouter();
  const toggleTheme = () => {
    setDefault(!default1s);
  };
  const { currency, setcurrency } = AppState();
  return (
    <AppBar color="primary" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => router.push("/")}
            className={styles.title}
            variant="h6"
          >
            Crypto Traker
          </Typography>
          {default1s ? (
            <NightlightRoundedIcon
              style={{ marginRight: "20px", cursor: "pointer" }}
              onClick={toggleTheme}
            />
          ) : (
            <LightModeRoundedIcon
              style={{ marginRight: "20px", cursor: "pointer" }}
              onClick={toggleTheme}
            />
          )}

          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setcurrency(e.target.value)}
          >
            <MenuItem value={"USD"}> USD</MenuItem>
            <MenuItem value={"INR"}> INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
