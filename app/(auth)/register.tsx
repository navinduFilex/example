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

const Register = () => {
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
                  Join TailMate!
                </Text>
                <Text
                  style={{ color: "#9ca3af", fontSize: 16, marginBottom: 40 }}
                >
                  Create your account to start finding perfect breeding partners for your beloved pet.
                </Text>

                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 8,
                    }}
                  >
                    Username
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
                    <Ionicons name="person" size={20} color="#FFD700" style={{ marginRight: 12 }} />
                    <TextInput
                      style={{
                        flex: 1,
                        color: "#ffffff",
                        fontSize: 16,
                        paddingVertical: 16,
                      }}
                      placeholder="Choose a username"
                      placeholderTextColor="#6b7280"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 20 }}>
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

                <View style={{ marginBottom: 20 }}>
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
                      placeholder="Create a password"
                      placeholderTextColor="#6b7280"
                      secureTextEntry
                    />
                    <TouchableOpacity>
                      <Ionicons name="eye" size={20} color="#FFD700" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ marginBottom: 32 }}>
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 8,
                    }}
                  >
                    Confirm Password
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
                      placeholder="Confirm your password"
                      placeholderTextColor="#6b7280"
                      secureTextEntry
                    />
                    <TouchableOpacity>
                      <Ionicons name="eye" size={20} color="#FFD700" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 32 }}>
                  <TouchableOpacity
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      borderWidth: 2,
                      borderColor: "#FFD700",
                      marginRight: 12,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="checkmark" size={18} color="#FFD700" />
                  </TouchableOpacity>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: "#9ca3af", fontSize: 14, lineHeight: 20 }}>
                      I agree to TailMate's{" "}
                      <Text style={{ color: "#FFD700", fontWeight: "500" }}>Terms of Service</Text>{" "}
                      and{" "}
                      <Text style={{ color: "#FFD700", fontWeight: "500" }}>Privacy Policy</Text>
                    </Text>
                  </View>
                </View>

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
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    Create Account
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
                    Or sign up with
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
                    Sign up with Google
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
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/(auth)/login")}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 14,
                        fontWeight: "600",
                      }}
                    >
                      Sign In
                    </Text>
                  </TouchableOpacity>
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
                  📋 Registration Guidelines
                </Text>
                <View style={{ gap: 16 }}>
                  {[
                    {
                      icon: "shield-checkmark",
                      title: "Secure Account",
                      description: "All your data is encrypted and protected with industry-standard security",
                    },
                    {
                      icon: "paw",
                      title: "Pet Information",
                      description: "After registration, you'll be guided to add your pet's details",
                    },
                    {
                      icon: "search",
                      title: "Better Matching",
                      description: "Complete profiles get more accurate breeding partner suggestions",
                    },
                    {
                      icon: "people",
                      title: "Join Community",
                      description: "Connect with responsible pet owners and experienced breeders",
                    },
                    {
                      icon: "notifications",
                      title: "Stay Updated",
                      description: "Get notified about compatible matches and breeding opportunities",
                    },
                    {
                      icon: "help-circle",
                      title: "Need Assistance?",
                      description: "Our support team is available 24/7 at support@tailmate.com",
                    },
                  ].map((guideline, index) => (
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
                          name={guideline.icon as any}
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
                          {guideline.title}
                        </Text>
                        <Text
                          style={{
                            color: "#9ca3af",
                            fontSize: 14,
                          }}
                        >
                          {guideline.description}
                        </Text>
                      </View>
                    </View>
                  ))}
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
                  🎉 Why Register?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ alignItems: "center", flex: 1 }}>
                    <View style={{
                      width: 60,
                      height: 60,
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      borderRadius: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 8,
                    }}>
                      <Ionicons name="heart" size={28} color="#FFD700" />
                    </View>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 4,
                        textAlign: "center",
                      }}
                    >
                      Perfect Matches
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
                    <View style={{
                      width: 60,
                      height: 60,
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      borderRadius: 30,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 8,
                    }}>
                      <Ionicons name="shield-checkmark" size={28} color="#FFD700" />
                    </View>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 4,
                        textAlign: "center",
                      }}
                    >
                      Verified Profiles
                    </Text>
                  </View> 
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

export default Register;