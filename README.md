# react-responsive-table
[![npm version](https://badge.fury.io/js/react-responsive-table.svg)](https://badge.fury.io/js/react-responsive-table) 
[![Build Status](https://travis-ci.org/jtassin/react-responsive-table.svg?branch=master)](https://travis-ci.org/jtassin/react-responsive-table)
[![codecov](https://codecov.io/gh/jtassin/react-responsive-table/branch/master/graph/badge.svg)](https://codecov.io/gh/jtassin/react-responsive-table)
[![Code Climate](https://codeclimate.com/github/jtassin/react-responsive-table/badges/gpa.svg)](https://codeclimate.com/github/jtassin/react-responsive-table)
[![Dependency Status](https://www.versioneye.com/user/projects/57b4cdc22236f4002b96697b/badge.png)](https://www.versioneye.com/user/projects/57b4cdc22236f4002b96697b)


A react component for building really responsive table.
The built tables can be used for form (hell yeah!) and can wrap to multiples lines on small devices.

Inspiration : https://hashnode.com/post/really-responsive-tables-using-css3-flexbox-cijzbxd8n00pwvm53sl4l42cx

## Installation

### With webpack
```sh
npm i react-responsive-table --save
```

### With UMD

You will need also react (of course) and [react-style-proptype](https://github.com/brigand/react-style-proptype) (used to validate the style properties).
```sh
npm i react, react-style-proptype, react-responsive-table --save
```

## Usage
Once installed, just require and use the components:
```javascript
import React from `react`;
import { Table, Row, Cell } from 'react-responsive-table';

React.render(<Table>
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

### Properties

#### Table
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| material | Boolean | false | if true, it apply [material-ui](https://github.com/callemall/material-ui) styles to the table|

#### Row
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| striped | Boolean | false | if true, it strip the color of the row acording to the pair/impair index|
| index | Number | null | The row index (used by the striped fonctionality). It is supposed to be set automatically by the Table parent but, with redux-connect or other middle component you may have to set it manually. |
| material | Boolean | false | if true, it apply [material-ui](https://github.com/callemall/material-ui) styles to the table. It is supposed to be set automatically by the Table parent but, with redux-connect or other middle component you may have to set it manually. |

#### Cell
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| header | Boolean | false | if true, it apply a table header style to this cell|
| minWidthPx | Number | null | The minimum with in px of the Cell|
| material | Boolean | false | if true, it apply [material-ui](https://github.com/callemall/material-ui) styles to the table. It is supposed to be set automatically by the Table parent but, with redux-connect or other middle component you may have to set it manually. |

## Material design

This lib is designed to integrate with [material-ui](https://github.com/callemall/material-ui). 
It uses natively the selected theme for every supported functionalities.

## Build
```sh
npm run build
```

## Tests

```sh
npm test
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. 

## Examples

Examples are available here : https://jtassin.github.io/react-responsive-table/

## Contributors

[![Julien TASSIN](https://avatars0.githubusercontent.com/u/1771191?v=3&s=144)](https://github.com/roylee0704/) |
---|
[Julien TASSIN](https://github.com/jtassin) |

## License

MIT, see [LICENSE](/LICENSE) for details.
