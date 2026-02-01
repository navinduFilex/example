import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePathname, useRouter } from "expo-router";

type NavItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  path: string;
};

const NAV_ITEMS: NavItem[] = [
  { icon: "home", label: "Home", path: "/home" },
  { icon: "search", label: "Find", path: "/find" },
  { icon: "paw", label: "Alert", path: "/alerts" },
  { icon: "log-out", label: "Logout", path: "/" }, 
];

const HomeBottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#0a0a0a",
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 215, 0, 0.1)",
      }}
    >
      <SafeAreaView edges={["bottom"]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 16,
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.path || pathname.startsWith(item.path + "/");

            return (
              <TouchableOpacity
                key={item.label}
                style={{ alignItems: "center" }}
                activeOpacity={0.7}
                onPress={() => router.replace(item.path as any)}
              >
                <Ionicons
                  name={item.icon}
                  size={28}
                  color={isActive ? "#FFD700" : "#666666"}
                />
                <Text
                  style={{
                    color: isActive ? "#FFD700" : "#9ca3af",
                    fontSize: 12,
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeBottomNav;