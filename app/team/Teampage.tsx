import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Crown, User } from "lucide-react";

// Board members data
const boardMembers = [
  { name: "Board Member 1", role: "President" },
  { name: "Board Member 2", role: "Vice President" },
  { name: "Board Member 3", role: "General Secretary" },
  { name: "Board Member 4", role: "Treasurer" },
];

// Tech team data
const techTeam = [
  { name: "Tech Lead", role: "Lead" },
  { name: "Frontend Dev", role: "Frontend" },
  { name: "Backend Dev", role: "Backend" },
  { name: "AIML", role: "AIML" },
];

// Other departments data
const otherDepts = [
  { name: "Design", role: "Designer" },
  { name: "Marketing", role: "Marketer" },
  { name: "Content and Social Media", role: "Content & Social" },
];

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: "border-blue-500/30 hover:border-blue-500/50 text-blue-400",
    green: "border-green-500/30 hover:border-green-500/50 text-green-400",
    purple: "border-purple-500/30 hover:border-purple-500/50 text-purple-400",
    pink: "border-pink-500/30 hover:border-pink-500/50 text-pink-400",
    yellow: "border-yellow-500/30 hover:border-yellow-500/50 text-yellow-400",
    orange: "border-orange-500/30 hover:border-orange-500/50 text-orange-400",
    cyan: "border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400",
    red: "border-red-500/30 hover:border-red-500/50 text-red-400",
    indigo: "border-indigo-500/30 hover:border-indigo-500/50 text-indigo-400",
  };
  return colorMap[color] || "border-primary/30 hover:border-primary/50 text-primary";
};

export default function TeamPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* Board Section */}
      <section>
        <div className="flex items-center justify-center mb-6">
          <Crown className="h-6 w-6 text-yellow-500 mr-2" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Board Members
          </span>
        </div>
        {/* The existing grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 is already great for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {boardMembers.map((member, i) => (
            <Card
              key={i}
              className="bg-[rgba(15,15,35,0.7)] backdrop-blur-md border-primary/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
            >
              <CardHeader>
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center font-semibold text-white text-sm mb-1">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-center text-xs text-primary">
                  {member.role}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Team Section */}
      <section>
        <div className="flex justify-center items-center mb-6">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
            Tech Team
          </span>
        </div>
        {/* Adjusted for better responsiveness */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Top row: Tech Lead centered */}
          <div className="flex justify-center">
            <Card className="w-64 bg-[rgba(15,15,35,0.7)] backdrop-blur-md border-blue-500/30 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              <CardHeader>
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <div className="w-full h-full bg-blue-500/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <CardTitle className="text-center font-semibold text-white text-sm mb-1">
                  {techTeam[0].name}
                </CardTitle>
                <CardDescription className="text-center text-xs text-blue-400">
                  {techTeam[0].role}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Bottom row: Frontend, Backend, AIML */}
          {/* Added flex-wrap and responsive grid for smaller screens */}
          <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-3">
            {techTeam.slice(1).map((member, i) => (
              <Card
                key={i}
                className={`w-64 bg-[rgba(15,15,35,0.7)] backdrop-blur-md ${getColorClasses(['green', 'purple', 'pink'][i])} hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all`}
              >
                <CardHeader>
                  <div className="relative w-16 h-16 mx-auto mb-3">
                    <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-semibold text-white text-sm mb-1">
                    {member.name}
                  </CardTitle>
                  <CardDescription className={`text-center text-xs ${['text-green-400', 'text-purple-400', 'text-pink-400'][i]}`}>
                    {member.role}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Depts Section */}
      <section>
        <div className="flex justify-center items-center mb-6">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Other Departments
          </span>
        </div>
        {/* Adjusted grid to be more flexible on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {otherDepts.map((dept, i) => (
            <Card
              key={i}
              className={`w-64 bg-[rgba(15,15,35,0.7)] backdrop-blur-md ${getColorClasses(['orange', 'cyan', 'indigo'][i])} hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all`}
            >
              <CardHeader>
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center font-semibold text-white text-sm mb-1">
                  {dept.name}
                </CardTitle>
                <CardDescription className={`text-center text-xs ${['text-orange-400', 'text-cyan-400', 'text-indigo-400'][i]}`}>
                  {dept.role}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}