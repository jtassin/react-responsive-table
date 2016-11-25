import React, { PropTypes, PureComponent } from 'react';

class Table extends PureComponent {

  static styles = {
    table: {
      width: '100%',
    },
    materialTable: {
      /* eslint-disable max-len */
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
      border: '1px solid rgba(0,0,0,.12)',
      borderCollapse: 'collapse',
      whiteSpace: 'nowrap',
      backgroundColor: '#fff',
      fontSize: '13px',
      color: '#757575',
    },
  }

  static contextTypes: {
    muiTheme: React.PropTypes.object.isRequired
    };

  static propTypes = {
    material: PropTypes.bool,
    style: PropTypes.object,
  };

  render() {
    console.log(this.context);
    const children = [];
    let index = 0;
    this.props.children.forEach((child) => {
      children.push(React.cloneElement(child, { index }));
      index += 1;
    });
    const tableStyle = Object.assign({}, Table.styles.table, this.props.style);
    if (this.props.material) {
      Object.assign(tableStyle, Table.styles.materialTable);
    }
    return <div style={tableStyle}>{children}</div>;
  }
}

export default Table;
