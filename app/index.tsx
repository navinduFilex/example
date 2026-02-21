import { useAuth } from "@/hooks/useAuth";
import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native"

const Index = () =>{

  const router = useRouter()
  const {user,loading} = useAuth()
  
  if(loading){
    return null
  }

  if(user){
    return <Redirect href={"/(dashboard)/home"}></Redirect>
  }else{
    return <Redirect href={"/guest"}></Redirect>
  }
}

export default Index