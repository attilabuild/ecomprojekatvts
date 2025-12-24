export interface Course {
  id: string;
  title: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  fullDescription: string;
  instructor: string;
  duration: string;
  level: string;
  videoUrl?: string;
  curriculum: {
    module: string;
    lessons: string[];
  }[];
  outcomes: string[];
  testimonials: {
    name: string;
    role: string;
    text: string;
    rating: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const courses: Course[] = [
  {
    id: "python",
    title: "Python",
    slug: "python",
    price: "free",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
    description: "Learn Python programming from scratch. Master the fundamentals and build real-world applications.",
    fullDescription: "This comprehensive Python course takes you from absolute beginner to confident programmer. You'll learn core concepts, data structures, object-oriented programming, and build practical projects. Perfect for anyone looking to start their programming journey or add Python to their skill set.",
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    videoUrl: "https://www.youtube.com/watch?v=K5KVEU3aaeQ",
    curriculum: [
      {
        module: "Introduction to Python",
        lessons: [
          "Setting up your development environment",
          "Python syntax and basics",
          "Variables and data types",
          "Working with strings and numbers"
        ]
      },
      {
        module: "Control Flow",
        lessons: [
          "Conditional statements",
          "Loops and iterations",
          "Functions and scope",
          "Error handling"
        ]
      },
      {
        module: "Data Structures",
        lessons: [
          "Lists and tuples",
          "Dictionaries and sets",
          "List comprehensions",
          "Working with files"
        ]
      },
      {
        module: "Object-Oriented Programming",
        lessons: [
          "Classes and objects",
          "Inheritance and polymorphism",
          "Encapsulation",
          "Project: Build a library management system"
        ]
      }
    ],
    outcomes: [
      "Write clean, efficient Python code",
      "Understand core programming concepts",
      "Build real-world applications",
      "Work with files and data",
      "Debug and test your code"
    ],
    testimonials: [
      {
        name: "Alex Chen",
        role: "Software Developer",
        text: "This course gave me the foundation I needed to start my programming career. The projects were practical and the instructor was clear.",
        rating: 5
      },
      {
        name: "Maria Garcia",
        role: "Data Analyst",
        text: "I needed Python for my data analysis work. This course made it easy to understand and apply immediately.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer: "No! This course is designed for complete beginners. We start from the very basics."
      },
      {
        question: "How long do I have access to the course?",
        answer: "You have lifetime access to all course materials, including future updates."
      },
      {
        question: "Will I get a certificate?",
        answer: "Yes, you'll receive a certificate of completion after finishing all modules and projects."
      }
    ]
  },
  {
    id: "html-css-js",
    title: "HTML CSS JavaScript",
    slug: "html-css-javascript",
    price: "free",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    description: "Build beautiful and interactive websites with HTML, CSS, and JavaScript. Start your web development journey.",
    fullDescription: "Master the three core technologies of web development. Learn to create responsive, modern websites from scratch. This course covers everything from basic HTML structure to advanced JavaScript concepts and CSS animations.",
    instructor: "Mike Thompson",
    duration: "10 weeks",
    level: "Beginner",
    videoUrl: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    curriculum: [
      {
        module: "HTML Fundamentals",
        lessons: [
          "HTML structure and semantics",
          "Forms and inputs",
          "Accessibility best practices",
          "SEO basics"
        ]
      },
      {
        module: "CSS Styling",
        lessons: [
          "Selectors and specificity",
          "Layout with Flexbox and Grid",
          "Responsive design",
          "CSS animations"
        ]
      },
      {
        module: "JavaScript Basics",
        lessons: [
          "Variables and functions",
          "DOM manipulation",
          "Event handling",
          "Async JavaScript"
        ]
      },
      {
        module: "Building Projects",
        lessons: [
          "Portfolio website",
          "Interactive calculator",
          "Weather app with API",
          "Final project: E-commerce site"
        ]
      }
    ],
    outcomes: [
      "Build responsive websites",
      "Understand modern CSS techniques",
      "Write interactive JavaScript",
      "Work with APIs",
      "Deploy websites"
    ],
    testimonials: [
      {
        name: "James Wilson",
        role: "Frontend Developer",
        text: "This course was my entry point into web development. The projects were challenging but achievable.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What tools do I need?",
        answer: "Just a code editor (we recommend VS Code) and a web browser. Everything else is free."
      }
    ]
  },
  {
    id: "react",
    title: "React",
    slug: "react",
    price: "19.99",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    description: "Master React and build modern, scalable web applications. Learn hooks, context, and advanced patterns.",
    fullDescription: "Take your web development skills to the next level with React. Learn to build component-based applications, manage state effectively, and create user interfaces that scale. This course covers React 18+ with hooks, context API, and modern best practices.",
    instructor: "Emily Davis",
    duration: "12 weeks",
    level: "Intermediate",
    videoUrl: "https://www.youtube.com/watch?v=TtPXvEcE11E",
    curriculum: [
      {
        module: "React Fundamentals",
        lessons: [
          "Components and JSX",
          "Props and state",
          "Event handling",
          "Conditional rendering"
        ]
      },
      {
        module: "Hooks and State Management",
        lessons: [
          "useState and useEffect",
          "Custom hooks",
          "Context API",
          "State management patterns"
        ]
      },
      {
        module: "Advanced React",
        lessons: [
          "Performance optimization",
          "React Router",
          "Testing with Jest",
          "Deployment strategies"
        ]
      },
      {
        module: "Real-World Projects",
        lessons: [
          "Todo app with state management",
          "E-commerce dashboard",
          "Social media feed",
          "Full-stack application"
        ]
      }
    ],
    outcomes: [
      "Build scalable React applications",
      "Master hooks and modern patterns",
      "Implement routing and navigation",
      "Optimize performance",
      "Deploy production-ready apps"
    ],
    testimonials: [
      {
        name: "David Lee",
        role: "Full Stack Developer",
        text: "Best React course I've taken. The projects are industry-relevant and the explanations are crystal clear.",
        rating: 5
      },
      {
        name: "Sophie Brown",
        role: "UI Developer",
        text: "Finally understood React hooks and context. The instructor breaks down complex concepts perfectly.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do I need JavaScript experience?",
        answer: "Yes, you should be comfortable with JavaScript fundamentals before taking this course."
      },
      {
        question: "What's the refund policy?",
        answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase."
      }
    ]
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    slug: "postgresql",
    price: "19.99",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
    description: "Learn database design and SQL with PostgreSQL. Master queries, joins, and database optimization.",
    fullDescription: "Become a database expert with this comprehensive PostgreSQL course. Learn to design efficient databases, write complex queries, optimize performance, and manage production databases. Perfect for backend developers and data engineers.",
    instructor: "Robert Martinez",
    duration: "8 weeks",
    level: "Intermediate",
    curriculum: [
      {
        module: "Database Fundamentals",
        lessons: [
          "Relational database concepts",
          "PostgreSQL installation",
          "Creating databases and tables",
          "Data types and constraints"
        ]
      },
      {
        module: "SQL Queries",
        lessons: [
          "SELECT statements",
          "JOINs and relationships",
          "Aggregations and grouping",
          "Subqueries and CTEs"
        ]
      },
      {
        module: "Advanced Topics",
        lessons: [
          "Indexes and performance",
          "Transactions and ACID",
          "Stored procedures",
          "Database administration"
        ]
      },
      {
        module: "Real-World Applications",
        lessons: [
          "Designing a database schema",
          "Optimizing slow queries",
          "Backup and recovery",
          "Production deployment"
        ]
      }
    ],
    outcomes: [
      "Design efficient database schemas",
      "Write complex SQL queries",
      "Optimize database performance",
      "Manage production databases",
      "Understand database security"
    ],
    testimonials: [
      {
        name: "Chris Anderson",
        role: "Backend Engineer",
        text: "This course made me confident working with databases. The real-world examples were invaluable.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do I need prior SQL knowledge?",
        answer: "Basic SQL knowledge is helpful but not required. We cover everything from the ground up."
      }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

