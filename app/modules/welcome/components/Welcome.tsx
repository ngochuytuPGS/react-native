import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../configs/routes';
import { RootStackParams } from '../../../../Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {}

const Welcome = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const onPressGoToDashboardButton = () => {
    navigation.navigate(ROUTES.dashboard);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title="Go to Dashboard" onPress={onPressGoToDashboardButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
