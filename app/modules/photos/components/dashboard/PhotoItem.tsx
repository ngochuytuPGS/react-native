import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../../Routes';
import { ROUTES } from '../../../../configs/routes';

interface Props {
  uri: string;
}

const PhotoItem = ({ uri }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const onGoToDetailScreen = () => {
    navigation.navigate(ROUTES.detail, {
      uri: uri,
    });
  };

  return (
    <TouchableOpacity style={styles.photoContainer} onPress={onGoToDetailScreen}>
      <FastImage style={styles.photo} source={{ uri: uri }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1 / 3,
  },
  photo: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});

export default memo(PhotoItem);
