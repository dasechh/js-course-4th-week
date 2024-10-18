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
const getRandomRectangleSize = () => {
    const width = getRandomInt(20, 150);
    const height = getRandomInt(20, 150);
    return { width, height };
};
const drawRectangle = (ctx, x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
};
const drawRandomRectangles = (ctx, canvas, numRectangles) => {
    for (let i = 0; i < numRectangles; i++) {
        const x = getRandomInt(0, canvas.width);
        const y = getRandomInt(0, canvas.height);
        const { width, height } = getRandomRectangleSize();
        const color = getRandomColor();
        drawRectangle(ctx, x, y, width, height, color);
    }
};
const main = () => {
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");
    const numRectangles = 300;
    drawRandomRectangles(ctx, canvas, numRectangles);
};
document.addEventListener("DOMContentLoaded", main);
//# sourceMappingURL=index.js.map