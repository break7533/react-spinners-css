import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Ellipsis extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 4; index++) {
            div.push(<div key={index} style={{ background: `${this.props.color}` }}></div>)
        }
        return div;
    }

    render() {
        return <div className="lds-ellipsis">{this.Circles()}</div>
    }
}

Ellipsis.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Ellipsis.defaultProps = {
    color: '#7f58af',
}
