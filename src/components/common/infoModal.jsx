import React from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";

const InfoModel = ({ data, visisble, onClose }) => {
  return (
    <Modal isOpen={visisble} fade={false}>
      <ModalHeader>QRCode Information:</ModalHeader>
      <ModalBody>
        {
          <ul>
            {Object.keys(data).map((key) => (
              <li key={key}>{`${key}: ${data[key]}`}</li>
            ))}
          </ul>
        }
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default InfoModel;
