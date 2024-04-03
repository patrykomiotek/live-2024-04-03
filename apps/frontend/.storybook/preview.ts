import '../src/app/styles.css';

import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const preview = {
  parameters: {
    // your other code...
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
