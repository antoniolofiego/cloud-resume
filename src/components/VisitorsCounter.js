import React, { Component } from 'react';

class VisitorsCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visitors: null,
        };
    }

    componentDidMount() {
        try {
            fetch(
                'https://ph9exrzf7c.execute-api.us-east-1.amazonaws.com/Prod',
                {
                    method: 'POST',
                }
            )
                .then((response) => response.json())
                .then((data) => this.setState({ visitors: data['visitors'] }));
        } catch (error) {
            this.setState({ error });
        }
    }

    render() {
        return <p>You are visitor number {this.state.visitors}</p>;
    }
}

export default VisitorsCounter;
