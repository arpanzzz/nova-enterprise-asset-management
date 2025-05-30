import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "sonner"; 
import {
    SidebarInset,
    SidebarProvider,
  } from "@/components/ui/sidebar"
import { app, analytics } from "@/lib/firebase";


import ProtectedRoute  from '@/components/ProtectedRoute';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterprise Asset Management",
  description: "Manage your assets efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    

        <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {/* <div className="flex flex-1 flex-col"> */}
          <div className="@container/main flex flex-1 flex-col gap-2">
          <ProtectedRoute>
            {children} 
          </ProtectedRoute>      
            </div>
          {/* </div> */}
        {/* {children} */}
      <Toaster richColors /> 
      </SidebarInset>
    </SidebarProvider>

    
  );
}