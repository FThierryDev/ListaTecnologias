import { Text, View } from "react-native";
import { useState } from "react";

import { Button } from "../Button";
import { styles } from "./styles";

interface Props {
  techName: string;
  remove: (techName: string) => void;
}

export function Technology({ techName, remove }: Props) {
  const [checkout, setCheckout] = useState(false);

  function handleCheckout() {
    setCheckout(!checkout);
  }

  return (
    <View style={styles.container}>
      <Button
        iconName={!checkout ? "circle-o" : "check-circle"}
        trasparent
        onPress={handleCheckout}
      />

      <View
        style={[
          styles.containerText,
          checkout && { backgroundColor: "#1A1A1A" },
        ]}
      >
        <Text
          style={[
            styles.technologyName,
            checkout && { textDecorationLine: "line-through", color: "red" },
          ]}
        >
          {techName}
        </Text>
      </View>

      <Button
        iconName="trash-outline"
        trasparent
        onPress={() => remove(techName)}
      ></Button>
    </View>
  );
}
