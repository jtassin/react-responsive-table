import React, { PropTypes, Component } from 'react';

class Cell extends Component {

  static propTypes = {
    minWidthPx: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.elem,
    thead: PropTypes.bool,
  };

  static styles = {
    cell: {
      flexGrow: 1,
      overflow: 'hidden',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      minHeight: '48px',
      padding: '12px 18px 12px 24px',
      boxSizing: 'border-box',
      fontSize: '13px',
    },
    thead: {
      fontWeight: 700,
      fontSize: '12px',
    },
  }

  render() {
    let cellStyle = Object.assign({}, Cell.styles.cell);
    if (this.props.thead) {
      cellStyle = Object.assign({}, cellStyle, Cell.styles.thead);
    }
    cellStyle = Object.assign({}, cellStyle, this.props.style);
    if (this.props.minWidthPx) {
      cellStyle.width = `${this.props.minWidthPx}px`;
    }
    return <div style={cellStyle}>{this.props.children}</div>;
  }
}

export default Cell;
