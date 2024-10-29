import * as React from 'react'
import { Eye, EyeOff, Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios, { AxiosRequestConfig} from "axios";
import {useAuthStore} from "@/store/authStore.js";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast";


export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const setAuth = useAuthStore((state) => state.setAuth);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const navigate = useNavigate();
    const { toast } = useToast()



    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true);

        console.log('Login submitted')
        try {
            const response = await axios.post('https://server-render-9d8m.onrender.com/auth', null, {
                auth: {
                    username: email,
                    password: password
                },
            } as AxiosRequestConfig);
            const { token, user, refreshToken } = response.data;
            setAuth(token, user, refreshToken);
            navigate('/');
            toast({
                variant: "success",
                title: "Login",
                description: "Login has succeeded",
                duration: 1000,
                action: (
                    <Button variant="ghost" onClick={() => clearAuth() }>
                        Logout
                    </Button>
                ),
            })
        } catch (error) {
            console.error("Error:", error);
            toast({
                variant: "destructive",
                title: "Login",
                description: "Login has failed",
                duration: 1000,
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full">
                            {loading ? (
                                <Loader className="h-4 w-4 mx-auto" style={{ animation: 'spin 2s linear infinite' }}/>
                            ) : (
                                "Sign in"
                            )}
                        </Button>
                        <div className="text-sm text-center">
                            <a
                                href="#"
                                className="text-primary hover:underline"
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log('Forgot password clicked')
                                }}
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}



