import { SharedValue } from "react-native-reanimated";

// screens/IndexScreen/IndexScreenModel.ts
interface IndexScreenModel {
  fontsLoaded: boolean;
  opacity: SharedValue<number>;
  onLayoutRootView: () => Promise<void>;
}

export default IndexScreenModel;
