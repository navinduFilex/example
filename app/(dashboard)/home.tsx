import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/component/ui/Header";
import { useEffect, useState } from "react";
import PetCard from "@/component/ui/PetCard";
import TopMatchCard from "@/component/ui/TopMatchCard";
import HomeBottomNav from "@/component/ui/HomeBottomNav";
import { useAuth } from "@/hooks/useAuth";
import { getUserPet } from "@/service/petManageService";
import { useUser } from "@/context/UserContext";
import { getAllAlerts } from "@/service/matchingAlertService";
import { Linking, Alert } from "react-native";


const Home = () => {
  const { userData, loading } = useUser();
  const router = useRouter();
  const { user } = useAuth();
  const [userPets, setUserPets] = useState<any[]>([]);
  const [matchAlerts, setMatchAlerts] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      router.replace("/(auth)/login");
      return;
    }

    const fetchMatchAlerts = async () => {
      const alerts = await getAllAlerts(user.uid)
      console.log(alerts)
      setMatchAlerts(alerts)
    };

    const fetchPets = async () => {
      const pets = await getUserPet(user.uid);
      setUserPets(pets);
    };
    fetchPets();
    fetchMatchAlerts()
  }, [user]);

 const openWhatsApp = (phone: string, username: string) => {
  const message = `Hello, I'm ${username}.\nI also have a pet.\nI would like to discuss about our pets.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Alert.alert("WhatsApp not installed");
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error("An error occurred", err));
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
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 32,
                    fontWeight: "bold",
                    marginBottom: 16,
                  }}
                >
                  Welcome back, {userData?.username}! 🐾
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#1a1a1a",
                    borderRadius: 20,
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                  }}
                  activeOpacity={0.8}
                  onPress={() => router.replace("/(dashboard)/profile")}
                >
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      overflow: "hidden",
                      marginRight: 16,
                      borderWidth: 2,
                      borderColor: "#FFD700",
                    }}
                  >
                    <Image
                      source={{
                        uri:
                          userData?.profileImage ??
                          "https://via.placeholder.com/150",
                      }}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="cover"
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 4,
                      }}
                    >
                      {userData?.username}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons
                        name="mail"
                        size={14}
                        color="#FFD700"
                        style={{ marginRight: 6 }}
                      />
                      <Text
                        style={{
                          color: "#9ca3af",
                          fontSize: 14,
                        }}
                      >
                        {userData?.email}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    activeOpacity={0.7}
                    onPress={() => router.replace("/(dashboard)/profile")}
                  >
                    <Ionicons name="create" size={20} color="#FFD700" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>

              <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    🐕 My Pets
                  </Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#FFD700",
                      paddingHorizontal: 16,
                      paddingVertical: 10,
                      borderRadius: 12,
                    }}
                    activeOpacity={0.8}
                    onPress={() => router.replace("/(dashboard)/addPet")}
                  >
                    <Ionicons name="add" size={20} color="#000000" />
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 14,
                        marginLeft: 8,
                      }}
                    >
                      Add Pet
                    </Text>
                  </TouchableOpacity>
                </View>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ marginBottom: 32 }}
                >
                  <TouchableOpacity
                    style={{
                      width: 160,
                      backgroundColor: "#1a1a1a",
                      borderRadius: 20,
                      overflow: "hidden",
                      marginRight: 16,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                      borderStyle: "dashed",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 24,
                    }}
                    activeOpacity={0.8}
                    onPress={() => router.replace("/(dashboard)/addPet")}
                  >
                    <View
                      style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <Ionicons name="add" size={32} color="#FFD700" />
                    </View>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 16,
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      Add New Pet
                    </Text>
                  </TouchableOpacity>

                  {userPets.map((pet) => (
                    <PetCard
                      key={pet.id}
                      pet={{
                        id: pet.id,
                        name: pet.name,
                        breed: pet.breed,
                        age: pet.age,
                        gender: pet.gender,
                        image: pet.imageUrl,
                      }}
                      onPressManage={() => console.log("Manage", pet.name)}
                    />
                  ))}
                </ScrollView>
              </View>

              <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    🏆Matching Alerts
                  </Text>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={{ color: "#FFD700", fontWeight: "600" }}>
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ marginBottom: 32 }}
                >
                  {matchAlerts.map((alert) => (
                    <TopMatchCard
                      key={alert.id}
                      pet={alert}
                      onPressView={() => openWhatsApp(alert.whatsAppNum, userData?.username ?? "User")}
                    />
                  ))}
                </ScrollView>
              </View>
            </ScrollView>

            <HomeBottomNav />
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
