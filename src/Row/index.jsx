import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';

const Row = (props, context) => {
  const { material, header } = props;
  let children = props.children;
  if (Array.isArray(props.children)) {
    children = props.children.map(child => (React.cloneElement(child, { material, header })));
  }
  return <div style={Row.getStyles(props, context)}>{children}</div>;
};

/* eslint-disable react/no-unused-prop-types */
Row.propTypes = {
  style: stylePropType,
  children: PropTypes.oneOf(PropTypes.arrayOf(PropTypes.elem), PropTypes.elem),
  striped: PropTypes.bool,
  header: PropTypes.bool,
  material: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

Row.contextTypes = {
  muiTheme: React.PropTypes.object,
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
      borderBottom: props.displayBorder && `1px solid ${tableRow.borderColor}`,
      color: tableRow.textColor,
    });
    if (props.header) {
      style.borderBottom = `1px solid ${tableHeader.borderColor}`;
    }
    if (props.striped && (props.index % 2 === 0)) {
      style.backgroundColor = context.muiTheme.tableRow.stripeColor;
    }
    style.minHeight = context.muiTheme.tableRow.height;
  }
  style = Object.assign(style, props.style);
  return style;
};

export default Row;
