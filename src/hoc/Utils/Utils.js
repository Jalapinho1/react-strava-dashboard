export const toTimeString = (seconds) => {
    if (seconds) {
        return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
    } else {
        return seconds;
    }
}

export const metresToKm = (metres) => {
    var km = metres / 1000;
    return km.toFixed(1);
}