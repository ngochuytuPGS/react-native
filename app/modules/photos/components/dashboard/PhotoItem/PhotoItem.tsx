import { TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../../../../Routes';
import { ROUTES } from '../../../../../configs/routes';
import { styles } from './PhotoItem.styles';
import { IPhoto } from '../../../../../models/photo';

interface Props {
  uri: string;
  id: string;
}

const PhotoItem = ({ id, uri }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const onGoToDetailScreen = () => {
    navigation.navigate(ROUTES.detail, {
      id,
    });
  };

  return (
    <TouchableOpacity style={styles.photoContainer} onPress={onGoToDetailScreen}>
      <FastImage style={styles.photo} source={{ uri: uri }} />
    </TouchableOpacity>
  );
};

export default memo(PhotoItem);
