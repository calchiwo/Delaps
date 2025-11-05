import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency values
export const formatCurrency = (value: number, decimals = 2): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

// Format large numbers (e.g., $1.2B, $45.6M)
export const formatCompactNumber = (value: number): string => {
  if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + "B"
  }
  if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + "M"
  }
  if (value >= 1e3) {
    return (value / 1e3).toFixed(2) + "K"
  }
  return value.toFixed(2)
}

// Format percentage with sign
export const formatPercentage = (value: number, decimals = 2): string => {
  const sign = value > 0 ? "+" : ""
  return `${sign}${value.toFixed(decimals)}%`
}

// Format price with appropriate decimals
export const formatPrice = (price: number): string => {
  if (price < 1) {
    return price.toFixed(8)
  }
  if (price < 1000) {
    return price.toFixed(2)
  }
  return price.toFixed(2)
}

// Get color class based on change percentage
export const getChangeColor = (change: number): string => {
  if (change > 0) return "text-green-500"
  if (change < 0) return "text-red-500"
  return "text-muted-foreground"
}

// Get background color class based on change
export const getChangeBgColor = (change: number): string => {
  if (change > 0) return "bg-green-500/10"
  if (change < 0) return "bg-red-500/10"
  return "bg-muted"
}

// Calculate percentage change
export const calculatePercentChange = (current: number, previous: number): number => {
  if (previous === 0) return 0
  return ((current - previous) / previous) * 100
}

// Format date time
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Truncate address (for wallet addresses)
export const truncateAddress = (address: string, chars = 4): string => {
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`
}

// Format volume with appropriate scale
export const formatVolume = (volume: number): string => {
  return formatCompactNumber(volume)
}

// Get status badge color
export const getStatusColor = (status: string): string => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-500/10 text-green-600"
    case "PENDING":
      return "bg-yellow-500/10 text-yellow-600"
    case "CANCELLED":
      return "bg-red-500/10 text-red-600"
    default:
      return "bg-muted text-foreground"
  }
}
