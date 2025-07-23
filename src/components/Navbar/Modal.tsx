import React from "react";
import ModalForm from "./ModalForm";

const Modal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: string;
  setModalOpen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-[#333333]/80 flex justify-center items-center">
      <div className="flex flex-col gap-5 bg-white md:rounded-3xl w-full h-screen md:h-fit md:w-[90%] lg:w-[50%] xl:w-[35%] 2xl:w-[25.4166%] px-5 md:px-15 py-5 md:py-10 shadow-[0px_4px_20px_0px_#FFFFFF40]">
        <div className="flex justify-between items-center">
            <h3 className="text-2xl/[100%] md:text-[32px]/[100%] font-bold">{modalOpen === "login" ? "Login" : "Create Account"}</h3>
            <button className="text-lg/[100%] md:text-2xl/[100%] font-bold text-[#333333]/50 cursor-pointer" onClick={() => setModalOpen("")}>X</button>
        </div>
        <ModalForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default Modal;

