import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/component/ui/Header";
import { useEffect, useState } from "react";
import HomeBottomNav from "@/component/ui/HomeBottomNav";
import ActiveAlertCard from "@/component/ui/ActiveAlertCards";
import { useAuth } from "@/hooks/useAuth";
import { getUserPet } from "@/service/petManageService";
import { useUser } from "@/context/UserContext";
import {
  deleteAlert,
  getActiveAlerts,
  publishMatchingAlert,
} from "@/service/matchingAlertService";

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: "Male" | "Female";
  imageUrl?: string;
  petImage?: string;
  vaccinated: boolean;
  lastSeen: string;
}

const AlertPage = () => {
  const router = useRouter();
  const [userPets, setUserPets] = useState<any[]>([]);
  const { user } = useAuth();
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [showPetDropdown, setShowPetDropdown] = useState(false);
  const { userData, loading } = useUser();
  const [activeAlerts, setActiveAlerts] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
      return;
    }

    const fetchActiveAlerts = async () => {
      const alerts = await getActiveAlerts(user.uid);
      setActiveAlerts(alerts);
    };

    const fetchPets = async () => {
      const pets = await getUserPet(user.uid);
      setUserPets(pets);
    };
    fetchPets();
    fetchActiveAlerts();
  }, [user]);

  const handlePublishMathcing = async () => {
    if (!selectedPet) {
      Alert.alert("Please Select A Pet First");
      return;
    }

    try {
      await publishMatchingAlert(
        user!.uid,
        selectedPet.id,
        userData!.whatsAppNum,
        userData!.address,
      );

      Alert.alert("TailMate Alert Published..!");
      setSelectedPet(null);
    } catch (error:any) {
      Alert.alert("Error", error.message);
      setSelectedPet(null);
    }
  };

  const handleCancelAlert = async (alertId: string) => {
    Alert.alert(
      "Cancel Alert",
      "Are You Sure You Want To Cancel This Alert .. ?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteAlert(alertId);

              setActiveAlerts((prev) =>
                prev.filter((alert) => alert.id !== alertId),
              );
              Alert.alert("Alert Cancelled Successfully");
            } catch (error) {
              Alert.alert("Failed To Cancel Alert");
            }
          },
        },
      ],
    );
  };

  const handleFoundPet = (alertId: string) => {};

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#000000" }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />

        <LinearGradient colors={["#000000", "#1a1a00"]} style={{ flex: 1 }}>
          <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <ScrollView
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <Header />

              <View style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
                <TouchableOpacity
                  onPress={() => router.replace("/(dashboard)/home")}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <Ionicons name="arrow-back" size={24} color="#FFD700" />
                  <Text
                    style={{
                      color: "#FFD700",
                      fontSize: 18,
                      fontWeight: "600",
                      marginLeft: 8,
                    }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 32,
                    fontWeight: "bold",
                    marginBottom: 16,
                  }}
                >
                  Finding Alerts 🚨
                </Text>

                <Text
                  style={{
                    color: "#9ca3af",
                    fontSize: 16,
                    marginBottom: 32,
                    lineHeight: 24,
                  }}
                >
                  Create a finding alert for your pet to find a matching
                </Text>

                <View
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: 20,
                    padding: 24,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 32,
                  }}
                >
                  <View style={{ marginBottom: 24, position: "relative" }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 12,
                      }}
                    >
                      Select Pet *
                    </Text>

                    <TouchableOpacity
                      onPress={() => setShowPetDropdown(!showPetDropdown)}
                      style={{
                        backgroundColor: "#2a2a2a",
                        borderRadius: 12,
                        padding: 16,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        {selectedPet ? (
                          <>
                            <Image
                              source={{
                                uri:
                                  selectedPet.imageUrl || selectedPet.imageUrl,
                              }}
                              style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                marginRight: 12,
                              }}
                            />
                            <View>
                              <Text
                                style={{
                                  color: "#ffffff",
                                  fontSize: 16,
                                  fontWeight: "600",
                                }}
                              >
                                {selectedPet.name}
                              </Text>
                              <Text style={{ color: "#9ca3af", fontSize: 12 }}>
                                {selectedPet.breed}
                              </Text>
                            </View>
                          </>
                        ) : (
                          <Text style={{ color: "#666666", fontSize: 16 }}>
                            Select a pet
                          </Text>
                        )}
                      </View>
                      <Ionicons
                        name={showPetDropdown ? "chevron-up" : "chevron-down"}
                        size={20}
                        color="#FFD700"
                      />
                    </TouchableOpacity>

                    {showPetDropdown && (
                      <View
                        style={{
                          position: "absolute",
                          top: 80,
                          left: 0,
                          right: 0,
                          backgroundColor: "#2a2a2a",
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.3)",
                          zIndex: 1000,
                          maxHeight: 200,
                        }}
                      >
                        <ScrollView>
                          {userPets.map((pet) => (
                            <TouchableOpacity
                              key={pet.id}
                              onPress={() => {
                                setSelectedPet(pet);
                                setShowPetDropdown(false);
                              }}
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                                padding: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: "rgba(255, 255, 255, 0.1)",
                              }}
                            >
                              <Image
                                source={{ uri: pet.imageUrl || pet.petImage }}
                                style={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 20,
                                  marginRight: 12,
                                }}
                              />
                              <View style={{ flex: 1 }}>
                                <Text
                                  style={{
                                    color: "#ffffff",
                                    fontSize: 16,
                                    fontWeight: "600",
                                  }}
                                >
                                  {pet.name}
                                </Text>
                                <Text
                                  style={{ color: "#9ca3af", fontSize: 12 }}
                                >
                                  {pet.breed} • {pet.age}
                                </Text>
                              </View>
                              <Ionicons name="paw" size={16} color="#FFD700" />
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                      </View>
                    )}
                  </View>

                  <View style={{ marginBottom: 20 }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 12,
                      }}
                    >
                      Contact Number *
                    </Text>
                    <TextInput
                      editable={false}
                      value={userData?.whatsAppNum ?? ""}
                      placeholder="Contact number for sightings"
                      placeholderTextColor="#666666"
                      keyboardType="phone-pad"
                      style={{
                        backgroundColor: "#2a2a2a",
                        borderRadius: 12,
                        padding: 16,
                        color: "#ffffff",
                        fontSize: 16,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.3)",
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={handlePublishMathcing}
                    style={{
                      backgroundColor: "#FFD700",
                      paddingVertical: 18,
                      borderRadius: 12,
                      alignItems: "center",
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
                      Publish Alert
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 32 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 24,
                      fontWeight: "bold",
                      marginBottom: 20,
                    }}
                  >
                    Active Alerts (
                    {activeAlerts.filter((a) => a.status === "Active").length})
                  </Text>
                  {activeAlerts.filter((a) => a.status === "Active").length >
                  0 ? (
                    <View style={{ gap: 20 }}>
                      {activeAlerts
                        .filter((alert) => alert.status === "Active")
                        .map((alert) => (
                          <ActiveAlertCard
                            key={alert.id}
                            alert={alert}
                            onCancel={handleCancelAlert}
                            onFound={handleFoundPet}
                          />
                        ))}
                    </View>
                  ) : (
                    <Text style={{ color: "#9ca3af", textAlign: "center" }}>
                      No active alerts
                    </Text>
                  )}
                </View>
              </View>
            </ScrollView>

            <HomeBottomNav />
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default AlertPage;
