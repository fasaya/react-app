import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    });

    const fetchData = async() => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
    }

    return (
    <div className="mt-3">
        <table className="table is-stripped">
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
                            <Link to={'/'} className="button is-danger is-small">
                                Delete
                            </Link>
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
