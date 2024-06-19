import { index } from "@/app/index";
import { IButton } from "@/components/Button";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { AnswerOpsProps, SuggestOpsProps } from "@/components/RadioBG";
import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface SuggestContent {
  uri: string;
  uriSize: number;
  title: string;
  content: string;
}
export function SuggestContent(props: SuggestContent) {
  const { uri, uriSize, title, content } = props;

  return (
    <View style={suggestStyle.container}>
      <View style={overflowLogo.container}>
        <FlaticonIcon uri={uri} size={uriSize} />
      </View>
      <View style={suggestStyle.subFrame}>
        <View style={suggestStyle.contentFrame}>
          <Text style={text.title}>{title}</Text>
        </View>
      </View>
      <View style={suggestStyle.subFrame}>
        <View style={suggestStyle.contentFrame}>
          <Text style={text.mainContent}>{content}</Text>
        </View>
      </View>
    </View>
  );
}
//< - - - - - - - - - - - - - - - - - - - - >//

interface Handler {
  color: string;
  name: string;
  isButton: boolean;
  handle: () => void;
}

interface SuggestPage {
  suggest: SuggestContent;
  bGroup: SuggestOpsProps | AnswerOpsProps;
  handler: {
    LHandler: Handler;
    RHandler: Handler;
  };
}

export default function SuggestPage(props: SuggestPage) {
  const { suggest, bGroup, handler } = props;

  const left = handler.LHandler;
  const right = handler.RHandler;

  const isSuggestOpsProps = (obj: SuggestOpsProps | AnswerOpsProps) => {
    return "For" in obj;
  };

  function SuggestButton(HandlerLogic: Handler) {
    return HandlerLogic.isButton ? (
      <TouchableOpacity onPress={() => HandlerLogic.handle}>
        <IButton
          backgroundColor={HandlerLogic.color}
          title={HandlerLogic.name}
        />
      </TouchableOpacity>
    ) : (
      <View>
        <IButton
          backgroundColor={HandlerLogic.color}
          title={HandlerLogic.name}
        />
      </View>
    );
  }

  return (
    <View style={suggestStyle.container}>
      <SuggestContent
        uri={suggest.uri}
        uriSize={suggest.uriSize}
        title={suggest.title}
        content={suggest.content}
      />
      <View style={decideScreen.decideFrame}>
        <View style={decideScreen.decideValue}>
          <SuggestButton
            handle={left.handle}
            color={left.color}
            name={left.name}
            isButton={left.isButton}
          />
          <SuggestButton
            handle={right.handle}
            color={right.color}
            name={right.name}
            isButton={right.isButton}
          />
        </View>
      </View>
    </View>
  );
}
//< - - - - - - - - - - - - - - - - - - - - >//

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
