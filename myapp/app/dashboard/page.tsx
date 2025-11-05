"use client"

import { TrendingUp, TrendingDown, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"
import { userPortfolio, getTotalBalance, getPortfolioChange } from "@/lib/mock-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

function DashboardContent() {
  const totalBalance = getTotalBalance()
  const portfolioChange = getPortfolioChange()
  const isPositive = portfolioChange >= 0

  // Generate mock portfolio chart data
  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 1700000 + Math.sin(i / 5) * 200000 + Math.random() * 50000,
  }))

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">Manage your crypto assets</p>
          </div>

          {/* Total Balance Card */}
          <Card className="mb-8 p-8 border border-border bg-gradient-to-br from-primary/10 to-accent/5">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium">Total Balance</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-5xl font-bold">${(totalBalance / 1000000).toFixed(2)}M</h2>
                <div
                  className={`flex items-center gap-1 text-lg font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  {Math.abs(portfolioChange).toFixed(2)}%
                </div>
              </div>
              <p className="text-sm text-muted-foreground">in the last 24 hours</p>
            </div>
          </Card>

          {/* Portfolio Chart */}
          <Card className="mb-8 p-6 border border-border">
            <h3 className="text-lg font-semibold mb-6">Portfolio Value</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.5rem",
                  }}
                  formatter={(value) => `$${(value / 1000000).toFixed(2)}M`}
                />
                <Line type="monotone" dataKey="value" stroke="var(--color-primary)" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Holdings Table */}
          <Card className="border border-border">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Your Holdings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Asset</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Amount</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Price</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Total</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">24h Change</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {userPortfolio.map((asset) => (
                      <tr key={asset.symbol} className="hover:bg-card/50 transition-colors">
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">{asset.symbol}</p>
                            <p className="text-xs text-muted-foreground">{asset.name}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">{asset.amount.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right">
                          ${asset.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                        </td>
                        <td className="py-4 px-4 text-right font-semibold">
                          ${asset.total.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                        </td>
                        <td
                          className={`py-4 px-4 text-right font-medium flex items-center justify-end gap-1 ${asset.change24h >= 0 ? "text-green-500" : "text-red-500"}`}
                        >
                          {asset.change24h >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {Math.abs(asset.change24h).toFixed(2)}%
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Button variant="ghost" size="icon" className="rounded-lg">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  )
}

export default function Page() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  )
}
