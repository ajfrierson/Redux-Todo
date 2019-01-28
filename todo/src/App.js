import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';
import './App.css';

class components extends Component (
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    }
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  };
)





