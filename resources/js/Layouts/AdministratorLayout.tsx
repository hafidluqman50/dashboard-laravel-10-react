import { PropsWithChildren } from 'react';

import {
  CircleUser,
  Home,
  LineChart,
  Link,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Button } from "@/Components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from '@/Components/Sidebar'

import {
  SidebarResponsive,
  SidebarResponsiveMenu
} from '@/Components/SidebarResponsive'

import { User } from '@/types';

import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/Components/ui/breadcrumb';

export default function AdministratorLayout({user, children}: PropsWithChildren<{ user:User }>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar>
        <SidebarHeader title="Jupiter IT Solutions" />
        <SidebarMenu>
          <SidebarMenuItem
              title="Dashboard"
              route={route('dashboard')}
              icon={<Home className="h-4 w-4" />}
              isActive={route().current('dashboard')}
          />
          
          <SidebarMenuItem
              title="Orders"
              route="#"
              icon={<ShoppingCart className="h-4 w-4" />}
              countData={6}
              isActive={false}
          />
          
          <SidebarMenuItem
              title="Products"
              route="#"
              icon={<Package className="h-4 w-4" />}
              isActive={false}
          />
          
          <SidebarMenuItem
              title="Customers"
              route="#"
              icon={<Users className="h-4 w-4" />}
              isActive={false}
          />
          
          <SidebarMenuItem
              title="Analytics"
              route="#"
              icon={<LineChart className="h-4 w-4" />}
              isActive={false}
          />
        </SidebarMenu>
      </Sidebar>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] fixed lg:static lg:px-6 w-full">
          <SidebarResponsive
            title="Jupiter IT Solutions"
          >
            <SidebarResponsiveMenu 
              title="Dashboard"
              route={route('dashboard')}
              icon={<Home className="h-5 w-5" />}
              isActive={route().current('dashboard')}
            />
            
            <SidebarResponsiveMenu 
                title="Orders"
                route={route('dashboard')}
                icon={<ShoppingCart className="h-5 w-5" />}
                isActive={false}
                countData={6}
              />
            
            <SidebarResponsiveMenu 
                title="Products"
                route={route('dashboard')}
                icon={<Package className="h-5 w-5" />}
                isActive={false}
              />
            
            <SidebarResponsiveMenu 
                title="Customers"
                route={route('dashboard')}
                icon={<Users className="h-5 w-5" />}
                isActive={false}
              />
            
            <SidebarResponsiveMenu 
                title="Analytics"
                route={route('dashboard')}
                icon={<LineChart className="h-5 w-5" />}
                isActive={false}
              />
          </SidebarResponsive>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 mt-[12%] lg:mt-0">
          {children}
        </main>
      </div>
    </div>
  )
}
