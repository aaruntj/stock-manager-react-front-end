import React from 'react'
import WarehouseDetails from '../components/Warehouse/DetailsWarehouse/WarehouseDetails'

function WarehousesPage() {
  
  let textContactObj = {
    name: "Alana Thomas",
    position: "Warehouse Manager",
    phone: "+1 (646) 123-1234",
    email: "athomas@instock.com"
  }
  
  return (
  <>
    <div>WarehousesPage</div>
    <WarehouseDetails 
    warehouseLocation="Washington"
    warehouseAddress = "2650 NW 5th Avenue"
    warehouseContact = {textContactObj}
     />
  </>
  )
}

export default WarehousesPage