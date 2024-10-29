import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "@/router";
import { ThemeProvider } from "@/components/theme-provider"
import {Toaster} from "@/components/ui/toaster.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
        <Toaster />
    </ThemeProvider>
  </StrictMode>,
)
