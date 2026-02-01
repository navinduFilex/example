import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type TopMatchCardProps = {
  pet: {
    id: number;
    name: string;
    breed: string;
    age: string;
    gender: string;
    owner: string;
    location: string;
    contact: string;
    compatibility: string;
    image?: string;
  };
  onPressView?: () => void;
};

const TopMatchCard = ({ pet, onPressView }: TopMatchCardProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 280,
        backgroundColor: "#1a1a1a",
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 16,
        borderWidth: 1,
        borderColor: "rgba(255, 215, 0, 0.2)",
      }}
      activeOpacity={0.8}
    >
      <View style={{ height: 160, backgroundColor: "rgba(255, 215, 0, 0.1)", position: "relative" }}>
        {pet.image && <Image source={{ uri: pet.image }} style={{ width: "100%", height: "100%" }} />}
        <View
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "rgba(0,0,0,0.7)",
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="heart" size={16} color="#FFD700" />
          <Text style={{ color: "#FFD700", fontWeight: "bold", marginLeft: 4, fontSize: 14 }}>
            {pet.compatibility}
          </Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <View>
            <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold", marginBottom: 4 }}>{pet.name}</Text>
            <Text style={{ color: "#FFD700", fontSize: 14, fontWeight: "500" }}>{pet.breed}</Text>
          </View>
          <View style={{ backgroundColor: "rgba(255, 215, 0, 0.1)", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 6 }}>
            <Text style={{ color: "#FFD700", fontSize: 12, fontWeight: "600" }}>{pet.gender}</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "rgba(255, 215, 0, 0.05)", borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <Ionicons name="person" size={18} color="#FFD700" style={{ marginRight: 8 }} />
            <Text style={{ color: "#ffffff", fontSize: 14 }}>{pet.owner}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <Ionicons name="location" size={18} color="#FFD700" style={{ marginRight: 8 }} />
            <Text style={{ color: "#9ca3af", fontSize: 14 }}>{pet.location}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="call" size={18} color="#FFD700" style={{ marginRight: 8 }} />
            <Text style={{ color: "#9ca3af", fontSize: 14 }}>{pet.contact}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: "#FFD700", paddingVertical: 14, borderRadius: 12, alignItems: "center" }}
          activeOpacity={0.8}
          onPress={onPressView}
        >
          <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TopMatchCard;