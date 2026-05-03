import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

const plugins = [solidPlugin()];
/* Paths */
const devPath = "http://dev.yle.fi:";
const devPort = 5173;
const hostPath = devPath.split("//").pop()!.split(":").join("");
const devServerUrl = `${devPath}${devPort}/`;

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
        target: "esnext",
        sourcemap: false,
      },
      plugins: plugins,
      resolve: {
        alias: {
          "~": path.resolve(__dirname, "./src"),
        },
      },
      server: {
        port: devPort,
        host: hostPath,
        origin: devPath + devPort,
      },
      define: {
        "import.meta.env.DEV_SERVER_URL": JSON.stringify(devServerUrl),
      },
    };
  };
  return buildWebComponent(mode);
});
