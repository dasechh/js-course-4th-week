const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const drawRandomLines = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, numLines: number): void => {
  for (let i = 0; i < numLines; i++) {
    ctx.beginPath();
    ctx.moveTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
    ctx.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
    ctx.strokeStyle = getRandomColor();
    ctx.stroke();
  }
};

const main = (): void => {
  const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const numLines = 10000;
  drawRandomLines(ctx, canvas, numLines);
};

document.addEventListener("DOMContentLoaded", main);