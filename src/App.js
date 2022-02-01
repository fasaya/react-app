// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import "bulma/css/bulma.css";

function App() {
	
  	return (
		<div className="container m-5">
			
			<Router>

				<Header />
				
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
