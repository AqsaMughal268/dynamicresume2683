// Interface to define the structure of resume data
interface ResumeData {
    name: string;
    phone: string;
    email: string;
    education: string;
    workExperience: string;
    profileImage: File | null;
}

// Function to generate resume dynamically
function generateResume() {
    // Get form elements
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const workExperienceInput = document.getElementById("workExperience") as HTMLTextAreaElement;
    const profileImageInput = document.getElementById("profileImage") as HTMLInputElement;

    // Create resume data object
    const resumeData: ResumeData = {
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
function displayResume(resumeData: ResumeData) {
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;

    // If there is an image, read it as base64
    if (resumeData.profileImage) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgData = reader.result as string;
            resumePreview.innerHTML = `
                <img src="${imgData}" alt="Profile Image">
                <h2>${resumeData.name}</h2>
                <p><strong>Phone:</strong> ${resumeData.phone}</p>
                <p><strong>Email:</strong> ${resumeData.email}</p>
                <h3>Education</h3>
                <p>${resumeData.education}</p>
                <h3>Work Experience</h3>
                <p>${resumeData.workExperience}</p>
            `;
        };
        reader.readAsDataURL(resumeData.profileImage); // Convert image to base64
    } else {
        // If no image, display only text data
        resumePreview.innerHTML = `
            <h2>${resumeData.name}</h2>
            <p><strong>Phone:</strong> ${resumeData.phone}</p>
            <p><strong>Email:</strong> ${resumeData.email}</p>
            <h3>Education</h3>
            <p>${resumeData.education}</p>
            <h3>Work Experience</h3>
            <p>${resumeData.workExperience}</p>
        `;
    }
}

// Add event listener to button
document.getElementById("generateResumeButton")?.addEventListener("click", generateResume);
