import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        preferAbsolute: true,
        modules: [
            options.paths.src,
            "node_modules"
        ],
        mainFiles: ["index"],
        alias: {
            "@": options.paths.src
        }
    }
}