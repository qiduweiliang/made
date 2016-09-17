import React,{Component} from "react";
import { Link } from "react-router";
import axios from "axios";


class About extends Component{
	constructor(){
		super();
		this.state={
			data:{},
			wait:true
		}
	}
	componentDidMount(){
		axios.get('https://api.github.com/users/qiduweiliang')
		.then((res) => {
			console.log(res.data);
			this.setState({
				data:res.data,
				wait:false
			})
		})
	}
	render(){
		return (
				<div>
					{
							this.state.wait ? "正在获取数据" :
							<img src={this.state.data.avatar_url} />
					}
				</div>
			)
	}
}

export default About
