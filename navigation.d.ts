import {RootStackParamList} from './src/routes/StackScreens.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
