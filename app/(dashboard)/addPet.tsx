import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/component/ui/Header";
import { useState } from "react";
import HomeBottomNav from "@/component/ui/HomeBottomNav";
import * as ImagePicker from 'expo-image-picker';

const AddPet = () => {
  const router = useRouter();

  const [petName, setPetName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isMale, setIsMale] = useState(true);
  const [petImage, setPetImage] = useState<string | null>(null);
  const [petType, setPetType] = useState("Dog");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [vaccinated, setVaccinated] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPetImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPetImage(result.assets[0].uri);
    }
  };

  const handleAddPet = () => {
    console.log("working");
    
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
                  Add New Pet 🐾
                </Text>

                <Text
                  style={{
                    color: "#9ca3af",
                    fontSize: 16,
                    marginBottom: 32,
                    lineHeight: 24,
                  }}
                >
                  Fill in your pet's details to add them to your profile and
                  start finding perfect matches.
                </Text>

                <View style={{ marginBottom: 32 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 16,
                    }}
                  >
                    Pet Picture
                  </Text>

                  <TouchableOpacity
                    onPress={pickImage}
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: petImage ? "#FFD700" : "rgba(255, 215, 0, 0.2)",
                      borderStyle: petImage ? "solid" : "dashed",
                      padding: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {petImage ? (
                      <Image
                        source={{ uri: petImage }}
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 60,
                          marginBottom: 16,
                        }}
                        resizeMode="cover"
                      />
                    ) : (
                      <View
                        style={{
                          width: 120,
                          height: 120,
                          backgroundColor: "rgba(255, 215, 0, 0.1)",
                          borderRadius: 60,
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 16,
                        }}
                      >
                        <Ionicons name="camera" size={40} color="#FFD700" />
                      </View>
                    )}

                    <Text
                      style={{
                        color: petImage ? "#FFD700" : "#9ca3af",
                        fontSize: 16,
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      {petImage ? "Change Photo" : "Tap to upload photo"}
                    </Text>
                    <Text
                      style={{
                        color: "#666666",
                        fontSize: 14,
                        textAlign: "center",
                        marginTop: 8,
                      }}
                    >
                      Or take a photo
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={takePhoto}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 16,
                    }}
                  >
                    <Ionicons name="camera-outline" size={20} color="#FFD700" />
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 14,
                        fontWeight: "600",
                        marginLeft: 8,
                      }}
                    >
                      Take Photo
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Pet Name *
                  </Text>
                  <TextInput
                    value={petName}
                    onChangeText={setPetName}
                    placeholder="Enter your pet's name"
                    placeholderTextColor="#666666"
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      padding: 16,
                      color: "#ffffff",
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  />
                </View>

                <View style={{ flexDirection: "row", marginBottom: 24, gap: 16 }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 12,
                      }}
                    >
                      Type
                    </Text>
                    <View
                      style={{
                        backgroundColor: "#1a1a1a",
                        borderRadius: 12,
                        padding: 16,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                      }}
                    >
                      <Text style={{ color: "#ffffff", fontSize: 16 }}>
                        {petType}
                      </Text>
                      <Ionicons name="chevron-down" size={20} color="#FFD700" />
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 12,
                      }}
                    >
                      Breed
                    </Text>
                    <TextInput
                      value={petBreed}
                      onChangeText={setPetBreed}
                      placeholder="Breed"
                      placeholderTextColor="#666666"
                      style={{
                        backgroundColor: "#1a1a1a",
                        borderRadius: 12,
                        padding: 16,
                        color: "#ffffff",
                        fontSize: 16,
                        borderWidth: 1,
                        borderColor: "rgba(255, 215, 0, 0.2)",
                      }}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Age
                  </Text>
                  <TextInput
                    value={petAge}
                    onChangeText={setPetAge}
                    placeholder="e.g., 2 years, 6 months"
                    placeholderTextColor="#666666"
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      padding: 16,
                      color: "#ffffff",
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  />
                </View>

                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Gender
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setIsMale(true)}
                      style={{
                        flex: 1,
                        backgroundColor: isMale
                          ? "#FFD700"
                          : "transparent",
                        paddingVertical: 12,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="male"
                        size={20}
                        color={isMale ? "#000000" : "#ffffff"}
                      />
                      <Text
                        style={{
                          color: isMale ? "#000000" : "#ffffff",
                          fontWeight: "600",
                          fontSize: 16,
                          marginLeft: 8,
                        }}
                      >
                        Male
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setIsMale(false)}
                      style={{
                        flex: 1,
                        backgroundColor: !isMale
                          ? "#FFD700"
                          : "transparent",
                        paddingVertical: 12,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="female"
                        size={20}
                        color={!isMale ? "#000000" : "#ffffff"}
                      />
                      <Text
                        style={{
                          color: !isMale ? "#000000" : "#ffffff",
                          fontWeight: "600",
                          fontSize: 16,
                          marginLeft: 8,
                        }}
                      >
                        Female
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Address *
                  </Text>
                  <TextInput
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Your address for pet meetings"
                    placeholderTextColor="#666666"
                    multiline
                    numberOfLines={3}
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      padding: 16,
                      color: "#ffffff",
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                      minHeight: 80,
                      textAlignVertical: "top",
                    }}
                  />
                </View>

                <View style={{ marginBottom: 24 }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: 18,
                      fontWeight: "600",
                      marginBottom: 12,
                    }}
                  >
                    Phone Number *
                  </Text>
                  <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Your contact number"
                    placeholderTextColor="#666666"
                    keyboardType="phone-pad"
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderRadius: 12,
                      padding: 16,
                      color: "#ffffff",
                      fontSize: 16,
                      borderWidth: 1,
                      borderColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#1a1a1a",
                    borderRadius: 12,
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 32,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 4,
                      }}
                    >
                      Vaccinated
                    </Text>
                    <Text style={{ color: "#9ca3af", fontSize: 14 }}>
                      Is your pet fully vaccinated?
                    </Text>
                  </View>
                  <Switch
                    value={vaccinated}
                    onValueChange={setVaccinated}
                    trackColor={{ false: "#767577", true: "#FFD700" }}
                    thumbColor={vaccinated ? "#000000" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>

                <TouchableOpacity
                  onPress={handleAddPet}
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
                    marginBottom: 32,
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
                    Add Pet
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{
                    backgroundColor: "transparent",
                    paddingVertical: 18,
                    borderRadius: 12,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.5)",
                  }}
                  activeOpacity={0.8}
                >
                  <Text
                    style={{
                      color: "#FFD700",
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <HomeBottomNav />
          </SafeAreaView>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default AddPet;