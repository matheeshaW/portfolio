const baseUrl = import.meta.env.BASE_URL

export const siteData = {
  name: 'Matheesha Weerakoon',
  title: 'Software Engineering Undergraduate | Full Stack & Mobile Developer',
  bio: "3rd-year undergraduate at SLIIT with a 3.78 CGPA and a passion for bridging the gap between backend logic and intuitive user experiences. Dean's List awardee and scholarship recipient. Experienced in MERN, Laravel, and Embedded Systems.",
  contact: {
    email: 'matheeshaweerakoon22@gmail.com',
    phone: '+94762314089',
  },
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/matheesha-weerakoon-6bb821278/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/matheeshaW',
    },
  ],
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    ctaPrimary: { label: 'View Work', href: '#projects' },
    ctaSecondary: {
      label: 'Download CV',
      href: `${baseUrl}cv/W.M.M.B.-WEERAKOON-CV.pdf`,
    },
    profileImage: `${baseUrl}profile/profilepic1.jpg`,
  },
  skills: [
    {
      category: 'Frontend',
      items: [
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'Tailwind CSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
          name: 'HTML5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
          name: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
      ],
    },
    {
      category: 'Backend',
      items: [
        {
          name: 'Node.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Express',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        },
        {
          name: 'Laravel',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
      ],
    },
    {
      category: 'Mobile',
      items: [
        {
          name: 'Flutter',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        },
        {
          name: 'Firebase',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        {
          name: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          name: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Linux',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        },
      ],
    },
  ],
  projects: [
    {
      title: 'Learning Roadmap Platform',
      stack: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
      description:
        'A full-stack career guidance platform providing structured module-wise resources for engineering students.',
      image: `${baseUrl}projects/project-placeholder.svg`,
      github: 'https://github.com/matheeshaW',
    },
    {
      title: 'SpiceSense (POS & Inventory)',
      stack: ['MongoDB', 'Express', 'React', 'Node'],
      description:
        'Comprehensive Inventory & Order Management system with financial reporting, automated invoicing, and payment gateways.',
      image: `${baseUrl}projects/project-placeholder.svg`,
      github: 'https://github.com/matheeshaW',
    },
    {
      title: 'Custom OpenWRT Router',
      stack: ['Embedded Linux', 'Networking', 'Hardware Modding (UART/TTL)'],
      description:
        'Unlocked a Tozed ZLT S12 Pro by soldering a UART interface and booting the Linux kernel to RAM to bypass stock restrictions.',
      image: `${baseUrl}projects/project-placeholder.svg`,
      github: 'https://github.com/matheeshaW',
    },
    {
      title: 'SwapWear',
      stack: ['Flutter', 'Firebase', 'Google Vision API'],
      description:
        'A sustainable fashion marketplace app featuring AI-based image recognition for clothing categorization.',
      image: `${baseUrl}projects/swapwear.jpg`,
      github: 'https://github.com/matheeshaW/swapwear',
    },
  ],
  footerText: '© 2026 Matheesha Weerakoon. Built with React & Vite.',
}
