'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart className="mr-2 h-4 w-4" />
        Cart (0)
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      )}
    </div>
  )
}

