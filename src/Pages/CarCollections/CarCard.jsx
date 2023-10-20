import PropTypes from 'prop-types';

const CarCard = ({ car }) => {
    const { image, name, brand, type, price, description, rating } = car;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
                <figure className=" md:w-3/6 " ><img src={image} alt="car" /></figure>
                <div className="card-body md:w-3/6">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="card-title">{brand}</h3>
                    <h3 className="card-title">{type}</h3>
                    <h3 className="card-title">{price}</h3>
                    <p className="text-black">{description}</p>
                    <span>{rating}</span>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CarCard.propTypes = {
    car:PropTypes.array
};

export default CarCard;