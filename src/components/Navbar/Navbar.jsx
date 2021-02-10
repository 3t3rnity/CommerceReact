import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import shopImg from "../../assets/shopImg.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit">
          <img
            src={shopImg}
            alt="Commerce.js"
            height="25px"
            className={classes.image}
          />
          Commerce.js
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Открыть корзину" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
