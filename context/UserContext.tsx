import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "@/service/userService";
import { useAuth } from "@/hooks/useAuth";

interface IUserData {
  username: string;
  email: string;
  whatsAppNum: string;
  address: string;
  profileImage: string | null;
}

interface UserContextType {
  userData: IUserData | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: any) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    if (!user) return;

    const data = await getUserData(user.uid);

    setUserData({
      username: data?.username ?? "",
      email: data?.email ?? "",
      whatsAppNum: data?.whatsAppNum ?? "",
      address: data?.address ?? "",
      profileImage: data?.profileImage ?? null,
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        userData,
        loading,
        refreshUser: fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used inside UserProvider");
  return context;
};