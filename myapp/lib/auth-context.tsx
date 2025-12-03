"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth"
import { auth, googleProvider } from "./firebase"

interface UserProfile {
  uid: string
  name: string | null
  email: string | null
  photo: string | null
}

interface AuthContextType {
  user: UserProfile | null
  loading: boolean
  error: string | null
  signInWithGoogle: () => Promise<void>
  signUpWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Check if user is already logged in on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userProfile: UserProfile = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName,
          email: firebaseUser.email,
          photo: firebaseUser.photoURL,
        }
        setUser(userProfile)
        localStorage.setItem("tradebeta_user", JSON.stringify(userProfile))
      } else {
        setUser(null)
        localStorage.removeItem("tradebeta_user")
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    try {
      setError(null)
      const result = await signInWithPopup(auth, googleProvider)
      const userProfile: UserProfile = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      }
      setUser(userProfile)
      localStorage.setItem("tradebeta_user", JSON.stringify(userProfile))
    } catch (err: any) {
      const errorMessage =
        err.code === "auth/popup-closed-by-user"
          ? "Sign in was cancelled"
          : err.message || "Failed to sign in with Google"
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  const signUpWithGoogle = async () => {
    return signInWithGoogle()
  }

  const logout = async () => {
    try {
      setError(null)
      await signOut(auth)
      setUser(null)
      localStorage.removeItem("tradebeta_user")
    } catch (err: any) {
      const errorMessage = err.message || "Failed to logout"
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    error,
    signInWithGoogle,
    signUpWithGoogle,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
