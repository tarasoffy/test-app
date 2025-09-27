import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../screens/types/root';

export type TypedNavigation<T extends keyof RootStackParamList> = NavigationProp<RootStackParamList, T>;

export function useTypedNavigation<T extends keyof RootStackParamList>() {
  return useNavigation<TypedNavigation<T>>();
}
