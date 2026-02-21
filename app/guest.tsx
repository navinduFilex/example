import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Redirect, useRouter } from "expo-router";
import Header from "@/component/ui/Header";
import BottomNav from "@/component/ui/BottomNavigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const router = useRouter();
  const {user,loading} = useAuth()

  type ActionKey = "login" | "signup" | "browse";

  const actionRoutes: Record<
    ActionKey,
    "/(auth)/login" | "/(auth)/register" | "/browse"
  > = {
    login: "/(auth)/login",
    signup: "/(auth)/register",
    browse: "/browse",
  };

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

              <Header/>
              <View
                style={{
                  paddingHorizontal: 24,
                  paddingTop: 24,
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
                  Join with TailMate!
                </Text>
                <Text
                  style={{ color: "#9ca3af", fontSize: 16, marginBottom: 40 }}
                >
                  Find perfect breeding partners for your beloved pets.
                  AI-powered matching for optimal compatibility.
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFD700",
                    paddingVertical: 18,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    marginBottom: 16,
                    shadowColor: "#FFD700",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                  activeOpacity={0.8}
                  onPress={() => {
                    router.replace("/(auth)/register")
                  }}
                 
                >
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "rgba(0,0,0,0.1)",
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 16,
                    }}
                  >
                    <Ionicons name="person-add" size={24} color="#000000" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Sign Up Free
                    </Text>
                    <Text
                      style={{
                        color: "rgba(0,0,0,0.7)",
                        fontSize: 14,
                        marginTop: 2,
                      }}
                    >
                      Create your account to find perfect matches
                    </Text>
                  </View>
                  <Ionicons name="arrow-forward" size={24} color="#000000" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    borderColor: "#FFD700",
                    paddingVertical: 18,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    marginBottom: 40,
                  }}
                  activeOpacity={0.8}
                  onPress={()=>{
                    router.replace("/(auth)/login")
                  }}
                >
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      borderRadius: 24,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 16,
                    }}
                  >
                    <Ionicons name="log-in" size={24} color="#FFD700" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Sign In
                    </Text>
                    <Text
                      style={{
                        color: "rgba(255, 215, 0, 0.8)",
                        fontSize: 14,
                        marginTop: 2,
                      }}
                    >
                      Access your existing account
                    </Text>
                  </View>
                  <Ionicons name="arrow-forward" size={24} color="#FFD700" />
                </TouchableOpacity>
              </View>

              <View style={{ paddingHorizontal: 24, marginBottom: 40 }}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 24,
                  }}
                >
                  Community Success
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 32,
                        fontWeight: "bold",
                      }}
                    >
                      2.4K+
                    </Text>
                    <Text
                      style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}
                    >
                      Happy Pets
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 48,
                      width: 1,
                      backgroundColor: "#374151",
                    }}
                  />
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 32,
                        fontWeight: "bold",
                      }}
                    >
                      98%
                    </Text>
                    <Text
                      style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}
                    >
                      Success Rate
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 48,
                      width: 1,
                      backgroundColor: "#374151",
                    }}
                  />
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 32,
                        fontWeight: "bold",
                      }}
                    >
                      156
                    </Text>
                    <Text
                      style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}
                    >
                      Breeds Listed
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ paddingHorizontal: 24, paddingBottom: 40 }}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 24,
                  }}
                >
                  Why Choose TailMate?
                </Text>
                <View style={{ gap: 16 }}>
                  {[
                    {
                      icon: "shield-checkmark",
                      title: "Verified Profiles",
                      description: "All pets are health-certified and registered",
                    },
                    {
                      icon: "analytics",
                      title: "AI-Powered Matching",
                      description: "Smart compatibility analysis based on breed genetics",
                    },
                    {
                      icon: "people",
                      title: "Trusted Community",
                      description: "Connect with responsible pet owners and breeders",
                    },
                    {
                      icon: "lock-closed",
                      title: "Secure Platform",
                      description: "Your data and privacy are our top priority",
                    },
                  ].map((feature, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(255, 215, 0, 0.05)",
                        borderRadius: 16,
                        padding: 16,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.1)",
                      }}
                    >
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: "rgba(255, 215, 0, 0.2)",
                          borderRadius: 12,
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 16,
                        }}
                      >
                        <Ionicons
                          name={feature.icon as any}
                          size={24}
                          color="#FFD700"
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{
                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "600",
                            marginBottom: 4,
                          }}
                        >
                          {feature.title}
                        </Text>
                        <Text
                          style={{
                            color: "#9ca3af",
                            fontSize: 14,
                          }}
                        >
                          {feature.description}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>             
            </ScrollView>
            <BottomNav/>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
  if(!user){
    return <Redirect href={"/(auth)/login"}></Redirect>
  }

  return <Redirect href={"/(dashboard)/home"}></Redirect>
};

export default Index;