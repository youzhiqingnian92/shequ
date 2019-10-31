import React,{Component} from 'react';
//引入路由
import {HashRouter} from 'react-router-dom'

import ReactDOM from 'react-dom';
import './index.css';
//引入antd移动框架
import 'antd-mobile/dist/antd-mobile.css';
//重置样式
import './assets/css/reset.css'
//适配移动端
import './assets/js/rem'
import App from './App';
import * as serviceWorker from './serviceWorker';
//引入axios
import axios from 'axios'
Component.prototype.$axios= axios


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
