import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import { Technology } from "../../components/Technology";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function Home() {
  const [techName, setTechName] = useState("");
  const [techs, setTechs] = useState([] as string[]);

  function addTechnology() {
    if (techs.includes(techName) || techName === "") {
      Alert.alert("Error", "Tecnologia já cadastrada ou não inserida");
    } else {
      setTechs([...techs, techName]);
    }
    setTechName("");
  }
}
