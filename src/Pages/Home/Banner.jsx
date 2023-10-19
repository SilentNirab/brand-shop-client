const Banner = () => {
    return (
        <div>
            <div className=" min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/j5pcMW5/audi-r8.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="md:w-3/6 mt-44 pl-4 text-center md:text-left">
                        <span className="bg-red-600 text-white text-2xl font-semibold px-4 py-2">Reted Companies 2023</span>
                        <h1 className="mb-5 md:text-6xl lg:text-8xl text-white font-bold mt-5">Buy Your Dream Car</h1>
                        <p className="mb-5 text-3xl text-white font-bold">only dealer car at the best price</p>
                        <button className="bg-white bg-opacity-20 text-white text-lg font-bold px-5 py-3 rounded-md mr-5">car listing</button>
                        <button className="bg-white bg-opacity-20 text-white text-lg font-bold px-5 py-3 rounded-md">about us</button>
                    </div>
                    <div className="md:w-3/6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;