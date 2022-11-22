import React from "react";
import "./SelectButton.scss";
const SelectButton = ({
  selectOption,
  setSelectOption,
  firstOption,
  secondOption,
  thirdOprtion,
  createFormFunction,
  contractTemplate,
  setOpenContractTemplate,
}) => {
  const selectStyle = {
    backgroundColor: "#8A8A8A",
    borderRadius: "4px 4px 0px 0px",
    color: "#FFFFFF",
  };
  return (
    <div className="userpage-top-conatiner">
      <div className="userpage-top-conatiner-select-menu">
        {firstOption && (
          <button
            style={selectOption === firstOption ? selectStyle : {}}
            onClick={() => {
              setSelectOption(firstOption);
            }}
          >
            {firstOption}
          </button>
        )}
        {secondOption && (
          <button
            style={selectOption === secondOption ? selectStyle : {}}
            onClick={() => {
              setSelectOption(secondOption);
            }}
          >
            {secondOption}
          </button>
        )}
        {thirdOprtion && (
          <button
            style={selectOption === thirdOprtion ? selectStyle : {}}
            onClick={() => {
              setSelectOption(thirdOprtion);
            }}
          >
            {thirdOprtion}
          </button>
        )}
      </div>

      {selectOption === firstOption && contractTemplate === true ? (
        <button
          className="contract-template-btn"
          onClick={() => setOpenContractTemplate(true)}
        >
          Contract Template
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectButton;
