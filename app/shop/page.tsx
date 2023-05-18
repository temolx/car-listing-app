'use client'

import { ThemeProvider, CssBaseline, Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid, IconButton } from "@mui/material"
import { theme } from "../mui/customTheme"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Image from "next/image"
import Link from "next/link";
import { FetchData } from "../API Data/FetchData"
import { useEffect, useState } from "react"
import { CarListingsType } from "../types/ApiTypes"

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartState";
import { RootState } from "../redux/store";

function page() {

    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootState) => state.CartState)

    const[cars, setCars] = useState<CarListingsType[] | []>([]);
    const[hoveredImg, setHoveredImg] = useState<number>(0); // holds id for a car that is currently being hovered on

    useEffect(() => {
        FetchData('cars')
            .then((res) => {
                setCars(res);
                console.log(res);
            }).catch((err) => console.log(err));
    }, [])

    const showSide = (carID: number) => {
        setHoveredImg(carID);
    }

  return (
    <ThemeProvider theme={theme}>
    <Box p={10} sx={{ backgroundColor: '#fff' }}>
        <CssBaseline />

        <Box sx={{ display: 'flex', mb: 5 }}>
            <Typography variant="h3" color="primary" sx={{ mt: '5px' }} >Shop for cars</Typography>
            <IconButton sx={{ ml: 1 }}><Link href='/'><ArrowBackIcon color="primary" /></Link></IconButton>
        </Box>

        <Grid container spacing={3}>
        { cars && cars.map((car: CarListingsType) => (
            <Grid item lg={3} md={6} xs={12} key={ car.id }>
                <Card sx={{ maxWidth: 500 }}>
                    <CardContent sx={{ pt: 0 }}>
                        <CardMedia>
                            <Image src={ hoveredImg !== car.id ? car.image.front : car.image.side } alt='tesla front' style={{ objectFit: 'contain', width: '100%', height: '200px' }} onMouseEnter={() => showSide(car.id)} onMouseLeave={() => setHoveredImg(0)} />
                        </CardMedia>
                        
                        <Typography variant="h5" color="primary">{ car.brand }</Typography>
                        <Typography variant="h5" color="primary">{ car.model }</Typography>
                        <Typography variant="h6" color="primary">${ car.price }</Typography>

                        <CardActions>
                            <Button variant="contained" size="small" color="primary" sx={{ ml: '-7px', textTransform: 'none', boxShadow: 'none' }}>Learn More</Button>
                            <Button variant="outlined"
                            size="small" color="mainBlue"
                            sx={{ ml: '-7px', textTransform: 'none', boxShadow: 'none' }}
                            disabled={cartItems.value.some((cartItem) => cartItem.data.id === car.id)} 
                            onClick={() => dispatch(addToCart(car))}>
                            Purchase</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        )) }
        </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default page