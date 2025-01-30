<!-- markdownlint-disable MD033 MD041 -->

### 🥽 For <abbr translate="no">VCC</abbr> (<span translate="no">VRChat Creator Companion</span>)

#### System requirements

- **<span translate="no">VRChat Creator Companion</span>** (Recommended)
- There is a bundled sample scene created in
  <span translate="no">Unity</span> _<span translate="no">2022.3.22f1</span>_;
  we recommend previewing it using the same version.

#### 1. Import the registry via the <span translate="no">VRChat Creator Companion (<abbr>VCC</abbr>)</span>

[Add to <abbr translate="no">VCC</abbr>](vcc://vpm/addRepo?url=https%3A%2F%2Fkurone-kito.github.io%2Fvpm%2Findex.json)

#### 2. Import the package to your project

1. Click on the “<span translate="no">Manage Project</span>” button in the
   <abbr translate="no">VCC</abbr>
2. Find the “<span translate="no">LaunchPad Icons</span>” package and
   click on the “<span translate="no">(+) Add package</span>” button

#### 3. Use the package, enjoy :D

---

### 📲 For <span translate="no">Unity3D</span> (without <span translate="no">VRChat</span> world / avatar project)

#### System requirements

- There is a bundled sample scene created in
  <span translate="no">Unity</span> _<span translate="no">2022.3.22f1</span>_;
  we recommend previewing it using the same version.

#### 1. Download the package

Download the package from the
[latest release](https://github.com/kurone-kito/launchpad-icons/releases).

#### 2. Manually resolve the dependencies

The package requires the following dependencies:

- [<span translate="no">Unity Vector Graphics (com.unity.vectorgraphics)</span>](https://docs.unity3d.com/Packages/com.unity.vectorgraphics@2.0/manual/index.html)
  `>=2.0.0-preview.24`

#### 3. Import the package to your project

1. Open your Unity project
2. Drag and drop the downloaded package into the
   <span translate="no">Unity Editor</span>
3. Click on the “Import” button

#### 4. Use the package, enjoy :D

---

### 🌐 For Web (React / Solid)

#### System requirements

- [<span translate="no">Node.js</span>](https://nodejs.org/) `>=18`
- **[<span translate="no">React</span>](https://react.dev)** or **[<span translate="no">Solid</span>](https://www.solidjs.com)**

#### 1. Install the package

```sh
npm i @kurone-kito/launchpad-icons-react
```

```sh
npm i @kurone-kito/launchpad-icons-solid
```

#### 2. Use the package, enjoy :D

```tsx
import { Avatars } from '@kurone-kito/launchpad-icons-react';
import type { FC } from 'react';

export const MyComponent: FC = () => <Avatars />;
```

```tsx
import { Avatars } from '@kurone-kito/launchpad-icons-solid';
import type { Component } from 'solid-js';

export const MyComponent: Component = () => <Avatars />;
```
