import { mouse } from "@nut-tree-fork/nut-js";
import { moveInterval, performCursorMove } from './performCursorMove.js';
import { clickInterval, performClick } from "./performClick.js";

console.log("Auto-clicker started. It will click every 10 minutes.");

// Set mouse delay to avoid errors in rapid execution
mouse.config.mouseSpeed = 100; // Adjust speed if needed

setInterval(() => {
    performClick().catch(err => console.error("Error clicking:", err));
}, clickInterval);

setInterval(()=>{
    performCursorMove().catch(er=> console.log('Error in cursor move',er));
}, moveInterval);