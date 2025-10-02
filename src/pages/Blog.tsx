import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Clock, User, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Financial Insights & Tips
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest market trends, investment strategies, and financial planning tips
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 flex items-center">
                <div className="text-white">
                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
                    Featured
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    How to Start Your Investment Journey in 2025
                  </h2>
                  <p className="text-blue-100 mb-6">
                    A comprehensive guide for beginners to start investing in mutual funds and build wealth systematically.
                  </p>
                  <div className="flex items-center space-x-4 text-blue-100 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>RK Finance</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Investment Guide</h3>
                  <p className="text-slate-600">Essential tips for new investors</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Mutual Funds</Badge>
              <CardTitle className="text-xl">Understanding SIP vs Lump Sum Investment</CardTitle>
              <CardDescription>
                Learn the differences between Systematic Investment Plans and lump sum investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>3 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RK Finance</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Tax Planning</Badge>
              <CardTitle className="text-xl">Tax-Saving Investment Options for FY 2024-25</CardTitle>
              <CardDescription>
                Discover the best tax-saving investment options to reduce your tax liability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RK Finance</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Portfolio</Badge>
              <CardTitle className="text-xl">How to Rebalance Your Investment Portfolio</CardTitle>
              <CardDescription>
                Learn when and how to rebalance your portfolio for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RK Finance</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Retirement</Badge>
              <CardTitle className="text-xl">Planning for Retirement: Start Early, Retire Rich</CardTitle>
              <CardDescription>
                Essential strategies for building a retirement corpus through systematic investing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>7 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RK Finance</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Market</Badge>
              <CardTitle className="text-xl">Understanding Market Volatility</CardTitle>
              <CardDescription>
                How to stay calm and make informed decisions during market fluctuations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RK Finance</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Education</Badge>
              <CardTitle className="text-xl">Investing in Your Child's Education</CardTitle>
              <CardDescription>
                Smart investment strategies to fund your child's higher education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>RK Finance</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};
