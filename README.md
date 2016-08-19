# react-responsive-table
[![npm version](https://badge.fury.io/js/react-responsive-table.svg)](https://badge.fury.io/js/react-responsive-table) 
[![Build Status](https://travis-ci.org/jtassin/react-responsive-table.svg?branch=master)](https://travis-ci.org/jtassin/react-responsive-table)
[![codecov](https://codecov.io/gh/jtassin/react-responsive-table/branch/master/graph/badge.svg)](https://codecov.io/gh/jtassin/react-responsive-table)
[![Code Climate](https://codeclimate.com/github/jtassin/react-responsive-table/badges/gpa.svg)](https://codeclimate.com/github/jtassin/react-responsive-table)
[![Dependency Status](https://www.versioneye.com/user/projects/57b4cdc22236f4002b96697b/badge.png)](https://www.versioneye.com/user/projects/57b4cdc22236f4002b96697b)


A react component for building really responsive table

Inspiration : https://hashnode.com/post/really-responsive-tables-using-css3-flexbox-cijzbxd8n00pwvm53sl4l42cx

## Installation
```sh
npm i react-responsive-table --save
```

## Usage
Once installed, just require and use the components:
```javascript
import React from `react`;
import { Table, Row, Cell } from 'react-responsive-table';

React.render(<Table mdl>
                     <Row>
                         <Cell thead minWidthPx={100}>Head-1-1</Cell>
                         <Cell thead minWidthPx={100}>Head-1-2</Cell>
                     </Row>
                     <Row>
                         <Cell minWidthPx={100}>Col-1-1</Cell>
                         <Cell minWidthPx={100}>Long text for Col-1-2</Cell>
                     </Row>
                     <Row>
                         <Cell minWidthPx={100}>Col-2-1</Cell>
                         <Cell minWidthPx={100}>Col-2-2</Cell>
                     </Row>
                     <Row>
                         <Cell minWidthPx={100}>Long text for Col-3-1</Cell>
                         <Cell minWidthPx={100}>Col-3-2</Cell>
                     </Row>
                 </Table>, document.querySelector('#main'));
```

## Build
```sh
npm run build
```

## Tests

```sh
npm test
```

## Examples

Examples are available here : https://jtassin.github.io/react-responsive-table/

## Contributors

[![Julien TASSIN](https://avatars0.githubusercontent.com/u/1771191?v=3&s=144)](https://github.com/roylee0704/) |
---|
[Julien TASSIN](https://github.com/jtassin) |

## License

MIT, see [LICENSE](/LICENSE) for details.
