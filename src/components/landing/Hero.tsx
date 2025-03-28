import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
  onLogin?: () => void;
}

const Hero = ({ onGetStarted = () => {}, onLogin = () => {} }: HeroProps) => {
  return (
    <div className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Split Bills Effortlessly with Friends
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Our modern bill splitting system makes it easy to track
                expenses, manage payments, and settle debts with friends,
                family, or roommates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={onGetStarted} size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button onClick={onLogin} variant="outline" size="lg">
                Login
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="People splitting a bill"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6 z-20">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs mx-auto">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">
                      Dinner with Friends
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Total: $120.00
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-primary/10 p-2 rounded">
                        <p className="font-medium">Alex</p>
                        <p>$40.00</p>
                      </div>
                      <div className="bg-primary/10 p-2 rounded">
                        <p className="font-medium">Jamie</p>
                        <p>$40.00</p>
                      </div>
                      <div className="bg-primary/10 p-2 rounded">
                        <p className="font-medium">Taylor</p>
                        <p>$40.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
