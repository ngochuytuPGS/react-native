import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import React from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { windowHeight, windowWidth } from '../../../../../utils/constants';
import { styles } from './DetailImage.styles';
interface Props {
  uri: string;
}

const DetailImage = ({ uri }: Props) => {
  return (
    <ReactNativeZoomableView maxZoom={30} contentWidth={windowWidth} contentHeight={windowHeight}>
      <FastImage style={styles.photo} source={{ uri: uri }} />
    </ReactNativeZoomableView>
  );
};

export default DetailImage;
