import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';

const Cell = (props, context) => {
  const { children } = props;
  const innerDivStyle = Object.assign({ margin: 'auto' }, props.style);
  return (<div style={Cell.getStyles(props, context)}>
    <div style={innerDivStyle}>{children}</div>
  </div>);
};

/* eslint-disable react/no-unused-prop-types */
Cell.propTypes = {
  minWidthPx: PropTypes.number,
  style: stylePropType,
  children: PropTypes.elem,
  header: PropTypes.bool,
  material: PropTypes.bool,
};

Cell.contextTypes = {
  muiTheme: PropTypes.object,
};

Cell.getStyles = (props, context) => {
  let style = {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    verticalAlign: 'middle',
    textOverflow: 'ellipsis',
  };
  if (props.material && context.muiTheme) {
    const { tableRowColumn, tableHeaderColumn } = context.muiTheme;
    style = Object.assign(style, {
      paddingLeft: tableRowColumn.spacing,
      paddingRight: tableRowColumn.spacing,
      minHeight: tableRowColumn.height,
      textAlign: 'left',
    });
    if (props.header) {
      style = Object.assign(style, { fontWeight: 'normal',
        fontSize: 12,
        color: tableHeaderColumn.textColor,
        position: 'relative',
      });
    } else {
      style = Object.assign(style, {
        fontSize: 13,
        overflow: 'hidden',
      });
    }
  }
  if (props.minWidthPx) {
    style.width = `${props.minWidthPx}px`;
  }
  return style;
};

export default Cell;
