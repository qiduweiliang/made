import React,{Component} from "react";
import Nav from "./component/Nav"
import Footer from "./Footer"

class App extends Component{
	render(){
		return (
			<div>
				<Nav />
				{this.props.children}
				<Footer />
			</div>
			)
	}
}

export default App
