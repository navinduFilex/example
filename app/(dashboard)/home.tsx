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
import { useState } from "react"; 
import PetCard from "@/component/ui/PetCard";
import TopMatchCard from "@/component/ui/TopMatchCard";
import FindingAlertCard from "@/component/ui/FindingAlertCard";
import HomeBottomNav from "@/component/ui/HomeBottomNav";

const Home = () => {
  const router = useRouter();

  const [hasActiveAlert, setHasActiveAlert] = useState(true); 

  const userProfile = {
    name: "David Wilson",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070", 
    email: "david.wilson@email.com",
  };

  const userPets = [
    {
      id: 1,
      name: "Charlie",
      breed: "Labrador Retriever",
      age: "2 years",
      gender: "Male",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974",
    },
    {
      id: 2,
      name: "Luna",
      breed: "Persian Cat",
      age: "3 years",
      gender: "Female",
      image:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070",
    },
  ];

  const pets = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      age: "3 years",
      gender: "Male",
      owner: "Sarah Johnson",
      location: "New York, NY",
      contact: "+1 (555) 123-4567",
      compatibility: "95%",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2062",
    },
    {
      id: 2,
      name: "Luna",
      breed: "French Bulldog",
      age: "2 years",
      gender: "Female",
      owner: "Michael Chen",
      location: "Los Angeles, CA",
      contact: "+1 (555) 987-6543",
      compatibility: "88%",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935",
    },
    {
      id: 3,
      name: "Bella",
      breed: "Siamese Cat",
      age: "4 years",
      gender: "Female",
      owner: "Emily Rodriguez",
      location: "Miami, FL",
      contact: "+1 (555) 456-7890",
      compatibility: "92%",
      image:
        "https://images.unsplash.com/photo-1514888286974-6d03bde4ba14?q=80&w=2070",
    },
    {
      id: 4,
      name: "Rocky",
      breed: "German Shepherd",
      age: "5 years",
      gender: "Male",
      owner: "David Wilson",
      location: "Chicago, IL",
      contact: "+1 (555) 789-0123",
      compatibility: "85%",
      image:
        "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1935",
    },
  ];

  const alerts = [
    {
      id: 1,
      petName: "Charlie",
      breed: "Labrador Retriever",
      age: "2 years",
      gender: "Male",
      alertCreated: "3 days ago",
      address: "123 Park Avenue, New York, NY 10022",
      status: "Active",
    },
    {
      id: 2,
      petName: "Luna",
      breed: "Persian Cat",
      age: "3 years",
      gender: "Female",
      alertCreated: "5 days ago",
      address: "456 Elm Street, Los Angeles, CA 90001",
      status: "Resolved",
    },
  ];

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
                  Welcome back, David! 🐾
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
                  onPress={() => console.log("Navigate to Profile")}
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
                      source={{ uri: userProfile.profileImage }}
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
                      {userProfile.name}
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                        {userProfile.email}
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
                    onPress={() => console.log("Edit Profile")}
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
                    onPress={() => console.log("Add Pet")}
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
                    onPress={() => console.log("Add New Pet")}
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
                      pet={pet}
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
                    🏆 Top Matches
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
                  {pets.map((pet) => (
                    <TopMatchCard
                      key={pet.id}
                      pet={pet}
                      onPressView={() => console.log("View", pet.name)}
                    />
                  ))}
                </ScrollView>
              </View>

              <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 24,
                  }}
                >
                  🔔 Current Finding Alert
                </Text>

                {hasActiveAlert ? (
                  alerts.length > 0 ? (
                    alerts.map((alert) => (
                      <FindingAlertCard
                        key={alert.id}
                        alert={alert}
                        onEdit={() => console.log("Edit", alert.petName)}
                        onDelete={() => console.log("Delete", alert.petName)}
                        onViewComments={() =>
                          console.log("View Comments", alert.petName)
                        }
                      />
                    ))
                  ) : (
                    <View
                      style={{
                        backgroundColor: "#1a1a1a",
                        borderRadius: 20,
                        padding: 32,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                        alignItems: "center",
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
                        <Ionicons name="paw" size={40} color="#FFD700" />
                      </View>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: 22,
                          fontWeight: "bold",
                          marginBottom: 12,
                          textAlign: "center",
                        }}
                      >
                        No Active Alerts
                      </Text>
                      <Text
                        style={{
                          color: "#9ca3af",
                          fontSize: 16,
                          textAlign: "center",
                          marginBottom: 8,
                          lineHeight: 24,
                        }}
                      >
                        You don't have any active finding alerts for your pets.
                      </Text>
                      <Text
                        style={{
                          color: "#FFD700",
                          fontSize: 18,
                          fontWeight: "600",
                          marginBottom: 24,
                          textAlign: "center",
                        }}
                      >
                        Wanna find perfect matches?
                      </Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#FFD700",
                          paddingHorizontal: 32,
                          paddingVertical: 16,
                          borderRadius: 12,
                          alignItems: "center",
                          shadowColor: "#FFD700",
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.3,
                          shadowRadius: 8,
                          elevation: 8,
                        }}
                        activeOpacity={0.8}
                        onPress={() => console.log("Create Alert")}
                      >
                        <Text
                          style={{
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          Create Finding Alert
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )
                ) : (
                  <View
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 20,
                      padding: 32,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                      alignItems: "center",
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
                      <Ionicons name="paw" size={40} color="#FFD700" />
                    </View>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 22,
                        fontWeight: "bold",
                        marginBottom: 12,
                        textAlign: "center",
                      }}
                    >
                      No Active Alerts
                    </Text>
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontSize: 16,
                        textAlign: "center",
                        marginBottom: 8,
                        lineHeight: 24,
                      }}
                    >
                      You don't have any active finding alerts for your pets.
                    </Text>
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 24,
                        textAlign: "center",
                      }}
                    >
                      Wanna find perfect matches?
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#FFD700",
                        paddingHorizontal: 32,
                        paddingVertical: 16,
                        borderRadius: 12,
                        alignItems: "center",
                        shadowColor: "#FFD700",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 8,
                      }}
                      activeOpacity={0.8}
                      onPress={() => setHasActiveAlert(true)}
                    >
                      <Text
                        style={{
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        Create Finding Alert
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </ScrollView>

            <HomeBottomNav/>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default Home;