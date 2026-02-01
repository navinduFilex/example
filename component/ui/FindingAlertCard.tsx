import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type FindingAlert = {
  id: number;
  petName: string;
  breed: string;
  age: string;
  gender: string;
  alertCreated: string;
  address: string;
  status: "Active" | "Resolved" | string;
};

type FindingAlertCardProps = {
  alert: FindingAlert;
  onEdit?: () => void;
  onDelete?: () => void;
  onViewComments?: () => void;
};

const FindingAlertCard = ({
  alert,
  onEdit,
  onDelete,
  onViewComments,
}: FindingAlertCardProps) => {
  return (
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#FFD700", fontSize: 18, fontWeight: "bold" }}>
          {alert.status} Finding Alert
        </Text>
        <View
          style={{
            backgroundColor:
              alert.status === "Active" ? "rgba(0,255,0,0.1)" : "rgba(255,0,0,0.1)",
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              color: alert.status === "Active" ? "#00FF00" : "#FF0000",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {alert.status}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 215, 0, 0.05)",
          borderRadius: 12,
          padding: 16,
          marginBottom: 20,
        }}
      >
        {[
          { label: "Pet Name", value: alert.petName },
          { label: "Breed", value: alert.breed },
          { label: "Age", value: alert.age },
          { label: "Gender", value: alert.gender },
          { label: "Address", value: alert.address },
        ].map((item, index) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <Text style={{ color: "#FFD700", fontSize: 14, marginBottom: 4 }}>
              {item.label}
            </Text>
            <Text
              style={{
                color: item.label === "Address" ? "#9ca3af" : "#ffffff",
                fontSize: 16,
                lineHeight: 20,
              }}
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 24,
          paddingHorizontal: 8,
        }}
      >
        <Ionicons name="time" size={16} color="#FFD700" />
        <Text
          style={{
            color: "#FFD700",
            fontSize: 14,
            fontWeight: "500",
            marginLeft: 8,
          }}
        >
          Created {alert.alertCreated}
        </Text>
      </View>

      <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FFD700",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={onEdit}
          activeOpacity={0.8}
        >
          <Ionicons name="create" size={18} color="#000000" style={{ marginRight: 8 }} />
          <Text style={{ color: "#000000", fontWeight: "bold", fontSize: 16 }}>
            Edit Alert
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#FF0000",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={onDelete}
          activeOpacity={0.8}
        >
          <Ionicons name="trash" size={18} color="#FF0000" style={{ marginRight: 8 }} />
          <Text style={{ color: "#FF0000", fontWeight: "bold", fontSize: 16 }}>Delete</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#FFD700",
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
        onPress={onViewComments}
        activeOpacity={0.8}
      >
        <Ionicons name="chatbubbles" size={18} color="#FFD700" style={{ marginRight: 8 }} />
        <Text style={{ color: "#FFD700", fontWeight: "bold", fontSize: 16 }}>
          View Comments
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FindingAlertCard;