import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Tier I",
      price: "$100",
      period: "/year",
      students: "Up to 50 students",
      description: "Perfect for small madrasas starting their digital journey",
      features: [
        "Basic progress tracking",
        "Teacher dashboard access",
        "Parent communication portal",
        "Email support",
        "Basic reporting",
      ],
      popular: false,
    },
    {
      name: "Tier II",
      price: "$150",
      period: "/year",
      students: "Up to 100 students",
      description: "Ideal for growing madrasas with expanding student base",
      features: [
        "Advanced progress tracking",
        "AI-powered error detection",
        "Enhanced teacher dashboards",
        "Parent communication portal",
        "Priority support",
        "Advanced analytics",
        "Multi-class management",
      ],
      popular: true,
    },
    {
      name: "Tier III",
      price: "$200",
      period: "/year",
      students: "Up to 200 students",
      description: "Comprehensive solution for established madrasas",
      features: [
        "Full feature access",
        "Advanced AI capabilities",
        "Comprehensive reporting",
        "Multi-branch support",
        "Custom integrations",
        "Dedicated support",
        "Training sessions",
        "Performance analytics",
      ],
      popular: false,
    },
    {
      name: "Tier IV",
      price: "$250",
      period: "/year",
      students: "200+ students",
      description: "Enterprise solution for large educational institutions",
      features: [
        "Unlimited student access",
        "Full platform capabilities",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom training programs",
        "Advanced security features",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your madrasa. Our lucrative minimal ticket size ensures excellent value while
            maintaining high customer retention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-green-50 border-2 border-green-200 shadow-xl"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-sm text-green-600 font-medium mb-2">{plan.students}</div>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-gray-800"}`}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 30-day free trial. No setup fees required.</p>
          <Button
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
          >
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  )
}
