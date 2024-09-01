import { useState, useEffect } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [alt, setAlt] = useState('');
  const [title, setTitle] = useState('');

  const openModal = (image, alt, title) => {
    setSelectedImage(image);
    setAlt(alt);
    setTitle(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setAlt('');
    setTitle(''); 
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return { isOpen, selectedImage, alt, title, openModal, closeModal };
};

export {useModal};
