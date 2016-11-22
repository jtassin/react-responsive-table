import React, { PropTypes, PureComponent } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Row extends PureComponent {

  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.elem,
    striped: PropTypes.bool,
    index: PropTypes.number.isRequired,
  };

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

  render() {
    const {tableRow} = this.context.muiTheme;
    const rowStyle = Object.assign({}, Row.styles.row, this.props.style);
    return <div style={rowStyle}>{this.props.children}</div>;
  }
}

export default Row;
