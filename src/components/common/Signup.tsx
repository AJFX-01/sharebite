import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { SigupFormData } from '../../types';

const SignupForm = () => {
  const [formData, setFornData] = useState<SigupFormData>({
    username: '',
    firstname: "",
    lastname: '',
    email: "",
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    const { name, value } = e.target;

    setFornData((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    // console.log('Register:', { name, email, password });
    // For demo purposes, navigate to login page
    // navigate('/');
  };

  return (
    <div className='flex flex-col items-center'>
      <Card className="w-full max-w-md mx-auto my-auto h-fit items-center">
        <CardHeader>
          <CardTitle style={{ textAlign: 'left', fontSize: 14}}>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="firstname">Username</Label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
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
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;

