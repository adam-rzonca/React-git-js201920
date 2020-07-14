import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import { useDispatch } from "react-redux";
import { showModal } from "./actions";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <ModalContainer />
      <div>Hello from APP</div>
      <button
        onClick={() =>
          dispatch(
            showModal({
              title: "Modal from Redux",
              text: "Hello from Redux Modal",
            })
          )
        }
      >
        Show Redux Modal
      </button>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      {modalOpen && (
        <Modal>
          <p>Hello from Modal</p>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
