import { StaticImageData } from "next/image"

export type CarListingsType = {
    id: number,
    brand: string,
    model: string,
    price: number,
    color: string,
    type: string,
    engine: string,
    wheel: string,
    mileage: number,
    image: {
        front: StaticImageData,
        side: StaticImageData
    }
}