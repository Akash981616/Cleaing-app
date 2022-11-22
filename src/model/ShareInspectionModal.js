import React from "react";
import "./Model.scss";
import ModelDeleteIcon from "../assets/ModelDeleteIcon.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputBar from "../component/InputBar";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
  width: " 666px",
  height: "562px",
  background: "#ffffff",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "none",
};
const ShareInspectionModal = ({ open, handleClose }) => {
  console.log(open);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="share-model-main-container">
            <h2>Share Inspection</h2>
            <p>User Type</p>
            <input type="text" placeholder="Owner" />
            <p>User Name</p>
            <input type="text" placeholder="Owner Name" />
            <p>User Type</p>
            <textarea placeholder="Add Some Detail here ..."></textarea>

            <button onClick={() => handleClose(false)}>Send</button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ShareInspectionModal;
