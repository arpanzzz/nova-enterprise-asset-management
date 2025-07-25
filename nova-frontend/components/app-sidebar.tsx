"use client"

import * as React from "react"
import {
  IconAdjustments,
  IconAffiliate,
  IconAsset,
  IconBuilding,
  IconFileCheck,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconSearch,
  IconSettings2,
  IconUser,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState({
    name: "GUEST",
    email: "",
    avatar: "/avatars/shadcn.jpg",
  })

  const [role, setRole] = React.useState<string | null>(null)

  React.useEffect(() => {
    const name = (sessionStorage.getItem("EmpName") || "GUEST")
      .replace(/^"|"$/g, "")
      .replace(/^./, c => c.toUpperCase())

    const email = (sessionStorage.getItem("EmpNo") || "")
      .replace(/^"|"$/g, "")
      .replace(/^./, c => c.toUpperCase())

    const role = sessionStorage.getItem("role")

    setUser(prev => ({
      ...prev,
      name,
      email,
    }))

    setRole(role)
  }, [])

  const data = {
    navMain: [
      {
        title: "View Profile",
        url: "/protectedpages/profile",
        icon: IconUser,
      },
      {
        title: "Transfer Asset",
        url: "/protectedpages/asset-transfer",
        icon: IconAsset,
      },
      {
        title: "Get Support",
        url: "/protectedpages/support",
        icon: IconHelp,
      },
    ],
    admin: [
      {
        name: "User Search",
        url: "/protectedpages/admin/search-user",
        icon: IconSearch,
      },
      {
        name: "Manage companies",
        url: "/protectedpages/admin/manage-companies",
        icon: IconBuilding,
      },
      {
        name: "Manage Assets",
        url: "/protectedpages/admin/assets",
        icon: IconAsset,
      },
      {
        name: "Manage Users",
        url: "/protectedpages/admin/users",
        icon: IconUser,
      },
      {
        name: "Issue Register",
        url: "/protectedpages/admin/issue-register",
        icon: IconFolder,
      },
      {
        name: "Transfer Register",
        url: "/protectedpages/admin/transfers",
        icon: IconFolder, // Replace with appropriate icon if available
      },
      {
        name: "Approve Transfers",
        url: "/protectedpages/admin/transfers",
        icon: IconFileCheck,
      },
      {
        name: "Approve Returns",
        url: "/protectedpages/admin/approve-returns",
        icon: IconFileCheck,
      },
      {
        name: "Services",
        url: "/protectedpages/admin/services",
        icon: IconSettings2,
      },
      {
        name: "Manage Support",
        url: "/protectedpages/admin/manage-support",
        icon: IconAffiliate,
      }
    ]    
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Nova.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {role === `"admin"` && <NavDocuments items={data.admin} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}