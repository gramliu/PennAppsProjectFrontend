/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "views/Home.js";
import Summary from "views/Summary.js";
import Letter from "views/Letter.js";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-bank",
    component: Home,
    layout: "/app"
  },
  {
    path: "/summary",
    name: "Summary",
    icon: "tim-icons icon-paper",
    component: Summary,
    layout: "/app"
  },
  {
    path: "/letter",
    name: "Letter",
    icon: "tim-icons icon-bullet-list-67",
    component: Letter,
    layout: "/app"
  }
];
export default routes;
