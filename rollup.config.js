import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import packageJson from "./package.json";

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        sass({
            // Prefix global scss. Useful for variables and mixins.
            output: 'build/bundle.css',
            insert: true,
            watch: 'src/components/**/*.scss',
            options: {}
        }),
        resolve(),
        commonjs(),
        typescript({useTsconfigDeclarationDir: true})
    ]
};
