import { useState } from "react"
import ModalBox from "./ModalBox"

const Modal = () => {
    const [modalBox, SetModalBox] = useState(false)
    const handleToggleModalBox = () => {
        SetModalBox(!modalBox)
    }
    return (
        <div>
            <button onClick={handleToggleModalBox}>View</button>
            {
                modalBox && <ModalBox />
            }
        </div>
    )
}

export default Modal
