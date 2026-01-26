import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import ccuLogo from "@/assets/ccu-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Who We Are", href: "/about" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Political Ideology", href: "/about#ideology" },
    ],
  },
  { name: "Leadership", href: "/leadership" },
  { name: "Party Structure", href: "/structure" },
  { name: "Membership", href: "/membership" },
  { name: "Youth & SIGs", href: "/youth" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          {/* Contact info */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <span>info@ccuparty.co.ke</span>
            </span>

            <span className="hidden sm:flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span>+254 721 280 573</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-primary-foreground/80 hidden sm:block">
              Patriotism • Democracy • Unity
            </p>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={ccuLogo}
              alt="Chama Cha Uzalendo Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link to={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/membership">Join CCU</Link>
            </Button>
            <Button variant="donate" size="sm" asChild>
              <Link to="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu - NEW SECTION ADDED */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-[80vh] py-4" : "max-h-0"
          )}
        >
          <div className="space-y-2 py-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-left rounded-md transition-colors",
                        isActive(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-primary/5"
                      )}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openMobileDropdown === item.name && "rotate-90"
                        )}
                      />
                    </button>

                    {/* Mobile dropdown content */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openMobileDropdown === item.name ? "max-h-48" : "max-h-0"
                      )}
                    >
                      <div className="ml-6 space-y-1 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "block px-4 py-2 text-sm rounded-md transition-colors",
                              isActive(child.href)
                                ? "text-primary bg-primary/10"
                                : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-md transition-colors",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 pt-4 px-4">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/membership" onClick={() => setMobileMenuOpen(false)}>
                  Join CCU
                </Link>
              </Button>
              <Button variant="donate" size="sm" className="w-full" asChild>
                <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                  Donate
                </Link>
              </Button>
            </div>

            {/* Mobile contact info */}
            <div className="pt-6 px-4 border-t border-border">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">info@ccuparty.co.ke</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+254 721 280 573</span>
                </div>
                <p className="text-xs text-foreground/60 pt-2">
                  Patriotism • Democracy • Unity
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}