import React from 'react'
import '@/../css/sidebar.css';
import { Link } from '@inertiajs/react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"


const AppSideBar = ({ onTrigger }) => {

  return (
    <SidebarProvider>
      <Sidebar className='bg-[#f0f4f8]'>
        <SidebarContent>
          <SidebarGroup>

            <SidebarGroupContent>
              <SidebarMenu>
                <div className="title"></div>
                <div className="list">
                  <ul>
                    <li > Your Recent Blogs </li>
                    <li onClick={onTrigger}>Create New Blog</li>
                    <li>
                      <Link
                        href={route('logout')}
                        method="post"
                        as="button">
                        lOGOUT
                      </Link>
                    </li>
                    <li>
                      <Link className=''
                        href={route('profile.edit')}
                        method="get"
                        as="button">
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

export default AppSideBar
