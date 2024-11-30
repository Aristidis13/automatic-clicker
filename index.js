import { mouse, Button } from "@nut-tree-fork/nut-js";

function showTime() {
    const now = new Date().toLocaleTimeString('gr-GR');
    return now;
}

// Set mouse delay to avoid errors in rapid execution
mouse.config.mouseSpeed = 100; // Adjust speed if needed

// Function to perform a mouse click
async function performClick() {
    console.log(showTime()+': ' +"Clicking...");
    await mouse.click(Button.LEFT); // Simulates a left mouse click
}

// Schedule the clicker to run every 10 minutes
const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
console.log("Auto-clicker started. It will click every 10 minutes.");

setInterval(() => {
    performClick().catch(err => console.error("Error clicking:", err));
}, interval);