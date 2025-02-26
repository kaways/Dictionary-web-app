declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      API_URL: "tps://api.dictionaryapi.dev/api/v2/entries/en/";
    }
  }
}

export {};
