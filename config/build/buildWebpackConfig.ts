import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true, // clean the build folder before building
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    }
}