import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Row = (props, context) => {
  const { material, header } = props;
  let children = props.children;
  if (Array.isArray(children)) {
    children = Array.prototype.concat.apply([], children);
    children = children.map(child => (React.cloneElement(child, { material, header })));
  }
  return <div style={Row.getStyles(props, context)}>{children}</div>;
};

/* eslint-disable react/no-unused-prop-types */
Row.propTypes = {
  style: stylePropType,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  striped: PropTypes.bool,
  header: PropTypes.bool,
  material: PropTypes.bool,
  index: PropTypes.number,
};

Row.contextTypes = {
  muiTheme: PropTypes.object,
};

Row.defaultProps = {
  material: false,
  style: {},
  children: null,
  striped: false,
  header: false,
  index: null,
};

Row.getStyles = (props, context) => {
  let style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    width: '100%',
  };
  if (props.material && context.muiTheme) {
    const { tableRow, tableHeader } = context.muiTheme;
    style = Object.assign(style, {
      borderBottom: `1px solid ${tableRow.borderColor}`,
      color: tableRow.textColor,
    });
    if (props.header) {
      style.borderBottom = `1px solid ${tableHeader.borderColor}`;
    }
    if (props.striped && (props.index || props.index === 0) && (props.index % 2 === 0)) {
      style.backgroundColor = context.muiTheme.tableRow.stripeColor;
    }
    style.minHeight = context.muiTheme.tableRow.height;
  }
  style = Object.assign(style, props.style);
  return style;
};

export default Row;
