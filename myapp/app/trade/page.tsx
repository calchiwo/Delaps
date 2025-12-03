"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"
import { markets } from "@/lib/mock-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

function TradeContent() {
  const [selectedMarket, setSelectedMarket] = useState(markets[0])
  const [orderType, setOrderType] = useState("limit")
  const [side, setSide] = useState<"buy" | "sell">("buy")

  // Generate mock candlestick chart data
  const chartData = Array.from({ length: 50 }, (_, i) => ({
    time: i,
    price: 97000 + Math.sin(i / 10) * 2000 + Math.random() * 1000,
  }))

  // Generate mock order book
  const orderBook = {
    buy: Array.from({ length: 8 }, (_, i) => ({
      price: selectedMarket.price - i * selectedMarket.price * 0.001,
      amount: Math.random() * 50,
      total: 0,
    })),
    sell: Array.from({ length: 8 }, (_, i) => ({
      price: selectedMarket.price + i * selectedMarket.price * 0.001,
      amount: Math.random() * 50,
      total: 0,
    })),
  }

  const recentTrades = [
    { price: 97500, amount: 2.5, side: "BUY", time: "14:32:15" },
    { price: 97480, amount: 5.2, side: "SELL", time: "14:32:10" },
    { price: 97510, amount: 1.8, side: "BUY", time: "14:32:05" },
    { price: 97495, amount: 3.1, side: "SELL", time: "14:32:00" },
    { price: 97520, amount: 4.3, side: "BUY", time: "14:31:55" },
  ]

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Trading Terminal</h1>
            <p className="text-muted-foreground">Advanced trading interface (Demo Mode - No Live Data)</p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Market List */}
            <Card className="border border-border lg:col-span-1">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-sm">Markets</h3>
              </div>
              <div className="divide-y divide-border max-h-96 overflow-y-auto">
                {markets.map((market) => (
                  <button
                    key={market.id}
                    onClick={() => setSelectedMarket(market)}
                    className={`w-full text-left p-4 hover:bg-card/50 transition-colors border-l-2 ${
                      selectedMarket.id === market.id ? "border-l-primary bg-card/50" : "border-l-transparent"
                    }`}
                  >
                    <p className="font-semibold text-sm">{market.pair}</p>
                    <p className="text-xs text-muted-foreground">
                      ${market.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                    </p>
                  </button>
                ))}
              </div>
            </Card>

            {/* Center - Chart */}
            <Card className="border border-border lg:col-span-2">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{selectedMarket.pair}</p>
                    <h3 className="text-3xl font-bold">
                      ${selectedMarket.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-lg font-semibold ${selectedMarket.change24h >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {selectedMarket.change24h >= 0 ? "+" : ""}
                      {selectedMarket.change24h.toFixed(2)}%
                    </p>
                    <p className="text-xs text-muted-foreground">24h change</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" domain={["dataMin", "dataMax"]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "0.5rem",
                      }}
                      formatter={(value) => `$${(value as number).toFixed(2)}`}
                    />
                    <Line type="monotone" dataKey="price" stroke="var(--color-primary)" dot={false} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Right - Trading Panel */}
            <Card className="border border-border lg:col-span-1">
              <div className="p-6">
                <div className="flex gap-2 mb-6 bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setSide("buy")}
                    className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-colors ${
                      side === "buy" ? "bg-green-500/20 text-green-500" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ArrowDownLeft className="w-4 h-4 inline mr-1" />
                    Buy
                  </button>
                  <button
                    onClick={() => setSide("sell")}
                    className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-colors ${
                      side === "sell" ? "bg-red-500/20 text-red-500" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 inline mr-1" />
                    Sell
                  </button>
                </div>

                <div className="flex gap-2 mb-6 bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setOrderType("market")}
                    className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-colors ${
                      orderType === "market"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Market
                  </button>
                  <button
                    onClick={() => setOrderType("limit")}
                    className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-colors ${
                      orderType === "limit"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Limit
                  </button>
                </div>

                <div className="space-y-4">
                  {orderType === "limit" && (
                    <div>
                      <label className="block text-xs font-medium mb-2 text-muted-foreground">Price (USD)</label>
                      <input
                        type="number"
                        placeholder={selectedMarket.price.toString()}
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium mb-2 text-muted-foreground">
                      Amount ({selectedMarket.pair.split("/")[0]})
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="bg-card/50 rounded-lg p-3 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fee</span>
                      <span>$0.00</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full rounded-lg text-sm ${
                      side === "buy" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {side === "buy" ? "Place Buy Order" : "Place Sell Order"}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Book & Recent Trades */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Order Book */}
            <Card className="border border-border">
              <div className="p-6">
                <h3 className="font-semibold mb-4">Order Book</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-2">SELL ORDERS</p>
                    <div className="space-y-1 text-xs mb-4">
                      {orderBook.sell.slice(0, 4).map((order, i) => (
                        <div key={i} className="flex justify-between text-red-500/70">
                          <span>{order.price.toFixed(2)}</span>
                          <span>{order.amount.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-2">
                    <p className="text-xs text-muted-foreground font-medium mb-2">BUY ORDERS</p>
                    <div className="space-y-1 text-xs">
                      {orderBook.buy.slice(0, 4).map((order, i) => (
                        <div key={i} className="flex justify-between text-green-500/70">
                          <span>{order.price.toFixed(2)}</span>
                          <span>{order.amount.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Trades */}
            <Card className="border border-border">
              <div className="p-6">
                <h3 className="font-semibold mb-4">Recent Trades</h3>
                <div className="space-y-2 text-xs">
                  {recentTrades.map((trade, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="font-medium">
                          ${trade.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                        </p>
                        <p className="text-muted-foreground">{trade.time}</p>
                      </div>
                      <p className={trade.side === "BUY" ? "text-green-500" : "text-red-500"}>
                        {trade.amount.toFixed(3)}
                      </p>
                    </div>
                  ))}
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
      <TradeContent />
    </ThemeProvider>
  )
}
