import { useState } from "react"
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [inputValue, SetInputValue] = useState('');
    const [qrcode, setQrCode] = useState('');

    const handleQRGenerator = () => {
        setQrCode(inputValue);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1>QR Code Generator</h1>
            <div style={{ margin: "20px auto" }}>
                <input
                    name="qr-code"
                    value={inputValue}
                    onChange={(e) => SetInputValue(e.target.value)}
                    type="text" placeholder="Enter here..." />
                <button disabled={inputValue && inputValue.trim() !== '' ? false : true} onClick={handleQRGenerator}>Generate QR Code</button>
            </div>
            <QRCode id="qr-code-value" value={qrcode} size={250} />
        </div>
    )
}

export default QRCodeGenerator
