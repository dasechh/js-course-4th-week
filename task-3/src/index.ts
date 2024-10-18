const generateRandomCoordinate = (max: number): number => {
  return Math.random() * max;
};

const drawBlueLine = (
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  endX: number,
  endY: number
): void => {
  ctx.strokeStyle = `rgba(0, 0, 255)`;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
};

const drawBurstOfLines = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, numLines: number): void => {
  const startX = 0;
  const startY = canvas.height / 2;

  for (let i = 0; i < numLines; i++) {
    const endX = generateRandomCoordinate(canvas.width);
    const endY = generateRandomCoordinate(canvas.height);
    drawBlueLine(ctx, startX, startY, endX, endY);
  }
};

const setupCanvas = (): void => {
  const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const numLines = 500;
  drawBurstOfLines(ctx, canvas, numLines);
};

document.addEventListener("DOMContentLoaded", setupCanvas);