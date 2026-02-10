// Portfolio Data Structure

const portfolioData = {
  personal: {
    name: "Sanjay Shrish S",
    location: "Bengaluru, India",
    email: "s.sanjayshrish2005@gmail.com",
    phone: "+91-8073834489",
    summary: "Computer Science Engineering student specializing in Machine Learning and Data Science with hands-on experience in building intelligent systems for real-world applications.",
    social: {
      linkedin: "https://www.linkedin.com/in/sanjay-shrish-b65a47234/",
      leetcode: "https://leetcode.com/u/Sanjay_Shrish/"
    }
  },

  skills: {
    "Programming": ["Python", "Java", "C", "HTML/CSS"],
    "Database Management": ["MySQL"],
    "UI/UX & Design": ["Figma", "Canva"],
    "Tools & Platforms": ["Git", "Linux", "Ubuntu", "Google Colab", "Jupyter Notebook"],
    "Machine Learning & Data Science": [
      "NumPy", "Pandas", "Matplotlib", "SciPy",
      "Regression (Linear, Multiple, Polynomial, Logistic)",
      "Classification", "Clustering", "Reinforcement Learning"
    ],
    "Data Analysis": [
      "Data Cleaning", "Feature Engineering",
      "Data Visualization", "Exploratory Data Analysis (EDA)"
    ],
    "Natural Language Processing": [
      "Text Preprocessing", "Tokenization", "Sentiment Analysis"
    ],
    "Association Rule Learning": [
      "Apriori Algorithm", "Market Basket Analysis"
    ],
    "Deep Learning": [
      "Artificial Neural Networks (ANN)",
      "Convolutional Neural Networks (CNN)"
    ]
  },

  projects: [
    {
      id: "market-basket-analysis",
      title: "Market Basket Analysis",
      dateRange: "June 2025 - July 2025",
      description: "Developed a model using the Apriori algorithm for association rule mining to identify frequent item sets and product relationships.",
      highlights: [
        "Applied data preprocessing and statistical measures (support, confidence, lift)",
        "Analyzed customer purchase patterns and product correlations",
        "Improved product recommendations and store layouts"
      ],
      technologies: ["Python", "Apriori Algorithm", "Data Preprocessing", "Association Rule Mining"]
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis",
      dateRange: "Aug 2025 - Sept 2025",
      description: "Built an NLP model for text classification to classify text into positive, negative, and neutral sentiments.",
      highlights: [
        "Implemented preprocessing (tokenization, stopword removal, lemmatization)",
        "Analyzed social media and review datasets",
        "Extracted user opinions and emotional tones"
      ],
      technologies: ["Python", "NLP", "Text Classification", "Tokenization", "Sentiment Analysis"]
    },
    {
      id: "breast-cancer-detection",
      title: "Breast Cancer Detection",
      dateRange: "May 2024 - June 2025",
      description: "Developed a machine learning model using Logistic Regression to classify tumors as malignant or benign.",
      highlights: [
        "Performed data preprocessing and feature scaling",
        "Evaluated using accuracy, precision, recall, and F1-score",
        "Provided diagnostic aid for early disease detection"
      ],
      technologies: ["Python", "Logistic Regression", "Feature Scaling", "Classification", "Model Evaluation"]
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
      image: "certificates/ML UDEMY COURSE/d009f403-1.png",
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
        "certificates/cyber 1/d413923f-1.png",
        "certificates/cyber 2/c7c6e479-1.png",
        "certificates/cyber 3/d91f0a32-1.png",
        "certificates/cyber 5/9c1cc758-1.png",
        "certificates/cyber 6/0c11c1a9-1.png"
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
      image: "certificates/skillsbuild/bb282cc4-1.png",
      skills: ["Artificial Intelligence", "AI Fundamentals", "IBM Watson", "AI Applications"]
    },
    {
      id: "generative-ai",
      name: "Generative AI Fundamentals",
      organization: "Google Cloud",
      year: 2025,
      icon: "✨",
      image: "certificates/genai/6f2389be-1.png",
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
      image: "certificates/AICTE B4 PD Completion-915/779d1872-1.png",
      skills: ["AI Fundamentals", "Model Building", "Model Training", "Model Evaluation", "Cloud Technology", "Problem Solving"]
    },
    {
      id: "cognitive-x-hackathon",
      name: "Cognitive-X Hackathon",
      organization: "Epoch Society, BMSIT&M",
      year: 2025,
      date: "Nov 5-6, 2025",
      icon: "🏆",
      image: "certificates/Cognitive hackathon.png",
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
      image: "certificates/Sanjay S Shrish_CODERED25_Round1/6584c03a-1.png",
      skills: ["Hackathon", "Innovation", "Collaboration", "Problem Solving", "Technical Skills"]
    },
    {
      id: "codex-hackathon",
      name: "Codex Hackathon",
      organization: "BMSIT&M",
      year: 2025,
      icon: "⚙️",
      image: "certificates/codex/e1ea4b1f-1.png",
      skills: ["Hackathon", "Coding", "Problem Solving", "Algorithm Design", "Team Collaboration"]
    },
    {
      id: "incseption-hackathon",
      name: "InCSEption - 8-Hours Internal Hackathon",
      organization: "CSE Department, BMSIT&M",
      year: 2025,
      icon: "🚀",
      image: "certificates/incseption/e8bda327-1.png",
      skills: ["Hackathon", "Innovation", "Time Management", "Problem Solving", "Collaboration"]
    },
    {
      id: "hp-power-lab",
      name: "HP Power Lab 2.0 - Round 1 Online Assessment",
      organization: "Hindustan Petroleum Corporation Ltd. (HPCL)",
      year: 2025,
      icon: "⚡",
      image: "certificates/hp power lab 2/dbae9b01-1.png",
      skills: ["Problem Solving", "Analytical Skills", "Technical Assessment", "Industry Exposure"]
    },
    {
      id: "quiz-whiz",
      name: "Quiz Whiz Competition",
      organization: "CSE Cluster-3, BMSIT&M x Computer Society of India",
      year: 2024,
      date: "Oct 19, 2024",
      icon: "🧠",
      image: "certificates/Certificate for Sanjay Shrish S for _CSE DEPT CLUSTER 3 CONDUCTE/724db1c5-1.png",
      skills: ["Computer Science", "Quick Thinking", "Problem Solving", "Knowledge Assessment"]
    }
  ],

  courses: [
    {
      id: "data-structures",
      name: "Data Structures and Algorithms",
      platform: "Academic",
      status: "Completed",
      icon: "📊",
      description: "Comprehensive study of fundamental data structures and algorithmic techniques"
    },
    {
      id: "oop",
      name: "Object-Oriented Programming",
      platform: "Academic",
      status: "Completed",
      icon: "💻",
      description: "Advanced concepts in OOP including inheritance, polymorphism, and design patterns"
    },
    {
      id: "dbms",
      name: "Database Management Systems",
      platform: "Academic",
      status: "Completed",
      icon: "🗄️",
      description: "Relational databases, SQL, normalization, and database design principles"
    },
    {
      id: "os",
      name: "Operating Systems",
      platform: "Academic",
      status: "Completed",
      icon: "⚙️",
      description: "Process management, memory management, file systems, and concurrency"
    },
    {
      id: "networks",
      name: "Computer Networks",
      platform: "Academic",
      status: "Completed",
      icon: "🌐",
      description: "Network protocols, TCP/IP, routing, and network security fundamentals"
    },
    {
      id: "computer-arch",
      name: "Computer Architecture",
      platform: "Academic",
      status: "Completed",
      icon: "🖥️",
      description: "CPU design, memory hierarchy, instruction sets, and performance optimization"
    },
    {
      id: "software-eng",
      name: "Software Engineering",
      platform: "Academic",
      status: "Completed",
      icon: "🛠️",
      description: "Software development lifecycle, agile methodologies, and project management"
    },
    {
      id: "digital-design",
      name: "Digital Design and Computer Organization",
      platform: "Academic",
      status: "Completed",
      icon: "🔌",
      description: "Logic gates, combinational circuits, sequential circuits, and computer organization"
    }
  ]
};

