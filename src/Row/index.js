import React, { PropTypes, PureComponent } from 'react';

class Row extends PureComponent {

  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.elem,
    striped: PropTypes.bool,
    index: PropTypes.number.isRequired,
  };

  static contextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  };


  render() {
    let tableRow = {};
    console.log(this.context);
    if (this.context.muiTheme) {
      tableRow = this.context.muiTheme.tableRow;
    }
    const rowStyle = Object.assign({}, Row.styles.row, tableRow, this.props.style);
    return <div style={rowStyle}>{this.props.children}</div>;
  }

  static styles = {
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 0,
      width: '100%',
      borderTop: '1px solid rgba(0,0,0,.12)',
      borderBottom: '1px solid rgba(0,0,0,.12)',
    },

  }
}

export default Row;
