import { makeAutoObservable } from 'mobx';

class GalleryStore {
  data = [];
  loading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  setData(data) {
    this.data = data;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setError(error) {
    this.error = error;
  }
}

const galleryStore = new GalleryStore();
export default galleryStore;
