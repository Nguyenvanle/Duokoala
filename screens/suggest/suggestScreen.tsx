import { index } from "@/app/index";
import { IButton } from "@/components/Button";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SuggestScreenProps } from "./model";
import {
  AnswerOpsProps,
  AnswerRadioBG,
  RadioBG,
  SuggestOpsProps,
} from "./../../components/RadioBG";
import { SuggestRadioBG } from "@/components/RadioBG";

function SuggestButton(props: SuggestScreenProps) {
  const { buttons } = props;
  return (
    <>
      {buttons.map((button, index) =>
        button.isButton ? (
          <TouchableOpacity key={index} onPress={button.handle}>
            <IButton backgroundColor={button.color} title={button.name} />
          </TouchableOpacity>
        ) : (
          <View key={index}>
            <IButton backgroundColor={button.color} title={button.name} />
          </View>
        )
      )}
    </>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

function RenderOptions(props: SuggestScreenProps) {
  const { radioBG } = props;
  const isSuggestProps = () => {
    return "For" in radioBG;
  };
  return isSuggestProps() ? (
    <SuggestRadioBG
      For={(radioBG as SuggestOpsProps).For}
      Options={radioBG.Options}
      Default={(radioBG as SuggestOpsProps).Default}
    ></SuggestRadioBG>
  ) : (
    <AnswerRadioBG
      Options={radioBG.Options}
      Correct={(radioBG as AnswerOpsProps).Correct}
      Status={(radioBG as AnswerOpsProps).Status}
    ></AnswerRadioBG>
  );
}

export default function SuggestPage(props: SuggestScreenProps) {
  const { suggest, radioBG, buttons } = props;

  return (
    <View style={suggestStyle.container}>
      <View style={suggestStyle.container}>
        <View style={overflowLogo.container}>
          <FlaticonIcon uri={suggest.uri} size={suggest.uriSize} />
        </View>
        <View style={suggestStyle.subFrame}>
          <View style={suggestStyle.contentFrame}>
            <Text style={text.title}>{suggest.title}</Text>
          </View>
        </View>
        <View style={suggestStyle.subFrame}>
          <View style={suggestStyle.contentFrame}>
            <Text style={text.mainContent}>{suggest.content}</Text>
          </View>
        </View>
      </View>
      <View style={suggestStyle.subFrame}>
        <View style={decideScreen.decideValue}>
          <RenderOptions
            suggest={suggest}
            radioBG={radioBG}
            buttons={buttons}
          ></RenderOptions>
        </View>
      </View>
      <View style={decideScreen.decideValue}>
        <SuggestButton
          suggest={suggest}
          radioBG={radioBG}
          buttons={buttons}
        ></SuggestButton>
      </View>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

export const suggestStyle = StyleSheet.create({
  container: {
    ...index.container,
    justifyContent: "center",
    alignContent: "flex-start",
    paddingVertical: 20,
  },
  subFrame: {
    flex: 0,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  contentFrame: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  button: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.black,
  },
});

//< - - - - - - - - - - - - - - - - - - - - >//

export const decideScreen = StyleSheet.create({
  decideFrame: {
    flex: 0,
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  decideValue: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
    flexShrink: 0,
    gap: 10,
    alignSelf: "stretch",
  },
});

export const overflowLogo = StyleSheet.create({
  container: {
    flex: 0,
    overflow: "hidden", // Cắt icon nếu nó vượt quá kích thước khung
    maxHeight: 260,
    alignItems: "center",
    justifyContent: "center",
  },
});
