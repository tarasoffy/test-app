import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { RootStackParamList } from './types/root'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen';
import HeaderTitle from '../components/ui/HeaderTitle';
import ButtonBack from '../components/ui/ButtonBack';
import { ArrowLeftIcon } from '../assets/icons';

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
            <ButtonBack handlePress={() => navigation.goBack()} icon={<ArrowLeftIcon />}/>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
