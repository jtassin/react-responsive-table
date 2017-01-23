import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';
import Row from '../Row';

const Table = (props, context) => {
  const { material } = props;
  let { children } = props;
  if (props.material) {
    children = Table.buildChildren(props.children, 0, material).children;
  }
  return <div style={Table.getStyles(props, context)}>{children}</div>;
};

Table.buildChildren = (children, index, material) => {
  const result = [];
  let resultIndex = index;
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        const row = Table.buildChildren(child, resultIndex, material);
        result.push(row.children);
        resultIndex = row.index;
      });
    } else if (children.type === Row) {
      result.push(React.cloneElement(children, { index, material }));
      resultIndex += 1;
    } else {
      result.push(children);
    }
  }
  return { children: result, index: resultIndex };
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

Table.defaultProps = {
  material: false,
  style: {},
  children: null,
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
