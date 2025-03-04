import { useEffect, useState } from 'react';
import { useModal } from '../../hooks/useModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalGlobal({ children }) {

  const { isOpen, handleModalClose, isSmallDevices, isMobileDevice } = useModal();

  useEffect(() => {
    isMobileDevice(800)
  }, [])

  return (
    <Modal show={isOpen} onHide={handleModalClose}>
      {children}
    </Modal>

  );
}
