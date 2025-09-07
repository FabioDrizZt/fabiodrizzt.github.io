function initializeTyped (el) {
  const typedInstance = new Typed(el, {
    strings: [
      'Full Stack Developer',
      'React Specialist',
      'Java/Spring Boot Expert',
      'Node.js Developer',
      'MERN Stack Developer',
      'Next.js Developer',
      'PostgreSQL Expert',
      'MongoDB Specialist',
      'TypeScript Developer',
      'Python Developer',
      'Django Developer',
      'Flask Developer',
      'PHP/Laravel Developer',
      'Professor & Mentor',
      'Tech Educator',
      'Agile Practitioner',
      'Scrum Master',
      'Code Reviewer',
      'System Architect',
      'Database Designer',
      'API Developer',
      'Microservices Expert',
      'DevOps Enthusiast',
      'AI Tools Specialist',
      'Problem Solver',
      'Open Source Contributor',
      'Tech Innovator'
    ],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500,
    cursorChar: '|',
    showCursor: true
  })

  // Puedes almacenar la instancia en el elemento para su posterior referencia si es necesario
  el.typedInstance = typedInstance
}

document.querySelectorAll('.typed').forEach(initializeTyped)
