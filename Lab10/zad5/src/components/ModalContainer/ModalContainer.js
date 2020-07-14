import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { hideModal } from "../../actions";

const ModalContainer = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!modal) {
    return null;
  }

  return (
    <Modal>
      <h3>{modal.title}</h3>
      <p>{modal.text}</p>
      <button onClick={() => dispatch(hideModal())}>Close</button>
    </Modal>
  );
};

export default ModalContainer;
