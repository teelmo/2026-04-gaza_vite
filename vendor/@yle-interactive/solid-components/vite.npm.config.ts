import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

const plugins = [solidPlugin()];

export default defineConfig(async ({ command, mode }) => {
  const buildWebComponent = (filepath) => {
    const fileName = filepath.split("/").pop();
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, `${filepath}`),
          formats: ["es"],
          name: "index",
          fileName: (format) => `${fileName}.${format}.js`,
        },
        emptyOutDir: false,
        outDir: "./dist/npm-components",

        // rollupOptions: {
        //   // Add _all_ external dependencies here
        //   external: [...Object.keys(packagejson.peerDependencies)],
        // },
        target: "esnext",
        sourcemap: false,
      },
      plugins: plugins,
      resolve: {
        alias: {
          "~": path.resolve(__dirname, "./src"),
        },
      },
    };
  };
  return buildWebComponent(mode);
});
