import { Users, Globe, Shield, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Project Recite</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform transforms Quranic education by addressing inefficiencies, fostering collaboration, and
            enabling stakeholders globally to align their efforts towards a common goal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Quranic education transformation"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Seamless, Secure, and Scalable Experience</h3>
            <p className="text-gray-600 leading-relaxed">
              Project Recite delivers a seamless, secure, and scalable experience for Quranic education. Our platform
              bridges the gap between traditional teaching methods and modern technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By fostering collaboration between teachers, students, and parents, we create an ecosystem where Quranic
              learning thrives through innovation and accessibility.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Collaboration</h4>
            <p className="text-gray-600">Connecting stakeholders worldwide for unified Quranic education</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Addressing Inefficiencies</h4>
            <p className="text-gray-600">Streamlining traditional methods with modern solutions</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h4>
            <p className="text-gray-600">Enterprise-grade security for sacred educational content</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solution</h4>
            <p className="text-gray-600">Growing with your madrasa's needs and student base</p>
          </div>
        </div>
      </div>
    </section>
  )
}
