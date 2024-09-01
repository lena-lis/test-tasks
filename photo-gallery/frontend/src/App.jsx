import React from 'react';
import { observer } from 'mobx-react-lite';
import useFetch from './api';
import Header from "./components/Header/Header";
import Gallery from './components/Gallery/Gallery';
import Footer from "./components/Footer/Footer";
import galleryStore from './stores/GalleryStore';

const BASE_URL = 'http://127.0.0.1:8055/items/gallery';
const ASSETS_URL = 'http://127.0.0.1:8055/assets';

const App = observer(() => {
  useFetch(BASE_URL);

  return (
    <>
      <Header />
      <main>
        {galleryStore.loading ? (
          <p>Загрузка данных...</p>
        ) : galleryStore.error ? (
          <p>Ошибка: {galleryStore.error}</p>
        ) : (
          <Gallery data={galleryStore.data} url={ASSETS_URL} />
        )}
      </main>
      <Footer />
    </>
  );
});

export default App;
