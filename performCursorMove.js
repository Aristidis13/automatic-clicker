import { mouse, left, right } from "@nut-tree-fork/nut-js";
import { log } from "./common.js";

async function performCursorMove() {
    log('Moving Cursor')
    await mouse.move(left(50));
    await mouse.move(right(50));
}

const interval = 60 * 1000; // 1sec

export { interval as moveInterval, performCursorMove }