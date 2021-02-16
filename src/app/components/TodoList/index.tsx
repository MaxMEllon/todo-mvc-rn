import * as React from 'react'
import { Text, View } from 'react-native'

const TodoList: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        この画面では Task 一覧が表示される予定
      </Text>
    </View>
  );
}

export default TodoList
