import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'modules',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        blueprint: resolve(__dirname, 'src/blueprint/index.ts'),
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
        'node:crypto',
        'crypto',
      ],
    },
  },
  test: {
    globals: true,
    testTimeout: 10000,
  },
});
