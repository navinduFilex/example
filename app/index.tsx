import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native"

const Index = () =>{

  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/guest");
    }, 0); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Redirecting to Guest Page...</Text>
    </View>
  );
}

export default Index