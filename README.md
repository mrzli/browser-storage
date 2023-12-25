# Browser Storage

This package provides a simple interface for interacting with browser storage.

## Installation

```bash
npm install --save @gmjs/browser-storage
```

## Usage

```ts
import { CookieWrapper, createCookieWrapper, createLocalStorageWrapper, createSessionStorageWrapper, StorageWrapper } from '@gmjs/browser-storage';

const cookie = createCookieWrapper();
const localStorage = createLocalStorageWrapper();
const sessionStorage = createSessionStorageWrapper();
```

By default, key for any of the above storage is a `string`, but you can provide a custom key type to limit the available keys:

```ts
type Key = 'foo' | 'bar' | 'baz';
const cookie = createCookieWrapper<Key>();
```

## API

### `CookieWrapper<T>`

Interface for interacting with cookies.

```ts
export interface CookieWrapper<K extends string> {
  readonly get: (name: K) => string | undefined;
  readonly set: (name: K, value: string, expiresInDays?: number) => void;
  readonly remove: (name: K) => void;
  readonly removeMany: (names: readonly K[]) => void;
}
```

### `StorageWrapper<T>`

This interface is used for both `localStorage` and `sessionStorage`.

```ts
export interface StorageWrapper<K extends string> {
  readonly get: (key: K) => string | undefined;
  readonly getMany: (keys: readonly K[]) => readonly (string | undefined)[];
  readonly set: (key: K, value: string) => void;
  readonly remove: (key: K) => void;
  readonly removeAll: () => void;
}
```
