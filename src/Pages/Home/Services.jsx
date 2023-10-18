import { FaGears, FaKey } from "react-icons/fa6";
import { GiAutoRepair, GiSteeringWheel } from "react-icons/gi";
import servicesBG from "../../assets/images/services.png"
const Services = () => {
    return (
        <div className="py-10">
            <div className="hero  relative" style={{ backgroundImage: 'url(https://i.ibb.co/26jnnVq/bg-7.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-80"></div>
                <div className="py-20 px-2 md:px-0">
                    <div className="flex flex-col  md:flex-row md:justify-between max-w-7xl mx-auto">
                        <div className="md:w-2/4 md:mr-10">
                            <span className="text-gray-200 text-lg">By the readable content</span>
                            <h2 className="text-white text-2xl font-semibold">It is a long established fact that a reader will bedistracted by the readable</h2>
                            <img src={servicesBG} alt="car" className="md:hidden" />
                        </div>
                        <div className="md:w-2/4 grid grid-cols-2 gap-3 ">
                            <div className="my-4">
                                <div className="flex items-center mb-2">
                                    <FaKey className="text-red-600 text-5xl mr-2"></FaKey>
                                    <h3 className="text-white text-xl font-medium">New Cars Sale</h3>
                                </div>
                                <p className="text-gray-200">Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt</p>
                            </div>
                            <div className="my-4">
                                <div className="flex items-center mb-2">
                                    <GiSteeringWheel className="text-red-600 text-5xl mr-2"></GiSteeringWheel>
                                    <h3 className="text-white text-xl font-medium">Car Dealer Service</h3>
                                </div>
                                <p className="text-gray-200">Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt</p>
                            </div>
                            <div className="my-4">
                                <div className="flex items-center mb-2">
                                    <GiAutoRepair className="text-red-600 text-5xl mr-2"></GiAutoRepair>
                                    <h3 className="text-white text-xl font-medium">Repair New Cars</h3>
                                </div>
                                <p className="text-gray-200">Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt</p>
                            </div>
                            <div className="my-4">
                                <div className="flex items-center mb-2">
                                    <FaGears className="text-red-600 text-5xl mr-2"></FaGears>
                                    <h3 className="text-white text-xl font-medium">New Car Rental</h3>
                                </div>
                                <p className="text-gray-200">Volutpat sodales, mauris erat rutrum deserunt sed pharetra mollis, nunc leo eu maecenas nascetur duis viverra nam vitae rutrum deserunt</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hidden md:block absolute left-0 bottom-10">
                    <img src={servicesBG} alt="car" className="md:max-w-md lg:max-w-xl" />
                </div>
            </div>
        </div>
    );
};

export default Services;