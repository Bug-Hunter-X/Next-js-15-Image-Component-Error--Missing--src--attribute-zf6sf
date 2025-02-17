```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```
This simple Next.js 15 app might encounter a runtime error if you forget to specify the `src` attribute when importing an image within a component.

```javascript
// components/MyImage.js

import Image from 'next/image';

export default function MyImage() {
  return (
    <Image alt="My Image" />
  );
}
```
Missing the `src` attribute results in a runtime error: `Error: Image failed to load`.