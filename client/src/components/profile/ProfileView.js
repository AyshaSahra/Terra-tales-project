import Modal from "@mui/material/Modal";
import assets from "../../constants/assets";


export default function ProfileView({ open, handleClose, handleOpen, state }){
    return (

        <Modal
          onClose={handleClose}
          open={open}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
    
    
      
          <div className="w-1/3 h-fit mx-auto p-5 rounded-lg glass-effect">
            <div className="flex flex-col gap-4 justify-center items-center">
                <img src={assets.profile} className="w-24 h-24"/>
                <p className="text-white font-AndikaBold text-3xl">
                    Aysha Sahra M
                </p>
                <div className="flex flex-col justify-center items-center gap-5 w-full">
                <button className='bg-white text-black w-full font-Andika font-semibold flex justify-center items-center text-m rounded-xl px-9 py-2.5'>
                    Sign Out
                </button>
                </div>
            </div>
          </div>
        </Modal>
      );
}