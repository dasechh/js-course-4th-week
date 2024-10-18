"use strict";
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const drawRandomLines = (ctx, canvas, numLines) => {
    for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        ctx.moveTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
        ctx.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
        ctx.strokeStyle = getRandomColor();
        ctx.stroke();
    }
};
const main = () => {
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");
    const numLines = 10000;
    drawRandomLines(ctx, canvas, numLines);
};
document.addEventListener("DOMContentLoaded", main);
//# sourceMappingURL=index.js.map