import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: "ts-loader",
            options: {
                transpileOnly: true,
            }
        },
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),//apply only for css modules
                        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ]
}