import Banner from "./Banner";
import Services from "./Services";
import Gallery from "./gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="py-10 max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-black text-4xl font-bold mb-2">Cars Brand</h2>
                    <span className="bg-red-600 text-white text-md font-semibold px-2">Choose Your Brand</span>
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        <div className="bg-white hover:bg-black hover:text-white shadow-md p-4">
                            <p className="text-xl font-bold text-left">BMW</p>
                            <img src="https://i.ibb.co/GWNCDD4/sedan.png" alt="car" />
                        </div>
                        <div className="bg-white hover:bg-black hover:text-white shadow-md p-4">
                            <p className="text-xl font-bold text-left">BMW</p>
                            <img src="https://i.ibb.co/GWNCDD4/sedan.png" alt="car" />
                        </div>
                        <div className="bg-white hover:bg-black hover:text-white shadow-md p-4">
                            <p className="text-xl font-bold text-left">BMW</p>
                            <img src="https://i.ibb.co/GWNCDD4/sedan.png" alt="car" />
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;