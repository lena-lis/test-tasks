import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, image, alt, title }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`; // Добавляем отступ, чтобы избежать сдвига контента вправо
      document.body.classList.add('scroll-lock');
    } else {
      document.body.style.paddingRight = '0'; // Убираем отступ
      document.body.classList.remove('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__container">
        <figure className="modal__content">
          <span className="modal__close" onClick={onClose}>&times;</span>
          <img src={image} alt={alt} />
          <figcaption>{title}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Modal;
