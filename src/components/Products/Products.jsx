import React from "react";
import { Grid } from "@material-ui/core";

import ProductItem from "./ProductItem/ProductItem";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((el, id) => (
          <Grid item key={el.id} xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={el} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
