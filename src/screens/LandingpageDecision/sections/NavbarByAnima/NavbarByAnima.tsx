import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const NavbarByAnima = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { label: "Home", active: true },
    { label: "About Us", active: false },
    { label: "Toolbox", active: false },
    { label: "Pricings", active: false },
    { label: "Blogs", active: false },
  ];

  return (
    <header className="w-full flex items-center justify-between px-8 py-10 bg-white md:px-[120px] relative">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-4">
        <img
          className="w-11 h-11 object-cover"
          alt="Rückenwind Logo"
          src="/chatgpt-image-29--apr--2025--17-17-38-1-1.png"
        />
        <h1 className="font-semibold text-black text-[28.6px] font-sans">
          Rückenwind
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Navigation Links and Login Button */}
      <NavigationMenu className={`${isMenuOpen ? 'flex' : 'hidden'} xl:flex absolute xl:relative top-full right-0 bg-white xl:bg-transparent p-4 xl:p-0 border xl:border-0 border-gray-200 shadow-lg xl:shadow-none rounded-bl-lg xl:rounded-none min-w-[200px] xl:min-w-0 xl:top-auto z-50`}>
        <NavigationMenuList className="flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-[51.84px] w-full">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                className={`font-sans text-lg tracking-[0.36px] ${
                  item.active
                    ? "font-semibold text-black"
                    : "font-normal text-gray-500"
                }`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem className="w-full xl:w-auto">
            <Button
              className="w-full xl:w-[183px] h-[49px] bg-[#dee9f3] rounded-[8.07px] text-[#312d47] font-bold text-lg hover:bg-[#c9dbed]"
              variant="secondary"
            >
              LOGIN
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};