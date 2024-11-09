var _a;
// Function to generate resume dynamically
function generateResume() {
    // Get form elements
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var educationInput = document.getElementById("education");
    var workExperienceInput = document.getElementById("workExperience");
    var profileImageInput = document.getElementById("profileImage");
    // Create resume data object
    var resumeData = {
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        education: educationInput.value,
        workExperience: workExperienceInput.value,
        profileImage: profileImageInput.files ? profileImageInput.files[0] : null,
    };
    // Generate the resume
    displayResume(resumeData);
}
// Function to display the resume dynamically in the preview section
function displayResume(resumeData) {
    var resumePreview = document.getElementById("resumePreview");
    // If there is an image, read it as base64
    if (resumeData.profileImage) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            var imgData = reader_1.result;
            resumePreview.innerHTML = "\n                <img src=\"".concat(imgData, "\" alt=\"Profile Image\">\n                <h2>").concat(resumeData.name, "</h2>\n                <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n                <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n                <h3>Education</h3>\n                <p>").concat(resumeData.education, "</p>\n                <h3>Work Experience</h3>\n                <p>").concat(resumeData.workExperience, "</p>\n            ");
        };
        reader_1.readAsDataURL(resumeData.profileImage); // Convert image to base64
    }
    else {
        // If no image, display only text data
        resumePreview.innerHTML = "\n            <h2>".concat(resumeData.name, "</h2>\n            <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n            <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n            <h3>Education</h3>\n            <p>").concat(resumeData.education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(resumeData.workExperience, "</p>\n        ");
    }
}
// Add event listener to button
(_a = document.getElementById("generateResumeButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generateResume);
