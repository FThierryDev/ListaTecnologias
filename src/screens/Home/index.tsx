import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Technology } from "../../components/Technology";
import { Button } from "../../components/Button";

import { styles } from "./styles";

export function Home() {
  const [techName, setTechName] = useState("");
  const [techs, setTechs] = useState([] as string[]);
  const [finishedTechs, setFinishedTechs] = useState([] as string[]);

  function addTechnology() {
    if (techs.includes(techName) || techName === "") {
      Alert.alert("Error", "Tecnologia já cadastrada ou não inserida");
    } else {
      setTechs([...techs, techName]);
    }
    setTechName("");
  }

  function removeTechnology(techName: string) {
    Alert.alert("Remove", `Deseja realmente remover ${techName}`, [
      {
        text: "sim",
        onPress: () => {
          setTechs(techs.filter((technology) => technology !== techName));
        },
      },
      {
        text: "não",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.header}>
        <Text style={styles.title}> Minhas Tecnologias </Text>
      </View>

      <View style={styles.containerRegisterTech}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tecnologia"
          placeholderTextColor="#808080"
          onChangeText={(text) => setTechName(text)}
          value={techName}
        />
        <Button iconName="add-circle-outline" onPress={addTechnology} />
      </View>

      <View style={styles.content}>
        <View style={styles.situation}>
          <View style={styles.situationText}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.count}> {techs.length} </Text>
          </View>

          <View style={styles.situationText}>
            <Text style={styles.finished}>Concluidas</Text>
            <Text style={styles.count}> {finishedTechs.length} </Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scorollList}>
        <View style={styles.containerListTech}>
          {techs.length === 0 && finishedTechs.length === 0 ? (
            <View style={styles.line}>
              <View style={styles.listEmpty}>
                <Ionicons
                  name="document-text-outline"
                  size={56}
                  color="#808080"
                  style={{ marginBottom: 16 }}
                />
                <Text style={[styles.textlistEmpty, { fontWeight: "bold" }]}>
                  Você ainda não tem tecnologias cadastradas
                </Text>
                <Text style={styles.textlistEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          ) : (
            techs.map((item) => (
              <Technology
                key={item}
                techName={item}
                remove={() => removeTechnology(item)}
              />
            ))
          )}

          {finishedTechs.map((item) => (
            <Technology
              key={item}
              techName={item}
              remove={() => removeTechnology(item)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
