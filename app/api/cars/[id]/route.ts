import { NextResponse } from "next/server";
import { CarListings } from "@/app/data/CarListings";

export async function DELETE(request: Request, { params }: {
    params: { id: number }
}) {
    const currentListing: any = CarListings.find((carListing) => carListing.id === params.id);
    const index = CarListings.indexOf(currentListing);
    CarListings.splice(index, 1);

    return NextResponse.json("Car listing deleted!");
}

export async function GET(request: Request, { params }: { params: { id: number }}) {
    const filteredListings = CarListings.filter((carListing) => carListing.id === Number(params.id))
    return NextResponse.json(filteredListings[0]);
}