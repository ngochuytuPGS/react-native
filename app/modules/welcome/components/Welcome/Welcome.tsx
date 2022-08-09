import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../configs/routes';
import { RootStackParams } from '../../../../../Routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './Welcome.styles';

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

export default Welcome;
