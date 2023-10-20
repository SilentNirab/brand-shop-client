import { useLoaderData, useParams } from "react-router-dom";
import CarCard from "./CarCard";

const CarCollections = () => {
    const cars = useLoaderData();
    const {name} = useParams();
    const brand = cars.filter(car => car.brand == name);

    return (
        <div className=" m-10">
            {
                brand.map(car => <CarCard key={car._id} car={car}></CarCard>)
            }

            {
                brand.length == 0 ? 
                <p className="text-red-600 font-bold text-4xl text-center">Product Not Available !</p>
                : ""
            }
        </div>
    );
};

CarCollections.propTypes = {
    
};

export default CarCollections;