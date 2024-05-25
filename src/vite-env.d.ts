/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UNSPLASH_ACCESS_KEY: string;
  readonly VITE_WEATHER_API_KEY: string;
  readonly VITE_IPINFO_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
