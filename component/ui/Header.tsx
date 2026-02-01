import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => router.push("/")}
          activeOpacity={0.8}
        >
          <View
            style={{
              backgroundColor: "#FFD700",
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Ionicons name="paw" size={24} color="#000000" />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          tail<Text style={{ color: "#FFD700" }}>Mate</Text>
        </Text>
      </View>
      
      <View style={{ width: 40 }} />
    </View>
  );
};

export default Header;