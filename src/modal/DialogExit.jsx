import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function DialogExit() {
  const [dialog, setDialog] = useState(true);

  const location = useLocation();
  const {modal} = location.state;

  console.log(modal);
  let navigate = useNavigate()
  let {id} = useParams()
  const ref = useRef();
  useLayoutEffect(() => {
    if (dialog) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [dialog]);
  
  const handleClose = () => {
    navigate(-1)
  }
  const closeTab = () => {
    window.close();
  };
  return (
    <dialog ref={ref} className=" w-fit h-fit bg-white py-6 px-3">
      <p onClick={handleClose}>&times;</p>
      <div>
        <p>Apa anda yakin ingin keluar?</p>
      </div>
      <div className=" flex justify-center gap-7 pt-5 ">
        <button
          onClick={closeTab}
          className=" hover:bg-text border-solid border border-black px-3 py-1"
        >
          ya
        </button>
        <button
          onClick={() => setDialog(!dialog)}
          className="hover:bg-red-300 border-solid border border-black px-3 py-1"
        >
          tidak
        </button>
      </div>
    </dialog>
  );
}
