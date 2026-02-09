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

const Find = () => {
  const router = useRouter();

  interface PetAlert {
  id: number;
  petName: string;
  breed: string;
  category: string;
  gender: string;
  age: string;
  lastSeen: string;
  time: string;
  status: "Lost" | "Found";
  reward: string;
  petImage: string;
  ownerName: string;
  contact: string;
  additionalDetails: string;
}


  // Filter states
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter visibility states
  const [showBreedFilter, setShowBreedFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [showGenderFilter, setShowGenderFilter] = useState(false);

  // Available options
  const breeds = [
    "Labrador Retriever", "Golden Retriever", "German Shepherd", "French Bulldog",
    "Bulldog", "Poodle", "Beagle", "Rottweiler", "Yorkshire Terrier",
    "Persian Cat", "Siamese Cat", "Maine Coon", "Ragdoll", "Bengal Cat", "Sphynx Cat", "Other",
  ];

  const categories = ["Dog", "Cat", "Bird", "Rabbit", "Other"];
  const genders = ["Male", "Female"];

  // Pet alerts data
  const petAlerts:PetAlert[] = [
    {
      id: 1,
      petName: "Max",
      breed: "Golden Retriever",
      category: "Dog",
      gender: "Male",
      age: "3 years",
      lastSeen: "Central Park, NYC",
      time: "2 hours ago",
      status: "Lost",
      reward: "$300",
      petImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2062",
      ownerName: "Sarah Johnson",
      contact: "+1 (555) 123-4567",
      additionalDetails: "Very friendly, responds to his name. Last seen near the north entrance.",
    },
    {
      id: 2,
      petName: "Luna",
      breed: "Persian Cat",
      category: "Cat",
      gender: "Female",
      age: "2 years",
      lastSeen: "Upper East Side, Manhattan",
      time: "1 day ago",
      status: "Lost",
      reward: "$200",
      petImage: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070",
      ownerName: "Emily Rodriguez",
      contact: "+1 (555) 987-6543",
      additionalDetails: "Shy but sweet. She has a pink collar with a bell.",
    },
    {
      id: 3,
      petName: "Rocky",
      breed: "German Shepherd",
      category: "Dog",
      gender: "Male",
      age: "4 years",
      lastSeen: "Prospect Park, Brooklyn",
      time: "3 days ago",
      status: "Lost",
      reward: "$500",
      petImage: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1935",
      ownerName: "Michael Chen",
      contact: "+1 (555) 456-7890",
      additionalDetails: "Service dog, well-trained. Please do not approach suddenly.",
    },
    {
      id: 4,
      petName: "Bella",
      breed: "Siamese Cat",
      category: "Cat",
      gender: "Female",
      age: "1 year",
      lastSeen: "Williamsburg, Brooklyn",
      time: "5 hours ago",
      status: "Found",
      reward: "",
      petImage: "https://images.unsplash.com/photo-1514888286974-6d03bde4ba14?q=80&w=2070",
      ownerName: "Found in neighborhood",
      contact: "+1 (555) 789-0123",
      additionalDetails: "Found this sweet cat wandering near McCarren Park. Looking for owner.",
    },
    {
      id: 5,
      petName: "Charlie",
      breed: "Labrador Retriever",
      category: "Dog",
      gender: "Male",
      age: "5 years",
      lastSeen: "Battery Park City",
      time: "6 days ago",
      status: "Lost",
      reward: "$400",
      petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974",
      ownerName: "David Wilson",
      contact: "+1 (555) 234-5678",
      additionalDetails: "Loves playing fetch. Has a microchip.",
    },
    {
      id: 6,
      petName: "Milo",
      breed: "French Bulldog",
      category: "Dog",
      gender: "Male",
      age: "2 years",
      lastSeen: "Chelsea, Manhattan",
      time: "12 hours ago",
      status: "Lost",
      reward: "$350",
      petImage: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935",
      ownerName: "Jessica Brown",
      contact: "+1 (555) 345-6789",
      additionalDetails: "Has breathing issues, needs medication. Very friendly.",
    },
  ];

  // Filtered alerts
  const [filteredAlerts, setFilteredAlerts] = useState<PetAlert[]>(petAlerts);

  // Apply filters
  const applyFilters = () => {
    let results = [...petAlerts];

    if (selectedBreed) results = results.filter(alert => alert.breed === selectedBreed);
    if (selectedCategory) results = results.filter(alert => alert.category === selectedCategory);
    if (selectedGender) results = results.filter(alert => alert.gender === selectedGender);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(alert =>
        alert.petName.toLowerCase().includes(query) ||
        alert.breed.toLowerCase().includes(query) ||
        alert.lastSeen.toLowerCase().includes(query)
      );
    }

    setFilteredAlerts(results);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedBreed(null);
    setSelectedCategory(null);
    setSelectedGender(null);
    setSearchQuery("");
    setFilteredAlerts(petAlerts);
  };

  // Handle contact
  const handleContact = (alert:PetAlert) => {
    Alert.alert(
      `Contact ${alert.ownerName}`,
      `Phone: ${alert.contact}\n\nWould you like to call or message?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Call", onPress: () => console.log(`Calling ${alert.contact}`) },
        { text: "Message", onPress: () => console.log(`Messaging ${alert.contact}`) },
      ]
    );
  };

  // Handle report sighting
  const handleReportSighting = (alert:PetAlert) => {
    Alert.alert(
      "Report Sighting",
      `Have you seen ${alert.petName}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Report", onPress: () => console.log(`Reporting sighting for ${alert.petName}`) },
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
                  Find A Match 🔍
                </Text>

                <Text
                  style={{
                    color: "#9ca3af",
                    fontSize: 16,
                    marginBottom: 32,
                    lineHeight: 24,
                  }}
                >
                  Find your pet's perfect match.
                </Text>

                <View
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: 20,
                    padding: 20,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 24,
                  }}
                >
                  <View style={{ marginBottom: 20 }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 12,
                      }}
                    >
                      Search
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#2a2a2a",
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                        paddingHorizontal: 16,
                      }}
                    >
                      <Ionicons name="search" size={20} color="#FFD700" style={{ marginRight: 12 }} />
                      <TextInput
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholder="Search by pet name, breed, or location..."
                        placeholderTextColor="#666666"
                        style={{
                          flex: 1,
                          color: "#ffffff",
                          fontSize: 16,
                          paddingVertical: 16,
                        }}
                      />
                      {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery("")}>
                          <Ionicons name="close-circle" size={20} color="#9ca3af" />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>

                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 16,
                    }}
                  >
                    Filter By
                  </Text>

                  <View style={{ marginBottom: 16 }}>
                    <TouchableOpacity
                      onPress={() => setShowBreedFilter(!showBreedFilter)}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#2a2a2a",
                        borderRadius: 12,
                        padding: 16,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                      }}
                    >
                      <Text style={{ color: selectedBreed ? "#ffffff" : "#9ca3af", fontSize: 16 }}>
                        {selectedBreed || "Select Breed"}
                      </Text>
                      <Ionicons name={showBreedFilter ? "chevron-up" : "chevron-down"} size={20} color="#FFD700" />
                    </TouchableOpacity>

                    {showBreedFilter && (
                      <View
                        style={{
                          backgroundColor: "#2a2a2a",
                          borderRadius: 12,
                          marginTop: 8,
                          maxHeight: 200,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.2)",
                        }}
                      >
                        <ScrollView>
                          {breeds.map((breed) => (
                            <TouchableOpacity
                              key={breed}
                              onPress={() => {
                                setSelectedBreed(breed);
                                setShowBreedFilter(false);
                              }}
                              style={{
                                padding: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: "rgba(255, 255, 255, 0.1)",
                              }}
                            >
                              <Text style={{ color: "#ffffff", fontSize: 16 }}>
                                {breed}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                      </View>
                    )}
                  </View>

                  <View style={{ marginBottom: 16 }}>
                    <TouchableOpacity
                      onPress={() => setShowCategoryFilter(!showCategoryFilter)}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#2a2a2a",
                        borderRadius: 12,
                        padding: 16,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                      }}
                    >
                      <Text style={{ color: selectedCategory ? "#ffffff" : "#9ca3af", fontSize: 16 }}>
                        {selectedCategory || "Select Category"}
                      </Text>
                      <Ionicons name={showCategoryFilter ? "chevron-up" : "chevron-down"} size={20} color="#FFD700" />
                    </TouchableOpacity>

                    {showCategoryFilter && (
                      <View
                        style={{
                          backgroundColor: "#2a2a2a",
                          borderRadius: 12,
                          marginTop: 8,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.2)",
                        }}
                      >
                        {categories.map((category) => (
                          <TouchableOpacity
                            key={category}
                            onPress={() => {
                              setSelectedCategory(category);
                              setShowCategoryFilter(false);
                            }}
                            style={{
                              padding: 16,
                              borderBottomWidth: 1,
                              borderBottomColor: "rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <Text style={{ color: "#ffffff", fontSize: 16 }}>
                              {category}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>

                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "600",
                        marginBottom: 12,
                      }}
                    >
                      Gender
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#2a2a2a",
                        borderRadius: 12,
                        padding: 4,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                      }}
                    >
                      {genders.map((gender) => (
                        <TouchableOpacity
                          key={gender}
                          onPress={() => setSelectedGender(selectedGender === gender ? null : gender)}
                          style={{
                            flex: 1,
                            backgroundColor: selectedGender === gender ? "#FFD700" : "transparent",
                            paddingVertical: 12,
                            borderRadius: 8,
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <Ionicons
                            name={gender === "Male" ? "male" : "female"}
                            size={20}
                            color={selectedGender === gender ? "#000000" : "#ffffff"}
                          />
                          <Text
                            style={{
                              color: selectedGender === gender ? "#000000" : "#ffffff",
                              fontWeight: "600",
                              fontSize: 16,
                              marginLeft: 8,
                            }}
                          >
                            {gender}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>

                  <View style={{ flexDirection: "row", gap: 12 }}>
                    <TouchableOpacity
                      onPress={resetFilters}
                      style={{
                        flex: 1,
                        backgroundColor: "transparent",
                        paddingVertical: 16,
                        borderRadius: 12,
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.5)",
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFD700",
                          fontWeight: "600",
                          fontSize: 16,
                        }}
                      >
                        Reset Filters
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={applyFilters}
                      style={{
                        flex: 1,
                        backgroundColor: "#FFD700",
                        paddingVertical: 16,
                        borderRadius: 12,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Search
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                  }}
                >
                  {filteredAlerts.length} {filteredAlerts.length === 1 ? "Result" : "Results"} Found
                </Text>

                {filteredAlerts.length > 0 ? (
                  <View style={{ gap: 20 }}>
                    {filteredAlerts.map((alert) => (
                      <View
                        key={alert.id}
                        style={{
                          backgroundColor: "#1a1a1a",
                          borderRadius: 20,
                          padding: 20,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.2)",
                        }}
                      >
                      
                     

                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                          <Image
                            source={{ uri: alert.petImage }}
                            style={{
                              width: 80,
                              height: 80,
                              borderRadius: 40,
                              marginRight: 16,
                              borderWidth: 2,
                              borderColor: "#FFD700",
                            }}
                          />
                          <View style={{ flex: 1 }}>
                            <Text
                              style={{
                                color: "#ffffff",
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 4,
                              }}
                            >
                              {alert.petName}
                            </Text>
                            <Text
                              style={{
                                color: "#9ca3af",
                                fontSize: 14,
                                marginBottom: 8,
                              }}
                            >
                              {alert.breed} • {alert.age} • {alert.gender}
                            </Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                              <Ionicons name="person" size={14} color="#FFD700" style={{ marginRight: 6 }} />
                              <Text
                                style={{
                                  color: "#ffffff",
                                  fontSize: 14,
                                }}
                              >
                                {alert.ownerName}
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row", gap: 12 }}>
                          <TouchableOpacity
                            style={{
                              flex: 1,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              paddingVertical: 14,
                              borderRadius: 12,
                              alignItems: "center",
                              borderWidth: 1,
                              borderColor: "rgba(59, 130, 246, 0.3)",
                            }}
                            onPress={() => handleContact(alert)}
                          >
                            <Text
                              style={{
                                color: "#3b82f6",
                                fontWeight: "600",
                                fontSize: 16,
                              }}
                            >
                              Contact
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 20,
                      padding: 40,
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
                      <Ionicons name="search" size={40} color="#FFD700" />
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
                      No alerts found
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
                      Try adjusting your search terms or filters
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#FFD700",
                        paddingHorizontal: 32,
                        paddingVertical: 16,
                        borderRadius: 12,
                        alignItems: "center",
                      }}
                      onPress={resetFilters}
                    >
                      <Text
                        style={{
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Reset All Filters
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </ScrollView>

            <HomeBottomNav />
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default Find;