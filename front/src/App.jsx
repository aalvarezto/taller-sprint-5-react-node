import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

const MAX_PRODUCTS = 5

function App() {
	const [count, setCount] = useState(0)
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("/api/products")
			.then(response => response.json())
			.then(data => setProducts(data.products))
	}, [])

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>

				{products.slice(0, MAX_PRODUCTS).map((product, index) => (
					<div key={`product-key${product.key}`}>
						<h3>{product.title}</h3>
					</div>
				))}

				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
