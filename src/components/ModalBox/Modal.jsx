import { useState } from "react"
import ModalBox from "./ModalBox"

const Modal = () => {
    const [modalBox, SetModalBox] = useState(false)
    const handleToggleModalBox = () => {
        SetModalBox(!modalBox)
    }

    const handleClose = () => {
        SetModalBox(false)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <button style={{ padding: '0.5rem 2rem', backgroundColor: '#111', color: '#fff', fontSize: '20px' }} onClick={handleToggleModalBox}>Open Modal</button>
            {
                modalBox && <ModalBox
                    handleClose={handleClose}
                    header={"Wowww a Modal Box"}
                    body={<div>This is a dummy newsletter form so dont bother trying to test it. Not
                        that I expect you to, anyways.</div>}
                    footer={"Dummy Newsletter Footer Content"}
                />
            }
        </div>
    )
}

export default Modal
