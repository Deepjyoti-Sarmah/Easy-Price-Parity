import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/app-sidebar"
import { auth } from "@/lib/auth"

export default async function Page() {
  const session = await auth()

  if (!session?.user) return <div className="text-white text-center m-2 text-xl">Not authenticated</div>

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-bun-mute-background text-zinc-300">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-gray-800">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 hover:bg-muted/80" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-zinc-600" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-zinc-300 hover:text-white">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-zinc-600" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-zinc-300">Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/10" />
            <div className="aspect-video rounded-xl bg-muted/10" />
            <div className="aspect-video rounded-xl bg-muted/10" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/10 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

