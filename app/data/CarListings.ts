import { CarListingsType } from "../types/ApiTypes"
import images from "./CarImages"

export const CarListings: CarListingsType[] = [
    {
        id: 1,
        brand: 'Tesla',
        model: 'Model S',
        price: 80000,
        color: 'red',
        type: 'sedan',
        engine: 'electric',
        wheel: 'left-side',
        mileage: 3500,
        image: images.modelS
    },
    {
        id: 2,
        brand: 'Tesla',
        model: 'Model X',
        price: 95000,
        color: 'white',
        type: 'sedan',
        engine: 'electric',
        wheel: 'left-side',
        mileage: 5000,
        image: images.modelX
    },
    {
        id: 3,
        brand: 'Tesla',
        model: 'Model Y',
        price: 95000,
        color: 'gray',
        type: 'sedan',
        engine: 'electric',
        wheel: 'left-side',
        mileage: 5200,
        image: images.modelY
    },
    {
        id: 4,
        brand: 'Tesla',
        model: 'Model 3',
        price: 60000,
        color: 'black',
        type: 'sedan',
        engine: 'hybrid',
        wheel: 'left-side',
        mileage: 11000,
        image: images.model3
    },
    {
        id: 5,
        brand: 'Toyota',
        model: 'Camry',
        price: 75000,
        color: 'white',
        type: 'sedan',
        engine: 'hybrid',
        wheel: 'left-side',
        mileage: 10000,
        image: images.camry
    },
    {
        id: 6,
        brand: 'Toyota',
        model: 'RAV4',
        price: 85000,
        color: 'red',
        type: 'SUV',
        engine: 'hybrid',
        wheel: 'left-side',
        mileage: 2500,
        image: images.rav4
    },
    {
        id: 7,
        brand: 'BMW',
        model: 'X6',
        price: 105000,
        color: 'black',
        type: 'SUV',
        engine: 'gas',
        wheel: 'right-side',
        mileage: 2000,
        image: images.x6
    },
    {
        id: 8,
        brand: 'BMW',
        model: '5 Series',
        price: 100000,
        color: 'blue',
        type: 'sedan',
        engine: 'gas',
        wheel: 'left-side',
        mileage: 1500,
        image: images.series5
    },
]