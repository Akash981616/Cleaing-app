import React, { useState } from "react";
import FunctionBar from "../component/FunctionBar";
import List from "../component/List";
import { data } from "../data/listData";
import "./ViewReport.scss";
import ViewReport from "./ViewReport";

const ReportPage = () => {
  const createSevrice = () => {
    SetViewReportTooggle(true);
  };
  const [ViewReportTooggle, SetViewReportTooggle] = useState(false);
  return (
    <>
      {ViewReportTooggle === true ? (
        <ViewReport />
      ) : (
        <>
          <FunctionBar
            title={"Service List"}
            createProfile={"Service"}
            onClickFunction={createSevrice}
          />
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
      )}
    </>
  );
};

export default ReportPage;
