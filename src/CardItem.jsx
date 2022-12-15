import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

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
        <Typography variant="body2" color="text.secondary">
          <Typography>{item.agency}</Typography>
          <Typography>{item.status}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}
