import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Feather } from '@expo/vector-icons';
import AddTodo from './src/app/components/AddTodo'
import TodoList from './src/app/components/TodoList'

const Tab = createBottomTabNavigator();

const AddTodoStack = createStackNavigator()
const TodoListStack = createStackNavigator()

const AddTodoStackComponent = () => {
  return (
    <AddTodoStack.Navigator>
      <AddTodoStack.Screen
        name="タスクの追加"
        component={AddTodo}
      />
    </AddTodoStack.Navigator>
  )
}

const TodoListStackComponent = () => {
  return (
    <TodoListStack.Navigator>
      <TodoListStack.Screen
        name="タスク一覧"
        component={TodoList}
      />
      {/*
      <AddTodoStack.Screen
        name="タスク編集"
      />
      */}
    </TodoListStack.Navigator>
  )
}

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
          name="AddTodoStack"
          component={AddTodoStackComponent}
          options={{
            tabBarIcon: AddTodoIcon
          }}
        />
        <Tab.Screen
          name="TodoList"
          component={TodoListStackComponent}
          options={{
            tabBarIcon: TodoListIcon
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
