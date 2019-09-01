import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class Spinner extends Component {
    Circles = () => {
        let div = []
        for (let index = 0; index < 12; index++) {
            div.push(
                <div key={index}>
                    <div className="div-after" style={{ background: this.props.color }}></div>
                </div>
            )
        }
        return div
    }

    render() {
        return <div className="lds-spinner">{this.Circles()}</div>
    }
}

Spinner.propTypes = {
    /** hex color */
    color: PropTypes.string,
}

Spinner.defaultProps = {
    color: '#7f58af',
}
