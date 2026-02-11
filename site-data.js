export const SITE = {
  name: "Your Name",
  roleKicker: "Gameplay • Tools • Tech Art",
  headline: "Game Developer (Graduate)",
  bio: "I build systems-first games and clean tools. I love tight feel, readable code, and shipping.",
  quickPills: ["C++", "Unity/C#", "Unreal", "Shaders", "AI", "Tools"],

  links: {
    resume: { label: "Resume", url: "https://example.com/resume.pdf" },
    github: { label: "GitHub", url: "https://github.com/yourname" },
    itch: { label: "itch.io", url: "https://yourname.itch.io" },
    linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/yourname" }
  },

  highlights: [
    "Shipped 3 game jam titles, 1 featured by <event/org>",
    "Built a Unity editor tool that cut level setup time by ~40%",
    "Focused on performance: reduced frame time from 18ms → 11ms on mid-tier GPU"
  ],

  about: {
    text: "I focus on gameplay programming, performance, and tools that make teams faster.",
    bullets: [
      "I like: feel, responsiveness, readable architecture, profiling",
      "I’m learning: networking, ECS patterns, rendering pipelines",
      "I’m looking for: gameplay / tools / engine-adjacent roles"
    ]
  },

  skills: [
    { group: "Languages", items: ["C++", "C#", "Python", "HLSL/GLSL"] },
    { group: "Engines", items: ["Unity", "Unreal", "Godot (basic)"] },
    { group: "Systems", items: ["Gameplay", "AI", "Physics", "UI", "Tools"] },
    { group: "Workflow", items: ["Git", "Perforce (basic)", "Jira", "CI basics"] }
  ],

  experience: [
    {
      title: "Gameplay Programmer Intern — Studio Name",
      date: "Jun 2025 – Aug 2025",
      details: "Implemented combat abilities, debug tooling, and performance profiling; collaborated with designers daily."
    },
    {
      title: "BSc / BEng in Game Dev / CS — University",
      date: "2022 – 2026",
      details: "Modules: graphics, AI, networking, software engineering. Final project: <your capstone>."
    }
  ],

  projects: [
    {
      title: "Project Name (Best One)",
      blurb: "A tight 3D action prototype focusing on movement feel and readable combat.",
      role: "Gameplay programmer",
      time: "8 weeks",
      tags: ["Unity", "C#", "State Machines", "Cinemachine"],
      thumbnailText: "Drop a GIF / screenshot here",
      links: [
        { label: "Playable", url: "https://yourgame.itch.io/project" },
        { label: "Code", url: "https://github.com/yourname/project" },
        { label: "Video", url: "https://www.youtube.com/watch?v=xxxxx" }
      ]
    }
  ],

  contact: {
    email: "you@example.com",
    availability: "Open to graduate roles • Dublin / Remote",
    extraLinks: [
      { label: "Portfolio PDF", url: "https://example.com/portfolio.pdf" },
      { label: "ArtStation", url: "https://artstation.com/yourname" }
    ]
  },

  nav: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ]
};
