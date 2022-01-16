import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards(props) {
  console.log(props.heading)
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.src}
          alt={props.alt}
        />
        <CardContent>
          <Typography sx={{textTransform:'uppercase'}} gutterBottom variant="h6" component="div">
            {props.heading}
          </Typography>
          <Typography sx={{textTransform:"capitalize"}} variant="body2" color="text.secondary">
            {props.para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
