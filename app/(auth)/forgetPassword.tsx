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

const ForgetPassword = () => {
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
                <View
                  style={{
                    alignItems: "center",
                    marginBottom: 32,
                  }}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      borderRadius: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                    }}
                  >
                    <Ionicons name="key" size={40} color="#FFD700" />
                  </View>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 36,
                      fontWeight: "bold",
                      marginBottom: 8,
                      textAlign: "center",
                    }}
                  >
                    Reset Password
                  </Text>
                  <Text
                    style={{
                      color: "#9ca3af",
                      fontSize: 16,
                      textAlign: "center",
                      lineHeight: 24,
                    }}
                  >
                    Enter your email address and we'll send you a link to reset your password.
                  </Text>
                </View>

                <View style={{ marginBottom: 32 }}>
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Email Address
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 20,
                    }}
                  >
                    <Ionicons
                      name="mail"
                      size={24}
                      color="#FFD700"
                      style={{ marginRight: 16 }}
                    />
                    <TextInput
                      style={{
                        flex: 1,
                        color: "#ffffff",
                        fontSize: 18,
                        paddingVertical: 20,
                      }}
                      placeholder="Enter your email"
                      placeholderTextColor="#6b7280"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoFocus
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFD700",
                    paddingVertical: 20,
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
                  onPress={() => {
                    // Handle password reset logic here
                    alert("Password reset link sent! Check your email.");
                    router.back();
                  }}
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Send Reset Link
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 32,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  />
                  <Text
                    style={{
                      color: "#9ca3af",
                      fontSize: 14,
                      marginHorizontal: 16,
                    }}
                  >
                    Or
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  />
                </View>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1a1a1a",
                    paddingVertical: 18,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 40,
                  }}
                  activeOpacity={0.8}
                  onPress={() => router.push("/(auth)/login")}
                >
                  <Ionicons name="arrow-back" size={24} color="#FFD700" />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: 18,
                      marginLeft: 12,
                    }}
                  >
                    Back to Login
                  </Text>
                </TouchableOpacity>
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
                  📩 What Happens Next?
                </Text>
                <View style={{ gap: 20 }}>
                  {[
                    {
                      icon: "mail",
                      title: "Check Your Email",
                      description: "We'll send a password reset link to your email address within minutes",
                    },
                    {
                      icon: "link",
                      title: "Click the Link",
                      description: "Open the email and click the secure reset link provided",
                    },
                    {
                      icon: "lock-open",
                      title: "Set New Password",
                      description: "Create a new strong password for your TailMate account",
                    },
                    {
                      icon: "log-in",
                      title: "Login Again",
                      description: "Use your new password to sign back into your account",
                    },
                  ].map((step, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(255, 215, 0, 0.05)",
                        borderRadius: 16,
                        padding: 20,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.1)",
                      }}
                    >
                      <View
                        style={{
                          width: 56,
                          height: 56,
                          backgroundColor: "rgba(255, 215, 0, 0.2)",
                          borderRadius: 28,
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 20,
                        }}
                      >
                        <Ionicons
                          name={step.icon as any}
                          size={28}
                          color="#FFD700"
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "600",
                            marginBottom: 6,
                          }}
                        >
                          Step {index + 1}: {step.title}
                        </Text>
                        <Text
                          style={{
                            color: "#9ca3af",
                            fontSize: 15,
                            lineHeight: 22,
                          }}
                        >
                          {step.description}
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
                  🔒 Password Security Tips
                </Text>
                <View
                  style={{
                    backgroundColor: "rgba(255, 215, 0, 0.05)",
                    borderRadius: 16,
                    padding: 24,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.1)",
                  }}
                >
                  {[
                    "Use at least 8 characters with a mix of letters, numbers, and symbols",
                    "Avoid using personal information like names or birthdays",
                    "Don't reuse passwords across different websites",
                    "Consider using a password manager for better security",
                    "Change your password regularly for optimal protection",
                  ].map((tip, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginBottom: 16,
                      }}
                    >
                      <View
                        style={{
                          width: 24,
                          height: 24,
                          backgroundColor: "rgba(255, 215, 0, 0.2)",
                          borderRadius: 12,
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 12,
                          marginTop: 2,
                        }}
                      >
                        <Ionicons name="checkmark" size={16} color="#FFD700" />
                      </View>
                      <Text
                        style={{
                          color: "#9ca3af",
                          fontSize: 15,
                          flex: 1,
                          lineHeight: 22,
                        }}
                      >
                        {tip}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              <View
                style={{
                  paddingHorizontal: 24,
                  paddingBottom: 40,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "rgba(255, 215, 0, 0.05)",
                    borderRadius: 16,
                    padding: 24,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.1)",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Ionicons
                    name="help-circle"
                    size={48}
                    color="#FFD700"
                    style={{ marginBottom: 16 }}
                  />
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 20,
                      fontWeight: "600",
                      marginBottom: 8,
                      textAlign: "center",
                    }}
                  >
                    Need Help?
                  </Text>
                  <Text
                    style={{
                      color: "#9ca3af",
                      fontSize: 16,
                      textAlign: "center",
                      marginBottom: 24,
                      lineHeight: 24,
                    }}
                  >
                    If you're having trouble resetting your password, contact our support team
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#1a1a1a",
                      paddingHorizontal: 24,
                      paddingVertical: 14,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                    }}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      Contact Support
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

export default ForgetPassword;