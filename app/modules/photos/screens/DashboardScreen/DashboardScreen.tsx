import React, { useEffect } from 'react';
import { usePhotosContext } from '../../../../contexts/PhotosContext';
import PhotoList from '../../components/dashboard/PhotoList/PhotoList';

const DashboardScreen = () => {
  const { getNextPage } = usePhotosContext();

  useEffect(() => {
    getNextPage();
  }, [getNextPage]);

  return (
    <>
      <PhotoList />
    </>
  );
};

export default DashboardScreen;
