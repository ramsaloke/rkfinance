import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, Target, DollarSign, Calendar, BarChart3 } from 'lucide-react';

export const SIPCalculator: React.FC = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  // Calculate SIP results
  const totalInvestment = monthlyAmount * 12 * years;
  const totalValue = monthlyAmount * (((Math.pow(1 + expectedReturn / 100, years) - 1) / (expectedReturn / 100)) * (1 + expectedReturn / 100));
  const totalGains = totalValue - totalInvestment;

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SIP Calculator
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Plan your Systematic Investment Plan and see how your money can grow over time with compound interest
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Input */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Calculate Your SIP
              </CardTitle>
              <CardDescription>
                Enter your investment details to see the projected returns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthlyAmount">Monthly Investment Amount (₹)</Label>
                <Input
                  id="monthlyAmount"
                  type="number"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  placeholder="Enter monthly amount"
                  className="text-lg"
                />
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMonthlyAmount(5000)}
                  >
                    ₹5,000
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMonthlyAmount(10000)}
                  >
                    ₹10,000
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMonthlyAmount(25000)}
                  >
                    ₹25,000
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMonthlyAmount(50000)}
                  >
                    ₹50,000
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="years">Investment Period (Years)</Label>
                <Input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  placeholder="Enter years"
                  className="text-lg"
                />
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setYears(5)}
                  >
                    5 Years
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setYears(10)}
                  >
                    10 Years
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setYears(15)}
                  >
                    15 Years
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setYears(20)}
                  >
                    20 Years
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                <Input
                  id="expectedReturn"
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  placeholder="Enter expected return"
                  className="text-lg"
                />
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpectedReturn(8)}
                  >
                    8%
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpectedReturn(10)}
                  >
                    10%
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpectedReturn(12)}
                  >
                    12%
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpectedReturn(15)}
                  >
                    15%
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 text-lg font-semibold">
                Calculate Returns
              </Button>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Total Investment */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Total Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-900 mb-2">
                    ₹{totalInvestment.toLocaleString('en-IN')}
                  </p>
                  <p className="text-blue-700">
                    ₹{monthlyAmount.toLocaleString('en-IN')} × {years * 12} months
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Total Value */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-900 mb-2">
                    ₹{totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-green-700">
                    After {years} years at {expectedReturn}% return
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Total Gains */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900">Total Gains</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-900 mb-2">
                    ₹{totalGains.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-purple-700">
                    {((totalGains / totalInvestment) * 100).toFixed(1)}% of your investment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Investment Breakdown */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Investment Breakdown</CardTitle>
                <CardDescription>Visual representation of your investment vs returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Your Investment</span>
                      <span className="text-sm text-slate-600">
                        {((totalInvestment / totalValue) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress 
                      value={(totalInvestment / totalValue) * 100} 
                      className="h-3 bg-slate-200"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Returns Earned</span>
                      <span className="text-sm text-slate-600">
                        {((totalGains / totalValue) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress 
                      value={(totalGains / totalValue) * 100} 
                      className="h-3 bg-green-200"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-20">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Choose SIP?</CardTitle>
              <CardDescription>
                Systematic Investment Plans offer several advantages for long-term wealth creation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Rupee Cost Averaging</h3>
                  <p className="text-slate-600">
                    Buy more units when prices are low and fewer when prices are high
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Discipline</h3>
                  <p className="text-slate-600">
                    Regular investing helps build financial discipline and long-term wealth
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Compound Growth</h3>
                  <p className="text-slate-600">
                    Benefit from the power of compounding over the long term
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your SIP Journey?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get personalized investment advice and start building wealth systematically with our expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Book Consultation
                </Button>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
