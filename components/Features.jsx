import { BarChart3, Users, MessageSquare, Brain, FileText, Building } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Comprehensive monitoring of student progress with detailed analytics and insights",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Teacher Dashboards",
      description: "Intuitive dashboards for teachers to manage classes, assignments, and student performance",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Parent Communication Portal",
      description: "Direct communication channel between parents and teachers for student updates",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Brain,
      title: "AI-Powered Error Detection",
      description: "Advanced AI technology to detect and correct recitation errors in real-time",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: FileText,
      title: "Advanced Analytics & Reporting",
      description: "Detailed reports and analytics to track performance and identify improvement areas",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Building,
      title: "Multi-Branch Management",
      description: "Centralized management system for madrasas with multiple branches and locations",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Quranic Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed specifically for madrasas with features that enhance traditional Quranic education
            through modern technology and collaborative tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Learning Management</h3>
              <p className="text-gray-600 mb-6">
                Experience a complete solution that addresses all aspects of Quranic education, from individual student
                progress to multi-branch administration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Real-time recitation analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Collaborative learning environment
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Seamless stakeholder communication
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Learning management dashboard"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
