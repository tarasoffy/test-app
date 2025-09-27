import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  Detail: { data: DataCard };
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
