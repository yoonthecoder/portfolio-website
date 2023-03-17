import { useState } from "react";

const ReviewForm = () => {
  const [nickname, setNickname] = useState();
  const [message, setMessage] = useState();
  const handleSubmit = () => {};
  return (
    <>
      {" "}
      <div
        className="bg-yellow/40 w-2/5 text-black flex flex-col flex-shrink-0 justify-center gap-3 border border-lightgray rounded p-10"
        style={{ maxWidth: "400px" }}
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-yellow font-medium tracking-tighter">
            Have you worked with Yoon before?
          </h2>
          <div className="text-black leading-tight text-sm">
            Feel free to send me a review! It can be short and anonymous. 🥰
          </div>
        </div>
        <form className="flex flex-col gap-3" method="GET">
          <div className="flex flex-col gap-1">
            <label className="text-sm">Your name/nickname</label>
            <input
              className="border border-lightgray rounded py-1 px-2 text-sm"
              placeholder="yoonisthebest"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">
              What do you like about working with Yoon?
            </label>
            <textarea
              className="border border-lightgray rounded px-2 py-1 text-sm"
              placeholder="Yoon knows all the good restaurants in town."
            />
          </div>
        </form>
        <input
          type="submit"
          className="bg-yellow px-4 text-white tracking-tight rounded-sm py-1 px-2 cursor-pointer"
        ></input>
      </div>
    </>
  );
};

export default ReviewForm;
