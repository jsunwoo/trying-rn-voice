/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  // Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Voice from "react-native-voice";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

// type Props = {};
// export default class App extends Component<Props> {
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value
    });
  }

  start() {
    Voice.start("ko_KR");
    // Voice.start("en_US");
    console.log("start");
  }

  stop() {
    Voice.stop();
    console.log("start");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.start.bind()}>
          <Text style={styles.instructions}>START</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.stop.bind()}>
          <Text style={styles.instructions}>STOP</Text>
        </TouchableOpacity>
        {this.state.results.map((result, index) => {
          return <Text key={index}>{result}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
