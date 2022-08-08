import { FlatList } from 'react-native';
import React from 'react';
import { IPhoto } from '../../../../models/photo';
import PhotoItem from './PhotoItem';

interface Props {
  photos: Array<IPhoto>;
  getNextPage: () => void;
}

const PhotoList = ({ photos, getNextPage }: Props) => {
  return (
    <FlatList
      numColumns={3}
      keyExtractor={(photo) => photo.id}
      data={photos}
      renderItem={({ item }) => <PhotoItem uri={item.urls.regular} />}
      onEndReached={getNextPage}
    />
  );
};

export default PhotoList;
