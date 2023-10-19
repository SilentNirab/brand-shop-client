const Gallery = () => {
    return (
        <div className="py-10">
            <h2 className="text-4xl text-black font-bold max-w-7xl mx-auto mb-5 pl-4">Cars Gallery</h2>
            <div className="grid md:grid-cols-3 ">
                <div className="relative">
                    <img className="min-w-full" src="https://i.ibb.co/NyK92wy/car-2.jpg" alt="" />
                    <span className="absolute top-0 left-4 text-white text-xl font-bold bg-black bg-opacity-30 p-2 ">Masderati GranTurismo</span>
                </div>
                <div className="relative">
                    <img className="min-w-full" src="https://i.ibb.co/Mn9hK4H/car-blue.jpg" alt="" />
                    <span className="absolute top-0 left-4 text-white text-xl font-bold bg-black bg-opacity-30 p-2 ">Masderati GranTurismo</span>
                </div>
                <div className="relative">
                    <img className="min-w-full" src="https://i.ibb.co/7S4WvD3/car-r.jpg" alt="" />
                    <span className="absolute top-0 left-4 text-white text-xl font-bold bg-black bg-opacity-30 p-2 ">Masderati GranTurismo</span>
                </div>
                
                
            </div>
        </div>
    );
};

export default Gallery;