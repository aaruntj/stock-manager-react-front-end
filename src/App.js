import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/Inventory/InventoryDetails/InventoryDetails";
import WarehouseDetails from "./components/Warehouse/DetailsWarehouse/WarehouseDetails";
import AddInventory from "./components/Inventory/AddInventory/AddInventory";
import EditWarehouse from "./components/Warehouse/EditWarehouse/EditWarehouse";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/warehouses" />} />
					<Route path="/warehouses" element={<WarehousesPage />} />
					<Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
					<Route path="/warehouses/:warehouseId/edit" element={<EditWarehouse />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/inventory" element={<InventoryPage />} />
					<Route path="/inventory/:itemId" element={<InventoryDetails />} />
					<Route path="/add-or-edit-inventory/" element={<AddInventory />} />
					<Route path="/add-or-edit-inventory/:itemId" element={<AddInventory />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