// Skills Renderer Class
class SkillsRenderer {
  constructor(skillsData) {
    this.data = skillsData;
  }

  render(containerElement) {
    const categories = Object.keys(this.data);
    categories.forEach(category => {
      const categoryElement = this.createCategoryElement(category, this.data[category]);
      containerElement.appendChild(categoryElement);
    });
  }

  createCategoryElement(categoryName, skills) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';

    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = categoryName;

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'skill-tags';

    skills.forEach(skill => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = skill;
      tagsContainer.appendChild(tag);
    });

    categoryDiv.appendChild(title);
    categoryDiv.appendChild(tagsContainer);

    return categoryDiv;
  }
}

// Project Renderer Function
function renderProjects(projectsData, containerElement) {
  projectsData.forEach(project => {
    const projectCard = createProjectCard(project);
    containerElement.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';
  article.id = project.id;

  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = project.title;

  const date = document.createElement('p');
  date.className = 'project-date';
  date.textContent = project.dateRange;

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;

  const highlightsList = document.createElement('ul');
  highlightsList.className = 'project-highlights';
  project.highlights.forEach(highlight => {
    const li = document.createElement('li');
    li.textContent = highlight;
    highlightsList.appendChild(li);
  });

  const techContainer = document.createElement('div');
  techContainer.className = 'project-technologies';
  project.technologies.forEach(tech => {
    const techTag = document.createElement('span');
    techTag.className = 'tech-tag';
    techTag.textContent = tech;
    techContainer.appendChild(techTag);
  });

  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(description);
  article.appendChild(highlightsList);
  article.appendChild(techContainer);

  return article;
}

// Education Renderer Function
function renderEducation(educationData, containerElement) {
  educationData.forEach(edu => {
    const eduItem = createEducationItem(edu);
    containerElement.appendChild(eduItem);
  });
}

function createEducationItem(edu) {
  const div = document.createElement('div');
  div.className = 'education-item';
  div.id = edu.id;

  const institution = document.createElement('h3');
  institution.className = 'institution-name';
  institution.textContent = edu.institution;

  const degree = document.createElement('p');
  degree.className = 'degree';
  degree.textContent = edu.degree;

  const dateRange = document.createElement('p');
  dateRange.className = 'date-range';
  dateRange.textContent = edu.dateRange;

  const performance = document.createElement('p');
  performance.className = 'performance';
  performance.textContent = edu.performance;

  div.appendChild(institution);
  div.appendChild(degree);
  div.appendChild(dateRange);
  div.appendChild(performance);

  if (edu.coursework && edu.coursework.length > 0) {
    const courseworkDiv = document.createElement('div');
    courseworkDiv.className = 'coursework';

    const courseworkTitle = document.createElement('h4');
    courseworkTitle.textContent = 'Relevant Coursework:';

    const courseworkList = document.createElement('ul');
    courseworkList.className = 'coursework-list';

    edu.coursework.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      courseworkList.appendChild(li);
    });

    courseworkDiv.appendChild(courseworkTitle);
    courseworkDiv.appendChild(courseworkList);
    div.appendChild(courseworkDiv);
  }

  return div;
}

