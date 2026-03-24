export const projects = [
  {
    id: "5",
    name: "WithHomeTaste",
    title: "With Home Taste",
    category: "Mobile App",
    year: "2025–2026",
    role: "Solo Developer & Designer",
    tech: ["React Native", "Expo", "Supabase", "Edge Functions", "OpenAI API"],
    projectimg: "/media/projects/WithHomeTaste/wht_mockup.jpg",
    description:
      "A full-stack mobile recipe app built with React Native, Expo, and Supabase. Users can grow their personal recipe collection by scanning a cookbook page, importing from any URL, or adding manually — all powered by AI that extracts ingredients, steps, and metadata automatically.",
    mockup: "/media/projects/WithHomeTaste/wht_home_mockup.jpg",
    url: "https://withhometaste.vercel.app/",
    github: "",
    sections: [
      {
        image: "/media/projects/WithHomeTaste/wht_recipe_list_mockup.jpg",
        text: "The recipe collection is designed to feel personal and intuitive. Users can browse, search by name, or filter by favorites. Each card displays the photo, category, cooking time, and ingredient count at a glance — making it easy to decide what to cook.",
      },
      {
        image: "/media/projects/WithHomeTaste/wht_add_recipe_mockup.jpg",
        text: "Adding recipes is where the app shines. Users can snap a photo of a cookbook page and let AI extract the full recipe, paste a URL to import from any recipe site, or type it in manually. The AI handles all the heavy lifting — parsing ingredients, steps, and metadata in seconds.",
      },
      {
        image: "/media/projects/WithHomeTaste/wht_shopping_list_mockup.jpg",
        text: "A built-in shopping list connects directly to the recipe collection. Users can add all ingredients from a recipe with one tap, check items off while at the store, and add custom items. The goal was to make the journey from choosing a recipe to buying the ingredients completely seamless.",
      },
    ],
  },
  {
    id: "2",
    name: "Sleepy-Baby",
    title: "Sleepy Baby",
    category: "Browser Game",
    year: "2022",
    role: "Solo Developer & Illustrator",
    tech: ["JavaScript", "CSS Animations", "Adobe Illustrator"],
    projectimg: "/media/projects/Sleepy_Baby/mockup_new.webp",
    description:
      "An interactive browser game built entirely from scratch — concept, design, illustrations, and code. The player must put a baby to sleep by clicking helpful objects while avoiding the ones that keep it awake. Score 10 points before time runs out to win.",
    mockup: "/media/projects/Sleepy_Baby/mockup_new.webp",
    url: "https://sleepy-baby-game.netlify.app/",
    github: "",
    sections: [
      {
        image: "/media/projects/Sleepy_Baby/sleepy_baby_game_predesign.webp",
        text: "This was my first JavaScript project, and I owned every layer of it: game logic built with state machines and activity diagrams, every visual element hand-drawn in Adobe Illustrator, and all animations implemented in pure CSS. The game's tone of voice guided every design decision — from color choices to typography.",
      },
      {
        image: "/media/projects/Sleepy_Baby/sleepy_baby_style_tile.webp",
        text: "The project combined multiple disciplines: custom illustration in Adobe Illustrator, CSS animations for game feedback, vanilla JavaScript for game logic, and UI/UX principles like Gestalt Laws and color theory to create an intuitive, playful interface.",
      },
      {
        image: "/media/projects/Sleepy_Baby/sleepy_baby_win_screen.webp",
        text: "I designed and built everything end-to-end — from initial sketches and character design to the final animated screens. Each game state (playing, winning, losing) has its own visual treatment, giving the player clear, engaging feedback throughout the experience.",
      },
    ],
  },
  {
    id: "6",
    name: "Cosmo-Festival",
    title: "Cosmo Festival",
    category: "Web App",
    year: "2022",
    role: "Developer (Team of 4)",
    tech: ["Next.js", "React", "CSS", "REST API", "Supabase"],
    projectimg: "/media/projects/Cosmo_Festival/mockup_new.png",
    description:
      "A full-stack festival booking app. Browse the lineup across three stages, filter by day or genre, explore band details, and complete a full ticket booking flow with accommodation, tent rental, and checkout.",
    mockup: "/media/projects/Cosmo_Festival/mockup_new.png",
    url: "https://cosmosfestival.netlify.app/",
    github: "https://github.com/KarinaValens/cosmos-festival",
    sections: [
      {
        image: "/media/projects/Cosmo_Festival/schedule_new.png",
        text: "The schedule viewer displays acts across three Norse-themed stages — Midgard, Vanaheim, and Jotunheim — with day filtering and band search. Each act links to a detail page with bio, members, and genre.",
      },
      {
        image: "/media/projects/Cosmo_Festival/booking_new.png",
        text: "The booking flow lets users pick regular or VIP tickets, choose from five camping areas with real-time availability, and optionally rent tents. A dynamic shopping cart calculates totals including booking fees.",
      },
      {
        image: "/media/projects/Cosmo_Festival/checkout_new.png",
        text: "After confirming a reservation, a 5-minute countdown timer starts. Users fill in ticket holder info, then proceed to payment. The entire checkout state is managed through React Context.",
      },
    ],
  },
  {
    id: "7",
    name: "Better-Sites",
    title: "Better Sites",
    category: "Business Website",
    year: "2023",
    role: "Solo Developer & Designer",
    tech: ["Next.js", "React", "Framer Motion", "Mailchimp", "REST API"],
    projectimg: "/media/projects/Better_Sites/mockup_new.png",
    description:
      "A marketing website for a web design agency offering fully managed website subscriptions. Features animated UI, tiered pricing with checkout, a portfolio showcase, and newsletter integration.",
    mockup: "/media/projects/Better_Sites/mockup_new.png",
    url: "https://bettersites.netlify.app/",
    github: "https://github.com/KarinaValens/better-sites",
    sections: [
      {
        image: "/media/projects/Better_Sites/services_new.png",
        text: "The services page features animated cards with hover effects built in Framer Motion, showcasing what the agency offers — from hassle-free hosting to SEO optimization and conversion-focused design.",
      },
      {
        image: "/media/projects/Better_Sites/pricing_new.png",
        text: "Three pricing tiers (Basic, Popular, Pro) with a full checkout flow. Users select a package, fill in payment details, and receive an order confirmation — all managed through React Context state.",
      },
      {
        image: "/media/projects/Better_Sites/process_new.png",
        text: "A 7-step visual walkthrough explaining the onboarding process — from sign-up to launch. Each step includes descriptive text and imagery to set client expectations.",
      },
    ],
  },
  {
    id: "8",
    name: "Internship-Logbook",
    title: "Internship Logbook",
    category: "Web App",
    year: "2023",
    role: "Solo Developer",
    tech: ["Next.js", "React", "REST API", "Restdb.io"],
    projectimg: "/media/projects/Internship_Logbook/mockup_new.png",
    description:
      "A web app documenting daily activities during my 10-week internship at SINOLAB, where I developed the DANGDI social media app using FlutterFlow. Built to present my work to KEA examiners in an interactive format.",
    mockup: "/media/projects/Internship_Logbook/mockup_new.png",
    url: "https://intership-logbook.vercel.app/",
    github: "https://github.com/KarinaValens/intership_logbook",
    sections: [
      {
        image: "/media/projects/Internship_Logbook/entries_new.png",
        text: "Daily entries are organized by month in a calendar view. Each entry includes activities, achievements, challenges, images, and source links — providing a complete picture of every day at the internship.",
      },
      {
        image: "/media/projects/Internship_Logbook/entries_new.png",
        text: "Individual entry pages break down the day into structured sections with an image carousel, making it easy for examiners to follow the progression of work throughout the internship.",
      },
    ],
  },
  {
    id: "3",
    name: "Solomon-Sound-Therapy",
    title: "Solomon Sound Therapy",
    category: "Client Website",
    year: "2022",
    role: "Developer & Designer (Team of 4)",
    tech: ["HTML", "CSS", "JavaScript", "REST API", "Restdb.io"],
    projectimg: "/media/projects/Solomon_Sound_Therapy/mockup_new.webp",
    description:
      "A client project building a professional online presence for a sound therapy business. Our team researched the niche, redesigned the brand identity, and delivered a website, social media guide, and design system — all tailored to attract and convert the right audience.",
    mockup: "/media/projects/Solomon_Sound_Therapy/mockup_new.webp",
    url: "https://karinavalens.github.io/Solomon-Sound-Therapy-Website/",
    github: "",
    sections: [
      {
        image: "/media/projects/Solomon_Sound_Therapy/image2_new.webp",
        text: "I was involved in every phase — from initial research and business analysis to design and development. We studied the client's niche, analyzed competitor websites, identified design trends, and defined the brand's tone of voice to ensure the final product resonated with their target audience.",
      },
      {
        image: "/media/projects/Solomon_Sound_Therapy/image3_new.webp",
        text: "The redesign was driven by extensive research: social media trends, color palette analysis, design benchmarking, and marketing strategy. We delivered three key assets — a fully coded website, a social media content guide, and a comprehensive design system.",
      },
      {
        image: "/media/projects/Solomon_Sound_Therapy/Solomon_Sound_Therapy_considerations.webp",
        text: "The products section is powered by a REST API, pulling data dynamically from a custom database built on Restdb.io. This allowed the client to update their offerings without touching the code.",
      },
    ],
  },
  {
    id: "4",
    name: "Hack-Hogwarts-Student-List",
    title: "Hack Hogwarts Student List",
    category: "Web App",
    year: "2022",
    role: "Solo Developer",
    tech: ["JavaScript", "REST API", "CSS", "HTML"],
    projectimg: "/media/projects/Hack_Hogwarts_Student_list/mockup_new.webp",
    description:
      "A data-driven web app that fetches Hogwarts student data from a REST API and lets users sort, filter, search, and manage the list — with a hidden hacking feature that injects chaos when you press Delete.",
    mockup: "/media/projects/Hack_Hogwarts_Student_list/mockup_new.webp",
    url: "https://karinavalens.github.io/Hacked_Hogwarts_Student_List",
    github: "",
    sections: [
      {
        image: "/media/projects/Hack_Hogwarts_Student_list/image2_new.webp",
        text: "The interface was designed to match the Harry Potter universe. I used \"Aladin\" for titles to echo the franchise's aesthetic, \"Cormorant Garamond\" for interactive elements, and each Hogwarts house got its signature colors. The table layout was a deliberate choice — it makes sorting, filtering, and managing prefects and blood status feel natural.",
      },
      {
        image: "/media/projects/Hack_Hogwarts_Student_list/image3_new.webp",
        text: "The hidden hack feature is triggered by pressing Delete. Once activated, my own profile gets injected into the student list (and can't be expelled), squad members start disappearing, and blood statuses are randomized. Reload the page to restore order.",
      },
      {
        image: "/media/projects/Hack_Hogwarts_Student_list/image3_new.webp",
        text: "Animations provide visual feedback throughout — when a student is expelled, their row animates out of the list. Pop-up modals communicate state changes clearly, keeping the user informed as the data shifts beneath them.",
      },
    ],
  },
];
