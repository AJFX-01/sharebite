import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { LoginFormData } from '../../types';

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: ""
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    // console.log('Login:', { email, password });
    // For demo purposes, navigate to donor dashboard
    // navigate('/donor');
  };

  return (
    <Card className="w-full max-w-md mx-auto my-auto">
      <CardHeader>
        <CardTitle style={{ textAlign: 'left'}}>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;

