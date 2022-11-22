import React, { useState } from "react";
import FunctionBar from "../component/FunctionBar";
import List from "../component/List";
import { data } from "../data/listData";
import "./ViewReport.scss";
import ViewReport from "./ViewReport";
import Model from "../model/Model";

const ReportPage = () => {
  const createSevrice = () => {
    SetViewReportTooggle(true);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ViewReportTooggle, SetViewReportTooggle] = useState(false);
  return (
    <>
      {open === true && (
        <Model
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setOpen={setOpen}
        />
      )}
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
          <div className="report-scroll-container">
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
                  setOpen={setOpen}
                  SetViewReportTooggle={SetViewReportTooggle}
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
