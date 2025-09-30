import type { StorybookConfig } from "@storybook/react-webpack5"
import path from "path"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import { buildCssLoader } from "../build/loaders/buildCssLoader"

const config: StorybookConfig = {
    stories: [
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: ["@storybook/addon-webpack5-compiler-swc"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    webpackFinal: async (config) => {
        if (config.module) {
            config.module.rules?.push(buildCssLoader(true))
        }
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions
                })
            ]
        }
        return config
    }
}
export default config
