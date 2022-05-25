import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

const Qr = ({ product, onClick }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL(
      `Name: ${product.name}
    Price: ${product.price}
    Creation Date: ${product.creationDate}`
    ).then((data) => {
      setSrc(data);
    });
  }, []);
  return (
    <div>
      <img src={src} onClick={() => onClick(product)} className="clickable" />
    </div>
  );
};

export default Qr;
