import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: "ts-loader",
            options: {
                transpileOnly: true,
            }
        },
        exclude: /node_modules/,
    }

    return [
        typescriptLoader
    ]
}