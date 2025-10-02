import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Star,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-slate-50/30 to-blue-50/50"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            SEBI Certified Expert
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Meet Your Financial
            <span className="block bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
              Advisor
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A certified mutual fund expert with years of experience helping investors 
            build wealth through smart investment strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Financial Partner
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 5 years of experience in the financial markets, I've helped 
                hundreds of investors achieve their financial goals through strategic 
                mutual fund investments and comprehensive financial planning.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "SEBI Certified Investment Advisor",
                  "5+ Years of Market Experience",
                  "100+ Happy Clients",
                  "₹50Cr+ Portfolio Managed"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-4xl">RK</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rahul Kumar</h3>
                  <p className="text-gray-600 mb-4">Certified Financial Advisor</p>
                  <div className="flex justify-center space-x-4">
                    <Badge className="bg-blue-100 text-blue-700 border-0">
                      <Shield className="w-4 h-4 mr-1" />
                      SEBI Certified
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <Award className="w-4 h-4 mr-1" />
                      Expert
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional credentials that ensure you get expert financial advice
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Educational Background",
                description: "Bachelor's degree in Finance and Economics from a reputed university",
                details: ["Finance Degree", "Economics Major", "Investment Theory"]
              },
              {
                icon: Shield,
                title: "Professional Certifications",
                description: "SEBI registered investment advisor with multiple financial certifications",
                details: ["SEBI Registration", "NISM Certification", "AMFI Certification"]
              },
              {
                icon: Briefcase,
                title: "Industry Experience",
                description: "Extensive experience in mutual funds, portfolio management, and financial planning",
                details: ["5+ Years Experience", "Portfolio Management", "Risk Assessment"]
              }
            ].map((qualification, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                    <qualification.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{qualification.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {qualification.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {qualification.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized knowledge in key investment areas to maximize your returns
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Equity Funds", description: "Growth-oriented equity mutual funds" },
              { icon: Shield, title: "Debt Funds", description: "Stable income-generating debt instruments" },
              { icon: Users, title: "Hybrid Funds", description: "Balanced portfolio with equity and debt" },
              { icon: BookOpen, title: "SIP Planning", description: "Systematic investment strategies" },
              { icon: Star, title: "Portfolio Review", description: "Regular portfolio analysis and rebalancing" },
              { icon: Award, title: "Risk Assessment", description: "Comprehensive risk profiling" },
              { icon: TrendingUp, title: "Tax Planning", description: "Tax-efficient investment strategies" },
              { icon: Shield, title: "Goal Planning", description: "Financial goal-based investment planning" }
            ].map((expertise, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <expertise.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{expertise.title}</h3>
                <p className="text-gray-600 text-sm">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose RK Finance?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The advantages that make us your preferred financial advisory partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "SEBI Certified",
                description: "Regulated and certified by SEBI, ensuring compliance with all financial regulations"
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description: "Tailored investment strategies based on your unique financial goals and risk profile"
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description: "Consistent performance and positive client outcomes over 5+ years"
              },
              {
                icon: BookOpen,
                title: "Educational Focus",
                description: "We believe in educating clients to make informed investment decisions"
              },
              {
                icon: Star,
                title: "Continuous Support",
                description: "Ongoing portfolio monitoring and regular consultation sessions"
              },
              {
                icon: Award,
                title: "Transparent Fees",
                description: "Clear, upfront fee structure with no hidden charges or commissions"
              }
            ].map((reason, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get personalized financial advice from a certified expert and take the first step 
            towards building your wealth through smart mutual fund investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-5 text-xl rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
              Book Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-xl rounded-xl font-semibold transition-all duration-300">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
