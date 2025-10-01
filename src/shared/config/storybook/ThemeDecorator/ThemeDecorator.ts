import { Theme } from "@/app/providers/ThemeProvider"
import React from "react"

export const ThemeDecorator =
    (theme: Theme) => (Story: () => React.JSX.Element) => {
        return React.createElement(
            "div",
            {
                className: "app " + theme,
                style: {
                    minHeight: "auto",
                    padding: 0,
                    display: "block"
                }
            },
            React.createElement(Story)
        )
    }
