"use client";
import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface Project {
  thumbnailURL: string;
  youtubeLink: string;
  instagramLink: string;
}

interface ClientProject {
  name: string;
  company: string;
  workDid: string;
  testimonial: string;
  projects: Project[];
}

const ClientPage: React.FC = () => {
  const [client, setClient] = useState<ClientProject | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchClientData() {
      try {
        const res = await fetch("/api/clientProjects/latest"); // Adjust to your GET route
        const json = await res.json();
        if (res.ok) {
          setClient(json.data);
        } else {
          console.error("Fetch error:", json.message);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchClientData();
  }, []);

  if (!client) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading client project...</p>
      </div>
    );
  }

  const setActive = (idx: number) => setActiveIndex(idx);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-10 lg:py-0 lg:flex lg:items-center">
      {/* Left: Projects Carousel */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-6">
          Projects by {client.name}
        </h1>
        {client.projects.length > 0 && (
          <div>
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-6 border-2 border-yellow-400">
              <div className="aspect-[16/9] relative">
                <img
                  src={client.projects[activeIndex].thumbnailURL}
                  alt={`Project thumbnail ${activeIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <a
                  href={client.projects[activeIndex].youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity"
                >
                  <Play className="w-12 h-12 text-yellow-400" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {client.projects.map((proj, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeIndex === idx
                      ? "border-yellow-400 ring-2 ring-yellow-400/50"
                      : "border-gray-600 hover:border-yellow-400"
                  }`}
                >
                  <img
                    src={proj.thumbnailURL}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right: Client Info */}
      <div className="lg:w-1/2 bg-gray-900 p-6 lg:p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-2">{client.name}</h2>
        <p className="text-yellow-400 text-lg font-medium mb-4">{client.company}</p>
        <p className="text-gray-300 mb-6 italic">"{client.workDid}"</p>

        <div className="bg-black p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Testimonial
          </h3>
          <p className="text-gray-300 leading-relaxed">
            "{client.testimonial}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
