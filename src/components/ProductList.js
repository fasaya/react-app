import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        // npx json-server --watch db.json
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async(id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE"
        });
        fetchData();
    }

    return (
    <div className="mt-3">
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                            {/* <button className="button is-primary is-small" onClick={ () => editProduct(product.id) }>
                                Edit
                            </button>
                            <button className="button is-danger is-small" onClick={ () => deleteProduct(product.id) }>
                                Delete
                            </button> */}
                            <Link to={`/edit/${product.id}`} className="button is-primary is-small">
                                Edit
                            </Link>
                            <button onClick={() => deleteProduct(product.id) } className="button is-danger is-small ml-2">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );

    // return (
    // <div>
    //     <ul>
    //         { products.map((product) => (
    //             <li key={product.id}>
    //                 {product.title} - Rp {product.price} &nbsp;
    //                 <button className="button is-danger" onClick={ () => deleteProduct(product.id) }>Delete</button>
    //             </li>
    //         ))}
    //     </ul>
    // </div>
    // );
};

export default ProductList;
