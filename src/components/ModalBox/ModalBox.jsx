/* eslint-disable react/prop-types */
import './modal.css'
const ModalBox = ({ id, header, body, footer, handleClose }) => {
    return (
        <div id={id || 'modal'} className="modal">
            <div className="content">
                <div className="header">
                    <h2>{header ? header : 'Header'}</h2>
                    <span onClick={handleClose} className="close-modal">&times;</span>
                </div>
                <div className="body">
                    {body ? body : <p>This is modal body</p>}
                </div>
                <div className="footer">
                    {
                        footer ? footer : <h3>Footer</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalBox
