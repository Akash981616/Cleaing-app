import React, { useState } from "react";
import SelectButton from "../component/SelectButton";

const ReportPage = () => {
  const [selectOption, setSelectOption] = useState("Ownwer");
  return (
    <>
      <SelectButton
        firstOption={"Ownwer"}
        secondOption={"Cleaner"}
        thirdOprtion={"Guest"}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
    </>
  );
};

export default ReportPage;
