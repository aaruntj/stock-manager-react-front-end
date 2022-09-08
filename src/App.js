import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

import Header from "./components/Header/Header"
import WarehousesPage from "./pages/WarehousesPage"
import InventoryPage from "./pages/InventoryPage"
import ErrorPage from "./pages/ErrorPage"
import Footer from "./components/Footer/Footer"

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/warehouses"/>} />
					<Route path="/warehouses" element={<WarehousesPage />} />
					<Route path="/warehouses/:warehouseId" element={<WarehousesPage />} />
					<Route path="/inventory" element={<InventoryPage />} />
					<Route path="/inventory/:itemId" element={<InventoryPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	)
}

export default App;
