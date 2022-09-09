import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Model'
import "./WarehouseInventoryListItem.scss"
function WarehouseInventoryListItem({ warehouseInventoryObj, setShowModal, setdeleteItemName, setdeleteItemId }) {
    let deleteButtonHandler = () => {
        setdeleteItemName(warehouseInventoryObj.itemName)
        setdeleteItemId(warehouseInventoryObj.id)
        setShowModal(true)
    }
    return (
        <>
            <div className="group">
                <span>{warehouseInventoryObj.itemName}</span>
                <span>{warehouseInventoryObj.category}</span>
                <span>{warehouseInventoryObj.status}</span>
                <span>{warehouseInventoryObj.quantity}</span>
                <button onClick={deleteButtonHandler}>delete</button>
                {/* NEED TO LINK TO PROPER PAGE */}
                {/* <Link to={`/`}> */}
                    <button>edit</button>
                {/* </div></Link> */}
            </div>


        </>
    )
}

export default WarehouseInventoryListItem