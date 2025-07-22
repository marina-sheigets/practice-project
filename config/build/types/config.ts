export type BuildMode = "development" | "production";

export interface BuildPaths {
    entry: string;
    build: string,
    html: string,
    src: string,
}

export type BuildOptions = {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}