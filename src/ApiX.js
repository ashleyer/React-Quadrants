import { Component } from 'react';




class ApiX extends Component {


    render() {
        return (
            <section className="section">
                <img src={this.props.apiData} alt="" />
                {/* <p>I'm Working</p> */}
            </section>
        );
    };
};

export default ApiX;