// Certifications Renderer Function
function renderCertifications(certificationsData, containerElement) {
  // Sort certifications in reverse chronological order (newest first)
  const sortedCerts = [...certificationsData].sort((a, b) => b.year - a.year);

  sortedCerts.forEach((cert, index) => {
    const certItem = createCertificationItem(cert, index);
    containerElement.appendChild(certItem);
  });
}

function createCertificationItem(cert, index) {
  const div = document.createElement('div');
  div.className = 'certification-item';
  div.id = cert.id;
  div.style.animationDelay = `${index * 0.1}s`;

  // Certificate Image/Images (if available)
  if (cert.image || cert.images) {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'certification-image-container';
    
    // Handle multiple images (gallery)
    if (cert.images && cert.images.length > 0) {
      const gallery = document.createElement('div');
      gallery.className = 'certification-gallery';
      
      const img = document.createElement('img');
      img.src = cert.images[0];
      img.alt = `${cert.name} Certificate`;
      img.className = 'certification-image';
      img.loading = 'lazy';
      
      gallery.appendChild(img);
      
      // Add navigation if more than 1 image
      if (cert.images.length > 1) {
        const counter = document.createElement('div');
        counter.className = 'gallery-counter';
        counter.textContent = `1 / ${cert.images.length}`;
        
        const navContainer = document.createElement('div');
        navContainer.className = 'gallery-nav';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'gallery-btn gallery-prev';
        prevBtn.innerHTML = '‹';
        prevBtn.setAttribute('aria-label', 'Previous certificate');
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'gallery-btn gallery-next';
        nextBtn.innerHTML = '›';
        nextBtn.setAttribute('aria-label', 'Next certificate');
        
        let currentIndex = 0;
        
        const updateImage = (newIndex) => {
          currentIndex = newIndex;
          img.src = cert.images[currentIndex];
          counter.textContent = `${currentIndex + 1} / ${cert.images.length}`;
        };
        
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const newIndex = currentIndex > 0 ? currentIndex - 1 : cert.images.length - 1;
          updateImage(newIndex);
        });
        
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const newIndex = currentIndex < cert.images.length - 1 ? currentIndex + 1 : 0;
          updateImage(newIndex);
        });
        
        navContainer.appendChild(prevBtn);
        navContainer.appendChild(nextBtn);
        gallery.appendChild(counter);
        gallery.appendChild(navContainer);
      }
      
      // Click to open in modal with gallery
      imageContainer.addEventListener('click', () => {
        openGalleryModal(cert.images, cert.name);
      });
      
      imageContainer.appendChild(gallery);
      
      const viewBadge = document.createElement('div');
      viewBadge.className = 'certificate-view-badge';
      viewBadge.innerHTML = `🔍 View ${cert.images.length} Certificates`;
      imageContainer.appendChild(viewBadge);
      
    } else if (cert.image) {
      // Single image
      const isPDF = cert.image.toLowerCase().endsWith('.pdf');
      
      if (isPDF) {
        const pdfPreview = document.createElement('div');
        pdfPreview.className = 'certification-pdf-preview';
        pdfPreview.innerHTML = `
          <div class="pdf-icon">📄</div>
          <div class="pdf-text">Certificate Document</div>
        `;
        imageContainer.appendChild(pdfPreview);
        
        imageContainer.addEventListener('click', () => {
          openPDFModal(cert.image, cert.name);
        });
      } else {
        const img = document.createElement('img');
        img.src = cert.image;
        img.alt = `${cert.name} Certificate`;
        img.className = 'certification-image';
        img.loading = 'lazy';
        
        img.addEventListener('click', () => {
          openCertificateModal(cert.image, cert.name);
        });
        
        imageContainer.appendChild(img);
      }
      
      const viewBadge = document.createElement('div');
      viewBadge.className = 'certificate-view-badge';
      viewBadge.innerHTML = isPDF ? '📄 View Certificate' : '🔍 Click to view';
      imageContainer.appendChild(viewBadge);
    }
    
    div.appendChild(imageContainer);
  }

  const header = document.createElement('div');
  header.className = 'certification-header';

  if (cert.icon) {
    const icon = document.createElement('span');
    icon.className = 'certification-icon';
    icon.textContent = cert.icon;
    header.appendChild(icon);
  }

  const content = document.createElement('div');
  content.className = 'certification-content';

  const name = document.createElement('h3');
  name.className = 'certification-name';
  name.textContent = cert.name;

  const org = document.createElement('p');
  org.className = 'certification-org';
  let orgText = `${cert.organization} | ${cert.year}`;
  if (cert.date) {
    orgText = `${cert.organization} | ${cert.date}`;
  }
  if (cert.duration) {
    orgText += ` • ${cert.duration}`;
  }
  org.textContent = orgText;

  content.appendChild(name);
  content.appendChild(org);
  header.appendChild(content);
  div.appendChild(header);

  if (cert.skills && cert.skills.length > 0) {
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'certification-skills';
    
    cert.skills.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'cert-skill-tag';
      skillTag.textContent = skill;
      skillsContainer.appendChild(skillTag);
    });
    
    div.appendChild(skillsContainer);
  }

  if (cert.certificateUrl) {
    const linkContainer = document.createElement('div');
    linkContainer.className = 'certification-link-container';
    
    const link = document.createElement('a');
    link.href = `https://${cert.certificateUrl}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'certification-link';
    link.innerHTML = '🔗 View Certificate';
    
    linkContainer.appendChild(link);
    div.appendChild(linkContainer);
  }

  return div;
}

// Modal function for viewing certificate images
function openCertificateModal(imageSrc, certName) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('certificate-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'certificate-modal';
    modal.className = 'certificate-modal';
    modal.innerHTML = `
      <div class="certificate-modal-content">
        <span class="certificate-modal-close">&times;</span>
        <img class="certificate-modal-image" src="" alt="">
        <p class="certificate-modal-caption"></p>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.className === 'certificate-modal-close') {
        modal.style.display = 'none';
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  }
  
  // Update modal content
  const modalImg = modal.querySelector('.certificate-modal-image');
  const modalCaption = modal.querySelector('.certificate-modal-caption');
  modalImg.src = imageSrc;
  modalImg.alt = certName;
  modalCaption.textContent = certName;
  
  // Show modal
  modal.style.display = 'flex';
}

