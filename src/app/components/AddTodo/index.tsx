import * as React from "react";
import { Text, View } from "react-native";

const AddTodo: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>この画面で Task を作成できるようにする予定</Text>
    </View>
  );
};

export default AddTodo;
