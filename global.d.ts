// global.d.ts
export {};

declare global {
  interface Window {
    ENV: {
      SERVICE_ID: string;
    };
  }
}
