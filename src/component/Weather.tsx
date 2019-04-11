import React, { Component } from "react";
import  Axios  from "axios";
import { async } from "q";

class Weather extends Component<any, any> {

    constructor(props: any)
    {
        super(props);
        this.state = {
            loaded: false,
            data: null,
            error: false
        };
    }
    componentDidMount() {
        //fecth data
        Axios
        .get("http://api.openweathermap.org/data/2.5/weather?q=Adelaide&units=metric&APPID=340980e456e2904bc137beaa320eaf2e")
        .then(response => this.setState({loaded: true, data: response, error: false}))
        .catch(error => this.setState({loaded: false, data: null, error: true}));
    }

    

    render() {
        return (
            <div>
                {this.state.loaded ? `${this.state.data.data.name} ${this.state.data.data.main.temp} C` : 
                    this.state.error ? "Error" : "loading..."}
            </div>
        );
    }
}
export default Weather;