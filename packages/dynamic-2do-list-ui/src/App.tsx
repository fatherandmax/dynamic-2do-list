import React from 'react';
import Board from "./components/Board";
import { Layout } from "./layout/Layout";
import Column from "./components/Column/Column";
import { TaskItem } from "./components/TaskItem";

function App() {
  return (
          <Layout>
            <Board>
                <Column columnTitle="To do">
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>
                    <TaskItem title="Test title"/>

                </Column>
                <Column columnTitle="To do">
                    <TaskItem title="Test title"/>
                </Column>
                <Column columnTitle="To do">
                    <TaskItem title="Test title"/>
                </Column>
            </Board>
          </Layout>
      );
}

export default App;
