import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type Props = {
  Workspaces: Array<{
    name: string,
    Submissions: Number,
    Subscribed: boolean
  }> 
}

export default function DropdownMenuDemo({ Workspaces }: Props) {
  return (
    <>
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <span className="flex justify-center align-middle gap-x-3 cursor-pointer  ">
      <button className="text-white  bg-black rounded-full w-7 h-7 overflow-hidden">
        {Workspaces[0].name[0]}
      </button>
      <div className="mt-[3px]">
        {Workspaces[0].name}
      </div>          <div className="pb-2  mb-2">


      </div>
      <span className="grid mt-1  ">
        <IoIosArrowUp size={10} className="-mb-2" />
        <IoIosArrowDown size={10} />
      </span>
    </span>
  </DropdownMenuTrigger>
  <DropdownMenuContent className=" ml-16 -mt-2 z-10 bg-white w-52">
    <DropdownMenuLabel>My Workspaces</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      {
        Workspaces.map((e, index) => <div key={index}>{e.name}</div>
        )
      }
    </DropdownMenuGroup>
    <DropdownMenuSeparator />

    <DropdownMenuSeparator />

  </DropdownMenuContent>
</DropdownMenu> 
 
 </>
  )
}
