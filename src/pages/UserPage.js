import React, { useState } from "react";
import List from "../component/List";
import "./UserPage.scss";
import { data } from "../data/listData.js";
import OnwerList from "../component/OwnerList";
import FunctionBar from "../component/FunctionBar";
import SelectButton from "../component/SelectButton";
import CreateOwnerForm from "../forms/CreateOwnerForm";
import CreateCleaner from "../forms/CreateCleaner";
import CreateGuestForm from "../forms/CreateGuestForm";

const UserPage = () => {
  const [selectOption, setSelectOption] = useState("Ownwer");
  const [userPageFormState, SetUserPageFormState] = useState("");
  console.log(userPageFormState);
  return (
    <div>
      {userPageFormState === "User" ? (
        <CreateOwnerForm />
      ) : userPageFormState === "Cleaner" ? (
        <CreateCleaner />
      ) : userPageFormState === "Guest" ? (
        <CreateGuestForm />
      ) : (
        <div>
          <SelectButton
            firstOption={"Ownwer"}
            secondOption={"Cleaner"}
            thirdOprtion={"Guest"}
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
              selectOption === "Ownwer"
                ? "User"
                : selectOption === "Cleaner"
                ? "Cleaner"
                : "Guest"
            }
            SetUserPageFormState={SetUserPageFormState}
            userPageFormState={userPageFormState}
          />
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
        </div>
      )}
    </div>
  );
};

export default UserPage;
