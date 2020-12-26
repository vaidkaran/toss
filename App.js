import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/home';
import Game from './screens/game';
import Toss from './screens/toss';
import Result from './screens/result';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// --- screen stack ---
// home
// game
// toss
// result

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Game' component={Game} />
        <Stack.Screen name='Toss' component={Toss} />
        <Stack.Screen name='Result' component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


//   let screen;
//   const [isGameStarted, setIsGameStarted] = useState(false);
//   const [selectedSide, setSelectedSide] = useState('');
//   const [isTossed, setIsTossed] = useState(false);
//   function startGameHandler() {
//     setIsGameStarted(true);
//   }
//   function endGameHandler() {
//     setIsGameStarted(false);
//   }
//   function sideSelectHandler(side) {
//     setSelectedSide(side);
//   }
//   function restartGame() {
//     setIsGameStarted(false);
//     setSelectedSide('');
//     setIsTossed(false);
//   }

//   if(isGameStarted) {
//     screen = <Game sideSelectHandler={sideSelectHandler} endGameHandler={endGameHandler}/>
//     if(selectedSide) {
//       screen = <Toss setIsTossed={setIsTossed}/>
//       if(isTossed) {
//         screen = <Result restartGame={restartGame} selectedSide={selectedSide}/>
//       }
//     }
//   } else {
//     screen = <Home startGameHandler={startGameHandler}/>
//   }

//   return (
//     <View style={styles.container}>
//       {screen}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
});
