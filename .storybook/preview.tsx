import type { Preview, Decorator } from "@storybook/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store.js";
import { loaderMock } from "./loaderMock.js";

/**
 * Decorator that provides the redux store to the stories.
 */
const DecoratorRedux: Decorator = (Story) => (
  <ReduxProvider store={store}>
    <Story />
  </ReduxProvider>
);

/**
 * Import the blueprint css file.
 */
import "@blueprintjs/core/lib/css/blueprint.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [DecoratorRedux],
  loaders: [loaderMock],
};

export default preview;
