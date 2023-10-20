import { toast } from "react-toastify";

const AddProducts = () => {

    const handelAddProduct = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const image = form.get("image");
        const name = form.get("name");
        const brand = form.get("brand");
        const type = form.get("type");
        const price = form.get("price");
        const description = form.get("description");
        const rating = form.get("rating");
        
        const newCar ={image, name, brand, type, price, description, rating}

        // send data to the server

        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Good job!", "You clicked the button!", "success");
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Add Your Products</h2>
            <form onSubmit={handelAddProduct} className="card-body 2 max-w-md mx-auto">

                <input type="text" name="image" placeholder="Image" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="name" placeholder="Name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <select name="brand" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required>
                    <option disabled selected>Select Brand</option>
                    <option>Audi</option>
                    <option>Bmw</option>
                    <option>Ford</option>
                    <option>Lamborghini</option>
                    <option>Nissan</option>
                    <option>Toyota</option>
                </select>
                <input type="text" name="type" placeholder="Car type" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="price" placeholder="Price" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <textarea name="description" placeholder="Short description" className=" border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" ></textarea>
                <input type="text" name="rating" placeholder="Rating" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                <div className="form-control mt-6">

                    <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Add Product</button>

                </div>
            </form >
        </div >
    );
};

export default AddProducts;