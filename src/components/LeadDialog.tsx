import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LeadDialog({ open, onOpenChange }: LeadDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    const subject = encodeURIComponent("LOBA Online Academy - Early Access");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nThis person wants to be notified when the Online Academy launches and receive a 25% discount.`
    );
    window.open(`mailto:lobasurf@gmail.com?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
  };

  const handleClose = (value: boolean) => {
    onOpenChange(value);
    if (!value) {
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Thank you for reaching out!</DialogTitle>
              <DialogDescription className="mt-3 text-base">
                Your email has been received. We will get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => handleClose(false)}
              className="mt-8 bg-secondary text-secondary-foreground hover:opacity-90"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">🚧 Under Construction</DialogTitle>
              <DialogDescription className="mt-2 text-base leading-relaxed">
                The Online Academy is under construction. Want to get informed when it is launched and get a <span className="font-semibold text-foreground">25% discount</span>?
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:opacity-90">
                Get Early Access
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
