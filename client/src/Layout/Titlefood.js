import React from "react";
import CardImg from '../components/CardImg'
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import FoodCard from '../components/FoodCard';

const items = [
    {
        name: "Biryani",
        imgUrl: "https://i.ytimg.com/vi/iViltPEETNg/maxresdefault.jpg"
    },
    {
        name: "Ice Cream",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg"
    },
    {
        name: "Veg Meal",
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/d577ltb6wzboags2yuht"
    },
    {
        name: "Snacks",
        imgUrl: "https://foodsguy.com/wp-content/uploads/2021/04/burger-vs-sandwhich.jpg"
    }
]

const BiryaniItems = [
    {
        name: "Chicken Biryani",
        price: 80,
        rating: 4.5,
        type: "Non-Veg",
        img: "https://www.chefkunalkapur.com/wp-content/uploads/2021/12/chicken-dum-biryani--scaled-e1643714086288-1300x834.jpg?v=1643713987"
    },
    {
        name: "Mutton Biryani",
        price: 120,
        rating: 4.0,
        type: "Non-Veg",
        img: "https://3.bp.blogspot.com/-eUhxXtZpNlw/V4VQw3jtJcI/AAAAAAAAAZg/4ZyuSDYKZcIWI57hSgfygyVh995Uu8-UACLcB/s1600/Mutton%2BBiryani-in%2Bpressure%2Bcooker.JPG"
    },
    {
        name: "Mushroom Biryani",
        price: 60,
        rating: 3.5,
        type: "Veg",
        img: "https://gingerskillet.com/wp-content/uploads/2021/03/mushroombiryani_F.jpg"
    },
    {
        name: "Chicken Biryani MT",
        price: 80,
        rating: 4.5,
        type: "Non-Veg",
        img: "https://www.chefkunalkapur.com/wp-content/uploads/2021/12/chicken-dum-biryani--scaled-e1643714086288-1300x834.jpg?v=1643713987"
    },
    {
        name: "Mutton Biryani MT",
        price: 100,
        rating: 4.0,
        type: "Non-Veg",
        img: "https://3.bp.blogspot.com/-eUhxXtZpNlw/V4VQw3jtJcI/AAAAAAAAAZg/4ZyuSDYKZcIWI57hSgfygyVh995Uu8-UACLcB/s1600/Mutton%2BBiryani-in%2Bpressure%2Bcooker.JPG"
    }
]

export default function Titlefood() {
    return (
        <><Box sx={{ flexGrow: 1 }} p={4}>
            <Grid container spacing={7}>
                {items.map((item, index) => (
                    <Grid item key={index}>
                        <CardImg name={item.name} url={item.imgUrl} />
                    </Grid>)
                )}
            </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" pl={5}>Biryani Items</Typography>
                <Grid container spacing={3} p={4}>
                    {BiryaniItems.map((item, index) => (
                        <Grid item key={index}>
                            <FoodCard name={item.name} price={item.price} type={item.type} img={item.img} rating={item.rating} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}