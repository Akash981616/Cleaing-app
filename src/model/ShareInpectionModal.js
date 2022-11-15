import React from "react";
import "./Model.scss";
import ModelDeleteIcon from "../assets/ModelDeleteIcon.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
  width: "512px",
  height: "382px",
  background: "#ffffff",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "none",
};
const ShareInpectionModal = () => {
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="model-main-container">
            <img src={ModelDeleteIcon} alt="error"></img>
            <h2>Are You Sure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="model-btn">
            <button className="grey-btn" onClick={() => handleOpen}>
              Yes
            </button>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ShareInpectionModal;
