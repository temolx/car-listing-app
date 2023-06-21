'use client'

import { useEffect, useState } from "react"
import { GetCar } from "@/app/API Data/FetchData"
import { CarListingsType } from "@/app/types/ApiTypes"

import { ThemeProvider, Card, CardContent, CardMedia, CardActions, Box, Typography, CssBaseline, Button, IconButton } from "@mui/material"
import { theme } from "../../mui/customTheme"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Image from "next/image"
import Link from "next/link"

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/CartState";
import { CartItem } from "../../redux/slices/CartState"
import { RootState } from "@/app/redux/store"

const page = ({ params }: { params: { carID: string } }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.CartState)

    const[car, setCar] = useState<CarListingsType | null>(null);
 
    useEffect(() => {
        GetCar('cars', Number(params.carID))
            .then((res) => {
            setCar(res);
        }).catch((err) => console.log(err))
    }, [])

  return (
    <ThemeProvider theme={theme}>
    <Box p={10} sx={{ backgroundColor: '#fff' }}>
    <CssBaseline />

    <Box>
        { car !== null ?
        <Card>
            <IconButton sx={{ m: 4 }}><Link href='/shop'><ArrowBackIcon color="primary" /></Link></IconButton>

            <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: { xs: 'center', md: 'space-evenly' }, paddingLeft: 2, paddingRight: 2 }}>
                <CardMedia sx={{ height: { xs: '150px', sm: '250px', md: '350px' }}}>
                    <Image src={car.image.front} alt='car' style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                </CardMedia>

                <CardMedia sx={{ marginLeft: { sx: 0, md: 3 } }}>
                        <Typography variant="h2" color="primary">{ `${car.brand} ${car.model}` }</Typography>
                        <Typography variant="h3" color="primary" sx={{ fontWeight: 400 }}>${ car.price }</Typography>

                    <CardActions>
                        <Button variant="outlined"
                            size="small" color="mainBlue"
                            sx={{ ml: '-7px', textTransform: 'none', boxShadow: 'none', fontSize: '15px' }}
                            disabled={cartItems.value.some((cartItem: CartItem) => cartItem.data.id === car.id)} 
                            onClick={() => dispatch(addToCart(car))}
                            >Purchase</Button>
                    </CardActions>
                </CardMedia>
            </CardContent>
        </Card> : null }

        <Box>
            <Typography variant="h3" color="primary" sx={{ mt: 3 }}>ABOUT THIS VEHICLE</Typography>

            <Typography variant="h6" color="primary" sx={{ fontWeight: 400 }}>A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.

            French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion powered automobile in 1808. The modern car—a practical, marketable automobile for everyday use—was invented in 1886, when German inventor Carl Benz patented his Benz Patent-Motorwagen. Commercial cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company.</Typography>
        </Box>
    </Box>
    </Box>
    </ThemeProvider>
  )
}

export default page