import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async() => {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    };

    const updateProduct = async(e) => {
        e.preventDefault();
        
        const product = { title, price };

        await fetch(`http://localhost:8080/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        navigate("/");
    }

    return (
        <div className="mt-3">
            <h1>Edit Product</h1>

            <div>
                <form onSubmit={ updateProduct }>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Product Title" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Product Price" />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button className="button is-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>

            {/* <p>{title} - {price}</p> */}

        </div>
    );
};

export default EditProduct;
