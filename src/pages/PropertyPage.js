import React, { useState } from "react";
import FunctionBar from "../component/FunctionBar";
import List from "../component/List";
import SelectButton from "../component/SelectButton";

const PropertyPage = () => {
  const [selectOption, setSelectOption] = useState("Property List");


  return (
    <div>
      <SelectButton
        firstOption={"Property List"}
        secondOption={"Property Items"}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
      <FunctionBar
        title={
          selectOption === "Property List" ? "Property List" : "Property Items"
        }
        createProfile={selectOption === "Property List" ? "Property" : "Item"}
      />
      <div style={{ marginTop: "40px" }}>
        {selectOption === "Property List" ? (
          <List
            name={"Property Name"}
            phoneno={"Property Type"}
            property={"Onwer"}
            email={"Items"}
            city={"Contract"}
            document={"Image Actions"}
            header={true}
          />
        ) : (
          <List
            name={"Property Name"}
            phoneno={"Property Type"}
            property={"Onwer"}
            email={"Items"}
            city={"Contract"}
            document={"Image Actions"}
            header={true}
          />
        )}

        <div className="userpage-list-container">
          {selectOption === "Property List" ? (
            <div>
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
                editIcon={true}
              />
            </div>
          ) : (
            <>
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
              <List
                name={"Property Name"}
                phoneno={"Property Type"}
                property={"Onwer"}
                email={"Items"}
                city={"Contract"}
                document={"Image Actions"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
