// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "These are a few cool projects I&#39;ve worked on, from hackathons to course assignments!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-the-unheard-voices-in-stem",
        
          title: "The Unheard Voices in STEM",
        
        description: "what a biology class taught me about power, knowledge, and responsibility",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/unheard-voices/";
          
        },
      },{id: "post-my-neurodiverse-superpower",
        
          title: "My Neurodiverse Superpower",
        
        description: "reframing neurodivergence as a strength in science and learning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/neurodiversity/";
          
        },
      },{id: "post-bridging-the-gap-between-ai-ml-healthcare-and-social-justice",
        
          title: "Bridging the Gap Between AI/ML, Healthcare and Social Justice",
        
        description: "how we can build more equitable ai systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-ml-justice/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-won-first-place-at-the-university-of-rochester-biomedical-data-science-hackathon",
          title: 'We won first place at the University of Rochester Biomedical Data Science Hackathon!...',
          description: "",
          section: "News",},{id: "news-i-attended-the-15th-annual-ostem-conference-in-baltimore-md-where-i-was-able-to-network-and-connect-with-lgbtq-professionals-and-presented-a-poster-and-oral-research-presentation-on-my-research-at-the-dye-lab",
          title: 'I attended the 15th Annual oSTEM Conference in Baltimore, MD, where I was...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-on-llm-driven-measurement-of-global-identity-based-oppression-has-been-accepted-to-the-ieee-big-data-2025-special-session-on-intelligent-data-mining",
          title: 'My first-author paper on LLM-driven measurement of global identity-based oppression has been accepted...',
          description: "",
          section: "News",},{id: "news-i-attended-the-7th-national-big-data-health-science-conference-in-columbia-sc-where-i-presented-a-poster-on-my-research-at-the-dye-lab",
          title: 'I attended the 7th National Big Data Health Science Conference in Columbia, SC,...',
          description: "",
          section: "News",},{id: "news-i-succesfully-defended-my-biology-undergraduate-honors-thesis",
          title: 'I succesfully defended my biology undergraduate honors thesis!',
          description: "",
          section: "News",},{id: "news-i-officially-graduated-from-the-university-of-rochester-i-also-received-the-charles-l-newton-prize-from-the-hajim-school-of-engineering-for-excellence-in-undergraduate-research",
          title: 'I officially graduated from the University of Rochester! I also received the Charles...',
          description: "",
          section: "News",},{id: "projects-2024-uofr-biomedical-data-science-hackathon",
          title: '2024 UofR Biomedical Data Science Hackathon',
          description: "1st Place - Undergraduate Division",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-2025-raise-informatics-data-science-amp-ai-competition",
          title: '2025 RAISE Informatics, Data Science &amp;amp; AI Competition',
          description: "2nd Place - Undergraduate Division",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-2025-rit-asa-datafest",
          title: '2025 RIT ASA Datafest',
          description: "1st Place - Best Visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-impact-of-covid-19-on-graduate-salaries",
          title: 'Impact of COVID-19 on Graduate Salaries',
          description: "CSC 240 Final Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-2025-uofr-biomedical-data-science-hackathon",
          title: '2025 UofR Biomedical Data Science Hackathon',
          description: "1st Place - Undergraduate Division",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-comparative-retinal-transcriptomics-across-model-organisms-toinform-human-retinitis-pigmentosa-research",
          title: 'Comparative Retinal Transcriptomics Across Model Organisms toInform Human Retinitis Pigmentosa Research',
          description: "BIOL 257L Final Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-lightweight-heat-stress-detection-for-cow-health-monitoring",
          title: 'Lightweight Heat Stress Detection for Cow Health Monitoring',
          description: "DSCC 383W Capstone Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%63%68%61%74%74%65%39@%75.%72%6F%63%68%65%73%74%65%72.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chattergpt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sreejato-chatterjee", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-9832-4874", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
