"use client";
import { Button } from '@/components/ui/button';

export default function HeroAction() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
      <Button variant="secondary" className="w-full sm:w-auto">
        Read Top Stories
      </Button>
      <Button variant="default" className="w-full sm:w-auto">
        Subscribe for Updates
      </Button>

    </div>
  )
}
