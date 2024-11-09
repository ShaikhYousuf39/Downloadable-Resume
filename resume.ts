interface ResumeData {
    name: string;
    email: string;
    phone: string;
    summary: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    achievements: string;
    photo?: string;
}

// Load resume data
const resumeData: ResumeData = JSON.parse(localStorage.getItem("resumeData")!);

// Populate preview fields
if (resumeData) {
    document.getElementById("previewName")!.textContent = resumeData.name;
    document.getElementById("previewEmail")!.textContent = resumeData.email;
    document.getElementById("previewPhone")!.textContent = resumeData.phone;
    document.getElementById("previewSummary")!.textContent = resumeData.summary;
    document.getElementById("previewEducation")!.textContent = resumeData.education;
    document.getElementById("previewExperience")!.textContent = resumeData.experience;
    document.getElementById("previewSkills")!.textContent = resumeData.skills;
    document.getElementById("previewProjects")!.textContent = resumeData.projects;
    document.getElementById("previewAchievements")!.textContent = resumeData.achievements;

    const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
    if (resumeData.photo) {
        resumePhoto.src = resumeData.photo;
        resumePhoto.style.display = "block";
    }
}

// Download function
function downloadResume(): void {
    const element = document.body;
    html2pdf().from(element).save("resume.pdf");
}
