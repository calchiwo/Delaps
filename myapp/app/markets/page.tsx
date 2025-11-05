"use client"

import { TrendingUp, TrendingDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"
import { markets } from "@/lib/mock-data"

function MarketsContent() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Markets</h1>
            <p className="text-muted-foreground">Track cryptocurrency prices and movements</p>
          </div>

          {/* Markets Table */}
          <Card className="border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-card/50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-muted-foreground">Pair</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Price</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">24h Change</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">7d Change</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">24h High</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">24h Low</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Volume</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {markets.map((market) => (
                    <tr key={market.id} className="hover:bg-card/30 transition-colors">
                      <td className="py-4 px-6 font-semibold">{market.pair}</td>
                      <td className="py-4 px-6 text-right font-mono">
                        ${market.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td
                        className={`py-4 px-6 text-right font-medium flex items-center justify-end gap-1 ${market.change24h >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {market.change24h >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {Math.abs(market.change24h).toFixed(2)}%
                      </td>
                      <td
                        className={`py-4 px-6 text-right font-medium flex items-center justify-end gap-1 ${market.change7d >= 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {market.change7d >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {Math.abs(market.change7d).toFixed(2)}%
                      </td>
                      <td className="py-4 px-6 text-right font-mono text-sm">
                        ${market.high24h.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-6 text-right font-mono text-sm">
                        ${market.low24h.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-6 text-right font-mono text-sm">
                        ${(market.volume24h / 1000000000).toFixed(2)}B
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="icon" className="rounded-lg hover:bg-primary/10">
                            <Star className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="rounded-lg">
                            Watch
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
      <MarketsContent />
    </ThemeProvider>
  )
}
