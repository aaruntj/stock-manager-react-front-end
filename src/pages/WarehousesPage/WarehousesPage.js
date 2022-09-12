import React from "react";
import axios from "axios";
import Modal from "../../components/Modal/Model";
import { Link } from 'react-router-dom';
import "./WarehousesPage.scss";

import WarehouseCard from "../../components/Warehouse/WarehouseCard/WarehouseCard";
import ArrowSort from "../../assets/icons/sort-24px.svg";

const { useEffect, useState } = require("react");

const API_URL = process.env.REACT_APP_API_URL;

function WarehousesPage() {
	const [warehouse, setWarehouse] = useState(null);
	const [modal, setModal] = useState({
		showModal: false,
		activeId: "",
		activeName: "",
	});

	//----- Fetch Warehouse List -------
	useEffect(() => {
		const getWarehouseList = async () => {
			try {
				const response = await axios.get(`${API_URL}/`);
				console.log(response.data);
				const warehouseData = response.data;
				setWarehouse(warehouseData);
			} catch (error) {
				console.log(error.message);
			}
		};
		console.log("run");
		getWarehouseList();
	}, [modal.showModal]);

	const openDeleteModal = (id, name) => {
		setModal({ showModal: !modal.showModal, activeName: name, activeId: id });
	};

	if (warehouse === null || warehouse === undefined) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="list__section">
			<div className="list__header-container">
				<h1 className="list__title">Warehouses</h1>
				<div className="warehouse__searchBar-container">
					<input
						className="warehouse__searchBar"
						type="text"
						placeholder="Search"
					></input>

          <Link to="/warehouses/add">
            <div className="warehouse__btn">+ Add New Warehouse</div>
          </Link>
        </div>
      </div>
      <div className="list__container">
        <div className="list__label-container">
          <div className="list__label-box">
            <span className="list__label ">WAREHOUSE</span>
            <img className="list__label-icon" src={ArrowSort} alt="" />
          </div>
          <div className="list__label-box">
            <span className="list__label ">ADDRESS</span>
            <img className="list__label-icon" src={ArrowSort} alt="" />
          </div>
          <div className="list__label-box">
            <span className="list__label ">CONTACT NAME</span>
            <img className="list__label-icon" src={ArrowSort} alt="" />
          </div>
          <div className="list__label-box">
            <span className="list__label ">CONTACT INFORMATION</span>
            <img className="list__label-icon" src={ArrowSort} alt="" />
          </div>
          <div className="list__label-box">
            <span className="list__label ">ACTION</span>
          </div>
        </div>
        {warehouse.warehouseData.map((warehouse, index) => (
          <WarehouseCard
            key={index}
            warehouse={warehouse}
            openDeleteModal={openDeleteModal}
          />
        ))}
      </div>
      <Modal
        showModal={modal.showModal}
        setShowModal={setModal}
        modalTitle={`Delete ${modal.activeName} warehouse?`}
        modalContent={`Please confirm that you’d like to delete the ${modal.activeName} warehouse from the
        list of warehouses. You won’t be able to undo this action.`}
        endpointUrl={`http://localhost:8080/${modal.activeId}`}
      />
    </section>
  );
}

export default WarehousesPage;
