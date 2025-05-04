
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

type AuthStep = "phone" | "verify";

const AuthModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [authStep, setAuthStep] = useState<AuthStep>("phone");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would be an API call to send OTP
    console.log("Sending verification code to phone:", phone);
    toast({
      title: "OTP Sent",
      description: "A verification code has been sent to your phone",
    });
    
    // Move to verification step
    setAuthStep("verify");
  };

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationCode || verificationCode.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit verification code",
        variant: "destructive"
      });
      return;
    }

    // In a real app, verify the code with your backend
    console.log("Verifying code:", verificationCode);
    
    toast({
      title: "Success",
      description: "You have been logged in successfully",
    });
    
    // Reset state and close modal
    setAuthStep("phone");
    onOpenChange(false);
  };

  const renderPhoneStep = () => {
    return (
      <form onSubmit={handlePhoneSubmit} className="space-y-4 py-4">
        <DialogHeader>
          <DialogTitle>Sign in with Phone</DialogTitle>
          <DialogDescription>
            Enter your phone number to receive a verification code
          </DialogDescription>
        </DialogHeader>
        
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
        
        <Button type="submit" className="w-full">Continue</Button>
      </form>
    );
  };

  const renderVerificationStep = () => {
    return (
      <form onSubmit={handleVerification} className="space-y-4 py-4">
        <DialogHeader>
          <DialogTitle>Verify Phone</DialogTitle>
          <DialogDescription>
            We've sent a verification code to your phone: {phone}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-2">
          <Label htmlFor="otp-code">Verification Code</Label>
          <InputOTP 
            maxLength={6} 
            value={verificationCode} 
            onChange={(value) => setVerificationCode(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        
        <Button type="submit" className="w-full">Verify</Button>
        
        <div className="text-center">
          <Button 
            variant="link" 
            type="button" 
            onClick={() => setAuthStep("phone")}
            className="text-sm"
          >
            Back to Phone Entry
          </Button>
        </div>
      </form>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {authStep === "phone" ? renderPhoneStep() : renderVerificationStep()}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
