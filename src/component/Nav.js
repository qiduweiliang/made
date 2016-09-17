import React,{Component} from "react";
import { Link } from "react-router";


class Nav extends Component{
	render(){
		return (
				<div>
					<ul className="nav nav-pills" role="tablist">
					  <li role="presentation">
						  <Link to="/" activeStyle={{color:"#fff",backgroundColor:"#3071a9"}}  onlyActiveOnIndex={true} >Home</Link>
					  </li>
					  <li role="presentation">
						  <Link to="/work" activeStyle={{color:"#fff",backgroundColor:"#3071a9"}}>Work</Link>
					  </li>
					  <li role="presentation">
						  <Link to="/about" activeStyle={{color:"#fff",backgroundColor:"#3071a9"}}>About</Link>
					  </li>
					</ul>
				</div>
		)
	}
}

export default Nav
