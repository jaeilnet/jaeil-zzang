import {defineConfig} from "tsup";

export default defineConfig({
    entry: ["ui/index.ts"],
    outDir: "dist",
    format: ["cjs", "esm"],
    dts: true,
});
