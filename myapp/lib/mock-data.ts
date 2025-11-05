// Mock static price data for TradeBeta (Demo Mode)

export interface CryptoAsset {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  change7d?: number
  marketCap?: number
  volume24h?: number
  icon?: string
}

export interface Portfolio {
  symbol: string
  name: string
  amount: number
  price: number
  total: number
  change24h: number
}

export interface CryptoMarket {
  id: string
  pair: string
  price: number
  change24h: number
  change7d: number
  high24h: number
  low24h: number
  volume24h: number
}

export interface Order {
  id: string
  pair: string
  type: "BUY" | "SELL"
  amount: number
  price: number
  total: number
  status: "COMPLETED" | "PENDING" | "CANCELLED"
  date: string
}

// Static crypto prices (simulating market data)
export const cryptoAssets: CryptoAsset[] = [
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    price: 97542.5,
    change24h: 2.45,
    change7d: 8.23,
    marketCap: 1920000000000,
    volume24h: 45000000000,
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    price: 3240.75,
    change24h: -1.32,
    change7d: 5.67,
    marketCap: 389000000000,
    volume24h: 18000000000,
  },
  {
    id: "bnb",
    symbol: "BNB",
    name: "Binance Coin",
    price: 612.85,
    change24h: 3.12,
    change7d: 12.45,
    marketCap: 94000000000,
    volume24h: 2100000000,
  },
  {
    id: "sol",
    symbol: "SOL",
    name: "Solana",
    price: 189.4,
    change24h: 4.58,
    change7d: 18.92,
    marketCap: 85000000000,
    volume24h: 3200000000,
  },
  {
    id: "xrp",
    symbol: "XRP",
    name: "XRP",
    price: 2.45,
    change24h: -0.82,
    change7d: 15.23,
    marketCap: 130000000000,
    volume24h: 1200000000,
  },
  {
    id: "ada",
    symbol: "ADA",
    name: "Cardano",
    price: 1.05,
    change24h: 1.23,
    change7d: 8.12,
    marketCap: 37000000000,
    volume24h: 520000000,
  },
]

// User's portfolio holdings
export const userPortfolio: Portfolio[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 8.42,
    price: 97542.5,
    total: 821450.35,
    change24h: 2.45,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: 125.3,
    price: 3240.75,
    total: 406142.48,
    change24h: -1.32,
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: 2500.0,
    price: 189.4,
    total: 473500.0,
    change24h: 4.58,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    amount: 450.0,
    price: 612.85,
    total: 275782.5,
    change24h: 3.12,
  },
]

// Markets list
export const markets: CryptoMarket[] = cryptoAssets.map((asset) => ({
  id: asset.id,
  pair: `${asset.symbol}/USD`,
  price: asset.price,
  change24h: asset.change24h,
  change7d: asset.change7d || 0,
  high24h: asset.price * 1.05,
  low24h: asset.price * 0.97,
  volume24h: asset.volume24h || 0,
}))

// Sample orders history
export const orderHistory: Order[] = [
  {
    id: "ORD-001",
    pair: "BTC/USD",
    type: "BUY",
    amount: 0.5,
    price: 96000,
    total: 48000,
    status: "COMPLETED",
    date: "2025-01-15 14:32",
  },
  {
    id: "ORD-002",
    pair: "ETH/USD",
    type: "BUY",
    amount: 10,
    price: 3200,
    total: 32000,
    status: "COMPLETED",
    date: "2025-01-14 09:15",
  },
  {
    id: "ORD-003",
    pair: "SOL/USD",
    type: "SELL",
    amount: 100,
    price: 185,
    total: 18500,
    status: "COMPLETED",
    date: "2025-01-12 16:45",
  },
  {
    id: "ORD-004",
    pair: "BNB/USD",
    type: "BUY",
    amount: 25,
    price: 610,
    total: 15250,
    status: "PENDING",
    date: "2025-01-11 11:20",
  },
  {
    id: "ORD-005",
    pair: "XRP/USD",
    type: "BUY",
    amount: 1000,
    price: 2.4,
    total: 2400,
    status: "COMPLETED",
    date: "2025-01-10 13:55",
  },
]

// Calculate total balance
export const getTotalBalance = (): number => {
  return userPortfolio.reduce((sum, asset) => sum + asset.total, 0)
}

// Calculate portfolio change
export const getPortfolioChange = (): number => {
  const totalValue = userPortfolio.reduce((sum, asset) => sum + asset.total, 0)
  const totalWithoutGain = userPortfolio.reduce((sum, asset) => {
    const gainLoss = (asset.total * asset.change24h) / 100
    return sum + (asset.total - gainLoss)
  }, 0)
  return ((totalValue - totalWithoutGain) / totalWithoutGain) * 100
}

// Generate static sparkline data (simulated candlestick data)
export const generateSparklineData = (points = 30) => {
  return Array.from({ length: points }, (_, i) => ({
    x: i,
    y: Math.sin(i / 5) * 50 + 100 + Math.random() * 20,
  }))
}
