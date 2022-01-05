import {Dimensions} from 'react-native';
import {RFValue as RFValueLib} from 'react-native-responsive-fontsize';

const {height: DEVICE_HEIGHT} = Dimensions.get('window');

export default function RFValue(number: number): number {
  return RFValueLib(number, DEVICE_HEIGHT);
}
