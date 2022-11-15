import React, { useState } from "react";
import FunctionBar from "../component/FunctionBar";
import SelectButton from "../component/SelectButton";
import CreateInpectionForm from "../forms/CreateInpectionForm";

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
          selectOption === "Cleaners"
            ? "All Inspection - Cleaners"
            : selectOption === "Guests Check In"
            ? "All Inspection - Guests Check In"
            : "All Inspection - Cleaners Check Out"
        }
        createProfile={
          selectOption === "Cleaners"
            ? "Cleaner"
            : selectOption === "Guests Check In"
            ? "Guest"
            : "Guest"
        }
      />
      <CreateInpectionForm />
    </>
  );
};

export default InpectionPage;
