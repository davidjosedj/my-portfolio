const resumeData = {
  name: "JOSEPH DAVID L",
  role: "GenAI & DevOps Engineer",
  summary:
    "Dedicated Generative AI and DevOps professional with 4.5+ years of experience in Python, cloud platforms, automation, and LLM-driven workflows across AWS, Azure, and GCP.",
  contact: {
    linkedin: "https://www.linkedin.com/in/joseph-david-1011/"
  },
  quickFacts: [
    "4.5+ Years Experience",
    "Multi-Cloud: AWS | Azure | GCP",
    "CI/CD + GenAI",
    "Python & JavaScript"
  ],
  skills: [
    {
      title: "Languages",
      details: "Python, JavaScript"
    },
    {
      title: "DevOps & Automation",
      details: "Azure DevOps, AWS CodeCommit, CodeBuild, CI/CD, Terraform, Ansible, Docker, Git"
    },
    {
      title: "Generative AI",
      details: "LLMs, RAG, Vector Embeddings, Semantic Search, Amazon Bedrock, Azure OpenAI, Hugging Face"
    },
    {
      title: "AI/ML Libraries",
      details: "TensorFlow, PyTorch, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn"
    },
    {
      title: "Cloud Platforms",
      details: "AWS (EC2, S3, VPC, IAM, SageMaker), Azure, GCP"
    },
    {
      title: "Datastores",
      details: "AWS RDS, Azure SQL Database, DynamoDB"
    }
  ],
  featuredProjects: [
    {
      name: "AI-Powered Job Application Agent",
      brief:
        "Built an AI automation platform that scraped 140+ jobs, matched opportunities using RAG semantic search, and auto-applied with AI-generated personalized cover letters.",
      tech: "Python, Groq API (Llama-3), ChromaDB, SentenceTransformers, Selenium, SQLite"
    },
    {
      name: "Enterprise CI/CD & Multi-Cloud Migration",
      brief:
        "Designed and managed CI/CD pipelines using Azure DevOps and AWS services, then executed cloud/repository/pipeline migrations across Azure, AWS, and GCP with stable production cutovers.",
      tech: "Azure DevOps, AWS CodeCommit, AWS CodeBuild, CI/CD, Git"
    },
    {
      name: "Generative AI Knowledge Chatbot",
      brief:
        "Built and deployed a Bedrock-based AI chatbot to automate Q&A and enterprise knowledge retrieval using foundation models and structured prompt engineering.",
      tech: "Amazon Bedrock, LLMs, Prompt Engineering, Semantic Retrieval"
    }
  ],
  experience: [
    {
      title: "DevOps Engineer - Accenture",
      timeline: "Mar 2022 - Present"
    },
    {
      title: "Data Analyst - Cognizant",
      timeline: "Jun 2021 - Feb 2022"
    }
  ],
  certifications: [
    "AWS Certified Machine Learning - Specialty",
    "AWS Certified Solutions Architect - Associate",
    "Microsoft Certified: Azure AI Engineer",
    "Microsoft Certified: Azure Administrator Associate",
    "Google Associate Cloud Engineer",
    "Google Professional Cloud Architect",
    "Google Professional Cloud DevOps Engineer",
    "Google Cloud Certified - Generative AI Leader",
    "GitHub Actions Certification"
  ]
};

function render() {
  document.getElementById("name").textContent = resumeData.name;
  document.getElementById("role").textContent = resumeData.role;
  document.getElementById("summary").textContent = resumeData.summary;

  document.getElementById("contactLine").textContent = "Contact available via LinkedIn.";
  const linkedin = document.getElementById("linkedinLink");
  linkedin.href = resumeData.contact.linkedin;
  linkedin.textContent = resumeData.contact.linkedin;

  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = resumeData.skills
    .map(
      (skill) => `
      <article class="skill-card">
        <h3>${skill.title}</h3>
        <p>${skill.details}</p>
      </article>
    `
    )
    .join("");

  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = resumeData.featuredProjects
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.name}</h3>
        <p>${project.brief}</p>
        <p class="project-tech">${project.tech}</p>
      </article>
    `
    )
    .join("");

  const experienceList = document.getElementById("experienceList");
  experienceList.innerHTML = resumeData.experience
    .map(
      (item) => `
      <article class="experience-item">
        <h3>${item.title}</h3>
        <p>${item.timeline}</p>
      </article>
    `
    )
    .join("");

  const certificationsList = document.getElementById("certificationsList");
  certificationsList.innerHTML = resumeData.certifications
    .map((cert) => `<li>${cert}</li>`)
    .join("");

  const factsContainer = document.getElementById("quickFacts");
  factsContainer.innerHTML = resumeData.quickFacts.map((fact) => `<span>${fact}</span>`).join("");
}

function setupInteractions() {
  const factsButton = document.getElementById("toggleFactsBtn");
  const factsContainer = document.getElementById("quickFacts");

  factsButton.addEventListener("click", () => {
    const isHidden = factsContainer.classList.toggle("hidden");
    factsButton.textContent = isHidden ? "Show Quick Facts" : "Hide Quick Facts";
  });
}

render();
setupInteractions();
