import { Configuration } from "webpack"
import { buildCssLoader } from "../build/loaders/buildCssLoader"
import { BuildPaths } from "../build/types/config"
import path from "path"

/**
 * Storybook webpack config overrides the default one
 * and adds support for Storybook to load scss files and variables, and resolve paths
 */
export default ({
    config
}: {
    config: Configuration
}): Configuration => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src")
    }

    config.resolve = {
        ...config.resolve,
        modules: [
            ...(config.resolve?.modules || []),
            paths.src
        ],
        extensions: [
            ...(config.resolve?.extensions || []),
            ".ts",
            ".tsx"
        ],
        alias: {
            ...config.resolve?.alias,
            "@": paths.src
        }
    }

    config.module?.rules?.push(buildCssLoader(true))

    return config
}
