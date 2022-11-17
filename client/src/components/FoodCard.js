import React,{useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CardActionArea from '@mui/material/CardActionArea';
import CardAction from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button ,ButtonGroup} from "@mui/material";
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function FoodCard({name,price,rating,type,img}){
    const [count, setCount] = useState(1)
        return(
        <Card sx={{width:270,height:400,boxShadow:7}}>
            <CardMedia 
            component="img"
            image={img}
            alt={name}
            height={192}
            />
            <CardContent>
                <Typography variant="h5" color="#000" textAlign="center">
                    {name}
                </Typography>
                <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="button" fontSize={18} display="block">
                    ₹{price}
                </Typography>
                <CardAction sx={{display:"flex"}}>
                <ButtonGroup sx={{paddingRight:"5px"}}>
            <Button
            size="small"
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 1));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Typography variant="button" border="1px solid #1976d2" width="25px" textAlign="center" sx={{ verticalAlign: "center" }}>
              {count}
            </Typography>
            <Button
            size="small"
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
                <Button variant="contained" color="success" size="small" >
                   <ShoppingCartOutlinedIcon/>
                </Button>
                </CardAction>
                </Box>
                <Box my={3} mx={1} display="flex" justifyContent="space-between">
                    <Box display="flex" flexDirection="column">
                <Rating name="food" value={rating} readOnly precision={0.5}/>
                <Typography color="#8d8989" variant="caption" textAlign="center">
                    Ratings {rating}
                </Typography>
                </Box>
                <Chip label={type} color={(type==="Veg")?"success":"error"} variant="contained" size="small"/>
                </Box>
            </CardContent>
        </Card>
    )
}