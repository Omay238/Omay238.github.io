export {};

declare global {
  interface Window {
    // i guess i need to declare this or it gives me an error.
    drawScale: number;
  }
}
