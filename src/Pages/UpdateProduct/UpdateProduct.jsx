import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
    const car = useLoaderData();
    const {_id, image, name, brand, type, price, description, rating } = car;
    const handelUpdateProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const image = form.get("image");
        const name = form.get("name");
        const brand = form.get("brand");
        const type = form.get("type");
        const price = form.get("price");
        const description = form.get("description");
        const rating = form.get("rating");

        const newCar = { image, name, brand, type, price, description, rating }

        // send data to the server

        fetch(`https://brand-shop-server-o20o5wart-md-nirabs-projects.vercel.app/car/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Product Updated Successfully");
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Update Your Products</h2>
            <form onSubmit={handelUpdateProduct} className="card-body 2 max-w-md mx-auto">

                <input type="text" name="image" defaultValue={image} placeholder="Image" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="name" defaultValue={name} placeholder="Name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <select name="brand" defaultValue={brand} className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required>
                    <option>Audi</option>
                    <option>Bmw</option>
                    <option>Ford</option>
                    <option>Lamborghini</option>
                    <option>Nissan</option>
                    <option>Toyota</option>
                </select>
                <input type="text" name="type" defaultValue={type} placeholder="Car type" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="price" defaultValue={price} placeholder="Price" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <textarea name="description" defaultValue={description} placeholder="Short description" className=" border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" ></textarea>
                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                <div className="form-control mt-6">
                    <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Update Product</button>

                </div>
            </form >
        </div>
    );
};

export default UpdateProduct;