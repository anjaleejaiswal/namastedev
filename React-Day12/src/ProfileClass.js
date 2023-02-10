import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0,
            count1 : 1,
            userInfo : {
                name : "Dummy Name"
                
            }
        };

        console.log("child-constructor" + this.props.name);
    }

    async componentDidMount(){
        //API call
        const data = await fetch("https://api.github.com/users/anjaleejaiswal");
        const response = await data.json();
        this.setState({
            userInfo : response
        })
        console.log("api call",response);
        console.log("child-componentDidMount" + this.props.name);
    }

    componentDidUpdate(){
        console.log("componentdidUpdate" + this.props.name);
    }

    componentWillUnmount(){
        console.log("compnent will unmount" + this.props.name)
    }

    render() {
        console.log("child-render" + this.props.name);

        return (
            <>
                <div>Profile Class Component {this.props.name}</div>
                <div>{this.state.count}</div>
                <button
                onClick={()=>{
                    this.setState({
                        count : 1,
                        count1 : 2
                    })
                }}> Click</button>
                <div>{this.state.count1}</div>
                <div>{this.state.userInfo?.name}</div>
                <img src={this.state.userInfo?.avatar_url} />
                <div>{this.state.userInfo?.id}</div>
            </>
        )
    }

}

export default Profile;