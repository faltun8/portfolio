import React, { useEffect, useCallback } from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import ImageSlider from '../components/components/ImageSlider'

const Modal = ({folder}) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
        console.log('I pressed');
      }
    },
    [closeModal, isModalOpen]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <ImageSlider/>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;


