/**
 * Write and export your Predicate<T> functions in this file.
 */

import { Message } from "./Message";

export function byStarMessage(message: Message): boolean {
    return byStarString(message.text);
}

export function byStarString(s: string): boolean {
    return s[0] === "*";
}

export function message5908(message: Message): boolean {
    return contains5908(message.longitude.toLocaleString());
}
export function contains5908(s: string): boolean {
    return s.indexOf("5908") > 0;
}