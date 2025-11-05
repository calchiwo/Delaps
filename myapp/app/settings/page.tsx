"use client"

import { User, Lock, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"

function SettingsContent() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences</p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-6">
            {/* Profile Section */}
            <Card className="border border-border p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <Button className="rounded-lg">Save Changes</Button>
              </div>
            </Card>

            {/* Security Section */}
            <Card className="border border-border p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Security</h3>
                  <p className="text-sm text-muted-foreground">Manage your password and authentication</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <Button className="rounded-lg">Update Password</Button>
              </div>
            </Card>

            {/* Two-Factor Authentication */}
            <Card className="border border-border p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  Status: <span className="text-yellow-500 font-medium">Not Enabled</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Enable 2FA to protect your account with an authenticator app
                </p>
              </div>
              <Button className="rounded-lg">Enable 2FA</Button>
            </Card>

            {/* Notifications */}
            <Card className="border border-border p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Email notifications", id: "email" },
                  { label: "Price alerts", id: "alerts" },
                  { label: "Order updates", id: "orders" },
                  { label: "Account activity", id: "activity" },
                ].map((notif) => (
                  <label key={notif.id} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-input accent-primary" />
                    <span className="text-sm">{notif.label}</span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Danger Zone */}
            <Card className="border border-red-500/30 bg-red-500/5 p-6">
              <h3 className="text-lg font-semibold text-red-500 mb-4">Danger Zone</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-lg border-red-500/30 text-red-500 hover:bg-red-500/10 bg-transparent"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default function Page() {
  return (
    <ThemeProvider>
      <SettingsContent />
    </ThemeProvider>
  )
}
