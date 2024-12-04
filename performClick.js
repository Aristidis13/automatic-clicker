import { mouse, Button } from "@nut-tree-fork/nut-js";

function showTime() {
    const now = new Date().toLocaleTimeString('gr-GR');
    return now;
}

// Function to perform a mouse click
async function performClick() {
    console.log(showTime()+': ' +"Clicking...");
    await mouse.click(Button.LEFT); // Simulates a left mouse click
}
// Schedule the clicker to run every 10 minutes
const interval = 10 * 60 * 1000; // 10 minutes in milliseconds

export { showTime, interval as clickInterval, performClick }