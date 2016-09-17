import React,{Component} from "react";
import { Link } from "react-router";
import Card from "./component/Card";

let cardData = [
	{title:'第一天',desc:'第一天描述',img:'./images/滨海新城_15.gif',url:'a'},
	{title:'第二天',desc:'第二天描述',img:'./images/博辉万象城_09.gif',url:'b'},
	{title:'第三天',desc:'第三天描述',img:'./images/戴河国际_13.gif',url:'c'},
	{title:'第四天',desc:'第四天描述',img:'./images/滨海新城_15.gif',url:'d'},
	{title:'第五天',desc:'第五天描述',img:'./images/博辉万象城_09.gif',url:'e'},
	{title:'第六天',desc:'第六天描述',img:'./images/戴河国际_13.gif',url:'f'},
]
class Work extends Component{
	render(){
		return (
			<div>
				<div className="col-md-4 xxx" style={{backgroundColor: 'blue'}}>col-md-4</div>
				<div className="col-md-4 xxx" style={{backgroundColor: 'yellow'}}>col-md-4</div>
				<div className="col-md-4 xxx" style={{backgroundColor: 'red'}}>col-md-4</div>
				<div className="row" style={{marginTop:'20px'}}>
					{cardData.map((item,i) => <Card {...item} key={i} />)}
				</div>
			</div>
			)
	}
}

export default Work
