<!-- markdownlint-disable MD033 MD041 -->

### 🥽 <span translate="no">VRChat</span> ワールド・アバターで使う (<span translate="no">VRChat Creator Companion</span>)

#### システム要件

- **<span translate="no">VRChat Creator Companion</span>** (強く推奨)
- <span translate="no">Unity</span> _<span translate="no">2022.3.22f1</span>_
  で作成したサンプルシーンを同梱しているため、同一バージョンまたはそれ以降の
  <span translate="no">Unity</span> がサポートしているバージョンのご利用を推奨します。

#### 1. <span translate="no">VRChat Creator Companion (<abbr translate="no">VCC</abbr>)</span>でレジストリをインポート

[<abbr translate="no">VCC</abbr> に追加](vcc://vpm/addRepo?url=https%3A%2F%2Fkurone-kito.github.io%2Fvpm%2Findex.json)

#### 2. プロジェクトにパッケージをインポート

1. <abbr translate="no">VCC</abbr> で“<span translate="no">Manage Project</span>”
   ボタンを押下します。
2. “<span translate="no">LaunchPad Icons</span>” パッケージを探し、
   “<span translate="no">(+) Add package</span>” ボタンを押下します。

#### 3. パッケージを使用して楽しみましょう！ :D

---

### 📲 <span translate="no">VRChat</span> 以外における <span translate="no">Unity</span> プロジェクトでの使用方法

#### システム要件

- <span translate="no">Unity</span> _<span translate="no">2022.3.22f1</span>_
  で作成したサンプルシーンを同梱しているため、
  同一バージョンまたはそれ以降の <span translate="no">Unity</span> のご利用を推奨します。

#### 1. パッケージをダウンロードする

[最新版リリース](https://github.com/kurone-kito/launchpad-icons/releases)
をダウンロードします。

#### 2. 依存関係を手動で解決する

このパッケージには次の依存関係が必要です:

- [<span translate="no">Unity Vector Graphics (com.unity.vectorgraphics)</span>](https://docs.unity3d.com/Packages/com.unity.vectorgraphics@2.0/manual/index.html)
  `>=2.0.0-preview.24`

#### 3. パッケージをプロジェクトにインポートする

1. Unityプロジェクトを開きます。
2. ダウンロードしたパッケージを <span translate="no">Unity Editior</span>
   にドラッグ＆ドロップします。
3. “インポート” ボタンを押下します。

#### 4. パッケージを使用して楽しみましょう！ :D

---

### 🌐 Web で使用する (<span translate="no">React</span> / <span translate="no">Solid</span> 対応)

#### システム要件

- [<span translate="no">Node.js</span>](https://nodejs.org/) `>=18`
- **[<span translate="no">React</span>](https://react.dev)** または
  **[<span translate="no">Solid</span>](https://www.solidjs.com)**

#### 1. パッケージをインストールする

```sh
npm i @kurone-kito/launchpad-icons-react
```

```sh
npm i @kurone-kito/launchpad-icons-solid
```

#### 2. パッケージを使用して楽しみましょう！ :D

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
