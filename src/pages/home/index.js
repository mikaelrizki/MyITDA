import { View } from "react-native";
import Text from "../../components/Text";
import { STYLES } from "../../styles";

export default function Home({navigation}) {
  return (
    <View style={STYLES.container}>
      <Text onPress={()=> navigation.navigate('Splash')}>Home</Text>
    </View>
  );
}