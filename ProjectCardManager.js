class ProjectCardManager {

   /*  constructor() {
        this.collegeCourses = {
            "projects": [
                {
                    "title": "Project Title 1",
                    "description": "Description for the first project. Overview of project goals and outcomes.",
                    "url": "https://www.projecturl1.com",
                    "image": "https://www.imageurl.com/image1.jpg",
                    "altText": "Image for Project 1"
                },
                {
                    "title": "Project Title 2",
                    "description": "Description for the second project. Highlights features and objectives.",
                    "url": "https://www.projecturl2.com",
                    "image": "https://www.imageurl.com/image2.jpg",
                    "altText": "Image for Project 2"
                },
                {
                    "title": "Project Title 3",
                    "description": "Description for the third project. Details on challenges and solutions.",
                    "url": "https://www.projecturl3.com",
                    "image": "https://www.imageurl.com/image3.jpg",
                    "altText": "Image for Project 3"
                },
                {
                    "title": "Project Title 4",
                    "description": "Description for the fourth project. Insight into the methodology used.",
                    "url": "https://www.projecturl4.com",
                    "image": "https://www.imageurl.com/image4.jpg",
                    "altText": "Image for Project 4"
                },
                {
                    "title": "Project Title 5",
                    "description": "Description for the fifth project. Overview of project results and impact.",
                    "url": "https://www.projecturl5.com",
                    "image": "https://www.imageurl.com/image5.jpg",
                    "altText": "Image for Project 5"
                },
                {
                    "title": "Project Title 6",
                    "description": "Description for the sixth project. Details about the technology stack used.",
                    "url": "https://www.projecturl6.com",
                    "image": "https://www.imageurl.com/image6.jpg",
                    "altText": "Image for Project 6"
                },
                {
                    "title": "Project Title 7",
                    "description": "Description for the seventh project. Insights into the user experience design.",
                    "url": "https://www.projecturl7.com",
                    "image": "https://www.imageurl.com/image7.jpg",
                    "altText": "Image for Project 7"
                },
                {
                    "title": "Project Title 8",
                    "description": "Description for the eighth project. Breakdown of project milestones and timeline.",
                    "url": "https://www.projecturl8.com",
                    "image": "https://www.imageurl.com/image8.jpg",
                    "altText": "Image for Project 8"
                },
                {
                    "title": "Project Title 9",
                    "description": "Description for the ninth project. Overview of key partnerships and collaborations.",
                    "url": "https://www.projecturl9.com",
                    "image": "https://www.imageurl.com/image9.jpg",
                    "altText": "Image for Project 9"
                },
                {
                    "title": "Project Title 10",
                    "description": "Description for the tenth project. Highlights of feedback and testimonials.",
                    "url": "https://www.projecturl10.com",
                    "image": "https://www.imageurl.com/image10.jpg",
                    "altText": "Image for Project 10"
                }
            ]
        }
    } */

    static initLocalStorage() {
        localStorage.clear();
        if (!localStorage.getItem('projects')) {
            const jsonString = JSON.stringify(ProjectCardManager.defaultProjects());
            localStorage.setItem('projects', jsonString);
        }
    }

    static defaultProjects() {
        return [
            {
                "projects": [
                    {
                        "title": "Project Title 1",
                        "description": "Description for the first project. Overview of project goals and outcomes.",
                        "url": "https://www.projecturl1.com",
                        "image": "./img/image11.png",
                        "altText": "Image for Project 1",
                        "date": "2023-06-01",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 2",
                        "description": "Description for the second project. Highlights features and objectives.",
                        "url": "https://www.projecturl2.com",
                        "image": "./img/image12.png",
                        "altText": "Image for Project 2",
                        "date": "2023-06-15",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 3",
                        "description": "Description for the third project. Details on challenges and solutions.",
                        "url": "https://www.projecturl3.com",
                        "image": "./img/image13.png",
                        "altText": "Image for Project 3",
                        "date": "2023-07-01",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 4",
                        "description": "Description for the fourth project. Insight into the methodology used.",
                        "url": "https://www.projecturl4.com",
                        "image": "./img/image14.png",
                        "altText": "Image for Project 4",
                        "date": "2023-07-15",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 5",
                        "description": "Description for the fifth project. Overview of project results and impact.",
                        "url": "https://www.projecturl5.com",
                        "image": "./img/image15.png",
                        "altText": "Image for Project 5",
                        "date": "2023-08-01",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 6",
                        "description": "Description for the sixth project. Details about the technology stack used.",
                        "url": "https://www.projecturl6.com",
                        "image": "./img/image16.png",
                        "altText": "Image for Project 6",
                        "date": "2023-08-15",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 7",
                        "description": "Description for the seventh project. Insights into the user experience design.",
                        "url": "https://www.projecturl7.com",
                        "image": "./img/image17.png",
                        "altText": "Image for Project 7",
                        "date": "2023-09-01",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 8",
                        "description": "Description for the eighth project. Breakdown of project milestones and timeline.",
                        "url": "https://www.projecturl8.com",
                        "image": "./img/image18.png",
                        "altText": "Image for Project 8",
                        "date": "2023-09-15",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 9",
                        "description": "Description for the ninth project. Overview of key partnerships and collaborations.",
                        "url": "https://www.projecturl9.com",
                        "image": "./img/image19.png",
                        "altText": "Image for Project 9",
                        "date": "2023-10-01",
                        "author": "Author Name"
                    },
                    {
                        "title": "Project Title 10",
                        "description": "Description for the tenth project. Highlights of feedback and testimonials.",
                        "url": "https://www.projecturl10.com",
                        "image": "./img/image20.png",
                        "altText": "Image for Project 10",
                        "date": "2023-10-15",
                        "author": "Author Name"
                    }
                ]
            }
            
        ];
    }

    // Fetch the projects from the remote server
    static async loadRemote() {
        try {
            let response = await fetch('http://localhost:3003/projects');
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            
            let projects = await response.json();
            this.renderCards(projects);
        } catch (error) {
            console.error("Error loading the projects:", error);
            alert("There was an error loading the projects. Please try again later.");
        }
    }

    // Given a list of project data, render the project cards
    static renderCards(projects) {
        // Clear any existing project cards first
        const container = document.body; // This will append the project cards to the body
        const existingCards = document.querySelectorAll('project-card');
        existingCards.forEach(card => card.remove());

        projects.forEach(project => {
            const card = document.createElement('project-card');
            
            // Populate the card properties using the setters
            card.name = project.title;
            card.description = project.description;
            card.url = project.url;
            card.image = project.image;
            card.alt = project.alt || project.name + " image"; // Use provided alt or default to the project name
            card.author = project.author;
            card.date = project.date;

            container.appendChild(card);
        });
    }

    // If you also want a method to load from localStorage
    static loadLocal() {
        try {
            const projectsData = JSON.parse(localStorage.getItem('projects'));
            if (!projectsData) {
                console.error("No local projects found.");
                return;
            }
            const projects = projectsData[0].projects;  // Extract the projects from the object
            this.renderCards(projects);
        } catch (error) {
            console.error("Error loading local projects:", error);
        }
    }

    // Saving to localStorage (if you need this functionality later)
    static saveToLocal(projects) {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch (error) {
            console.error("Error saving projects to local storage:", error);
        }
    }
}
ProjectCardManager.initLocalStorage();
// Expose the class to the global window object so it can be accessed in your HTML inline scripts
window.ProjectCardManager = ProjectCardManager;
