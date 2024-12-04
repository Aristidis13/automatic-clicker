/**
 * Presents the time in Greece that the event happenend as a string
 * @returns a timestamp i.e. 5:36:05 μ.μ.
 */
function showTime() {
    const now = new Date().toLocaleTimeString('gr-GR');
    return now;
}

/**
 * @param {string} action - What will happen in this timestamp
 * Creates the string to present
 */
const log = (action = '' ) => {
    const timestamp = showTime();
    console.log(timestamp + ': ' + action );
}

export { showTime, log }