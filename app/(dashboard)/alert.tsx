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
import { useState } from "react";
import HomeBottomNav from "@/component/ui/HomeBottomNav";
import ActiveAlertCard from "@/component/ui/ActiveAlertCards";


interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: "Male" | "Female";
  image: string;
  vaccinated: boolean;
  lastSeen: string;
}

interface AlertItem {
  id: number;
  petName: string;
  breed: string;
  lastSeen: string;
  time: string;
  status: "Active" | "Resolved";
  reward: string;
  petImage: string;
  age: string;
  gender: "Male" | "Female";
  additionalDetails: string;
}


const AlertPage = () => {
  const router = useRouter();

  const [userPets] = useState<Pet[]>([
    {
      id: 1,
      name: "Charlie",
      breed: "Labrador Retriever",
      age: "2 years",
      gender: "Male",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974",
      vaccinated: true,
      lastSeen: "Home",
    },
    {
      id: 2,
      name: "Luna",
      breed: "Persian Cat",
      age: "3 years",
      gender: "Female",
      image:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070",
      vaccinated: true,
      lastSeen: "Park",
    },
    {
      id: 3,
      name: "Max",
      breed: "Golden Retriever",
      age: "1 year",
      gender: "Male",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2062",
      vaccinated: false,
      lastSeen: "Backyard",
    },
  ]);

  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [showPetDropdown, setShowPetDropdown] = useState(false);
  const [lastSeenLocation, setLastSeenLocation] = useState("");
  const [lastSeenTime, setLastSeenTime] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [contactNumber, setContactNumber] = useState("+1 (555) 123-4567");
  const [reward, setReward] = useState("");
  const [showRewardInput, setShowRewardInput] = useState(false);


  const [activeAlerts, setActiveAlerts] = useState<AlertItem[]>([
    {
      id: 1,
      petName: "Charlie",
      breed: "Labrador Retriever",
      lastSeen: "Central Park, NYC",
      time: "2 hours ago",
      status: "Active",
      reward: "$200",
      petImage:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974",
      age: "2 years",
      gender: "Male",
      additionalDetails:
        "Charlie is wearing a blue collar with contact information. He's friendly and loves treats.",
    },
    {
      id: 2,
      petName: "Luna",
      breed: "Persian Cat",
      lastSeen: "Home - 123 Park Ave",
      time: "1 day ago",
      status: "Active",
      reward: "$150",
      petImage:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070",
      age: "3 years",
      gender: "Female",
      additionalDetails:
        "Luna has distinctive blue eyes and is a bit shy. She's wearing a pink collar.",
    },
    {
      id: 3,
      petName: "Max",
      breed: "Golden Retriever",
      lastSeen: "Dog Park, 5th Avenue",
      time: "3 days ago",
      status: "Active",
      reward: "",
      petImage:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2062",
      age: "1 year",
      gender: "Male",
      additionalDetails:
        "Very energetic and loves playing fetch. Last seen chasing squirrels.",
    },
  ]);


  const handlePublishAlert = () => {
    if (!selectedPet) {
      Alert.alert("Error", "Please select a pet first.");
      return;
    }

    if (!lastSeenLocation.trim()) {
      Alert.alert("Error", "Please enter the last seen location.");
      return;
    }

    if (!lastSeenTime.trim()) {
      Alert.alert("Error", "Please enter when the pet was last seen.");
      return;
    }

    const newAlert: AlertItem = {
      id: activeAlerts.length + 1,
      petName: selectedPet.name,
      breed: selectedPet.breed,
      lastSeen: lastSeenLocation,
      time: "Just now",
      status: "Active",
      reward: showRewardInput ? reward : "",
      petImage: selectedPet.image,
      age: selectedPet.age,
      gender: selectedPet.gender,
      additionalDetails,
    };

    setActiveAlerts([newAlert, ...activeAlerts]);

    Alert.alert(
      "Alert Published!",
      `Finding alert for ${selectedPet.name} has been published successfully.`,
      [
        {
          text: "OK",
          onPress: () => {
            setSelectedPet(null);
            setLastSeenLocation("");
            setLastSeenTime("");
            setAdditionalDetails("");
            setReward("");
            setShowRewardInput(false);
          },
        },
      ]
    );
  };

  const handleCancelAlert = (alertId: number) => {
    Alert.alert(
      "Cancel Alert",
      "Are you sure you want to cancel this finding alert?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes, Cancel",
          style: "destructive",
          onPress: () => {
            setActiveAlerts(activeAlerts.filter((alert) => alert.id !== alertId));
            Alert.alert("Success", "Alert has been cancelled.");
          },
        },
      ]
    );
  };

  const handleFoundPet = (alertId: number) => {
    Alert.alert(
      "Mark as Found",
      "Has your pet been found? This will mark the alert as resolved.",
      [
        { text: "Not Yet", style: "cancel" },
        {
          text: "Yes, Found!",
          style: "default",
          onPress: () => {
            setActiveAlerts(
              activeAlerts.map((alert) =>
                alert.id === alertId ? { ...alert, status: "Resolved" } : alert
              )
            );
            Alert.alert("🎉 Wonderful!", "We're so happy your pet has been found!");
          },
        },
      ]
    );
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
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <Header />

              <View style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{ flexDirection: "row", alignItems: "center", marginBottom: 24 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#FFD700" />
                  <Text style={{ color: "#FFD700", fontSize: 18, fontWeight: "600", marginLeft: 8 }}>
                    Back
                  </Text>
                </TouchableOpacity>

                <Text style={{ color: "#ffffff", fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>
                  Finding Alerts 🚨
                </Text>

                <Text style={{ color: "#9ca3af", fontSize: 16, marginBottom: 32, lineHeight: 24 }}>
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
                    <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
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
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {selectedPet ? (
                          <>
                            <Image
                              source={{ uri: selectedPet.image }}
                              style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
                            />
                            <View>
                              <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>
                                {selectedPet.name}
                              </Text>
                              <Text style={{ color: "#9ca3af", fontSize: 12 }}>{selectedPet.breed}</Text>
                            </View>
                          </>
                        ) : (
                          <Text style={{ color: "#666666", fontSize: 16 }}>Select a pet</Text>
                        )}
                      </View>
                      <Ionicons name={showPetDropdown ? "chevron-up" : "chevron-down"} size={20} color="#FFD700" />
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
                                source={{ uri: pet.image }}
                                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }}
                              />
                              <View style={{ flex: 1 }}>
                                <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>
                                  {pet.name}
                                </Text>
                                <Text style={{ color: "#9ca3af", fontSize: 12 }}>
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
                    <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
                      Contact Number *
                    </Text>
                    <TextInput
                      editable={false}
                      value={contactNumber}
                      onChangeText={setContactNumber}
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
                    onPress={handlePublishAlert}
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
                    <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 18 }}>Publish Alert</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 32 }}>
                  <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
                    Active Alerts ({activeAlerts.filter((a) => a.status === "Active").length})
                  </Text>
                  {activeAlerts.filter((a) => a.status === "Active").length > 0 ? (
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
                    <Text style={{ color: "#9ca3af", textAlign: "center" }}>No active alerts</Text>
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
