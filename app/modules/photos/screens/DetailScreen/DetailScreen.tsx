import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { RootStackParams } from '../../../../../Routes';
import { ROUTES } from '../../../../configs/routes';
import { usePhotosContext } from '../../../../contexts/PhotosContext';
import ListDetailImage from '../../components/detail/ListDetailImage/ListDetailImage';
import Paging from '../../components/detail/Paging/Paging';

const DetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParams, ROUTES.detail>>();
  const { id } = route.params;
  const { photos } = usePhotosContext();
  const initialImageIndex = useMemo(() => {
    return photos.findIndex((photo) => photo.id === id);
  }, [photos, id]);
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const setCurrentPage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <>
      <Paging currentPage={currentImageIndex + 1} totalPage={photos.length} />
      <ListDetailImage initialImageIndex={initialImageIndex} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default DetailScreen;
