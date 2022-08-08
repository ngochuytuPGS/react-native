import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { RootStackParams } from '../../../../Routes';
import { ROUTES } from '../../../configs/routes';
import DetailImage from '../components/detail/DetailImage';

const DetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParams, ROUTES.detail>>();

  return (
    <ScrollView style={styles.container}>
      <DetailImage uri={route.params.uri} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
