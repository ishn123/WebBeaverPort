"use client";
import 'swiper/css';
import BeaverCursor from "@/components/BeaverCursor";
import Link from "next/link";

const bgColor = "#8c7b6f";
const primaryText = "#fffaf7"; // Slightly warm white
const secondaryText = "#e5ded8"; // Softer light brown
const hoverShadow = "rgba(255, 250, 247, 0.2)";
// Deep contrast brown

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
        role: "Digital Marketing & SEO",
        bio: "Focused on digital marketing & SEO. 2 years of freelancing experience and sharp eye on analytics and growth hacking.",
        imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Michael"
    },
    {
        id: 4,
        name: "Abhinav Singh",
        role: "UI/UX Designer",
        bio: "Certified UI/UX designer skilled in user research, wireframing, prototyping, and visual design. I design interfaces that feel as good as they look.",
        imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emily"
    }
];

export default function AboutUs() {
    return (
        <section className="py-20 px-6" style={{ backgroundColor: bgColor, color: primaryText }} id="about">
            <BeaverCursor/>
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold">Meet Webeaver</h1>
                <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto" style={{ color: secondaryText }}>
                    We &lsquo;re a high-energy squad of developers, designers, and digital experts building powerful, elegant, and scalable web solutions since 2023.
                </p>
                <Link
                    href="/#projects"
                    className="mt-10 inline-block px-8 py-3 border border-white hover:bg-[#fffaf7] hover:text-[#3a2f28] transition-all duration-300"
                >
                    View Our Projects
                </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-20 max-w-7xl mx-auto">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="p-6 rounded-xl border transition duration-300 hover:scale-105"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            borderColor: "rgba(255, 255, 255, 0.15)",
                            color: primaryText,
                            boxShadow: `0 0 20px ${hoverShadow}`
                        }}
                    >
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-white"
                        />
                        <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                        <p className="text-sm text-center" style={{ color: secondaryText }}>{member.role}</p>
                        <p className="mt-3 text-sm text-center" style={{ color: secondaryText }}>{member.bio}</p>
                    </div>
                ))}
            </div>

            <div className="mt-28 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Founders’ Vision</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div
                        className="p-6 rounded-xl border hover:scale-105 transition duration-300"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.15)",
                            boxShadow: `0 0 15px ${hoverShadow}`
                        }}
                    >
                        <p className="text-lg italic" style={{ color: secondaryText }}>
                            “Webeaver isn’t just about shipping code. It’s about crafting digital experiences that spark.”
                        </p>
                        <p className="text-right text-sm mt-4 text-gray-200">— Ishan Arora</p>
                    </div>
                    <div
                        className="p-6 rounded-xl border hover:scale-105 transition duration-300"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.15)",
                            boxShadow: `0 0 15px ${hoverShadow}`
                        }}
                    >
                        <p className="text-lg italic" style={{ color: secondaryText }}>
                            “We build with clarity, beauty, and scale in mind. Always.”
                        </p>
                        <p className="text-right text-sm mt-4 text-gray-200">— Sanyam Sharma</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

