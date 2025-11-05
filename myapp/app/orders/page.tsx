"use client"

import { Copy, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/lib/theme-provider"
import { orderHistory } from "@/lib/mock-data"

function OrdersContent() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Order History</h1>
            <p className="text-muted-foreground">View all your past orders and trades</p>
          </div>

          {/* Orders Table */}
          <Card className="border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-card/50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-muted-foreground">Order ID</th>
                    <th className="text-left py-4 px-6 font-medium text-muted-foreground">Pair</th>
                    <th className="text-center py-4 px-6 font-medium text-muted-foreground">Type</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Amount</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Price</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Total</th>
                    <th className="text-center py-4 px-6 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-4 px-6 font-medium text-muted-foreground">Date</th>
                    <th className="text-right py-4 px-6 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {orderHistory.map((order) => (
                    <tr key={order.id} className="hover:bg-card/30 transition-colors">
                      <td className="py-4 px-6 font-mono text-xs">{order.id}</td>
                      <td className="py-4 px-6 font-semibold">{order.pair}</td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            order.type === "BUY" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {order.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right font-mono">{order.amount}</td>
                      <td className="py-4 px-6 text-right font-mono">
                        ${order.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-6 text-right font-semibold">
                        ${order.total.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "COMPLETED"
                              ? "bg-green-500/20 text-green-500"
                              : order.status === "PENDING"
                                ? "bg-yellow-500/20 text-yellow-500"
                                : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground text-sm">{order.date}</td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="icon" className="rounded-lg">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-lg">
                            <Copy className="w-4 h-4" />
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
      <OrdersContent />
    </ThemeProvider>
  )
}
