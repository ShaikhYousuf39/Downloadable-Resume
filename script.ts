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

function saveDataAndRedirect(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
    const achievements = (document.getElementById("achievements") as HTMLTextAreaElement).value;

    let photo = "";
    const photoInput = document.getElementById("photo") as HTMLInputElement;
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            photo = reader.result as string;
            const resumeData: ResumeData = { name, email, phone, summary, education, experience, skills, projects, achievements, photo };
            localStorage.setItem("resumeData", JSON.stringify(resumeData));
            window.location.href = `resume.html?id=${Date.now()}`;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        const resumeData: ResumeData = { name, email, phone, summary, education, experience, skills, projects, achievements };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = `resume.html?id=${Date.now()}`;
    }
}
