import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, Users, Share2, Settings } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description = "Feature description",
}: FeatureCardProps) => {
  return (
    <Card className="h-full bg-white dark:bg-gray-800 transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

interface FeatureShowcaseProps {
  className?: string;
}

const FeatureShowcase = ({ className }: FeatureShowcaseProps = {}) => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Bill Creation",
      description:
        "Create and manage bills with ease. Add expenses, track payments, and see who owes what at a glance.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expense Tracking",
      description:
        "Split expenses equally or customize amounts for each participant. Keep track of who paid what and current balances.",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Sharing System",
      description:
        "Generate unique invitation codes to add registered users or invite guests with limited access to your bills.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "User Management",
      description:
        "Manage your account, upgrade your tier, and customize your experience with our comprehensive settings.",
    },
  ];

  return (
    <section
      className={cn("py-16 px-4 bg-gray-50 dark:bg-gray-900", className)}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Key Features
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Our bill splitting system offers powerful tools to make expense
            sharing simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
