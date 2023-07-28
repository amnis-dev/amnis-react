import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'modules',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        blueprint: resolve(__dirname, 'src/libraries/blueprint/index.ts'),
      },
      name: 'AmnisReact',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
      external: [
        'react',
        'react-dom',
        '@amnis/state',
        '@amnis/api',
      ],
    },
  },
});
