
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="min-h-[500px] flex flex-col justify-center rounded-lg space-y-4">
        <div className="p-2">
          <ThreeDPhotoCarousel />
        </div>
        <div className="text-center text-sm text-gray-500 italic">
          Drag left or right to rotate the carousel. Click on an image to enlarge.
        </div>
      </div>
    </div>
  )
}
