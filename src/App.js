// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import "bulma/css/bulma.css";

function App() {

	// const [title, setTitle] = useState("Welcome");
	// const [products, setProducts] = useState([
	// 	{id: 1, title: 'Product 1', price: 1000},
	// 	{id: 2, title: 'Product 2', price: 2000},
	// 	{id: 3, title: 'Product 3', price: 3000},
	// 	{id: 4, title: 'Product 4', price: 4000},
	// 	{id: 5, title: 'Product 5', price: 5000},
	// ]);

	// const changeTitle = () => {
	// 	setTitle('Title telah diubah');
	// }

	// const deleteProduct = (productId) => {
	// 	const newProducts = products.filter(product => product.id !== productId);
	// 	setProducts(newProducts);
	// }

	// const [name, setName] = useState('Fasaya');

	// useEffect(() => {
	// 	console.log('Use Effect Running');
	// }, [name]);
	
  	return (
		<div className="container m-5">
			<Header />
			
			<Router>
				
				<Routes>
					
					<Route exact path="/" element={
						// <ProductList products={products} deleteProduct={deleteProduct} />
						<ProductList/>
					} />
					
					<Route path="/add" element={
						<AddProduct />
					}/>
					
					<Route path="/edit/:id" element={
						<EditProduct />
					}/>

					<Route path="/about" element={
						<About />
					}/>

				</Routes>

			</Router>
		</div>
  );
}

export default App;
