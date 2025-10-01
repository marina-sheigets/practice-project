import React from "react"
import { BrowserRouter } from "react-router-dom"

export const RouterDecorator = (Story: () => React.JSX.Element) => {
    return <BrowserRouter>
        <Story />
    </BrowserRouter>
}