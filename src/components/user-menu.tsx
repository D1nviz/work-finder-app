import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch } from "@/hooks/useRedux";
import { logout } from "@/store/features/userSlice";
import { LogOut } from "lucide-react";
import User from "@/assets/user.png";
export default function UserMenu() {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(logout());
    toast({
      title: "Goodbye!",
      description: "You have successfully signed out",
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src={User} className="w-8 h-8 cursor-pointer" alt="user" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer " onSelect={handleSignOut}>
          <LogOut className="h-6 w-6 text-red-600" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
