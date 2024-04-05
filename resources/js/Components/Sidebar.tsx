import { Link } from "@inertiajs/react"
import { Package2 } from "lucide-react"

import { Badge } from "@/Components/ui/badge"
import { ReactNode } from "react"

type SidebarProps = {
  children: string | JSX.Element | JSX.Element[]
}

const Sidebar = ({children}: SidebarProps) => {
  return (
      <div className="hidden border-r bg-muted/40 md:block lg:max-w-[100%] relative">
        <div className="flex lg:w-[19.4%] h-full max-h-screen flex-col gap-2 fixed">
          {children}
        </div>
      </div>
  )
}

Sidebar.displayName = 'Sidebar'

type SidebarHeaderProps = {
  title: string
}

const SidebarHeader = ({title}: SidebarHeaderProps) => {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">{ title }</span>
      </Link>
    </div>
  )
}

SidebarHeader.displayName = 'SidebarHeader'

type SidebarMenuProps = {
  children: string | JSX.Element | JSX.Element[]
}

const SidebarMenu = ({ children }: SidebarMenuProps) => {
  return(
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {children}
      </nav>
    </div>
  )
}

SidebarMenu.displayName = 'SidebarMenu'

type SidebarMenuItemProps = {
  title: string
  route: string,
  icon: ReactNode,
  countData?: number|null,
  isActive?: boolean|null
}

const SidebarMenuItem = ({
  title, route, icon, countData = null, isActive = null
}: SidebarMenuItemProps) => {
  return(
    <Link
      href={route}
      className={
        isActive != null && isActive ? 
        `flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary`
        : `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`
      }
    >
      { icon }
      { title }
      { countData != null ? 
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {countData}
        </Badge> 
        : '' 
      }
    </Link>
  )
}

SidebarMenuItem.displayName = 'SidebarMenuItem'

export {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
}