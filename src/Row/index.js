import React, { PropTypes, PureComponent } from 'react';

const Row = function(props, context) {
    const { index, material, stripped } = props;
    let tableRow = {};
    if (material && context.muiTheme) {
      tableRow = Object.assign({}, context.muiTheme.tableRow, {minHeight: context.muiTheme.tableRow.height});;
        if (stripped && (index % 2 === 0)) {
            tableRow.backgroundColor = context.muiTheme.tableRow.stripeColor;
        }
    }
    const rowStyle = Object.assign({}, Row.styles.row, tableRow, props.style);
    return <div style={rowStyle}>{props.children}</div>;
}

  Row.propTypes = {
    style: PropTypes.object,
    children: PropTypes.elem,
    striped: PropTypes.bool,
    index: PropTypes.number.isRequired,
  };

  Row.contextTypes = {
    muiTheme: React.PropTypes.object,
  };


Row.styles = {
    row: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 0,
      width: '100%',
      borderTop: '1px solid',
    },

  };


export default Row;
