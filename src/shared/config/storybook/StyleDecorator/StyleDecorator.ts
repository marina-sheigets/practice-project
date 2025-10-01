import "@/app/styles/index.scss"

/**
 * Decorator to apply global styles in Storybook
 */
export const StyleDecorator = (
    Story: () => React.JSX.Element
) => Story()
