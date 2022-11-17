import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardImg({name,url}) {
  return (
    <Card sx={{ width: 320 , height: 200, position:'relative'}} >
      <CardMedia
        component="img"
        height="100%"
        image={url}
        alt={name}
        sx={{position: "absolute",
        top: 0,
        right: 0,width: '100%'}}
      />
      <CardContent sx={{position: "relative",backgroundColor:'rgba(0,0,0,.24)',width:'100%', height:"100%",display:'flex', alignItems:'center', justifyContent:'center', padding: 0}} >
        <Typography variant='h3' color='white' >
            {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
