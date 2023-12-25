import Cookies from 'js-cookie';
import { CookieWrapper } from '../types';

export function createCookieWrapper<K extends string>(): CookieWrapper<K> {
  return {
    get,
    set,
    remove,
    removeMany,
  };
}

// function getAll(): ReadonlyRecord<string, string> {
//   return Cookies.get();
// }

function get<K extends string>(name: K): string | undefined {
  return Cookies.get(name);
}

function set<K extends string>(
  name: K,
  value: string,
  expiresInDays?: number,
): void {
  Cookies.set(name, value, { expires: expiresInDays, path: '/' });
}

function remove<K extends string>(name: K): void {
  Cookies.remove(name, { path: '/' });
}

function removeMany<K extends string>(names: readonly K[]): void {
  for (const name of names) {
    remove(name);
  }
}
