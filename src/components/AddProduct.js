import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        
        const product = { title, price };

        await fetch("http://localhost:8080/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        navigate("/");
    }


  return (
    <div className="mt-3">
        <h1>Add Product</h1>

        <div>
            <form onSubmit={ saveProduct }>
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
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>

        {/* <p>{title} - {price}</p> */}

    </div>
  );
};

export default AddProduct;
