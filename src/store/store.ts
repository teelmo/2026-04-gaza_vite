import { create } from 'zustand';

type Store = {
  lang: 'fi' | 'sv';
  setLang: (lang: 'fi' | 'sv') => void;
  mapInfo: boolean;
  setMapInfo: (mapInfo: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  lang: 'fi',
  setLang: (lang) => set({ lang }),
  mapInfo: false,
  setMapInfo: (mapInfo) => set({ mapInfo }),
}));

export default useStore;
