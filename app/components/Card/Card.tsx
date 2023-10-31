"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import {
  Card as MUICard,
  CardActionArea,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";
import styles from "./card.module.css";

const Card = ({ data, index }) => {
  const [isChecked, setIsChecked] = useState(false);

  let icon;

  if (index === 0 || index === 1) {
    icon = `#${index + 1}`;
  } else if (index % 3 === 0 && index % 5 === 0) {
    icon = `😍`;
  } else if (index % 3 === 0) {
    icon = `👍`;
  } else if (index % 5 === 0) {
    icon = `💖`;
  } else {
    icon = `#${index + 1}`;
  }

  return (
    <MUICard
      sx={{ maxWidth: "100%", maxHeight: "400px" }}
      variant="outlined"
    >
      <CardActionArea onClick={() => setIsChecked(!isChecked)}>
        <CardMedia
          component="img"
          height="200"
          image={`https://bakery-3c739d39.digi.loikka.dev${data.image}`}
          alt={data.name}
        />
        <CardContent>
          <div className={styles.nameContainer}>
            <h3>{data.name}</h3>
            {isChecked && <div className={styles.checked}>✓</div>}
          </div>
          <div className={styles.description}>{data.description}</div>
          <Rating
            name="read-only"
            value={data.rating}
            readOnly
          />
          <div className={styles.amount}>
            {data.amount}
            {data.currency === "eur" ? " €" : " ?"}
          </div>
          <div className={styles.icon}>{icon}</div>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default Card;
