import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/component/ui/Header";
import { useState, useEffect } from "react";
import HomeBottomNav from "@/component/ui/HomeBottomNav";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "David Wilson",
    email: "david.wilson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Park Avenue, New York, NY 10022",
    bio: "Pet lover and animal enthusiast. Always looking for playdates for my furry friends! 🐾",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [tempUserData, setTempUserData] = useState({ ...userData });
  
  const [showImageOptions, setShowImageOptions] = useState(false);

  const [userStats] = useState({
    totalPets: 2,
    activeAlerts: 1
  });

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log("Camera roll permission not granted");
      }
    })();
  }, []);

  const pickImage = async () => {
    setShowImageOptions(false);
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert(
        "Permission Denied",
        "You need to enable photo library access in your device settings."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      if (isEditMode) {
        setTempUserData({ ...tempUserData, profileImage: result.assets[0].uri });
      } else {
        setUserData({ ...userData, profileImage: result.assets[0].uri });
      }
    }
  };

  const takePhoto = async () => {
    setShowImageOptions(false);
    
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert(
        "Permission Denied",
        "You need to enable camera access in your device settings."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      if (isEditMode) {
        setTempUserData({ ...tempUserData, profileImage: result.assets[0].uri });
      } else {
        setUserData({ ...userData, profileImage: result.assets[0].uri });
      }
    }
  };

  const handleEditToggle = () => {
    if (isEditMode) {
      setUserData({ ...tempUserData });
      Alert.alert("Success", "Profile updated successfully!");
    } else {
      setTempUserData({ ...userData });
    }
    setIsEditMode(!isEditMode);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    setTempUserData({ ...userData });
  };

  const handleSaveChanges = () => {
    if (!tempUserData.name.trim()) {
      Alert.alert("Validation Error", "Please enter your name.");
      return;
    }
    
    if (!tempUserData.email.trim()) {
      Alert.alert("Validation Error", "Please enter your email.");
      return;
    }

    setUserData({ ...tempUserData });
    setIsEditMode(false);
    Alert.alert("Success", "Profile updated successfully!");
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          style: "destructive",
          onPress: () => {
            console.log("User logged out");
            router.replace("/");
          }
        }
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
                    marginBottom: 24,
                  }}
                >
                  My Profile 👤
                </Text>

                <View style={{ alignItems: "center", marginBottom: 32 }}>
                  <TouchableOpacity
                    onPress={() => setShowImageOptions(true)}
                    style={{
                      position: "relative",
                    }}
                    disabled={!isEditMode}
                  >
                    <View
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 70,
                        overflow: "hidden",
                        borderWidth: 3,
                        borderColor: "#FFD700",
                      }}
                    >
                      <Image
                        source={{ uri: isEditMode ? tempUserData.profileImage : userData.profileImage }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                      />
                    </View>
                    
                    {isEditMode && (
                      <View
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          backgroundColor: "#FFD700",
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                          borderWidth: 2,
                          borderColor: "#000000",
                        }}
                      >
                        <Ionicons name="camera" size={20} color="#000000" />
                      </View>
                    )}
                  </TouchableOpacity>

                  {isEditMode && (
                    <Text
                      style={{
                        color: "#FFD700",
                        fontSize: 14,
                        marginTop: 8,
                        textAlign: "center",
                      }}
                    >
                      Tap photo to change
                    </Text>
                  )}
                </View>

                <View
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: 20,
                    padding: 20,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 32,
                  }}
                >
                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#FFD700", fontSize: 24, fontWeight: "bold" }}>
                        {userStats.totalPets}
                      </Text>
                      <Text style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>
                        Pets
                      </Text>
                    </View>
                    
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "#FFD700", fontSize: 24, fontWeight: "bold" }}>
                        {userStats.activeAlerts}
                      </Text>
                      <Text style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>
                        Alerts
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: 20,
                    padding: 24,
                    borderWidth: 1,
                    borderColor: "rgba(255, 215, 0, 0.2)",
                    marginBottom: 24,
                  }}
                >
                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontSize: 14,
                        fontWeight: "600",
                        marginBottom: 6,
                      }}
                    >
                      Full Name
                    </Text>
                    {isEditMode ? (
                      <TextInput
                        value={tempUserData.name}
                        onChangeText={(text) => setTempUserData({ ...tempUserData, name: text })}
                        style={{
                          backgroundColor: "#2a2a2a",
                          borderRadius: 8,
                          padding: 12,
                          color: "#ffffff",
                          fontSize: 16,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.3)",
                        }}
                      />
                    ) : (
                      <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "600" }}>
                        {userData.name}
                      </Text>
                    )}
                  </View>

                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontSize: 14,
                        fontWeight: "600",
                        marginBottom: 6,
                      }}
                    >
                      Email Address
                    </Text>
                    {isEditMode ? (
                      <TextInput
                        value={tempUserData.email}
                        onChangeText={(text) => setTempUserData({ ...tempUserData, email: text })}
                        style={{
                          backgroundColor: "#2a2a2a",
                          borderRadius: 8,
                          padding: 12,
                          color: "#ffffff",
                          fontSize: 16,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.3)",
                        }}
                        keyboardType="email-address"
                      />
                    ) : (
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="mail" size={16} color="#FFD700" style={{ marginRight: 8 }} />
                        <Text style={{ color: "#ffffff", fontSize: 16 }}>
                          {userData.email}
                        </Text>
                      </View>
                    )}
                  </View>

                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontSize: 14,
                        fontWeight: "600",
                        marginBottom: 6,
                      }}
                    >
                      Phone Number
                    </Text>
                    {isEditMode ? (
                      <TextInput
                        value={tempUserData.phone}
                        onChangeText={(text) => setTempUserData({ ...tempUserData, phone: text })}
                        style={{
                          backgroundColor: "#2a2a2a",
                          borderRadius: 8,
                          padding: 12,
                          color: "#ffffff",
                          fontSize: 16,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.3)",
                        }}
                        keyboardType="phone-pad"
                      />
                    ) : (
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="call" size={16} color="#FFD700" style={{ marginRight: 8 }} />
                        <Text style={{ color: "#ffffff", fontSize: 16 }}>
                          {userData.phone}
                        </Text>
                      </View>
                    )}
                  </View>

                  <View style={{ marginBottom: 24 }}>
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontSize: 14,
                        fontWeight: "600",
                        marginBottom: 6,
                      }}
                    >
                      Address
                    </Text>
                    {isEditMode ? (
                      <TextInput
                        value={tempUserData.address}
                        onChangeText={(text) => setTempUserData({ ...tempUserData, address: text })}
                        style={{
                          backgroundColor: "#2a2a2a",
                          borderRadius: 8,
                          padding: 12,
                          color: "#ffffff",
                          fontSize: 16,
                          borderWidth: 1,
                          borderColor: "rgba(255, 215, 0, 0.3)",
                          minHeight: 60,
                          textAlignVertical: "top",
                        }}
                        multiline
                        numberOfLines={3}
                      />
                    ) : (
                      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                        <Ionicons name="location" size={16} color="#FFD700" style={{ marginRight: 8, marginTop: 2 }} />
                        <Text style={{ color: "#ffffff", fontSize: 16, flex: 1 }}>
                          {userData.address}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>

                <View style={{ gap: 16 }}>
                  {isEditMode ? (
                    <>
                      <TouchableOpacity
                        onPress={handleSaveChanges}
                        style={{
                          backgroundColor: "#FFD700",
                          paddingVertical: 16,
                          borderRadius: 12,
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                        activeOpacity={0.8}
                      >
                        <Ionicons name="checkmark" size={20} color="#000000" style={{ marginRight: 8 }} />
                        <Text
                          style={{
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: 16,
                          }}
                        >
                          Save Changes
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={handleCancelEdit}
                        style={{
                          backgroundColor: "transparent",
                          paddingVertical: 16,
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
                    </>
                  ) : (
                    <TouchableOpacity
                      onPress={handleEditToggle}
                      style={{
                        backgroundColor: "#FFD700",
                        paddingVertical: 16,
                        borderRadius: 12,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                      activeOpacity={0.8}
                    >
                      <Ionicons name="create" size={20} color="#000000" style={{ marginRight: 8 }} />
                      <Text
                        style={{
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Edit Profile
                      </Text>
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={handleLogout}
                    style={{
                      backgroundColor: "transparent",
                      paddingVertical: 16,
                      borderRadius: 12,
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "rgba(239, 68, 68, 0.5)",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                    activeOpacity={0.8}
                  >
                    <Ionicons name="log-out" size={20} color="#ef4444" style={{ marginRight: 8 }} />
                    <Text
                      style={{
                        color: "#ef4444",
                        fontWeight: "600",
                        fontSize: 16,
                      }}
                    >
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            <HomeBottomNav />
          </SafeAreaView>
        </LinearGradient>

        <Modal
          visible={showImageOptions}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowImageOptions(false)}
        >
          <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <View
              style={{
                backgroundColor: "#1a1a1a",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 24,
                borderWidth: 1,
                borderColor: "rgba(255, 215, 0, 0.2)",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold", marginBottom: 24, textAlign: "center" }}>
                Change Profile Photo
              </Text>
              
              <TouchableOpacity
                onPress={takePhoto}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Ionicons name="camera" size={24} color="#FFD700" style={{ marginRight: 16 }} />
                <Text style={{ color: "#ffffff", fontSize: 16 }}>Take Photo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={pickImage}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Ionicons name="images" size={24} color="#FFD700" style={{ marginRight: 16 }} />
                <Text style={{ color: "#ffffff", fontSize: 16 }}>Choose from Gallery</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setShowImageOptions(false)}
                style={{
                  paddingVertical: 16,
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <Text style={{ color: "#ef4444", fontSize: 16, fontWeight: "600" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaProvider>
  );
};

export default Profile;