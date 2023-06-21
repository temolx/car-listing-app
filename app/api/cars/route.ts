import { NextResponse } from "next/server";
import { CarListings } from "@/app/data/CarListings";

export async function GET() {
    return NextResponse.json(CarListings);
}

export async function POST(request: Request) {
    const { brand, model, color, type, engine, wheel, mileage } = await request.json();
    const lastID = CarListings[CarListings.length - 1].id;

    const newListing = {
        id: lastID + 1,
        brand,
        model,
        color,
        type,
        engine,
        wheel,
        mileage
    }

    CarListings.push(newListing)
    return NextResponse.json(newListing);
}