import {Component} from 'react';
import React from 'react';
import './App.css';
import { timeStamp } from 'console';
import { TextTask } from "./components/TextTask";

interface AppState {
  name: string;
}

interface AppProps {
  melo?: string;
}
export class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <TextTask/>
      </div>
    )
  }
}


