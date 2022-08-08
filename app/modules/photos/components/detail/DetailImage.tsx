import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

interface Props {
  uri: string;
}
const screenHeight = Dimensions.get('window').height;

const DetailImage = ({ uri }: Props) => {
  return <FastImage style={styles.photo} source={{ uri: uri }} />;
};

const styles = StyleSheet.create({
  photo: {
    height: screenHeight,
  },
});

export default DetailImage;
