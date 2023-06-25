import path from 'path'
import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'

const resolvePath = (str: string) => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['cjs'],
            fileName: 'support'
        },
        sourcemap: true,
        rollupOptions: {
            plugins: [
                typescript({
                    'tsconfig': resolvePath('./tsconfig.json')
                })
            ]
        }
    }
})