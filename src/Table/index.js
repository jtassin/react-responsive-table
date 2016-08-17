import React, { PropTypes, Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Table extends Component {
    
    static styles = {
        table: {
        },
        mdlTable: {
            boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
            border: '1px solid rgba(0,0,0,.12)',
            borderCollapse: 'collapse',
            whiteSpace: 'nowrap',
            fontSize: '13px',
            backgroundColor: '#fff',
            fontSize: '13px',
            color: '#757575',
        }
    }

    static propTypes = {
        mdl: PropTypes.bool,
        style: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    render() {
        const tableStyle = Object.assign({}, Table.styles.table, this.props.style);
        if(this.props.mdl) {
            Object.assign(tableStyle, Table.styles.mdlTable);
        }
        return <div style={tableStyle}>{this.props.children}</div>;
    }
}

export default Table;