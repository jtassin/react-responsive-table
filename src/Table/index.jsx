import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';

const Table = (props, context) => {
  const { material } = props;
  const children = Table.buildChildren(props.children, 0, material);
  return <div style={Table.getStyles(props, context)}>{children}</div>;
};

Table.buildChildren = (children, index, material) => {
  const result = [];
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        result.push(Table.buildChildren(child, index, material));
        index += 1;
      });
    } else {
      if (children.type === Table) {
        result.push(React.cloneElement(children, { index, material }));
      } else {
        result.push(children);
      }
    }
  }
  return result;
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
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
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
