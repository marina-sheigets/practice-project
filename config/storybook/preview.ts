import type { Preview } from "@storybook/react-webpack5"
import React from "react"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    /**
     * Create wrapper with theme value for passing scss variables
     */
    decorators: [
        (Story) =>
            React.createElement(
                "div",
                {
                    className: "app light",
                    style: {
                        minHeight: "auto",
                        padding: 0,
                        background: "transparent",
                        display: "block"
                    }
                },
                React.createElement(Story)
            )
    ]
}

export default preview
