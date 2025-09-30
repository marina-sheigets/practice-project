import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(
                                resPath.includes(".module.")
                            ), //apply only for css modules
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]"
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader"
        ]
    }
}
