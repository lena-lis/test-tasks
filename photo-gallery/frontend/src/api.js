import { useEffect } from 'react';
import galleryStore from './stores/GalleryStore';

const useFetch = (url) => {
  useEffect(() => {
    const fetchData = async () => {
      galleryStore.setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        galleryStore.setData(fetchedData.data);
      } catch (err) {
        galleryStore.setError(err.message);
      } finally {
        galleryStore.setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data: galleryStore.data, loading: galleryStore.loading, error: galleryStore.error };
};

export default useFetch;
