import { Decorator } from '@storybook/react';
import { Theme, } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';
import ThemeProvider from '../../../../app/providers/ThemeProvider/ui/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div
            className={`app ${theme}`}
            style={{
                minHeight: "auto",
                padding: 0,
                display: "block"
            }}
        >
            <Story />
        </div>
    </ThemeProvider>
);