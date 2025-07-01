import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Adjust the import path if needed

// Board members data
const boardMembers = [
  { name: "Board Member 1", role: "President" },
  { name: "Board Member 2", role: "Vice President" },
  { name: "Board Member 3", role: "General Secretary" }, // Changed here
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
  { name: "Content and Social Media", role: "Content & Social" }, // Added here
];

export default function TeamPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* Board Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-xl">Board</span>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {boardMembers.map((member, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Team Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-xl">Tech Team</span>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Top row: Tech Lead centered */}
          <div className="flex justify-center">
            <Card className="w-64">
              <CardHeader>
                <CardTitle>{techTeam[0].name}</CardTitle>
                <CardDescription>{techTeam[0].role}</CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Bottom row: Frontend, Backend, AIML */}
          <div className="flex justify-center gap-6">
            <Card className="w-64">
              <CardHeader>
                <CardTitle>{techTeam[1].name}</CardTitle>
                <CardDescription>{techTeam[1].role}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-64">
              <CardHeader>
                <CardTitle>{techTeam[2].name}</CardTitle>
                <CardDescription>{techTeam[2].role}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-64">
              <CardHeader>
                <CardTitle>{techTeam[3].name}</CardTitle>
                <CardDescription>{techTeam[3].role}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Depts Section */}
      <section>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-xl">Other depts</span>
        </div>
        <div className="flex justify-center gap-6">
          {otherDepts.map((dept, i) => (
            <Card key={i} className="w-64">
              <CardHeader>
                <CardTitle>{dept.name}</CardTitle>
                <CardDescription>{dept.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
