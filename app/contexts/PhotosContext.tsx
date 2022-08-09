import { View, Text } from 'react-native';
import React, { createContext, ReactNode, useCallback, useContext, useRef } from 'react';
import { IPhoto } from '../models/photo';
import axios from 'axios';
import { API_PATHS } from '../configs/api';

interface PhotosContextProps {
  photos: Array<IPhoto>;
  getNextPage: () => void;
}

const PhotosContext = createContext<PhotosContextProps>({ photos: [], getNextPage: () => {} });

export const usePhotosContext = () => useContext(PhotosContext);

interface Props {
  children: ReactNode;
}

const PhotosContextProvider = ({ children }: Props) => {
  const [photos, setPhotos] = React.useState<Array<IPhoto>>([]);
  const currentPage = useRef<number>(0);

  const getPhotos = useCallback(async (page: number) => {
    const response = await axios.get(API_PATHS.photo(page));
    setPhotos((photos) => [...photos, ...response.data]);
  }, []);

  const getNextPage = useCallback(() => {
    currentPage.current += 1;
    getPhotos(currentPage.current);
  }, [getPhotos]);

  return <PhotosContext.Provider value={{ photos, getNextPage }}>{children}</PhotosContext.Provider>;
};

export default PhotosContextProvider;
