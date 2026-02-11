export const portfolioData = {
  personal: {
    name: "Sanjay Shrish S",
    title: "Computer Science Student",
    tagline: "Exploring AI, Machine Learning & Data Science",
    location: "Bengaluru, India",
    email: "s.sanjayshrish2005@gmail.com",
    phone: "+91-8073834489",
    summary: "3rd-year CSE student at BMSIT&M specializing in Machine Learning and Data Science. Building projects to understand AI concepts and solve real-world problems through hands-on learning.",
    about: "I'm a 3rd-year Computer Science and Engineering student at BMS Institute of Technology and Management, Bengaluru. My academic focus is on Machine Learning and Data Science, where I've been building projects to understand how algorithms work and how data can be used to solve real problems. I've worked with supervised learning models, natural language processing, and data analysis through coursework and personal projects.\n\nI enjoy breaking down complex problems into smaller, manageable parts and applying what I learn in class to practical scenarios. Whether it's building a classification model for medical data or analyzing sentiment from text, I focus on understanding the fundamentals and improving my implementation skills. I'm also active in hackathons, which help me learn to work under time constraints and collaborate with peers.\n\nI'm currently strengthening my foundation in core CS subjects like Data Structures, Algorithms, and Database Management while exploring advanced topics in Machine Learning. I'm looking for internship opportunities where I can apply my skills, learn from experienced professionals, and contribute to meaningful projects.",
    resumeUrl: "./Resume of sanjay editied.pdf",
    social: {
      linkedin: "https://www.linkedin.com/in/sanjay-shrish-b65a47234/",
      leetcode: "https://leetcode.com/u/Sanjay_Shrish/",
      github: "https://github.com/SanjayShrish788"
    }
  },

  skills: {
    "Machine Learning": {
      icon: "🤖",
      level: 75,
      items: [
        "Supervised & Unsupervised Learning",
        "Classification & Regression",
        "Model Training & Evaluation",
        "Feature Engineering",
        "Scikit-learn"
      ]
    },
    "Programming Languages": {
      icon: "💻",
      level: 85,
      items: [
        "Python",
        "Java",
        "C",
        "HTML/CSS",
        "JavaScript"
      ]
    },
    "Data Science": {
      icon: "📊",
      level: 80,
      items: [
        "NumPy & Pandas",
        "Data Visualization (Matplotlib)",
        "Exploratory Data Analysis",
        "Statistical Analysis",
        "Data Preprocessing"
      ]
    },
    "Natural Language Processing": {
      icon: "💬",
      level: 70,
      items: [
        "Text Classification",
        "Sentiment Analysis",
        "Tokenization",
        "Text Preprocessing",
        "NLTK"
      ]
    },
    "Deep Learning": {
      icon: "🧠",
      level: 65,
      items: [
        "Artificial Neural Networks",
        "Convolutional Neural Networks",
        "TensorFlow Basics",
        "Keras",
        "Model Architecture"
      ]
    },
    "Tools & Technologies": {
      icon: "⚙️",
      level: 80,
      items: [
        "Git & GitHub",
        "MySQL",
        "Linux/Ubuntu",
        "Google Colab",
        "Jupyter Notebook"
      ]
    }
  },

  projects: [
    {
      id: "breast-cancer-detection",
      title: "Breast Cancer Detection using Machine Learning",
      category: "Machine Learning",
      dateRange: "May 2024 - June 2025",
      featured: true,
      problem: "Classifying tumors as malignant or benign is crucial for early cancer detection, but requires accurate analysis of multiple features.",
      approach: "Built a classification model using Logistic Regression with feature scaling and preprocessing. Learned to handle medical datasets and evaluate model performance using accuracy, precision, and recall metrics.",
      solution: "Created a machine learning model that classifies breast cancer tumors based on diagnostic features.",
      impact: "Achieved over 95% accuracy, demonstrating the potential of ML in healthcare applications. This project helped me understand supervised learning and model evaluation techniques.",
      technologies: ["Python", "Scikit-learn", "Logistic Regression", "Pandas", "Data Preprocessing"],
      metrics: {
        accuracy: "95%+",
        model: "Logistic Regression",
        dataset: "Medical Data"
      }
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis on Text Data",
      category: "NLP Project",
      dateRange: "Aug 2025 - Sept 2025",
      featured: true,
      problem: "Understanding sentiment from text reviews and social media posts requires natural language processing techniques.",
      approach: "Developed an NLP pipeline with text preprocessing (tokenization, stopword removal, lemmatization) and classification. Used TF-IDF for feature extraction and trained a classifier to detect positive, negative, and neutral sentiments.",
      solution: "Built a sentiment analysis system that classifies text into three sentiment categories.",
      impact: "Successfully classified sentiments with good accuracy. This project taught me NLP fundamentals and text processing techniques.",
      technologies: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Text Processing"],
      metrics: {
        classes: "3 Categories",
        technique: "TF-IDF",
        accuracy: "Good"
      }
    },
    {
      id: "market-basket-analysis",
      title: "Market Basket Analysis for Product Recommendations",
      category: "Data Science",
      dateRange: "June 2025 - July 2025",
      featured: false,
      problem: "Finding patterns in customer purchase behavior to make product recommendations.",
      approach: "Applied the Apriori algorithm for association rule mining on transaction data. Learned to calculate support, confidence, and lift metrics to identify frequently bought together items.",
      solution: "Developed a system that discovers product associations and generates recommendations.",
      impact: "Identified meaningful product relationships from transaction data. This project helped me understand data mining concepts and pattern recognition.",
      technologies: ["Python", "Apriori Algorithm", "Pandas", "Data Analysis"],
      metrics: {
        algorithm: "Apriori",
        rules: "100+ patterns",
        application: "E-commerce"
      }
    }
  ],

  education: [
    {
      id: "bms-institute",
      institution: "BMS Institute Of Technology And Management",
      degree: "Bachelors of Engineering in Computer Science and Engineering",
      dateRange: "Sept 2023 - Sept 2027",
      performance: "CGPA: 8.57",
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Digital Design and Computer Organization",
        "Computer Architecture",
        "Software Engineering"
      ]
    },
    {
      id: "mes-kishore-kendra",
      institution: "MES Kishore Kendra PU College",
      degree: "Pre-University College",
      dateRange: "Jul 2021 - March 2022",
      performance: "Percentage: 86%",
      coursework: null
    }
  ],

  certifications: [
    {
      id: "ml-az-udemy",
      name: "Machine Learning A–Z: AI, Python & R + ChatGPT Prize [2025]",
      organization: "Udemy",
      year: 2025,
      date: "Nov. 18, 2025",
      duration: "43 hours",
      icon: "🎓",
      image: "./certificates/ML UDEMY COURSE/d009f403-1.png",
      skills: ["Machine Learning", "Python", "R", "AI", "Supervised Learning", "Unsupervised Learning", "Data Preprocessing", "Feature Engineering", "Model Evaluation"],
      certificateUrl: "ude.my/UC-4059937a-d99b-41e7-8de0-353c027f6e70"
    },
    {
      id: "google-cybersecurity",
      name: "Google Cybersecurity Professional Certificate (5 Courses)",
      organization: "Google / Coursera",
      year: 2024,
      date: "May 21, 2024",
      icon: "🔒",
      images: [
        "./certificates/cyber 1/d413923f-1.png",
        "./certificates/cyber 2/c7c6e479-1.png",
        "./certificates/cyber 3/d91f0a32-1.png",
        "./certificates/cyber 5/9c1cc758-1.png",
        "./certificates/cyber 6/0c11c1a9-1.png"
      ],
      skills: ["Foundations of Cybersecurity", "Security Risk Management", "Networks & Network Security", "Linux & SQL", "Assets, Threats & Vulnerabilities", "Detection & Response"]
    },
    {
      id: "ai-fundamentals-ibm",
      name: "Artificial Intelligence Fundamentals (Earn a credential!)",
      organization: "IBM SkillsBuild",
      year: 2025,
      date: "Oct. 12, 2025",
      icon: "🤖",
      image: "./certificates/skillsbuild/bb282cc4-1.png",
      skills: ["Artificial Intelligence", "AI Fundamentals", "IBM Watson", "AI Applications"]
    },
    {
      id: "generative-ai",
      name: "Generative AI Fundamentals",
      organization: "Google Cloud",
      year: 2025,
      icon: "✨",
      image: "./certificates/genai/6f2389be-1.png",
      skills: ["Generative AI", "Large Language Models", "AI Applications", "Prompt Engineering", "Google Cloud AI"]
    },
    {
      id: "ai-internship-edunet",
      name: "4-Week Internship in Artificial Intelligence & Cloud Technology",
      organization: "Edunet Foundation x AICTE",
      year: 2025,
      date: "Sept 09 - Oct 07, 2025",
      duration: "4 weeks",
      icon: "💼",
      image: "./certificates/AICTE B4 PD Completion-915/779d1872-1.png",
      skills: ["AI Fundamentals", "Model Building", "Model Training", "Model Evaluation", "Cloud Technology", "Problem Solving"]
    },
    {
      id: "cognitive-x-hackathon",
      name: "Cognitive-X Hackathon",
      organization: "Epoch Society, BMSIT&M",
      year: 2025,
      date: "Nov 5-6, 2025",
      icon: "🏆",
      image: "./certificates/Cognitive hackathon.png",
      skills: ["Hackathon", "Innovation", "Problem Solving", "Teamwork", "Technical Thinking"]
    },
    {
      id: "code-red-25",
      name: "CODE RED '25 - National Level Hackathon",
      organization: "E-CELL x BICEP, BMSIT&M",
      year: 2025,
      date: "Jan 18, 2025",
      duration: "25 hours",
      icon: "💻",
      image: "./certificates/Sanjay S Shrish_CODERED25_Round1/6584c03a-1.png",
      skills: ["Hackathon", "Innovation", "Collaboration", "Problem Solving", "Technical Skills"]
    },
    {
      id: "codex-hackathon",
      name: "Codex Hackathon",
      organization: "BMSIT&M",
      year: 2025,
      icon: "⚙️",
      image: "./certificates/codex/e1ea4b1f-1.png",
      skills: ["Hackathon", "Coding", "Problem Solving", "Algorithm Design", "Team Collaboration"]
    },
    {
      id: "incseption-hackathon",
      name: "InCSEption - 8-Hours Internal Hackathon",
      organization: "CSE Department, BMSIT&M",
      year: 2025,
      icon: "🚀",
      image: "./certificates/incseption/e8bda327-1.png",
      skills: ["Hackathon", "Innovation", "Time Management", "Problem Solving", "Collaboration"]
    },
    {
      id: "hp-power-lab",
      name: "HP Power Lab 2.0 - Round 1 Online Assessment",
      organization: "Hindustan Petroleum Corporation Ltd. (HPCL)",
      year: 2025,
      icon: "⚡",
      image: "./certificates/hp power lab 2/dbae9b01-1.png",
      skills: ["Problem Solving", "Analytical Skills", "Technical Assessment", "Industry Exposure"]
    },
    {
      id: "quiz-whiz",
      name: "Quiz Whiz Competition",
      organization: "CSE Cluster-3, BMSIT&M x Computer Society of India",
      year: 2024,
      date: "Oct 19, 2024",
      icon: "🧠",
      image: "./certificates/Certificate for Sanjay Shrish S for _CSE DEPT CLUSTER 3 CONDUCTE/724db1c5-1.png",
      skills: ["Computer Science", "Quick Thinking", "Problem Solving", "Knowledge Assessment"]
    }
  ],

  courses: {
    "Core Computer Science": [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks"
    ],
    "Systems & Architecture": [
      "Computer Architecture",
      "Digital Design and Computer Organization",
      "Microprocessors and Microcontrollers"
    ],
    "Software Engineering": [
      "Software Engineering",
      "Design and Analysis of Algorithms",
      "Theory of Computation"
    ],
    "Mathematics & Analytics": [
      "Discrete Mathematics",
      "Probability and Statistics",
      "Linear Algebra"
    ]
  }
};
