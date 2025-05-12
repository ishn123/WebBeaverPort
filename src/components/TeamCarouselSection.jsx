import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    id: 1,
    name: "Ishan Arora",
    role: "Technical Lead",
    bio: "Worked for 2.5 years in IT. Last company was Mercedes. Currently leading technical initiatives with a passion for scalable systems.",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ishan"
  },
  {
    id: 2,
    name: "Sanyam Sharma",
    role: "Technical Lead",
    bio: "Currently working as a software developer with 2 years of freelancing experience. Focused on building high-quality applications.",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sanyam"
  },
  {
    id: 3,
    name: "Kunj Patel",
    role: "Digital Marketing & SEO Optimization",
    bio: "Currently working as a software developer with 2 years of freelancing experience,focused on digital marketing & SEO Optimization",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Michael"
  },
  {
    id: 4,
    name: "Abhinav Singh",
    role: "UI/UX Designer",
    bio: "Certified UI/UX designer, skilled in user research, wireframing, prototyping, and visual design. I combine creativity with usability principles to design interfaces that are both functional and visually engaging.",
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emily"
  },
];

const TeamCarouselSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section id="team" className="section-padding bg-beaver-lightGray overflow-hidden">
      <div className="container">
        <h2 className="section-title gradient-text">Our Team</h2>
        <p className="section-description">
          Meet the talented professionals behind our success. Our diverse team brings together expertise from various disciplines.
        </p>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                >
                  <div
                    className="h-full transform transition-all duration-500"
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <Card className={cn(
                      "h-full flex flex-col items-center text-center p-6 transform transition-all duration-500",
                      hoveredMember === member.id ? "shadow-lg translate-y-[-8px]" : "shadow-md"
                    )}>
                      <Avatar className={cn(
                        "h-32 w-32 mb-6 border-4 transition-transform duration-500",
                        hoveredMember === member.id ? "border-beaver-blue scale-105" : "border-gray-200"
                      )}>
                        <AvatarImage src={member.imageUrl} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>

                      <CardContent className="flex-grow space-y-3 p-0">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className={cn(
                          "text-sm font-medium transition-colors duration-300",
                          hoveredMember === member.id ? "text-beaver-blue" : "text-gray-600"
                        )}>
                          {member.role}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
                      </CardContent>

                      <CardFooter className="pt-4">
                        {/*
                        <div className={cn(
                          "flex space-x-2 opacity-0 transition-opacity duration-300",
                          hoveredMember === member.id ? "opacity-100" : ""
                        )}>
                          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-beaver-blue hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                          </span>
                          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-beaver-blue hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                          </span>
                          <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-beaver-blue hover:text-white transition-colors">
                            <span className="sr-only">Email</span>
                          </span>
                        </div>
                        */}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static hover:bg-beaver-blue hover:text-white transition-colors duration-300" />
              <CarouselNext className="static hover:bg-beaver-blue hover:text-white transition-colors duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamCarouselSection;
