import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      У вас еще нет товаров в корзине.
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Сумма заказа: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Очистить корзину
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Загрузка...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Ваша корзина
      </Typography>
      {!cart.line_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
