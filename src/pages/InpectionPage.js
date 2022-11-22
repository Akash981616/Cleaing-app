import React, { useState } from "react";
import FunctionBar from "../component/FunctionBar";
import List from "../component/List";
import OnwerList from "../component/OwnerList";
import SelectButton from "../component/SelectButton";
import { data } from "../data/listData";
import CreateInpectionForm from "../forms/CreateInpectionForm";

const InpectionPage = () => {
  const [selectOption, setSelectOption] = useState("Cleaners");
  const [openCreateInpectionForm, SetopenCreateInpectionForm] = useState(false);
  console.log(openCreateInpectionForm);
  return (
    <>
      {openCreateInpectionForm === true ? (
        <CreateInpectionForm />
      ) : (
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
            SetopenCreateInpectionForm={SetopenCreateInpectionForm}
          />
        </>
      )}

      {openCreateInpectionForm === true ? (
        <></>
      ) : (
        <>
          <div style={{ marginTop: "40px" }}>
            {selectOption === "Cleaner" || selectOption === "Guest" ? (
              <List
                name={"Name"}
                phoneno={"Phone no."}
                property={"Property"}
                email={"Email"}
                city={"City"}
                document={"Docment"}
                header={true}
              />
            ) : (
              <OnwerList
                name={"Name"}
                phoneno={"Phone No."}
                property={"Propery"}
                email={"Email"}
                city={"City"}
                header={true}
                ownerType={"Owner Type"}
                contractType={"Contract"}
                status={"Status"}
              />
            )}
          </div>
          <div className="userpage-list-container">
            {selectOption === "Cleaner" ? (
              <div>
                {data.map((e) => {
                  return (
                    <List
                      key={e.id}
                      name={e.name}
                      phoneno={e.phoneno}
                      property={e.property}
                      email={e.email}
                      city={e.city}
                      document={e.document}
                      status={e.status}
                      contract={e.contract}
                      ownerType={e.ownerType}
                      type={"cleaner"}
                    />
                  );
                })}
              </div>
            ) : selectOption === "Guest" ? (
              <div>
                {data.map((e) => {
                  return (
                    <List
                      key={e.id}
                      name={e.name}
                      phoneno={e.phoneno}
                      property={e.property}
                      email={e.email}
                      city={e.city}
                      document={e.document}
                      status={e.status}
                      contract={e.contract}
                      ownerType={e.ownerType}
                      editIcon={true}
                    />
                  );
                })}
              </div>
            ) : (
              <div>
                {data.map((e) => {
                  return (
                    <OnwerList
                      name={"Name"}
                      phoneno={"Phone No."}
                      property={"Propery"}
                      email={"Email"}
                      city={"City"}
                      ownerType={"Owner Type"}
                      contractType={"Contract"}
                      status={"Status"}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default InpectionPage;
