import * as React from "react";
import { useState } from "react"
import styled from "styled-components";
import { Text, View, TextInput, Dimensions, TouchableHighlight } from "react-native";

const AddTodo = () => {
  const [todoTitle, changeTodoTitle] = useState('')
  return (
    <AddTodoPresentation
      todoTitle={todoTitle}
      onChangeTodoTitle={changeTodoTitle}
    />
  )
}

type Props = {
  todoTitle: string
  onChangeTodoTitle: (txt: string) => unknown
}

const AddTodoPresentation: React.FC<Props> = ({
  todoTitle,
  onChangeTodoTitle
}) => {
  return (
    <Section>
      <Form>
        <Header>タスク名を入力</Header>
        <Input
          value={todoTitle}
          onChangeText={onChangeTodoTitle}
        />
        <SubmitSeciton>
          <Submit>
            <Text>追加する</Text>
          </Submit>
        </SubmitSeciton>
      </Form>
    </Section>
  );
};

export default AddTodo;

const Section = styled(View)`
  flex: 1;
  align-items: center;
  background: #fff;
`

const Form = styled(View)`
  margin-top: 80px;
  width: ${Dimensions.get("window").width - 60}px;
`

const Input = styled(TextInput)`
  height: 40px;
  margin-top: 10px;
  border: 1px solid #000;
  background: #eee;
`

const Header = styled(Text)`
  font-weight: bold;
`

const SubmitSeciton = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`

const Submit = styled(TouchableHighlight)`
  background: #0f0;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
