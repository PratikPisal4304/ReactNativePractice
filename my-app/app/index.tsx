import { Link } from "expo-router";
import { Button, Text, View } from "react-native";


const Index = () => {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontSize:30, fontWeight: "700", color:"red"}}>
      Welcome to my app
    </Text>
    <Link href="/about/index">Go to About</Link>

  </View>

}

export default Index;