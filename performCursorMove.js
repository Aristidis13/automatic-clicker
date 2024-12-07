import { mouse, left, right } from "@nut-tree-fork/nut-js";
import { log } from "./common.js";

async function performCursorMove() {
    log('Moving Cursor')
    await mouse.move(left(5));
    await mouse.move(right(5));
}

const interval = 60 * 1000; // 1sec

export { interval as moveInterval, performCursorMove }