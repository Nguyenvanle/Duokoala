import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";
import { router } from "expo-router";
import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "1",
    title: "DuoKoala đồng hành cùng bạn!",
    text1:
      "Hãy để ứng dụng DuoKoala sẽ đồng hành cùng \n với bạn trong suốt quá trình học tập và cải thiện.",
    image: require("@/assets/images/slide1.png"),
  },
  {
    key: "2",
    title: "Tham gia khóa học, cải thiện trình độ!",
    text1:
      "Hãy tham gia vào vô vàn khóa học thú vị\nđể nâng cao khả năng học tiếng Anh của bạn!!!",
    image: require("@/assets/images/slide2.png"),
  },
  {
    key: "3",
    title: "Từ Học Viên thành Giảng Viên!",
    text1:
      "Nỗ lực hết sức mình, biết đâu ngày nào đó \n bạn sẽ là một thành viên đóng góp các khóa học!!!",
    image: require("@/assets/images/slide3.png"),
  },
  {
    key: "4",
    title: "Đề xuất khóa học phù hợp nhu cầu!",
    text1:
      "Cùng DuoKoala thực hiện một khảo sát nhỏ để có thể\n tìm hiểu được nhu cầu và khả năng của bạn",
    image: require("@/assets/images/slide4.png"),
  },
];

export default class Intro extends Component {
  _renderItem = ({ item }: any) => {
    return (
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={styles.slide}
      >
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <View style={styles.content}>
          <Text style={text.subTitle}>{item.title}</Text>
          <Text style={[text.mainContent, { fontSize: 14 }]}>{item.text1}</Text>
        </View>
      </ImageBackground>
    );
  };
  _onDone = () => {
    // User finished the introduction. Navigate to main screen here.
    // Maybe let's redirect him to createStackNavigator...
    console.log("Intro finished");
    router.push("/suggest/certificate");
  };

  _skipHandler = () => {
    console.log("(onboarding) x-> (signup)");
  };
  _renderNextButton = () => {
    return (
      <View>
        <View style={styles.button}>
          <FlaticonIcon
            size={35}
            uri={"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}
          />
        </View>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View>
        <View style={styles.button}>
          <FlaticonIcon
            size={35}
            uri={"https://cdn-icons-png.flaticon.com/128/10486/10486568.png"}
          />
        </View>
      </View>
    );
  };

  _renderSkipButton = () => {
    return (
      <View>
        <View style={styles.button}>
          <FlaticonIcon
            size={35}
            uri={"https://cdn-icons-png.flaticon.com/128/2722/2722998.png"}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
        renderSkipButton={this._renderSkipButton}
        showSkipButton={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    ...defaultStyles.pageContainer,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  content: {
    gap: 10,
    marginTop: -50,
  },
  image: {
    width: 350,
    height: 350,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: Colors.milk,
    borderWidth: 2,
    borderColor: Colors.blue.text,
    margin: 2,
  },
});
//   render() {
//     const doneHandler = () => {
//       console.log(`(onboarding) --> (signup)`);
//       router.push(`/(login)/(signup)`);
//     };

//     const skipHandler = () => {
//       console.log("(onboarding) x-> (signup)");
//       router.push("/(login)/(signup)");
//     };

//     return (
//       <SafeAreaView>
//         <StatusBar />
//         <AppIntroSlider
//           keyExtractor={this._keyExtractor}
//           renderItem={this._renderItem}
//           data={data}
//           // dotStyle={styles.dotStyle}
//           // activeDotStyle={styles.activeDotStyle}
//           renderDoneButton={this._renderDoneButton}
//           renderNextButton={this._renderNextButton}
//           onDone={doneHandler}
//           showSkipButton={true}
//           onSkip={skipHandler}
//           renderSkipButton={this._renderSkipButton}
//         />
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   slide: {},
// });
