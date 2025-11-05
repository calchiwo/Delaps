"use client"

import { useState, useContext } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { ThemeContext } from "@/lib/theme-provider"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Markets", href: "/markets" },
    { label: "Trade", href: "/trade" },
    { label: "Orders", href: "/orders" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              TB
            </div>
            <span className="hidden sm:inline">TradeBeta</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Demo Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Demo Mode
            </div>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-lg">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden rounded-lg">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4 pt-2">
              <Link href="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="flex-1">
                <Button size="sm" className="w-full rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
