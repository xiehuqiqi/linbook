// vite.config.ts
import { defineConfig } from "file:///D:/lin/linbook/node_modules/vite/dist/node/index.js";
import react from "file:///D:/lin/linbook/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(async () => ({
  plugins: [react()],
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxsaW5cXFxcbGluYm9va1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbGluXFxcXGxpbmJvb2tcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2xpbi9saW5ib29rL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jICgpID0+ICh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG5cclxuICAvLyBWaXRlIG9wdGlvbnMgdGFpbG9yZWQgZm9yIFRhdXJpIGRldmVsb3BtZW50IGFuZCBvbmx5IGFwcGxpZWQgaW4gYHRhdXJpIGRldmAgb3IgYHRhdXJpIGJ1aWxkYFxyXG4gIC8vIHByZXZlbnQgdml0ZSBmcm9tIG9ic2N1cmluZyBydXN0IGVycm9yc1xyXG4gIGNsZWFyU2NyZWVuOiBmYWxzZSxcclxuICAvLyB0YXVyaSBleHBlY3RzIGEgZml4ZWQgcG9ydCwgZmFpbCBpZiB0aGF0IHBvcnQgaXMgbm90IGF2YWlsYWJsZVxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMTQyMCxcclxuICAgIHN0cmljdFBvcnQ6IHRydWUsXHJcbiAgfSxcclxuICAvLyB0byBtYWtlIHVzZSBvZiBgVEFVUklfREVCVUdgIGFuZCBvdGhlciBlbnYgdmFyaWFibGVzXHJcbiAgLy8gaHR0cHM6Ly90YXVyaS5zdHVkaW8vdjEvYXBpL2NvbmZpZyNidWlsZGNvbmZpZy5iZWZvcmVkZXZjb21tYW5kXHJcbiAgZW52UHJlZml4OiBbXCJWSVRFX1wiLCBcIlRBVVJJX1wiXSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gVGF1cmkgc3VwcG9ydHMgZXMyMDIxXHJcbiAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LlRBVVJJX1BMQVRGT1JNID09IFwid2luZG93c1wiID8gXCJjaHJvbWUxMDVcIiA6IFwic2FmYXJpMTNcIixcclxuICAgIC8vIGRvbid0IG1pbmlmeSBmb3IgZGVidWcgYnVpbGRzXHJcbiAgICBtaW5pZnk6ICFwcm9jZXNzLmVudi5UQVVSSV9ERUJVRyA/IFwiZXNidWlsZFwiIDogZmFsc2UsXHJcbiAgICAvLyBwcm9kdWNlIHNvdXJjZW1hcHMgZm9yIGRlYnVnIGJ1aWxkc1xyXG4gICAgc291cmNlbWFwOiAhIXByb2Nlc3MuZW52LlRBVVJJX0RFQlVHLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrTyxTQUFTLG9CQUFvQjtBQUMvUCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhLGFBQWE7QUFBQSxFQUN2QyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBLEVBSWpCLGFBQWE7QUFBQTtBQUFBLEVBRWIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQTtBQUFBO0FBQUEsRUFHQSxXQUFXLENBQUMsU0FBUyxRQUFRO0FBQUEsRUFDN0IsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRLFFBQVEsSUFBSSxrQkFBa0IsWUFBWSxjQUFjO0FBQUE7QUFBQSxJQUVoRSxRQUFRLENBQUMsUUFBUSxJQUFJLGNBQWMsWUFBWTtBQUFBO0FBQUEsSUFFL0MsV0FBVyxDQUFDLENBQUMsUUFBUSxJQUFJO0FBQUEsRUFDM0I7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
