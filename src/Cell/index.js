import React, { PropTypes, Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Cell extends Component {

    static propTypes = {
        minWidthPx: PropTypes.number,
        style: PropTypes.object,
    };
    
    static styles = {
        cell: {
            flexGrow: 1,
            overflow: 'hidden',
            verticalAlign: top,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            height: '48px',
            padding: '12px 18px 12px 24px',
            boxSizing: 'border-box',
        },

    }

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        const cellStyle = Object.assign({}, Cell.styles.cell, this.props.style);
        if(this.props.minWidthPx) {
            cellStyle.width = `${this.props.minWidthPx}px`
        }
        return <div style={cellStyle}>{this.props.children}</div>;
    }
}

export default Cell;