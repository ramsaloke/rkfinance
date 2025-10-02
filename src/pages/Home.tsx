import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Calculator, 
  BookOpen, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
            {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
                 <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-slate-50/30 to-green-50/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
                             <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-medium">
                 <Shield className="w-4 h-4 mr-2" />
                 SEBI Certified Expert
               </Badge>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
                 Get Smart Mutual Fund
                 <span className="block bg-gradient-to-r from-green-600 to-slate-600 bg-clip-text text-transparent">
                   Advice from a Certified Expert
                 </span>
               </h1>
               <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                 Build wealth with confidence. Get personalized investment strategies, 
                 risk profiling, and SIP planning from a certified financial advisor.
               </p>
                             <div className="flex flex-col sm:flex-row gap-4">
                 <Button className="bg-gradient-to-r from-green-600 to-slate-600 hover:from-green-700 hover:to-slate-700 text-white px-6 py-3 text-base rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                   Book Free Consultation
                   <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
                 <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 text-base rounded-xl font-semibold transition-all duration-300">
                   Explore Our Blog
                 </Button>
               </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative z-10">
                                 <img 
                   src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                   alt="Professional Financial Advisor" 
                   className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                 />
                {/* Floating Trust Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-slate-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">SEBI Registered</div>
                      <div className="text-sm text-gray-600">Investment Advisor</div>
                    </div>
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                                         <div className="text-2xl font-bold text-green-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              {/* Background Decorative Elements */}
                             <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-100 to-slate-100 rounded-full opacity-50 -z-10"></div>
               <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-green-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by 100+ Investors
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands who have already started their wealth journey with us
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "100+", label: "Happy Clients" },
              { icon: TrendingUp, number: "₹50Cr+", label: "Portfolio Value" },
              { icon: Star, number: "4.9", label: "Client Rating" },
              { icon: Shield, number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                                 <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial planning and investment services tailored to your goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Personalized Advice",
                description: "Get investment strategies customized to your risk profile and financial goals",
                features: ["Risk Assessment", "Goal Planning", "Portfolio Review"]
              },
              {
                icon: Calculator,
                title: "SIP Planning",
                description: "Systematic Investment Planning to build wealth over time",
                features: ["Amount Calculation", "Duration Planning", "Return Analysis"]
              },
              {
                icon: Shield,
                title: "Risk Profiling",
                description: "Understand your risk tolerance and get suitable fund recommendations",
                features: ["Risk Assessment", "Fund Selection", "Diversification"]
              },
              {
                icon: BookOpen,
                title: "Educational Content",
                description: "Learn about mutual funds, market trends, and investment strategies",
                features: ["Blog Articles", "Market Updates", "Investment Tips"]
              },
              {
                icon: Users,
                title: "Regular Monitoring",
                description: "Continuous portfolio tracking and rebalancing recommendations",
                features: ["Performance Review", "Rebalancing", "Updates"]
              },
              {
                icon: Star,
                title: "Premium Support",
                description: "Direct access to your financial advisor for any questions",
                features: ["24/7 Support", "Quick Responses", "Expert Guidance"]
              }
            ].map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                                     <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-slate-500 rounded-2xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SIP Calculator Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Plan Your SIP Investment
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Use our advanced SIP calculator to understand how small monthly investments 
                can grow into substantial wealth over time. See the power of compound interest.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Calculate monthly SIP amounts",
                  "View projected returns",
                  "Understand compound growth",
                  "Plan for different time horizons"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/sip-calculator">
                <Button className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Try Full Calculator
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
                         <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick SIP Preview</h3>
                <p className="text-gray-600">Monthly ₹10,000 for 10 years at 12% return</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-gray-600">Total Investment</span>
                  <span className="font-bold text-gray-900">₹12,00,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-gray-600">Total Value</span>
                  <span className="font-bold text-green-600">₹23,00,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-gray-600">Total Gains</span>
                  <span className="font-bold text-green-600">₹11,00,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Market Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with expert analysis, market trends, and investment strategies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Best Mutual Funds for 2025",
                excerpt: "Discover top-performing mutual funds and investment opportunities for the new year",
                readTime: "5 min read",
                category: "Investment Guide"
              },
              {
                title: "SIP vs Lump Sum: Which is Better?",
                excerpt: "Understand the pros and cons of systematic investment planning vs one-time investments",
                readTime: "7 min read",
                category: "Strategy"
              },
              {
                title: "Market Outlook: What to Expect",
                excerpt: "Expert analysis of market trends and predictions for the upcoming quarter",
                readTime: "6 min read",
                category: "Market Analysis"
              }
            ].map((post, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Badge className="w-fit mb-3 bg-blue-100 text-blue-700 border-0">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/blogs">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300">
                Read All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Start Your Wealth Journey Today!
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Don't wait to secure your financial future. Get expert advice from a certified 
            mutual fund advisor and start building wealth with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-slate-500 hover:from-blue-600 hover:to-slate-600 text-white px-10 py-5 text-xl rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
              Book Consultation Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 text-xl rounded-xl font-semibold transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
