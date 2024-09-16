import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Overlay } from "react-bootstrap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
