import React, { PropTypes, PureComponent } from 'react';

const Table = function(props, context) {
  const { material, style } = props;
  const children = [];
  let index = 0;
  props.children.forEach((child) => {
    children.push(React.cloneElement(child, { index, material: material }));
    index += 1;
  });
  let tableStyle = Object.assign({}, Table.styles.table);
  if (material && context.muiTheme) {
    tableStyle = Object.assign(tableStyle, context.muiTheme.table);
  }
  tableStyle = Object.assign(tableStyle, style);
  return <div style={tableStyle}>{children}</div>;
}


  Table.styles = {
    table: {
      width: '100%',
    },
  };

Table.contextTypes = {
    muiTheme: React.PropTypes.object
    };

Table.propTypes = {
    material: PropTypes.bool,
    style: PropTypes.object,
  };


export default Table;
