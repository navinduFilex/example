import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface AlertItem {
  id: string;
  petName: string;
  breed: string;
  status: "Active" | "Found";
  image: string;
  age: string;
  gender: "Male" | "Female";
  vaccinated:boolean
}

interface Props {
  alert: AlertItem;
  onCancel: (id: string) => void;
  onFound: (id: string) => void;
}

const ActiveAlertCard = ({ alert, onCancel, onFound }: Props) => {
  return (
    <View
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: "rgba(255,0,0,0.5)",
        marginBottom: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
        <Image
          source={{ uri: alert.image }}
          style={{ width: 80, height: 80, borderRadius: 40, marginRight: 12, borderWidth: 2, borderColor: "#FFD700" }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>{alert.petName}</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 6 }}>
            <Tag text={alert.breed} />
            <Tag text={alert.age} gold />
            <GenderTag gender={alert.gender} />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 8 }}>
        <TouchableOpacity
          onPress={() => onCancel(alert.id)}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "rgba(239,68,68,0.3)",
            backgroundColor: "rgba(239,68,68,0.1)",
          }}
        >
          <Ionicons name="close-circle" size={18} color="#ef4444" />
          <Text style={{ color: "#ef4444", fontWeight: "bold", marginLeft: 6 }}>Cancel Alert</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onFound(alert.id)}
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "rgba(34,197,94,0.3)",
            backgroundColor: "rgba(34,197,94,0.1)",
          }}
        >
          <Ionicons name="checkmark-circle" size={18} color="#22c55e" />
          <Text style={{ color: "#22c55e", fontWeight: "bold", marginLeft: 6 }}>Match Found!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActiveAlertCard;

const Tag = ({ text, gold = false }: { text: string; gold?: boolean }) => (
  <View
    style={{
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      backgroundColor: gold ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.1)",
      marginRight: 4,
      marginBottom: 4,
    }}
  >
    <Text style={{ fontSize: 12, fontWeight: "600", color: gold ? "#FFD700" : "#fff" }}>{text}</Text>
  </View>
);

const GenderTag = ({ gender }: { gender: "Male" | "Female" }) => (
  <View
    style={{
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 6,
      backgroundColor: gender === "Male" ? "rgba(59,130,246,0.2)" : "rgba(236,72,153,0.2)",
      marginRight: 4,
      marginBottom: 4,
    }}
  >
    <Text style={{ fontSize: 12, fontWeight: "600", color: gender === "Male" ? "#3B82F6" : "#EC4899" }}>
      {gender}
    </Text>
  </View>
);
