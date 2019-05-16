import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TwitterShareButton} from "react-twitter-embed";
import {fetchPairing} from '../actions';
import '../App.css';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.getNewPairing = this.getNewPairing.bind(this);

        this.state = {
            this: this.props.this,
            that: this.props.that
        }
    }

    async componentDidMount() {
        this.props.fetchPairing();
    }

    getNewPairing() {
        this.props.fetchPairing();
    }

    fetchedPairing() {
        if (this.props.isFetching === true) {
            return (
                <div id="thisthat">
                    <div id="loading">Loading...</div>
                </div>
            )
        } else if (this.props.hasFailed === true) {
            return (
                <div id="thisthat">
                    <div id="loading">Failed to Receive Data</div>
                </div>
            )
        } else if ((this.props.this !== null) && (this.props.that !== null)) {
            return (
                <div id="thisthat">
                    <h2 id="this" className="thisthat" onClick={this.getNewPairing}>{this.props.this}</h2>
                    <h3 id="for">for</h3>
                    <h2 id="that" className="thisthat" onClick={this.getNewPairing}>{this.props.that}!</h2>
                </div>
            )
        }
        return (
            <div id="thisthat">
                <div id="loading">Failed to Receive Data</div>
            </div>
        )
    }

    render() {
        return (
            <div className="main">
                <div className="topbar"/>
                <div className="thinbar"/>
                <div className="display-container container">
                    <div id="tweet" className="small-padding display-topright">
                        <TwitterShareButton
                            url={'https://itsthisforthat.com'}
                            options={{text: 'Wait, what does your startup do?'}}
                        />
                    </div>
                    <div id="text">
                        <h1 id="what" className="padding">Wait, what does your startup do???</h1>
                        <h1 id="so" className="padding">So, basically, it's like a</h1>
                        {this.fetchedPairing()}
                    </div>
                    <button onClick={this.getNewPairing} className="padding display-bottomright refresh">REFRESH</button>
                </div>
                <div className="thinbar"/>
                <div className="bottombar display-container">
                    <div className="display-left bottom-text">Copyright Stuff.</div>
                    <div className="display-right bottom-text">Some Other Info. (Can't follow me on Twitter. I don't have one :/)</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.pairings.isFetching,
        hasFailed: state.pairings.hasFailed,
        this: state.pairings.this,
        that: state.pairings.that,
    }
};

const mapDispatchToProps = {
    fetchPairing,
};

export default connect(mapStateToProps, mapDispatchToProps) (MainPage);
