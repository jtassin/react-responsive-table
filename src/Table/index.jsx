import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';

const Table = (props, context) => {
  const { material } = props;
  const children = [];
  let index = 0;
  if (props.children) {
    if (Array.isArray(props.children)) {
      props.children.forEach((child) => {
        children.push(React.cloneElement(child, { index, material }));
        index += 1;
      });
    } else {
      children.push(props.children);
    }
  }
  return <div style={Table.getStyles(props, context)}>{children}</div>;
};


Table.styles = {
  table: {
    width: '100%',
  },
};

Table.contextTypes = {
  muiTheme: React.PropTypes.object,
};

/* eslint-disable react/no-unused-prop-types */
Table.propTypes = {
  material: PropTypes.bool,
  style: stylePropType,
  children: PropTypes.oneOf(PropTypes.arrayOf(PropTypes.elem), PropTypes.elem),
};

Table.getStyles = (props, context) => {
  let tableStyle = Object.assign({}, Table.styles.table);
  if (props.material && context.muiTheme) {
    const {
      baseTheme,
      table,
    } = context.muiTheme;

    tableStyle = Object.assign(tableStyle, {
      backgroundColor: table.backgroundColor,
      padding: `0 ${baseTheme.spacing.desktopGutter}px`,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily,
    });
  }
  return Object.assign(tableStyle, props.style);
};


export default Table;
