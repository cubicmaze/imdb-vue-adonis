/* 
	This file is used to import the element-ui components that 
	we are using in this app
*/
import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Container,
  Header,
  Input,
  Button,
  Menu,
  MenuItem,
  Main,
  Card,
  Option,
  Select
} from "element-ui";

Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Container);
Vue.use(Header);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(Main);
Vue.use(Card);
