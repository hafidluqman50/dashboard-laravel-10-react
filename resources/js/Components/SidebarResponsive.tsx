import { ReactNode } from "react"
import { Link } from "@inertiajs/react"
import {
  AlarmClockCheckIcon,
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Input } from "@/Components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"

type SidebarResponsiveProps = {
  title: string,
  children: string | JSX.Element | JSX.Element[]
}

const SidebarResponsive = ({title, children}: SidebarResponsiveProps) => {
  return(
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"  
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">{title}</span>
          </Link>
          {children}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

SidebarResponsive.displayName = "SidebarResponsive"



type SidebarResponsiveMenuProps = {
  title: string
  route: string,
  icon: ReactNode,
  countData?: number|null,
  isActive?: boolean|null
}

const SidebarResponsiveMenu = ({
  title, route, icon, countData = null, isActive = null
}: SidebarResponsiveMenuProps) => {
  return(
    <Link
      href={route}
      className={
        isActive != null && isActive ? 
        `mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground`
        : `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`
      }
    >
      {icon}
      {title}
      { countData != null ? 
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {countData}
        </Badge> 
        : '' 
      }
    </Link>
  )
}

export {
  SidebarResponsive,
  SidebarResponsiveMenu
}