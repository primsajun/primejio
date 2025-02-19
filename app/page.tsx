"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import React, { useState, FormEvent, ChangeEvent } from 'react'; // Import ChangeEvent


async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
      data[key] = value as string;
  });

  try {
      const response = await fetch("https://formspree.io/f/xvgzdwwd", {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
          alert("Form submitted successfully!");
          event.currentTarget.reset();
      } else {
          console.error("Error response:", result);
          alert(`Error submitting form: ${result.error || "Unknown error"}`);
      }
  } catch (error) {
      console.error("Network error:", error);
      alert("Just Smile!");
  }
}

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-600 hover:text-gray-800">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-gray-800">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-800">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-600 hover:text-gray-800">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/image.png?height=300&width=300"
              alt="Berlin Nimisha Jio"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Berlin Nimisha Jio</h2>
            <p className="text-xl mb-6">Computer Science Engineer</p>
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with Personal Details */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700">
                I'm a passionate Computer Science Engineer with a strong foundation in software development and
                problem-solving. With a degree from Stella Mary's College of Engineering, I've honed my skills in
                various programming languages and technologies. I'm dedicated to creating efficient, scalable, and
                user-friendly solutions to complex problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>nimishajio1703@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+91 7550360748</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>Kanyakumari District, Tamil Nadu</span>
                </li>
                <li className="flex items-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  <a href="https://www.linkedin.com/in/berlinnimishajio1703" className="text-blue-600 hover:underline">
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-center">
                  <Github className="mr-2 h-5 w-5" />
                  <a href="https://github.com/nimishajio" className="text-blue-600 hover:underline">
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">BE in Computer Science</h3>
              <p className="text-gray-600 mb-2">Stella Mary's College of Engineering</p>
              <p className="text-gray-600">Graduating: 2024</p>
              <p className="text-gray-600">CGPA: 7.52</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">HSC (Computer Science)</h3>
              <p className="text-gray-600 mb-2">St. Mary's Matric Higher Secondary School</p>
              <p className="text-gray-600">Completed: 2020</p>
              <p className="text-gray-600">Percentage: 66%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">SSLC</h3>
              <p className="text-gray-600 mb-2">St. Mary's Matric Higher Secondary School</p>
              <p className="text-gray-600">Completed: 2018</p>
              <p className="text-gray-600">Percentage: 82%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Knowledge and Skills</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Programming Languages" skills={["Java", "Python", "C++", "JavaScript"]} />
            <SkillCard title="Web Technologies" skills={["HTML", "CSS", "React", "Node.js"]} />
            <SkillCard title="Databases" skills={["MySQL", "MongoDB", "PostgreSQL"]} />
            <SkillCard title="Tools & Frameworks" skills={["Git", "Docker", "Kubernetes", "TensorFlow"]} />
            <SkillCard title="Soft Skills" skills={["Problem Solving", "Team Collaboration", "Communication"]} />
            <SkillCard title="Other" skills={["Agile Methodologies", "CI/CD", "Cloud Computing (AWS, Azure)"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Online Boating System</h3>
              <p className="text-gray-600 mb-2">Technologies: HTML | CSS | PHP</p>
              <p className="text-gray-700">
                Established a user-friendly interface for users to book Boating tickets specially for Kanyakumari
                District.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Campus Virtual Assistant</h3>
              <p className="text-gray-600 mb-2">Technologies: HTML | CSS | JS | Django | OpenCV | Azure</p>
              <p className="text-gray-700">
                A web-based assistant for college campuses, offering face detection, voice recognition, and navigation
                services to assist visitors and students with their inquiries and navigation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-6">
              Download my resume to learn more about my education, work experience, and projects.
            </p>
            <Button asChild>
  <a href="/berlin-nimisha-jio-resume.pdf" download>
    <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
  </a>
</Button>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                    <div className="max-w-md mx-auto">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name" // Name attribute is ESSENTIAL
                                placeholder="Name"
                                className="w-full p-2 border rounded"
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} // Correct onChange
                                required
                            />
                            <input
                                type="email"
                                name="email" // Name attribute is ESSENTIAL
                                placeholder="Email"
                                className="w-full p-2 border rounded"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} // Correct onChange
                                required
                            />
                            <textarea
                                name="message" // Name attribute is ESSENTIAL
                                placeholder="Message"
                                className="w-full p-2 border rounded h-32"
                                value={message}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} // Correct onChange
                                required
                            ></textarea>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; Berlin Nimisha Jio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 mb-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

