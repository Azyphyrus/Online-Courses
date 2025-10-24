import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/img/logo.png"
              alt="Yuki Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-[Pacifico] text-xl text-gray-900">Kitano Studio</span>
        </a>

        <NavigationMenu className="hidden md:flex items-center">
          <NavigationMenuList className="space-x-7">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#courses"
                className="text-gray-700 hover:text-[#c00014] transition-colors text-base"
              >
                Courses
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                className="text-gray-700 hover:text-[#c00014] transition-colors text-base"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#community"
                className="text-gray-700 hover:text-[#c00014] transition-colors text-base"
              >
                Community
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#contact"
                className="text-gray-700 hover:text-[#c00014] transition-colors text-base"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="cursor-pointer">
            Sign In
          </Button>
          <Button className="text-white shadow hover:brightness-80 cursor-pointer">
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
