import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator"
import { Theme } from "./../../src/app/providers/ThemeProvider/lib/ThemeContext"
import { StyleDecorator } from "./../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import type { Preview } from "@storybook/react-webpack5"

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        (Story) => RouterDecorator(Story),
        (Story) => StyleDecorator(Story),
        (Story) => ThemeDecorator(Theme.LIGHT)(Story)
    ]
}

export default preview
