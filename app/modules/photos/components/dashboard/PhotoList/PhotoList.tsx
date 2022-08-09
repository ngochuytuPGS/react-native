import React from 'react';
import { FlatList } from 'react-native';
import { usePhotosContext } from '../../../../../contexts/PhotosContext';
import PhotoItem from '../PhotoItem/PhotoItem';

interface Props {}

const PhotoList = (props: Props) => {
  const { photos, getNextPage } = usePhotosContext();

  return (
    <FlatList
      numColumns={3}
      keyExtractor={(photo) => photo.id}
      data={photos}
      renderItem={({ item }) => <PhotoItem id={item.id} uri={item.urls.regular} />}
      onEndReached={getNextPage}
    />
  );
};

export default PhotoList;
