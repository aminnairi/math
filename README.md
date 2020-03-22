# math

Reliable add, divide, multiply & subtract results.

## Usage

### Add

```javascript
import { add } from "@aminnairi/math";

add(2, 4);
```

### Divide

```javascript
import { divide } from "@aminnairi/math";

divide(2, 4);
```

### Multiply

```javascript
import { multiply } from "@aminnairi/math";

multiply(2, 4);
```

### Subtract

```javascript
import { subtract } from "@aminnairi/math";

subtract(2, 4);
```

## Installation

```console
$ npm install --save-dev @aminnairi/math
```

### Node.js

#### CommonJS

```javascript
const { add, divide, multiply, subtract } = require("@aminnairi/math");
```

#### ECMAScript Modules

```javascript
import { add, divide, multiply, subtract } from "@aminnairi/math";
```

### Browser

*Note: publishing the `node_modules` to your browser is highly discouraged. Use this only in development.*

#### Classic

```html
<script src="./node_modules/aminnairi/math/lib/math.browser.js"></script>
<script>
    "use strict";

    const { add, divide, multiply, subtract } = window["@aminnairi/math"];
</script>
```

#### ECMAScript Modules

```html
<script type="module">
    "use strict";

    import { add, divide, multiply, subtract } from "./node_modules/aminnairi/math/lib/math.esm.js";
</script>
```

## Requirements

- [NPM](https://nodejs.org/en/)

