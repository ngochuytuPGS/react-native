import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './Paging.styles';

interface Props {
  currentPage: number;
  totalPage: number;
}
const Paging = ({ currentPage, totalPage }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pagingText}>
        {currentPage}/{totalPage}
      </Text>
    </View>
  );
};

export default Paging;
