import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path'

const rollupOptions = {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    output: {            
        //options match webpack template
        entryFileNames: process.env.SAVENAME,
        manualChunks: undefined,
        //use this option if cannot use type module in script tag
        format: 'iife'
      }
}


export default defineConfig(async ({command, mode}) => {

    const buildWebComponent = async (filepath) => {
        const resolvedPath = path.resolve(__dirname, filepath)
        return {
        plugins: [solidPlugin()],
        resolve: {
            alias: {
              "~": path.resolve(__dirname, "./src"),
            },
          },
        build: {
            outDir: './build/webcomponents',
            emptyOutDir: false,
            rollupOptions: {
                ...rollupOptions, 
                input: resolvedPath
            }}
        }
    }
        
    
    return buildWebComponent(mode)
    
})