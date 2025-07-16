import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform
                <span className="text-green-600"> Quranic</span>
                <br />
                Education
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our platform transforms Quranic education by addressing inefficiencies, fostering collaboration, and
                enabling stakeholders globally to align their efforts towards a common goal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-3 bg-green-600 hover:bg-green-700">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 bg-transparent border-green-600 text-green-600 hover:bg-green-50"
              > */}
                {/* <Play className="mr-2 h-5 w-5" /> */}
                {/* Watch Demo */}
              {/* </Button> */}
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Madrasas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Quranic education platform"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-emerald-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
