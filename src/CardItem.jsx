import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

export default function CardItem({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Link href={item.wikipedia}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
        </Link>
        <div variant="body2" color="text.secondary">
          <Typography>{item.agency}</Typography>
          <Typography>{item.status}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={LinkRouter}
          to={`/crew/${item.launches[0]}`}
        >
          Show More
        </Button>
      </CardActions>
    </Card>
  );
}
