declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_UR: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL_INTERNAL: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    MONGODB_URI: string;
  }
}
