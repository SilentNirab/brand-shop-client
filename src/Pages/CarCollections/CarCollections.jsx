import { useLoaderData, useParams } from "react-router-dom";
import CarCard from "./CarCard";

const CarCollections = () => {
    const cars = useLoaderData();
    const { name } = useParams();
    const brand = cars.filter(car => car.brand == name);

    return (
        <div className="">
            <h2 className="text- 2xl md:text-5xl text-black font-bold text-center my-5">OUR ABAILABLE PRODUCTS</h2>
            <div className=" flex justify-between m-2">
                <div className="">

                    {
                        brand.map(car => <CarCard key={car._id} car={car}></CarCard>)
                    }

                    {
                        brand.length == 0 ?
                            <p className="text-red-600 font-bold text-4xl text-center">Product Not Available !</p>
                            : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default CarCollections;