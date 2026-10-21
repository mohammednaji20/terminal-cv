/* ============================================================
   Interactive CV Terminal — content data (EN / AR)
   ============================================================ */

const LINKS = {
  github:    "https://github.com/mohammednaji20",
  linkedin:  "https://www.linkedin.com/in/mohammedabuibrahim",
  portfolio: "https://mohammednaji20.github.io/-Abu-ibrahim/",
  email:     "moh.n.t2018@gmail.com"
};

const DATA = {

  /* ============================ ENGLISH ============================ */
  en: {
    dir: "ltr",
    boot: [
      "Initializing secure shell ....................... [ OK ]",
      "Loading profile: mohammed_naji.json ............. [ OK ]",
      "Mounting /skills /projects /experience .......... [ OK ]",
      "Establishing connection: Gaza, Palestine ........ [ OK ]"
    ],
    welcome1: "Hello, I'm <b>Mohammed Naji Mohammed Abu Tair</b> 👋",
    welcome2: 'Welcome to my interactive CV terminal. Type <span class="t-amber">help</span> to see the available commands.',
    hint: 'Tip: press <b>Tab</b> to autocomplete · <b>↑ / ↓</b> for history · try <span class="t-amber">lang ar</span> for Arabic',

    commands: {
      help:      "list all commands",
      whoami:    "quick ID card",
      about:     "professional profile",
      skills:    "technical skills",
      projects:  "selected projects",
      project:   "project details — try: project 1",
      education: "education",
      languages: "spoken languages",
      interests: "professional interests",
      objective: "career objective",
      contact:   "how to reach me",
      links:     "GitHub · LinkedIn · Portfolio",
      cv:        "CV & résumé links",
      lang:      "switch language — lang ar / lang en",
      date:      "current date & time",
      history:   "command history",
      banner:    "show the banner",
      clear:     "clear the screen"
    },
    hiddenHint: 'psst… there are hidden commands. try: <span class="t-amber">sudo</span>, <span class="t-amber">hack</span>, <span class="t-amber">coffee</span> 😉',

    whoami: {
      name:   "Mohammed Naji Mohammed Abu Tair",
      alias:  "Abu Ibrahim",
      role:   "IT & Technology | Front-End Development | Cybersecurity",
      location: "Gaza, Palestine",
      status: "Open to opportunities & collaborations"
    },

    about:
      "IT professional with a background in IT studies and front-end development, with practical experience developing personal technology projects and working in IT lab environments. Curious about Linux, virtualization, and cybersecurity fundamentals. Interested in AI-powered applications, software development, and contributing to the growth of the Palestinian technology ecosystem.",

    skills: [
      { title: "Web Development",    items: ["HTML", "CSS", "JavaScript", "Responsive UI fundamentals"] },
      { title: "Development Tools",  items: ["Git", "GitHub", "VS Code", "Web development workflows"] },
      { title: "IT Infrastructure",  items: ["Linux", "Windows", "VMware", "Proxmox", "Networking fundamentals", "VLANs", "ACLs"] },
      { title: "Cybersecurity",      items: ["Security monitoring concepts", "SIEM fundamentals", "OSINT", "Network security", "Introductory incident response"] },
      { title: "AI Projects",        items: ["AI-powered application concepts", "Speech transcription workflows", "Technical documentation"] }
    ],

    projects: [
      {
        name: "TAVLUNO — Freelancer Productivity Platform",
        desc: "A SaaS web application designed to help freelancers and small creative businesses manage work more efficiently.",
        stack: ["React", "TypeScript", "Vite", "Express"],
        bullets: [
          "Worked with modern web technologies across the stack.",
          "Explored application features for task management, invoices, contracts, and workspace organization.",
          "Focused on practical Arabic workflows and user interface improvements."
        ]
      },
      {
        name: "ReadSmart AI — Arabic Reading Support Project",
        desc: "An AI-powered project concept focused on analyzing Arabic reading errors among children aged 6–9.",
        stack: ["AI concepts", "Speech transcription", "Recommendation engine"],
        bullets: [
          "Explored speech transcription workflows for Arabic reading samples.",
          "Worked on organizing learning paths based on assessed needs.",
          "Focused on using AI technology to support educational needs."
        ]
      },
      {
        name: "IT Infrastructure & Cybersecurity Labs",
        desc: "Practical learning activities involving virtualized environments, networking, operating systems, and security monitoring.",
        stack: ["VMware", "Proxmox", "Linux", "Windows", "SIEM"],
        bullets: [
          "Practiced working with virtual machines and IT lab environments.",
          "Studied networking concepts and Linux & Windows environments.",
          "Explored introductory security monitoring and SIEM workflows."
        ]
      }
    ],

    education: {
      degree: "IT Studies — IT Diploma",
      school: "University College of Applied Sciences (UCAS)",
      place:  "Gaza, Palestine"
    },

    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Working proficiency" }
    ],

    interests: [
      "Web Development", "Artificial Intelligence", "Cybersecurity",
      "IT Infrastructure", "Palestinian Tech Ecosystem",
      "Collaborative Projects", "Youth Talent Development"
    ],

    objective:
      "To contribute to technology initiatives that support Palestinian talent, collaborate with other developers and IT specialists, and build practical skills through meaningful projects and professional development opportunities.",

    contact: {
      email: "Email",
      location: "Location",
      locationValue: "Gaza, Palestine",
      note: "I usually reply within 24 hours 📬"
    },

    links: [
      { label: "GitHub",    url: LINKS.github },
      { label: "LinkedIn",  url: LINKS.linkedin },
      { label: "Portfolio", url: LINKS.portfolio }
    ],

    cvIntro: "My full CV (PDF) is available on request — just email me:",
    cvAlso:  "You can also check my online profiles:",

    messages: {
      unknown: 'command not found: <b>{cmd}</b> — type <span class="t-amber">help</span> to see available commands.',
      langSet: "Language switched to English ✓",
      projectUsage: 'usage: project <span class="t-amber">1</span> | <span class="t-amber">2</span> | <span class="t-amber">3</span>',
      projectNotFound: "project not found — try <span class='t-amber'>projects</span> first.",
      emptyHistory: "history is empty.",
      stack: "stack",
      details: "highlights"
    },

    eggs: {
      sudo: 'visitor is not in the sudoers file. This incident will be reported... to my inbox 😄 — try <span class="t-amber">contact</span>',
      sudoHire: "sudo hire mohammed → Permission granted ✅ Redirecting you to the contact section...",
      rm: "Nice try 😅 Nothing gets deleted from my career.",
      hack: [
        "Accessing mainframe...",
        "Bypassing firewall...",
        "...just kidding 😄",
        "I only do ethical security — check <span class=\"t-amber\">skills</span> for the real stuff."
      ],
      coffee: [
        "      ( (",
        "       ) )",
        "    ........",
        "    |      |]",
        "    \\      /",
        "     `----'",
        "Brewing... ☕ ERROR 418: I'm a teapot. But the motivation is real."
      ],
      exit: "There is no exit — only new opportunities 😄 try <span class=\"t-amber\">contact</span>",
      hello: "Hello there! 👋 Type <span class=\"t-amber\">help</span> to explore my CV."
    }
  },

  /* ============================ العربية ============================ */
  ar: {
    dir: "rtl",
    boot: [
      "تهيئة البيئة الآمنة ............................. [ تم ]",
      "تحميل الملف الشخصي: mohammed_naji.json .......... [ تم ]",
      "تركيب /مهارات /مشاريع /خبرات ................... [ تم ]",
      "تأسيس الاتصال: غزة، فلسطين ..................... [ تم ]"
    ],
    welcome1: "أهلاً! أنا <b>محمد ناجي محمد أبوطاير</b> 👋",
    welcome2: 'هذه نسخة تفاعلية من سيرتي الذاتية على شكل طرفية. اكتب <span class="t-amber">help</span> لعرض الأوامر المتاحة.',
    hint: 'تلميح: اضغط <b>Tab</b> لإكمال الأمر · <b>↑ / ↓</b> للتنقل بين السجل · جرّب <span class="t-amber">lang en</span> للإنجليزية',

    commands: {
      help:      "عرض جميع الأوامر",
      whoami:    "بطاقة تعريف سريعة",
      about:     "النبذة المهنية",
      skills:    "المهارات التقنية",
      projects:  "المشاريع المختارة",
      project:   "تفاصيل مشروع — جرّب: project 1",
      education: "التعليم",
      languages: "اللغات",
      interests: "الاهتمامات المهنية",
      objective: "الهدف المهني",
      contact:   "طرق التواصل",
      links:     "GitHub · LinkedIn · الأعمال",
      cv:        "روابط السيرة الذاتية",
      lang:      "تغيير اللغة — lang ar / lang en",
      date:      "التاريخ والوقت الحالي",
      history:   "سجل الأوامر",
      banner:    "إظهار الشعار",
      clear:     "مسح الشاشة"
    },
    hiddenHint: 'بسّر… في أوامر مخفية. جرّب: <span class="t-amber">sudo</span>، <span class="t-amber">hack</span>، <span class="t-amber">coffee</span> 😉',

    whoami: {
      name:   "محمد ناجي محمد أبوطاير",
      alias:  "أبو إبراهيم",
      role:   "تقنية معلومات | تطوير واجهات أمامية | أمن سيبراني",
      location: "غزة، فلسطين",
      status: "متاح للفرص والتعاون"
    },

    about:
      "متخصص في تقنية المعلومات بخلفية دراسية في تكنولوجيا المعلومات وتطوير الواجهات الأمامية، مع خبرة عملية في تطوير مشاريع تقنية شخصية والعمل داخل مختبرات IT. شغوف بنظام Linux والافتراضية وأساسيات الأمن السيبراني. مهتم بتطبيقات الذكاء الاصطناعي وتطوير البرمجيات والمساهمة في نمو منظومة التقنية الفلسطينية.",

    skills: [
      { title: "تطوير الويب",            items: ["HTML", "CSS", "JavaScript", "أساسيات واجهات متجاوبة"] },
      { title: "أدوات التطوير",          items: ["Git", "GitHub", "VS Code", "سير عمل تطوير الويب"] },
      { title: "البنية التحتية",        items: ["Linux", "Windows", "VMware", "Proxmox", "أساسيات الشبكات", "VLANs", "ACLs"] },
      { title: "الأمن السيبراني",       items: ["مفاهيم المراقبة الأمنية", "أساسيات SIEM", "OSINT", "أمن الشبكات", "الاستجابة الأولية للحوادث"] },
      { title: "مشاريع الذكاء الاصطناعي", items: ["مفاهيم التطبيقات المدعومة بالذكاء الاصطناعي", "سير عمل التفريغ الصوتي", "التوثيق التقني"] }
    ],

    projects: [
      {
        name: "TAVLUNO — منصة إنتاجية للمستقلين",
        desc: "تطبيق ويب SaaS لمساعدة المستقلين وأصحاب المشاريع الصغيرة على إدارة أعمالهم بكفاءة أكبر.",
        stack: ["React", "TypeScript", "Vite", "Express"],
        bullets: [
          "العمل مع تقنيات ويب حديثة عبر أطوار المشروع.",
          "استكشاف مزايا إدارة المهام والفواتير والعقود وتنظيم مساحة العمل.",
          "التركيز على سير عمل عملي بالعربية وتحسين واجهة المستخدم."
        ]
      },
      {
        name: "ReadSmart AI — دعم القراءة العربية",
        desc: "مفهوم مشروع مدعوم بالذكاء الاصطناعي لتحليل أخطاء القراءة العربية لدى الأطفال من عمر 6–9 سنوات.",
        stack: ["مفاهيم ذكاء اصطناعي", "تفريغ صوتي", "محرك توصيات"],
        bullets: [
          "استكشاف سير عمل التفريغ الصوتي لعينات قراءة عربية.",
          "العمل على تنظيم مسارات تعلم بحسب الاحتياجات المقيّمة.",
          "توظيف تقنية الذكاء الاصطناعي لدعم الاحتياجات التعليمية."
        ]
      },
      {
        name: "مختبرات البنية التحتية والأمن السيبراني",
        desc: "أنشطة تعلم عملية تشمل بيئات افتراضية وشبكات وأنظمة تشغيل ومراقبة أمنية.",
        stack: ["VMware", "Proxmox", "Linux", "Windows", "SIEM"],
        bullets: [
          "التدرب على العمل مع الأجهزة الافتراضية وبيئات المختبرات.",
          "دراسة مفاهيم الشبكات وبيئات Linux وWindows.",
          "استكشاف المراقبة الأمنية التمهيدية وسير عمل SIEM."
        ]
      }
    ],

    education: {
      degree: "دراسات تقنية معلومات — دبلوم IT",
      school: "University College of Applied Sciences (UCAS)",
      place:  "غزة، فلسطين"
    },

    languages: [
      { name: "العربية", level: "لغة أم" },
      { name: "الإنجليزية", level: "كفاءة عملية" }
    ],

    interests: [
      "تطوير الويب", "الذكاء الاصطناعي", "الأمن السيبراني",
      "البنية التحتية لتقنية المعلومات", "منظومة التقنية الفلسطينية",
      "المشاريع التعاونية", "تطوير المواهب الشابة"
    ],

    objective:
      "المساهمة في مبادرات تقنية تدعم المواهب الفلسطينية، والتعاون مع مطورين ومتخصصي IT، وبناء خبرة عملية عبر مشاريع ذات معنى وفرص تطوير مهني.",

    contact: {
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationValue: "غزة، فلسطين",
      note: "أرد عادةً خلال 24 ساعة 📬"
    },

    links: [
      { label: "GitHub",    url: LINKS.github },
      { label: "LinkedIn",  url: LINKS.linkedin },
      { label: "الأعمال",   url: LINKS.portfolio }
    ],

    cvIntro: "نسخة الـ CV الكاملة (PDF) متاحة عند الطلب — راسلني على:",
    cvAlso:  "وتقدر كمان تشوف ملفاتي على:",

    messages: {
      unknown: 'أمر غير معروف: <b>{cmd}</b> — اكتب <span class="t-amber">help</span> لعرض الأوامر المتاحة.',
      langSet: "تم التبديل إلى العربية ✓",
      projectUsage: 'الاستخدام: project <span class="t-amber">1</span> | <span class="t-amber">2</span> | <span class="t-amber">3</span>',
      projectNotFound: "المشروع غير موجود — جرّب <span class='t-amber'>projects</span> أولاً.",
      emptyHistory: "السجل فارغ.",
      stack: "التقنيات",
      details: "أبرز النقاط"
    },

    eggs: {
      sudo: 'visitor ليس ضمن ملف sudoers. سيتم إبلاغ الحادثة... إلى بريدي 😄 — جرّب <span class="t-amber">contact</span>',
      sudoHire: "sudo hire mohammed → تم منح الصلاحية ✅ جاري تحويلك إلى قسم التواصل...",
      rm: "محاولة طيبة 😅 لكن لا شيء يُحذف من مسيرتي.",
      hack: [
        "الوصول إلى النظام المركزي...",
        "تجاوز الجدار الناري...",
        "...أمزح طبعاً 😄",
        "أنا أمارس الأمن الأخلاقي فقط — شوف <span class=\"t-amber\">skills</span> للجدّي."
      ],
      coffee: [
        "      ( (",
        "       ) )",
        "    ........",
        "    |      |]",
        "    \\      /",
        "     `----'",
        "جاري التحضير... ☕ الخطأ 418: أنا إبريق شاي. لكن الحماس حقيقي."
      ],
      exit: "لا يوجد مخرج — فقط فرص جديدة 😄 جرّب <span class=\"t-amber\">contact</span>",
      hello: "أهلاً فيك! 👋 اكتب <span class=\"t-amber\">help</span> لاستكشاف سيرتي."
    }
  }
};
