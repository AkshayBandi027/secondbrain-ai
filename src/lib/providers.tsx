"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Toaster } from "@/components/ui/sonner"

interface ProvidersProps {
  children: ReactNode
}

const queryclient = new QueryClient()

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </QueryClientProvider>
    </>
  )
}
