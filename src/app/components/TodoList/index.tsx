import * as React from "react";
import axios from "axios";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Text, View, SectionList, Dimensions, TouchableHighlight } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const dummyData = [
  {
    title: "TODO",
    data: [
      {
        id: "xxxx-yyyy-zzzz",
        title: "taskを削除できるようにする",
        status: "todo",
      },
      {
        id: "xxxx-yyyy-zzzz",
        title: "taskを削除できるようにする part2",
        status: "todo",
      },
    ],
  },
  {
    title: "DOING",
    data: [
      {
        id: "iiii-jjjj-kkkk",
        title: "task一覧画面を作る",
        status: "doing",
      },
    ],
  },
  {
    title: "DONE",
    data: [
      {
        id: "aaaa-bbbb-cccc",
        title: "Snackbar の見た目をつくる",
        status: "todo",
      },
    ],
  },
];
type Task = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
};

type Sections = {
  title: string;
  data: Array<Task>;
}[];

const TodoList: React.FC = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<null | Sections>(null);

  // useFocusEffect にわたす関数は useCallback する
  // refs: https://reactnavigation.org/docs/use-focus-effect
  // しなかった場合，フォーカスしているとき常に繰り返しその effect が呼び出されてしまう
  useFocusEffect(
    useCallback(() => {
      // TODO: localhost:3000/todo に GET fetch する
      axios.get<Task[]>("http://localhost:3000/todo").then((res) => {
        const processedData: Sections = [
          { title: "todo", data: [] },
          { title: "doing", data: [] },
          { title: "done", data: [] },
        ];
        // TODO: fetch して取得したデータを Sections 型に変換して setData する
        for (const task of res.data) {
          if (task.status === "todo") {
            processedData[0].data.push(task);
          }
          if (task.status === "doing") {
            processedData[1].data.push(task);
          }
          if (task.status === "done") {
            processedData[2].data.push(task);
          }
        }
        setData(processedData);
      });
    }, []),
  );

  // TODO: data が 未 fetch の場合は ローディングインディケータ を出す
  if (!data) return null;
  return (
    <Section>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ItemWrapper
            first={index === 0}
            onPress={() => navigation.navigate("タスク編集", { id: item.id })}
            underlayColor="#aaf"
          >
            <ItemText>{item.title}</ItemText>
          </ItemWrapper>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeaderWrapper>
            <SectionHeaderText>{title}</SectionHeaderText>
          </SectionHeaderWrapper>
        )}
      />
      <Text>この画面では Task 一覧が表示される予定</Text>
    </Section>
  );
};

const Section = styled(View)`
  align-items: center;
  background: white;
  height: ${Dimensions.get("window").height}px;
`;

const SectionHeaderWrapper = styled(View)`
  background: #eee;
  width: ${Dimensions.get("window").width}px;
  height: 30px;
  justify-content: center;
`;

const SectionHeaderText = styled(Text)`
  font-weight: bold;
  margin-left: 15px;
`;

const ItemWrapper = styled(TouchableHighlight)<{ first?: boolean }>`
  height: 60px;
  width: ${Dimensions.get("window").width}px;
  justify-content: center;
  ${({ first }) =>
    first &&
    `
    border-top-color: #aaa;
    border-top-width: 1px;
  `}
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  background: #fff;
`;

const ItemText = styled(Text)`
  margin-left: 15px;
`;

export default TodoList;
