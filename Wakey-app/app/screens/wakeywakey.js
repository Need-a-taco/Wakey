import { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE1E1',
  },
  wrapper: {
    width: '72%',
    aspectRatio: 1,
    borderColor: 'white',
    backgroundColor: '#E2E7F7',
    borderWidth: 3,
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'red',
  },
});

const WakeyWakey = () => {
  // colors we have
  const colors = ['red', 'green', 'blue', 'orange', 'pink', 'brown']; 
  // index of colors
  const colorIndex = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorIndex, {
        toValue: 5,
        duration: 7000,
        useNativeDriver: false,
      }),
      { iterations: -1 }
    ).start();
  }, []);
  // go through the colors
  const textColor = colorIndex.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5],
    outputRange: colors,
  });

  return (
    <View style= {styles.container}>
      <View  style= {styles.wrapper}>  
        <Link href="soundboard/soundboard" asChild>
          <TouchableWithoutFeedback>
            <Animated.Text style={[styles.text, { color: textColor }]}>
              WAKEY WAKEY
            </Animated.Text>
          </TouchableWithoutFeedback>
        </Link>
      </View>
    </View>


  );
}

export default WakeyWakey;
