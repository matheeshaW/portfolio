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
        {
          name: 'Android Studio',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        },
        {
          name: 'Kotlin',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
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
        {
          name: 'AWS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        },
        {
          name: 'Spring Boot',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
      ],
    },
    {
      category: 'Programming Languages',
      items: [
        {
          name: 'C',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        },
        {
          name: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'T-SQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
        },
        {
          name: 'R',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
        },
        {
          name: 'PHP',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
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
      image: `${baseUrl}projects/lunarix.jpg`,
      github: 'https://github.com/lunarix-labs/learning-resource-lms',
    },
    {
      title: 'SpiceSense (POS & Inventory)',
      stack: ['MongoDB', 'Express', 'React', 'Node'],
      description:
        'Comprehensive Inventory & Order Management system with financial reporting, automated invoicing, and payment gateways.',
      image: `${baseUrl}projects/spicesense.png`,
      github: 'https://github.com/matheeshaW/spicesense',
    },
    {
      title: 'Custom OpenWRT Router',
      stack: ['Embedded Linux', 'Networking', 'Hardware Modding (UART/TTL)'],
      description:
        'Unlocked a Tozed ZLT S12 Pro by soldering a UART interface and booting the Linux kernel to RAM to bypass stock restrictions.',
      image: `${baseUrl}projects/openwrt.jpg`,
      github: 'https://github.com/matheeshaW/Tozed-S12PRO-Project-DiluWRT-fork',
    },
    {
      title: 'SwapWear',
      stack: ['Flutter', 'Firebase', 'Google Vision API'],
      description:
        'A sustainable fashion marketplace app featuring AI-based image recognition for clothing categorization.',
      image: `${baseUrl}projects/swapwear.jpg`,
      github: 'https://github.com/matheeshaW/swapwear',
    },
    {
      title: 'FixIt Now',
      stack: ['Java Spring Boot', 'React.js', 'MySQL'],
      description:
        'A local service marketplace connecting providers with customers. Features complex scheduling APIs and user role management.',
      image: `${baseUrl}projects/fixitnowlogo.png`, 
      github: 'https://github.com/matheeshaW/FixIt_Now',
    },
    {
      title: 'BudgetLens',
      stack: ['Android (Kotlin)', 'XML', 'Shared Preferences'],
      description:
        'Native Android expense tracker with multi-currency support, real-time spending analysis, and budget alert notifications.',
      image: `${baseUrl}projects/budgetlens.png`, // Rename screenshot to budgetlens.jpg
      github: 'https://github.com/matheeshaW/BudgetLensLabExam3',
    },
    {
      title: 'Cinemafy',
      stack: ['Java (Servlets)', 'MySQL', 'HTML/CSS', 'MVC'],
      description:
        'A movie streaming platform built on MVC architecture, featuring an admin content dashboard and user rating systems.',
      image: `${baseUrl}projects/cinemafy.jpg`, // Rename screenshot to cinemafy.jpg
      github: 'https://github.com/matheeshaW/Cinemafy---OOP-project',
    },
    {
      title: 'Calisthenics Workout Tracker',
      stack: ['Flutter', 'Dart', 'Local Storage'],
      description:
        'A specialized mobile fitness application for tracking bodyweight exercises (reps/sets) with visual progress analytics and workout history logs.',
      image: `${baseUrl}projects/calesthenics.jpg`,
      github: 'https://github.com/matheeshaW/Calisthenics_Workout_Tracker',
    }
  ],
  footerText: '© 2026 Matheesha Weerakoon. Built with React & Vite.',
}
