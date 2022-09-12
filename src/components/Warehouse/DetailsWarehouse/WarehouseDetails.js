import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Modal from '../../Modal/Model';
import WarehouseInventoryListItem from '../../WarehouseInventoryListItem/WarehouseInventoryListItem';
import './WarehouseDetails.scss'
import axios from 'axios'
import ArrowIcon from "../../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../../assets/icons/edit-24px.svg";
import ArrowSort from "../../../assets/icons/sort-24px.svg";
import WarehouseInventory from "../WarehouseInventory/WarehouseInventory";
const API_URL = process.env.REACT_APP_API_URL;


function WarehouseDetails({ }) {
  let params = useParams()
  const [warehouse, setWarehouse] = useState(null);
  const { warehouseId } = useParams();
  let [warehouseLocation, setWarhouseLocation] = useState("")
  let [warehouseAddress, setWarehouseAddress] = useState("")
  let [contactName, setContactName] = useState("")
  let [contactPosition, setContactPosition] = useState("")
  let [contactPhone, setContactPhone] = useState("")
  let [contactEmail, setContactEmail] = useState("")

  console.log(params.warehouseId)
  axios.get("http://localhost:8080/"+ params.warehouseId).then((res) => {
    console.log(res.data.warehouseSingle)
    setWarhouseLocation(res.data.warehouseSingle.city)
    setWarehouseAddress(res.data.warehouseSingle.address)
    setContactName(res.data.warehouseSingle.contact.name)
    setContactPosition(res.data.warehouseSingle.contact.position)
    setContactPhone(res.data.warehouseSingle.contact.phone)
    setContactEmail(res.data.warehouseSingle.contact.email)

  })


  let [showDeleteModal, setshowDeleteModal] = useState(false)
  let [deleteItemName, setdeleteItemName] = useState("")
  let [deleteItemId, setdeleteItemId] = useState("")

  useEffect(() => {
		const getWarehouseDetails = async () => {
			try {
				console.log(`${API_URL}/${warehouseId}/inventory`)
				const response = await axios.get(`${API_URL}/${warehouseId}/inventory`);
				console.log(response);
				const warehouseDetailsData = await response.data.warehouseInventory;
				setWarehouse(warehouseDetailsData);

			} catch (error) {
				console.log(error.message);
			}
		};
		getWarehouseDetails();
	}, [warehouseId]);


  //-------- safe guard ---------
	if (warehouse === null || warehouse === undefined) {
		return <h1>Loading...</h1>;
	}

  return (
    <>
      <Modal
        showModal={showDeleteModal}
        setShowModal={setshowDeleteModal}
        modalTitle={`Delete ${deleteItemName} inventory item?`}
        modalContent={`Please confirm that you’d like to delete ${deleteItemName} from the inventory list.
You won’t be able to undo this action.`}
        endpointUrl="NEED TO FINISH"
      />
      <div className="warehouse-details-section">
        <div className="warehouse-details-section__content">
          <div className="warehouse-details-section__header">
            <div className="warehouse-details-section__icon-and-text">
              <Link to="/warehouses">
                <img src={require('../../../assets/icons/arrow_back-24px.svg').default} className="warehouse-details-section__header-icon" alt="" />
              </Link>
              <div className="add-item-section__title"> {warehouseLocation} </div>
            </div>
            {/* NEED EDIT WAREHOUSE PAGE */}
            {/* <Link to="/"> */}
            <button className='warehouse-details-section__edit-button'>
              <img src={require('../../../assets/icons/edit-24px.svg').default} className="warehouse-details-section__edit-icon" alt="" />
            </button>
            {/* </Link> */}
          </div>
          <div className="warehouse-details-section__contact-info">
            <div className="warehouse-details-section__address-block">
              <div className="warehouse-details-section__address-label">
                WAREHOUSE ADDRESS:
              </div>
              <div className="warehouse-details-section__address-text">
                {warehouseAddress}
              </div>
            </div>
            <div className="warehouse-details-section__name-and-contact">
              <div className="warehouse-details-section__name-block">
                <div className="warehouse-details-section__name-label">
                  CONTACT NAME:
                </div>
                <div className="warehouse-details-section__name-text">
                  {contactName}
                  <br />
                  {contactPosition}
                </div>
              </div>
              <div className="warehouse-details-section__info-block">
                <div className="warehouse-details-section__info-label">
                  CONTACT INFORMATION:
                </div>
                <div className="warehouse-details-section__info-text">
                  {contactPhone} <br />
                  {contactEmail}
                </div>
              </div>
            </div>
          </div>

          <section className="list__section">
			<div className="list__container">
				<div className="list__label-container">
					<div className="list__label-box">
						<span className="list__label ">INVENTORY ITEM</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">CATEGORY</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">STATUS</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">QTY</span>
						<img className="list__label-icon" src={ArrowSort} alt="" />
					</div>
					<div className="list__label-box">
						<span className="list__label ">ACTIONS</span>
					</div>
				</div>
        {warehouse.map((warehouse, index) => (
					<WarehouseInventory key={index} warehouse={warehouse} />
				))}
			</div>
		</section>

        </div>
        
      </div>
      
    </>
  )
}

export default WarehouseDetails