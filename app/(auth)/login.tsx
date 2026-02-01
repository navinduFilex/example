import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/component/ui/Header";
import BottomNav from "@/component/ui/BottomNavigation";

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#000000" }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />

        <LinearGradient colors={["#000000", "#1a1a00"]} style={{ flex: 1 }}>
          <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
            >
              <Header />

              <View
                style={{
                  paddingHorizontal: 24,
                  paddingBottom: 24,
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 36,
                    fontWeight: "bold",
                    marginBottom: 8,
                  }}
                >
                  Welcome Back!
                </Text>
                <Text
                  style={{ color: "#9ca3af", fontSize: 16, marginBottom: 40 }}
                >
                  Sign in to your TailMate account to continue finding perfect matches for your pet.
                </Text>

                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 8,
                    }}
                  >
                    Email
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 16,
                    }}
                  >
                    <Ionicons name="mail" size={20} color="#FFD700" style={{ marginRight: 12 }} />
                    <TextInput
                      style={{
                        flex: 1,
                        color: "#ffffff",
                        fontSize: 16,
                        paddingVertical: 16,
                      }}
                      placeholder="Enter your email"
                      placeholderTextColor="#6b7280"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 16 }}>
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 8,
                    }}
                  >
                    Password
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 16,
                    }}
                  >
                    <Ionicons name="lock-closed" size={20} color="#FFD700" style={{ marginRight: 12 }} />
                    <TextInput
                      style={{
                        flex: 1,
                        color: "#ffffff",
                        fontSize: 16,
                        paddingVertical: 16,
                      }}
                      placeholder="Enter your password"
                      placeholderTextColor="#6b7280"
                      secureTextEntry
                    />
                    <TouchableOpacity>
                      <Ionicons name="eye" size={20} color="#FFD700" />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={{ alignSelf: "flex-end", marginBottom: 32 }}
                  activeOpacity={0.7}
                  onPress={()=>{
                    router.push("/(auth)/forgetPassword")
                  }}
                >
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFD700",
                    paddingVertical: 18,
                    borderRadius: 16,
                    alignItems: "center",
                    marginBottom: 24,
                    shadowColor: "#FFD700",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                  activeOpacity={0.8}
                  onPress={()=>router.replace("/(dashboard)/home")}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <View style={{ flex: 1, height: 1, backgroundColor: "rgba(255, 215, 0, 0.2)" }} />
                  <Text
                    style={{
                      color: "#9ca3af",
                      fontSize: 14,
                      marginHorizontal: 16,
                    }}
                  >
                    Or continue with
                  </Text>
                  <View style={{ flex: 1, height: 1, backgroundColor: "rgba(255, 215, 0, 0.2)" }} />
                </View>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1a1a1a",
                    paddingVertical: 16,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 32,
                  }}
                  activeOpacity={0.8}
                >
                  <Ionicons name="logo-google" size={24} color="#FFD700" />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: 16,
                      marginLeft: 12,
                    }}
                  >
                    Sign in with Google
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 40,
                  }}
                >
                  <Text
                    style={{
                      color: "#9ca3af",
                      fontSize: 14,
                    }}
                  >
                    Don't have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/(auth)/register")}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 14,
                        fontWeight: "600",
                      }}
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            <BottomNav/>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default Login;