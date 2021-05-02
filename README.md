# layout

> Layout for Indiro

[![NPM](https://img.shields.io/npm/v/layout.svg)](https://www.npmjs.com/package/layout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @indiro/layout
```

## Usage

```jsx
import React, { Component } from 'react';

import { LayoutComponent } from '@indiro/layout';
import '@indiro/layout/dist/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent leftMenuItems={LeftMenu} project={project}>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp
```

## License

MIT © [indiro71](https://github.com/indiro71)
