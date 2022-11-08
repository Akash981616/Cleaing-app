import React, { useState } from "react";
import FunctionBar from "../component/FunctionBar";
import SelectButton from "../component/SelectButton";

const InpectionPage = () => {
  const [selectOption, setSelectOption] = useState("Cleaners");
  return (
    <>
      <SelectButton
        firstOption={"Cleaners"}
        secondOption={"Guests Check In"}
        thirdOprtion={"Cleaners Check Out"}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
      <FunctionBar
        title={
          selectOption === "Ownwer"
            ? " Onwer List"
            : selectOption === "Cleaner"
            ? "Cleaner List"
            : "Guest List"
        }
        createProfile={
          selectOption === "Cleaners"
            ? "Cleaner"
            : selectOption === "Guests Check In"
            ? "Guest"
            : "Guest"
        }
      />
    </>
  );
};

export default InpectionPage;
