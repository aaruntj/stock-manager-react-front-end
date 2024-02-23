import "./Modal.scss";
import close from "../../assets/icons/close-24px.svg";
import axios from "axios";

const Modal = ({
  showModal,
  setShowModal,
  modalTitle,
  modalContent,
  endpointUrl,
}) => {
  const deleteHandler = () => {
    axios
      .delete(endpointUrl)
      .then((response) => {
        setShowModal({ ...Modal, showModal: !showModal });
      })
      .catch((error) => {});
  };

  return (
    <>
      {showModal ? (
        <div className="background">
          <div className="modal">
            <img
              className="modal__close"
              src={close}
              alt="close"
              onClick={() => {
                setShowModal({ ...Modal, showModal: !showModal });
              }}
            />
            <h1 className="modal__title">{modalTitle}</h1>
            <p className="modal__content">{modalContent}</p>
            <div className="modal__button-container">
              <button
                className="modal__button modal__button--cancel"
                onClick={() => {
                  setShowModal({ ...Modal, showModal: !showModal });
                }}
              >
                Cancel
              </button>
              <button
                className="modal__button modal__button--delete"
                onClick={() => deleteHandler()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
