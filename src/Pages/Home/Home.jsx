import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import Gallery from "./gallery";
import BrandCard from "./BrandCard";

const Home = () => {
    const carBrands = useLoaderData();
    console.log(carBrands);
    return (
        <div>
            <Banner></Banner>
            <div className="py-10 max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-black text-4xl font-bold mb-2">Cars Brand</h2>
                    <span className="bg-red-600 text-white text-md font-semibold px-2">Choose Your Brand</span>
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        {
                            carBrands.map(carBrand => <BrandCard key={carBrand.id} carBrand={carBrand}></BrandCard>)
                        }
                    </div>
                </div>
            </div>
            <Services></Services>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;