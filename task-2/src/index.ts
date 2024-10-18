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

const getRandomRectangleSize = (): { width: number; height: number } => {
  const width = getRandomInt(20, 150);
  const height = getRandomInt(20, 150);
  return { width, height };
};

const drawRectangle = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string): void => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = "#000000"; // черная граница
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);
};

const drawRandomRectangles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, numRectangles: number): void => {
  for (let i = 0; i < numRectangles; i++) {
      const x = getRandomInt(0, canvas.width);
      const y = getRandomInt(0, canvas.height);
      const { width, height } = getRandomRectangleSize();
      const color = getRandomColor();
      drawRectangle(ctx, x, y, width, height, color);
  }
};

const main = (): void => {
  const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const numRectangles = 300;
  drawRandomRectangles(ctx, canvas, numRectangles);
};

document.addEventListener("DOMContentLoaded", main);