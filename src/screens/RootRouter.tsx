import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { RootStackParamList } from './types/root'
import HomeScreen from './HomeScreen'
import HeaderTitle from '../components/HeaderTitle';
import DetailScreen from './DetailScreen';
import ButtonBack from '../components/ButtonBack';

const Stack = createStackNavigator<RootStackParamList>();

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <HeaderTitle title='Home'/>
          ),
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerLeft: () => (
            <ButtonBack handlePress={() => navigation.goBack()} />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
