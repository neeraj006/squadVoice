import React from "react";
import "./Modal.scss";
export default function Modal({ children, isModalOpen, closeModal }) {
  return isModalOpen ? (
    <div className="modal">
      <div className="modal-content">
        {children}
        {
          <button className="cross-icon" onClick={() => closeModal()}>
            &times;
          </button>
        }
      </div>
    </div>
  ) : null;
}
