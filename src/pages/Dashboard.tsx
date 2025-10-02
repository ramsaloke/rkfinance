import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, DollarSign, Target, Calendar, BarChart3, Users, Shield } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John! 👋</h1>
          <p className="text-slate-600">Here's an overview of your investment portfolio and upcoming consultations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-slate-900">₹12,45,000</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600">+12.5%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Monthly SIP</p>
                  <p className="text-2xl font-bold text-slate-900">₹25,000</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-600">Active</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Next Review</p>
                  <p className="text-2xl font-bold text-slate-900">15 Mar</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Calendar className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-orange-600">5 days</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Risk Score</p>
                  <p className="text-2xl font-bold text-slate-900">7/10</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Shield className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-purple-600">Moderate</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Portfolio Overview</CardTitle>
                <CardDescription>Your current investment allocation and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Equity Funds</span>
                      <span className="text-sm text-slate-600">₹8,50,000 (68%)</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Debt Funds</span>
                      <span className="text-sm text-slate-600">₹2,95,000 (24%)</span>
                    </div>
                    <Progress value={24} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Gold Funds</span>
                      <span className="text-sm text-slate-600">₹1,00,000 (8%)</span>
                    </div>
                    <Progress value={8} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>Your latest investment transactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">SIP Investment</p>
                        <p className="text-sm text-slate-600">HDFC Mid-Cap Opportunities Fund</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+₹5,000</p>
                      <p className="text-sm text-slate-500">Today</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Portfolio Review</p>
                        <p className="text-sm text-slate-600">Monthly performance analysis</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-blue-600">Completed</p>
                      <p className="text-sm text-slate-500">2 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Goal Update</p>
                        <p className="text-sm text-slate-600">Retirement corpus target adjusted</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-purple-600">Updated</p>
                      <p className="text-sm text-slate-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Set New Goal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Portfolio Review
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Contact Advisor
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-slate-900">Portfolio Review</p>
                      <p className="text-sm text-slate-600">15 Mar, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-slate-900">SIP Due</p>
                      <p className="text-sm text-slate-600">20 Mar, Auto-debit</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">This Month</span>
                    <span className="text-sm font-medium text-green-600">+8.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Last 3 Months</span>
                    <span className="text-sm font-medium text-green-600">+15.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Last 6 Months</span>
                    <span className="text-sm font-medium text-green-600">+22.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">This Year</span>
                    <span className="text-sm font-medium text-green-600">+18.9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
