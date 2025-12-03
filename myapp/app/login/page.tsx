"use client"

import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"
import { GoogleAuthButton } from "@/components/google-auth-button"
import { AuthRedirect } from "@/components/auth-redirect"

function LoginContent() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <Navbar />
      <AuthRedirect />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background px-4 py-20">
        <Card className="w-full max-w-md border border-border">
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your TradeBeta account</p>
            </div>

            <GoogleAuthButton isSignUp={false} />

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">Or continue with email</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-input accent-primary" />
                  Remember me
                </label>
                <a href="#" className="text-primary hover:text-primary/80 font-medium">
                  Forgot password?
                </a>
              </div>

              <Button className="w-full rounded-lg" size="lg" disabled>
                Sign In (Email coming soon)
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center text-sm">
              <p className="text-muted-foreground mb-3">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:text-primary/80 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </main>
    </>
  )
}

export default function Page() {
  return (
    <ThemeProvider>
      <LoginContent />
    </ThemeProvider>
  )
}
