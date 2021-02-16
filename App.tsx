import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import AddTodo from './src/app/components/AddTodo'
import TodoList from './src/app/components/TodoList'

const Tab = createBottomTabNavigator();

const AddTodoIcon: React.FC<{ color: string, size: number }> = ({ color, size }) => (
  <AntDesign name="book" color={color} size={size}/>
)

const TodoListIcon: React.FC<{ color: string, size: number }> = ({ color, size }) => (
  <Feather name="list" color={color} size={size} />
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="タスクを作成"
          component={AddTodo}
          options={{
            tabBarIcon: AddTodoIcon
          }}
        />
        <Tab.Screen
          name="タスク一覧"
          component={TodoList}
          options={{
            tabBarIcon: TodoListIcon
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
