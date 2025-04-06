"use client";
import React, { ReactNode, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            SalonLogo
          </Link>
        </div>
        <nav className="hidden md:flex space-x-2">
          <Button variant="link" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/services">Services</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/gallery">Gallery</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/booking">Booking</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </header>
      {isMenuOpen && (
        <nav className="flex flex-col md:hidden px-4 py-2 border-b space-y-2">
          <Button variant="link" asChild onClick={() => setIsMenuOpen(false)}>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" asChild onClick={() => setIsMenuOpen(false)}>
            <Link href="/services">Services</Link>
          </Button>
          <Button variant="link" asChild onClick={() => setIsMenuOpen(false)}>
            <Link href="/gallery">Gallery</Link>
          </Button>
          <Button variant="link" asChild onClick={() => setIsMenuOpen(false)}>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button variant="link" asChild onClick={() => setIsMenuOpen(false)}>
            <Link href="/booking">Booking</Link>
          </Button>
        </nav>
      )}
      <main className="flex-1">{children}</main>
      <footer className="border-t px-4 py-6 text-center text-sm space-y-2">
        <div>&copy; {new Date().getFullYear()} Salon Name. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}


