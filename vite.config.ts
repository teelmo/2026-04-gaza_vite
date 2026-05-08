import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mdx from '@mdx-js/rollup';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

/* Paths */
const devPath = 'http://dev.yle.fi:';
const devPort = 3000;

const projectName = '2026-05-gaza';
const projectUrl = 'plus.yle.fi';
const projectDevUrl = 'plus.yle.fi/dev';

/* Prop types */
type Props = {
  command: string;
  mode: string;
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: Props) => {
  // Production build
  if (command === 'build') {
    return {
      plugins: [mdx(), react(), tailwindcss()],
      resolve: {
        alias: {
          '~': path.resolve(__dirname, './src'),
          // Deduplicate React — vendor packages must share the project's single instance
          'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          // yds-core: package exports map ./tokens/ → ./lib/tokens/ but aliases bypass exports
          '@yleisradio/yds-core/tokens': path.resolve(__dirname, './vendor/@yleisradio/yds-core/lib/tokens'),
          '@yleisradio': path.resolve(__dirname, './vendor/@yleisradio'),
          // solid-components: webcomponents live in build/, style is styles.css at root
          '@yle-interactive/solid-components/webcomponents': path.resolve(__dirname, './vendor/@yle-interactive/solid-components/build/webcomponents'),
          '@yle-interactive/solid-components/style': path.resolve(__dirname, './vendor/@yle-interactive/solid-components/styles.css'),
          '@yle-interactive': path.resolve(__dirname, './vendor/@yle-interactive'),
        },
      },
      base: `${
        mode === 'dev-build'
          ? `//${projectDevUrl}/${projectName}/`
          : `//${projectUrl}/${projectName}/`
      }`,
      build: {
        // CSS as its own file - not embedded inside script.js
        cssCodeSplit: false,
        rollupOptions: {
          input: {
            index: './standalone.html',
          },
          output: {
            entryFileNames: 'js/script.js',
            format: 'iife',
            assetFileNames: ({ name }) => {
              if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                return 'assets/img/[name]-[hash][extname]';
              }

              if (/\.css$/.test(name ?? '')) {
                return 'css/styles.css';
              }

              // default value
              // ref: https://rollupjs.org/guide/en/#outputassetfilenames
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
      },
    };
  }

  // Default configuration for dev
  return {
    plugins: [mdx(), react(), tailwindcss()],
    optimizeDeps: {
      // vendor/@yle-interactive/solid-components includes SolidJS source files
      // that Vite's dep scanner finds. We only use the pre-built web components
      // from build/webcomponents/ — solid-js is never needed at runtime.
      exclude: ['solid-js', 'solid-element'],
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        // Deduplicate React — vendor packages must share the project's single instance
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
        // yds-core: package exports map ./tokens/ → ./lib/tokens/ but aliases bypass exports
        '@yleisradio/yds-core/tokens': path.resolve(__dirname, './vendor/@yleisradio/yds-core/lib/tokens'),
        '@yleisradio': path.resolve(__dirname, './vendor/@yleisradio'),
        // solid-components: webcomponents live in build/, style is styles.css at root
        '@yle-interactive/solid-components/webcomponents': path.resolve(__dirname, './vendor/@yle-interactive/solid-components/build/webcomponents'),
        '@yle-interactive/solid-components/style': path.resolve(__dirname, './vendor/@yle-interactive/solid-components/styles.css'),
        '@yle-interactive': path.resolve(__dirname, './vendor/@yle-interactive'),
      },
    },
    server: {
      port: devPort,
      host: devPath.split('//').pop()!.split(':').join(''),
      origin: devPath + devPort,
    },
  };
});
