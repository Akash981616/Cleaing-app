import React, { useState } from "react";
import ContractList from "../component/ContractList";
import FunctionBar from "../component/FunctionBar";
import "./ContractPage.scss";
import SelectButton from "../component/SelectButton";
import { data } from "../data/listData";
import ContractTemplate from "./ContractTemplate";

const ContractPage = () => {
  const [selectOption, setSelectOption] = useState("Ownwer");
  return (
    <>
      <div className="contract-template">
        <ContractTemplate />
        {/* <SelectButton
          firstOption={"Ownwer"}
          secondOption={"Cleaner"}
          thirdOprtion={"Guest"}
          selectOption={selectOption}
          setSelectOption={setSelectOption}
          contractTemplate={true}
        />
        
      </div>
      <FunctionBar
        title={
          selectOption === "Ownwer"
            ? "All Contracts - Onwer"
            : selectOption === "Cleaner"
            ? "All Contracts - Cleaner"
            : "All Contracts - Guest"
        }
        createProfile={
          selectOption === "Ownwer"
            ? "Cleaner"
            : selectOption === "Cleaner"
            ? "Cleaner"
            : "Guest"
        }
      />

      <div style={{ marginTop: "40px" }}>
        {selectOption === "Cleaner" || selectOption === "Cleaner" ? (
          <ContractList
            col1={"Name"}
            col2={"Contract"}
            col3={"Signed"}
            col4={"Date"}
            header={"true"}
          />
        ) : (
          <ContractList
            col1={"Name"}
            col2={"MemberShip"}
            col3={"Contract"}
            col4={"Signed"}
            col5={"Date"}
            header={"true"}
          />
        )}
      </div>
      <div className="userpage-list-container">
        {selectOption === "Cleaner" ? (
          <div>
            {data.map((e) => {
              return (
                <ContractList
                  col1={"Name"}
                  col2={"Contract"}
                  col3={"Signed"}
                  col4={"Date"}
                  key={e.id}
                />
              );
            })}
          </div>
        ) : selectOption === "Guest" ? (
          <div>
            {data.map((e) => {
              return (
                <ContractList
                  col1={"Name"}
                  col2={"Contract"}
                  col3={"Signed"}
                  col4={"Date"}
                  key={e.id}
                />
              );
            })}
          </div>
        ) : (
          <div>
            {data.map((e) => {
              return (
                <ContractList
                  col1={"Name"}
                  col2={"MemberShip"}
                  col3={"Contract"}
                  col4={"Signed"}
                  col5={"Date"}
                  key={e.id}
                />
              );
            })}
          </div>
        )} */}
      </div>
    </>
  );
};

export default ContractPage;
