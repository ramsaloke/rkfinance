import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, Eye, EyeOff, Shield } from 'lucide-react';

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-slate-600 mt-2">Sign in to your RK Finance account</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Access your investment portfolio and financial insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="Enter your password" 
                    className="pl-10 pr-10"
                  />
                  <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 cursor-pointer" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">Remember me</Label>
                </div>
                <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                  Forgot password?
                </Button>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 text-lg font-semibold">
                Sign In
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-slate-600">
                  Don't have an account?{' '}
                  <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                    Sign up
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              By signing in, you agree to our{' '}
              <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm">
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm">
                Privacy Policy
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
