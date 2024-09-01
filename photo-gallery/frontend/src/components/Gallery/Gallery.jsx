// import React from "react";
// import { observer } from 'mobx-react-lite';
// import Title from "./Title";

// const Gallery = observer(({ data, url }) => {
//   return (
//     <section className="gallery">
//       <Title level='1'>Фотографии из путешествий</Title>
//       <ul className="gallery__list">
//         {data.map((item) => (
//           <li className="gallery__item" key={item.id}>
//             <div className="gallery__image-container">
//               <img src={url + '/' + item.photo + '/' + item.filename + '.jpg'} alt={item.alt} />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// });

// export default Gallery;


// import React, { useState } from "react"; 
// import { observer } from 'mobx-react-lite'; 
// import Title from "./Title"; 

// const Thumbnails = observer(({ data, url }) => { 
//   const [isModalOpen, setIsModalOpen] = useState(false); 
//   const [selectedImage, setSelectedImage] = useState(null); 

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   return ( 
//     <section className="gallery"> 
//       <Title level='1'>Фотографии из путешествий</Title> 
//       <ul className="gallery__list"> 
//         {data.map((item) => ( 
//           <li className="gallery__item" key={item.id}> 
//             <div className="gallery__image-container" onClick={() => openModal(url + '/' + item.photo + '/' + item.filename + '.jpg')}> 
//               <img src={url + '/' + item.photo + '/' + item.filename + '.jpg'} alt={item.alt} /> 
//             </div> 
//           </li> 
//         ))} 
//       </ul> 

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal__content">
//             <span className="modal__close" onClick={closeModal}>&times;</span>
//             <img src={selectedImage} alt="Модальное изображение" />
//           </div>
//         </div>
//       )}
//     </section> 
//   ); 
// }); 

// export default Thumbnails;

import React from "react"; 
import { observer } from 'mobx-react-lite'; 
import Title from "../Title/Title.jsx"; 
import Modal from "../Modal/Modal.jsx"; 
import {useModal} from "../Modal/useModal.js";

const Gallery = observer(({ data, url }) => { 
  const { isOpen, selectedImage, alt, title, openModal, closeModal } = useModal();

  return ( 
    <section className="gallery"> 
      <Title level='1'>Фотографии из путешествий</Title> 
      <ul className="gallery__list"> 
        {data.map((item) => ( 
          <li className="gallery__item" key={item.id} tabIndex="0"> 
            <div 
              className="gallery__image-container" 
              onClick={() => openModal(`${url}/${item.photo}/${item.filename}.jpg`, item.alt, item.title)}
            > 
              <img 
                src={`${url}/${item.photo}/${item.filename}.jpg`} 
                alt={item.alt} 
              /> 
            </div> 
          </li> 
        ))} 
      </ul> 

      {/* Подключаем компонент Modal и передаем необходимые пропсы */}
      <Modal 
        isOpen={isOpen} 
        onClose={closeModal} 
        image={selectedImage}
        alt={alt}
        title={title}
      />
    </section> 
  ); 
}); 

export default Gallery;
