import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const {id} = useParams();
    const cars = useLoaderData();
    const car = cars.find(car => car._id == id);
    const {_id,image, name, brand, type, price, description, rating } = car;
    return (
        <div>
            <div className="card md:max-w-3xl lg:max-w-5xl bg-base-100 shadow-xl mx-auto my-5">
                <figure className="w-full" ><img src={image} alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <h3 className="text-lg font-medium"><span className='text-xl font-bold'>Brand-Name: </span>{brand}</h3>
                    <h3 className="text-lg font-medium"><span className='text-xl font-bold'>Type: </span>{type}</h3>
                    <h3 className="text-lg font-medium"><span className='text-xl font-bold'>Price: </span>{price} $</h3>
                    <p className="text-lg font-normal"><span className='text-xl font-bold'>Discription: </span>{description}</p>
                    <p><span className='text-xl font-bold'>Rating: </span>{rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/addCart/${_id}`}><button className="btn bg-gray-200"> Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;