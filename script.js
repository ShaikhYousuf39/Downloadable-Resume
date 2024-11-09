function saveDataAndRedirect() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var summary = document.getElementById("summary").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var projects = document.getElementById("projects").value;
    var achievements = document.getElementById("achievements").value;
    var photo = "";
    var photoInput = document.getElementById("photo");
    if (photoInput.files && photoInput.files[0]) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            photo = reader_1.result;
            var resumeData = { name: name, email: email, phone: phone, summary: summary, education: education, experience: experience, skills: skills, projects: projects, achievements: achievements, photo: photo };
            localStorage.setItem("resumeData", JSON.stringify(resumeData));
            window.location.href = "resume.html?id=".concat(Date.now());
        };
        reader_1.readAsDataURL(photoInput.files[0]);
    }
    else {
        var resumeData = { name: name, email: email, phone: phone, summary: summary, education: education, experience: experience, skills: skills, projects: projects, achievements: achievements };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "resume.html?id=".concat(Date.now());
    }
}
