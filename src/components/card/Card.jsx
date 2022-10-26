import React, { useState } from "react";
import "./Card.css";

// #2be4ea
export default function Card() {
  const [progress, setProgress] = useState(0);
  // console.log("progress", progress);

  const addProgress = () => {
    if (progress >= 100) {
      setProgress(progress);
    } else {
      setProgress(progress + 10);
    }
  };

  var str =
    "This is a Sample Project in development. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias minima voluptatem animi? Voluptate, ducimus fugiat neque dolore autem totam earum eligendi aut natus ipsum, repellat perspiciatis consequatur veritatis explicabo tempora.";
  const complete = () => {
    setProgress(100);
  };
  return (
    <>
      <div className="max-w-md m-auto my-4">
        <div className="rounded-2xl pending-card box">
          {/* <div class="circle"></div> */}

          <div className="text-center p-3 sm:pr-8 ">
            <h3 className="text-xl font-bold title pb-4">This Project</h3>
            <p className="min-h-[20px] paragraph">
              {str.substring(0, 80) + " ..."}
            </p>
          </div>

          <div className="progress_bar" style={{ width: `${progress}%` }}></div>
          <div className="flex justify-between">
            <span className="progress_data">{progress} % Progress</span>

            <span className="progress_data">12 days left</span>
          </div>
          <div>
            <div className="btn_container text-center mr-1 w-[48%]">
              <div className="prog_btn whitespace-nowrap" onClick={addProgress}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block mr-1 ml-0 p-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add 10%
              </div>
              <svg
                className="svgStroke"
                width={222}
                height={65}
                viewBox="0 0 222 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M205 84H21L1 63.4941V18.5765L21 1H205L221 18.5765V63.4941L205 84Z"
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <div className="btn_container text-center my-5 w-[50%]">
              <div className="prog_btn whitespace-nowrap" onClick={complete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block mr-1 ml-0 p-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Complete
              </div>
              <svg
                className="svgStroke"
                width={222}
                height={65}
                viewBox="0 0 222 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M205 84H21L1 63.4941V18.5765L21 1H205L221 18.5765V63.4941L205 84Z"
                  stroke="white"
                  strokeWidth={2}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
