import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  return (
    <div className="bg-[#f5e6d3] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Up To Date On All News And Offers.
          </h2>
          <p className="text-gray-700 mb-8">
            Be The First To Know About Our Collections, Special Events And More! Enjoy A 10% Off.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-white"
            />
            <Button className="bg-[#1a1a1a] hover:bg-[#2a2a2a]">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

