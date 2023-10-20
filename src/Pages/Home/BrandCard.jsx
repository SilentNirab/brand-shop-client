import { Link } from "react-router-dom";

const BrandCard = ({ carBrand }) => {
    const { name, image } = carBrand;
    return (
        <Link>
            <div className="bg-white hover:bg-black hover:text-white shadow-md p-4">
                <p className="text-xl font-bold text-left">{name}</p>
                <img src={image} alt="car" />
            </div>
        </Link>
    );
};

export default BrandCard;