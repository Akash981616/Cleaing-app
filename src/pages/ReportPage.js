import React from "react";
import FunctionBar from "../component/FunctionBar";
import List from "../component/List";
import { data } from "../data/listData";

const ReportPage = () => {
  const [createServicePage, setcreateServicePage] = useState(false);
  return (
    <>
      <FunctionBar title={"Service List"} createProfile={"Service"}/>
      <div style={{ marginTop: "40px" }}>
        <List
          name={"Service Name"}
          phoneno={"Price Per Hour"}
          property={"Assign"}
          email={"Image"}
          city={"Description"}
          document={"Status"}
          header={true}
        />
      </div>
      <div className="userpage-list-container">
        {data.map((e) => {
          return (
            <List
              key={e.id}
              name={"Service Name"}
              phoneno={"Price Per Hour"}
              property={"Assign"}
              email={"Image"}
              city={"Description"}
              document={"Status"}
            />
          );
        })}
      </div>
    </>
  );
};

export default ReportPage;
