import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type PetCardProps = {
  pet: {
    id: number;
    name: string;
    breed: string;
    age: string;
    gender: string;
    image?: string;
  };
  onPressManage?: () => void;
};

const PetCard = ({ pet, onPressManage }: PetCardProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 160,
        backgroundColor: "#1a1a1a",
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 16,
        borderWidth: 1,
        borderColor: "rgba(255, 215, 0, 0.2)",
      }}
      activeOpacity={0.8}
    >
      <View
        style={{
          height: 120,
          backgroundColor: "rgba(255, 215, 0, 0.1)",
          position: "relative",
        }}
      >
        {pet.image && (
          <Image
            source={{ uri: pet.image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        )}
        <View
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
        >
          <Text
            style={{
              color: "#00FF00",
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            ACTIVE
          </Text>
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 12,
          }}
        >
          <View>
            <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
              {pet.name}
            </Text>
            <Text style={{ color: "#FFD700", fontSize: 12, fontWeight: "500" }}>
              {pet.breed}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(255, 215, 0, 0.1)",
              borderRadius: 8,
              paddingHorizontal: 6,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "#FFD700", fontSize: 10, fontWeight: "600" }}>{pet.gender}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
          <Ionicons name="time" size={12} color="#FFD700" style={{ marginRight: 6 }} />
          <Text style={{ color: "#9ca3af", fontSize: 11 }}>{pet.age}</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255, 215, 0, 0.1)",
            paddingVertical: 8,
            borderRadius: 8,
            alignItems: "center",
            marginTop: 4,
          }}
          activeOpacity={0.8}
          onPress={onPressManage}
        >
          <Text style={{ color: "#FFD700", fontWeight: "600", fontSize: 12 }}>Manage</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PetCard;