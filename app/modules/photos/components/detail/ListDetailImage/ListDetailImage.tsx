import { View, Text, FlatList, ViewToken } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { styles } from './ListDetailImage.styles';
import { usePhotosContext } from '../../../../../contexts/PhotosContext';
import { windowHeight } from '../../../../../utils/constants';
import DetailImage from '../DetailImage/DetailImage';
import { IPhoto } from '../../../../../models/photo';

interface Props {
  initialImageIndex: number;
  setCurrentPage: (index: number) => void;
}

const ListDetailImage = ({ initialImageIndex, setCurrentPage }: Props) => {
  const { photos, getNextPage } = usePhotosContext();
  const viewabilityConfigRef = useRef({ itemVisiblePercentThreshold: 30 });

  const getFlatListItemLayout = useCallback((data: IPhoto[] | null | undefined, index: number) => {
    return {
      length: windowHeight,
      offset: windowHeight * index,
      index,
    };
  }, []);

  const onViewableItemsChanged = useCallback(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      const viewableItems = info.viewableItems;
      setCurrentPage(viewableItems[viewableItems.length - 1].index as number);
    },
    [setCurrentPage],
  );

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(photo) => photo.id}
      data={photos}
      renderItem={({ item }) => <DetailImage uri={item.urls.regular} />}
      pagingEnabled={true}
      onEndReached={getNextPage}
      getItemLayout={getFlatListItemLayout}
      initialScrollIndex={initialImageIndex}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfigRef.current}
    />
  );
};

export default ListDetailImage;
