import React from "react";

export default function NoDataCard({ openModal }) {
  return (
    <div>
      <div className="max-w-md m-auto my-8">
        <div className="rounded-2xl pending-card box">
          <div className="circle"></div>

          <div className="text-center p-3 sm:pr-8 ">
            <h3 className="text-xl font-bold title pb-4">No Data</h3>
            <p className="paragraph">
              You haven't added any project yet. Click on the Buttton below to
              Add One
            </p>
          </div>
          <div className="btn_container text-center my-5">
            <div className="circle2">
              <button type="button" onClick={openModal} className="form_btn">
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
