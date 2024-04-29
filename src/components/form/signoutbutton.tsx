"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const SignoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      toast.success("Logout Successfully")
    } catch (error) {
      // Handle sign-out error
      console.error("Sign-out failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-white text-black hover:bg-indigo-600 hover:text-white">
          Sign Out
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will log out your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>No</Button>
          <Button
            onClick={handleSignOut}
            className="bg-red-500"
            disabled={isLoading}
          >
            {isLoading ? "Signing out..." : "Sign out"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignoutButton;
