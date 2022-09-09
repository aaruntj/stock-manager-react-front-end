import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/Inventory/InventoryDetails/InventoryDetails";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/warehouses" />} />
					<Route path="/warehouses" element={<WarehousesPage />} />
					<Route path="/warehouses/:warehouseId" element={<WarehousesPage />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/inventory" element={<InventoryPage />} />
					<Route path="/inventory/:itemId" element={<InventoryDetails />} />
				</Routes>
				{/*<Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
