
const BASE_URL: string = 'http://localhost:3000/api';

export const FetchData = async (dataType: string) => {
    const res = await fetch(`${BASE_URL}/${dataType}`, { // example: http://localhost:3000/api/cars
        next: {
            revalidate: 60
        }
    });
    const data = await res.json();
    return data;
}