import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { API_PATHS } from '../../../configs/api';
import { IPhoto } from '../../../models/photo';
import PhotoList from '../components/dashboard/PhotoList';
import { ActivityIndicator } from 'react-native';

const DashboardScreen = () => {
  const [photos, setPhotos] = useState<Array<IPhoto>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currentPage = useRef<number>(1);

  const getPhotos = useCallback(async (page: number) => {
    setIsLoading(true);
    const response = await axios.get(API_PATHS.photo(page));
    setPhotos((photos) => [...photos, ...response.data]);
    setIsLoading(false);
  }, []);

  const getNextPage = useCallback(() => {
    currentPage.current += 1;
    getPhotos(currentPage.current);
  }, [getPhotos]);

  useEffect(() => {
    getPhotos(currentPage.current);
  }, [getPhotos]);

  return (
    <>
      <PhotoList photos={photos} getNextPage={getNextPage} />
      {isLoading && <ActivityIndicator />}
    </>
  );
};

export default DashboardScreen;
