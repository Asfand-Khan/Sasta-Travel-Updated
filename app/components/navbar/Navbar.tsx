'use client';

import Container from "@/app/components/Container"
import Logo from "../Logo"
import { AlignJustify, Plane, Hotel, UserCircle, CheckSquare } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <Container>
      <div className="
            relative
            py-3
            flex
            flex-row
            justify-between
            items-center
        ">
        <Logo />
        <div className="
          flex
          flex-row
          gap-4
          items-center
        ">
          <div className="cursor-pointer flex flex-row items-center gap-2 hover:bg-gray-100 hover:opacity-80 transition rounded-sm p-2 text-md font-medium">
            <UserCircle size={18} />
            <p>Login</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="
                  focus:outline-none 
                  hover:bg-gray-100 
                  hover:opacity-80
                  transition 
                  p-2 
                  rounded-sm
              ">
                <AlignJustify />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="
                  border-[1px]
                  border-gray-100
                  rounded-sm
                  p-2
                  shadow-sm
              ">
                <DropdownMenuItem className="
                  px-5
                  text-md
                  font-medium
                  flex
                  gap-3
                  hover:opacity-80
                ">
                  <Plane size={18} />
                  <p>Flights</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="
                  px-5
                  text-md
                  font-medium
                  flex
                  gap-3
                  hover:opacity-80
                ">
                  <Hotel size={18} />
                  <p>Hotels</p>
                </DropdownMenuItem>
                <hr />
                <DropdownMenuItem className="
                  px-5
                  text-md
                  font-medium
                  flex
                  gap-3
                  hover:opacity-80
                ">
                  <CheckSquare size={18} />
                  <p>My Bookings</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar