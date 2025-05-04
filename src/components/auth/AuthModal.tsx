
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Google, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type AuthStep = "login" | "signup" | "verify-email" | "verify-phone";

const AuthModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [authStep, setAuthStep] = useState<AuthStep>("login");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [phoneVerificationCode, setPhoneVerificationCode] = useState("");
  
  const tabsRef = useRef<"login" | "signup">("login");
  
  const handleTabChange = (value: string) => {
    tabsRef.current = value as "login" | "signup";
    setAuthStep(value as AuthStep);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    // Send verification codes to email and phone
    // In a real app, this would be an API call
    console.log("Sending verification code to email:", email);
    console.log("Sending verification code to phone:", phone);
    
    // Move to verification step
    setAuthStep("verify-email");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would authenticate with your backend
    console.log("Logging in with", email, password);
    
    toast({
      title: "Success",
      description: "You have been logged in successfully",
    });
    
    onOpenChange(false);
  };

  const handleEmailVerification = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailVerificationCode) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive"
      });
      return;
    }

    // In a real app, verify the code with your backend
    console.log("Verifying email code:", emailVerificationCode);
    
    // Move to phone verification step
    setAuthStep("verify-phone");
  };

  const handlePhoneVerification = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneVerificationCode) {
      toast({
        title: "Error",
        description: "Please enter the verification code",
        variant: "destructive"
      });
      return;
    }

    // In a real app, verify the code with your backend
    console.log("Verifying phone code:", phoneVerificationCode);
    
    toast({
      title: "Success",
      description: "Your account has been created successfully",
    });
    
    // Reset state and close modal
    setAuthStep("login");
    onOpenChange(false);
  };

  const handleGoogleSignIn = () => {
    // In a real app, this would open Google OAuth flow
    console.log("Signing in with Google");
    
    toast({
      title: "Google Sign-In",
      description: "This would integrate with Google OAuth in a production app",
    });
  };

  const renderVerificationStep = () => {
    if (authStep === "verify-email") {
      return (
        <form onSubmit={handleEmailVerification} className="space-y-4 py-4">
          <DialogHeader>
            <DialogTitle>Verify Email</DialogTitle>
            <DialogDescription>
              We've sent a verification code to your email: {email}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-2">
            <Label htmlFor="email-code">Email Verification Code</Label>
            <Input
              id="email-code"
              placeholder="Enter verification code"
              value={emailVerificationCode}
              onChange={(e) => setEmailVerificationCode(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Verify Email</Button>
          
          <div className="text-center">
            <Button 
              variant="link" 
              type="button" 
              onClick={() => setAuthStep(tabsRef.current)}
              className="text-sm"
            >
              Back to {tabsRef.current}
            </Button>
          </div>
        </form>
      );
    } else if (authStep === "verify-phone") {
      return (
        <form onSubmit={handlePhoneVerification} className="space-y-4 py-4">
          <DialogHeader>
            <DialogTitle>Verify Phone</DialogTitle>
            <DialogDescription>
              We've sent a verification code to your phone: {phone}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-2">
            <Label htmlFor="phone-code">Phone Verification Code</Label>
            <Input
              id="phone-code"
              placeholder="Enter verification code"
              value={phoneVerificationCode}
              onChange={(e) => setPhoneVerificationCode(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Verify Phone</Button>
          
          <div className="text-center">
            <Button 
              variant="link" 
              type="button" 
              onClick={() => setAuthStep(tabsRef.current)}
              className="text-sm"
            >
              Back to {tabsRef.current}
            </Button>
          </div>
        </form>
      );
    }
    return null;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {authStep === "login" || authStep === "signup" ? (
          <Tabs defaultValue="login" value={authStep} onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 py-4">
                <DialogHeader>
                  <DialogTitle>Login to your account</DialogTitle>
                  <DialogDescription>
                    Enter your email and password to login
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="login-email"
                      placeholder="you@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <Button variant="link" type="button" className="text-xs p-0 h-auto">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Login</Button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleGoogleSignIn}
                  className="w-full"
                >
                  <Google className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4 py-4">
                <DialogHeader>
                  <DialogTitle>Create an account</DialogTitle>
                  <DialogDescription>
                    Enter your details to create a new account
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="signup-email"
                      placeholder="you@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Sign Up</Button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleGoogleSignIn}
                  className="w-full"
                >
                  <Google className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        ) : (
          renderVerificationStep()
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