// Modal function for viewing PDFs
function openPDFModal(pdfSrc, certName) {
  // Create PDF modal if it doesn't exist
  let modal = document.getElementById('pdf-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'pdf-modal';
    modal.className = 'certificate-modal pdf-modal';
    modal.innerHTML = `
      <div class="pdf-modal-content">
        <div class="pdf-modal-header">
          <h3 class="pdf-modal-title"></h3>
          <span class="certificate-modal-close">&times;</span>
        </div>
        <iframe class="pdf-viewer" src="" frameborder="0"></iframe>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.className === 'certificate-modal-close') {
        modal.style.display = 'none';
        const iframe = modal.querySelector('.pdf-viewer');
        iframe.src = ''; // Clear iframe to stop loading
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        const iframe = modal.querySelector('.pdf-viewer');
        iframe.src = ''; // Clear iframe to stop loading
      }
    });
  }
  
  // Update modal content
  const modalTitle = modal.querySelector('.pdf-modal-title');
  const pdfViewer = modal.querySelector('.pdf-viewer');
  modalTitle.textContent = certName;
  pdfViewer.src = pdfSrc;
  
  // Show modal
  modal.style.display = 'flex';
}

// Modal function for viewing image gallery
function openGalleryModal(images, certName) {
  // Create gallery modal if it doesn't exist
  let modal = document.getElementById('gallery-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'gallery-modal';
    modal.className = 'certificate-modal gallery-modal';
    modal.innerHTML = `
      <div class="gallery-modal-content">
        <span class="certificate-modal-close">&times;</span>
        <button class="modal-gallery-btn modal-gallery-prev" aria-label="Previous">‹</button>
        <img class="gallery-modal-image" src="" alt="">
        <button class="modal-gallery-btn modal-gallery-next" aria-label="Next">›</button>
        <div class="modal-gallery-counter"></div>
        <p class="certificate-modal-caption"></p>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.className === 'certificate-modal-close') {
        modal.style.display = 'none';
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  }
  
  let currentIndex = 0;
  const modalImg = modal.querySelector('.gallery-modal-image');
  const modalCaption = modal.querySelector('.certificate-modal-caption');
  const counter = modal.querySelector('.modal-gallery-counter');
  const prevBtn = modal.querySelector('.modal-gallery-prev');
  const nextBtn = modal.querySelector('.modal-gallery-next');
  
  const updateModalImage = (index) => {
    currentIndex = index;
    modalImg.src = images[currentIndex];
    modalCaption.textContent = `${certName} - Certificate ${currentIndex + 1} of ${images.length}`;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  };
  
  // Remove old event listeners by cloning
  const newPrevBtn = prevBtn.cloneNode(true);
  const newNextBtn = nextBtn.cloneNode(true);
  prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
  
  // Add new event listeners
  newPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateModalImage(newIndex);
  });
  
  newNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateModalImage(newIndex);
  });
  
  // Keyboard navigation
  const keyHandler = (e) => {
    if (modal.style.display === 'flex') {
      if (e.key === 'ArrowLeft') {
        newPrevBtn.click();
      } else if (e.key === 'ArrowRight') {
        newNextBtn.click();
      }
    }
  };
  document.removeEventListener('keydown', keyHandler);
  document.addEventListener('keydown', keyHandler);
  
  // Initialize with first image
  updateModalImage(0);
  
  // Show modal
  modal.style.display = 'flex';
}

// Courses Renderer Function
function renderCourses(coursesData, containerElement) {
  coursesData.forEach((course, index) => {
    const courseItem = createCourseItem(course, index);
    containerElement.appendChild(courseItem);
  });
}

function createCourseItem(course, index) {
  const div = document.createElement('div');
  div.className = 'course-item';
  div.id = course.id;
  div.style.animationDelay = `${index * 0.1}s`;

  const header = document.createElement('div');
  header.className = 'course-header';

  if (course.icon) {
    const icon = document.createElement('span');
    icon.className = 'course-icon';
    icon.textContent = course.icon;
    header.appendChild(icon);
  }

  const content = document.createElement('div');
  content.className = 'course-content';

  const name = document.createElement('h3');
  name.className = 'course-name';
  name.textContent = course.name;

  const meta = document.createElement('p');
  meta.className = 'course-meta';
  meta.textContent = `${course.platform} • ${course.status}`;

  const description = document.createElement('p');
  description.className = 'course-description';
  description.textContent = course.description;

  content.appendChild(name);
  content.appendChild(meta);
  content.appendChild(description);
  
  header.appendChild(content);
  div.appendChild(header);

  return div;
}
