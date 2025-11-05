"use client"

import Link from "next/link"
import { ArrowRight, TrendingUp, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"

function LandingContent() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8 py-20">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-balance">
                Trade Crypto with <span className="text-primary">Confidence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Professional-grade trading platform built for everyone. Real-time data, advanced charting, and
                lightning-fast execution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/signup">
                <Button size="lg" className="rounded-lg">
                  Start Trading
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/markets">
                <Button variant="outline" size="lg" className="rounded-lg bg-transparent">
                  Explore Markets
                </Button>
              </Link>
            </div>

            {/* Floating Demo Badge */}
            <div className="pt-8 animate-pulse">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent">
                ⚡ Demo Mode: Static Prices Only
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for professional trading
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Real-Time Charts",
                  description: "Advanced candlestick charts with multiple timeframes and technical indicators.",
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Secure Trading",
                  description: "Enterprise-grade security with multi-factor authentication and encryption.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast",
                  description: "Ultra-low latency execution and real-time order updates.",
                },
              ].map((feature, i) => (
                <Card key={i} className="p-8 border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "$850B+", label: "Total Volume" },
                { value: "150+", label: "Crypto Assets" },
                { value: "99.99%", label: "Uptime" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of traders exploring cryptocurrencies on TradeBeta.
              </p>
            </div>
            <Link href="/signup">
              <Button size="lg" className="rounded-lg">
                Create Account Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">TradeBeta</h3>
                <p className="text-sm text-muted-foreground">Professional crypto trading platform.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/markets" className="hover:text-foreground">
                      Markets
                    </Link>
                  </li>
                  <li>
                    <Link href="/trade" className="hover:text-foreground">
                      Trading
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-foreground">
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 TradeBeta. All rights reserved. Demo Mode - Static Prices Only.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default function Page() {
  return (
    <ThemeProvider>
      <LandingContent />
    </ThemeProvider>
  )
}
