<template>
    <div class="prospective-students-section">
      <HeaderBar />
      <div class="spacer"></div>
      <div class="content-wrapper">
        <div class="section">
          <h2>Ph.D. Research Positions</h2>
          <p>
            We regularly have openings for research and teaching assistant-ships for students interested in obtaining a Ph.D. degree with research in mixed-signal and digital integrated electronics and systems. Prior experience in electronic design (preferably including integrated circuit design) is a must.
          </p>
          <p>
            Due to the core focus of this group, incoming students should have basic knowledge of open-source software and should be able to operate in the Linux environment.
          </p>
          <p>
            Please check out the school's graduate admissions page and the EE department's graduate program page to learn about the various requirements of our program.
          </p>
          <p>
            Self-driven, highly motivated candidates can contact Dr. Mehdi via Email. Please make sure your email includes details on your education, on your motivation, and on your prior research or design experience. Make sure to start the subject of your email with "[Prospective PhD Student]".
          </p>
          <p>
            After processing your materials, I will contact you directly or assign a Ph.D. student of mine to schedule an interview with you about your resume projects.
          </p>
        </div>
        <div class="section">
          <h2>Undergraduate & M.S. Student Research Positions</h2>
          <p>
            Our group also has regular openings for Undergrad & M.S. students for any student interested in our research. Please contact Dr. Mehdi via Email for details. Make sure to start the subject of your email with "[Prospective Undergrad Student]" or "[Prospective MS Student]".
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProspectiveStudentsPage",
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");
  
  /* General content styling */
  .prospective-students-section {
    margin: 0;
    text-align: left;
  }
  
  /* Spacer for blank line after HeaderBar */
  .spacer {
    margin-top: 20px; /* Creates a blank line after the HeaderBar */
    margin-left: 400px;
  }
  
  /* Apply padding only to the content wrapper */
  .content-wrapper {
    padding: 40px 200px; /* Add padding to the left and right */
  }
  
  /* Header styling */
  h1 {
    font-size: 2.5em;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  
  /* Section titles */
  h2 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #2c3e50;
  }
  
  /* Paragraphs */
  p {
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #555;
  }
/* Mobile-specific styles */
@media (max-width: 768px) {
  /* Adjust content wrapper padding for smaller screens */
  .content-wrapper {
    padding: 20px; /* Reduced padding for smaller screens */
  }

  /* Spacer adjustment */
  .spacer {
    margin-left: 0; /* Remove excessive left margin */
  }

  /* Header font size adjustments */
  h1 {
    font-size: 2em; /* Reduce font size for smaller screens */
  }

  h2 {
    font-size: 1.5em; /* Slightly smaller section titles */
  }

  /* Paragraph font size adjustments */
  p {
    font-size: 0.95em; /* Slightly smaller text for readability on mobile */
    line-height: 1.4; /* Adjust line spacing for smaller screens */
  }
}

/* Extra-small screens (mobile phones) */
@media (max-width: 480px) {
  /* Further reduce padding on very small screens */
  .content-wrapper {
    padding: 10px;
  }

  /* Adjust font sizes for extra small screens */
  h1 {
    font-size: 1.8em;
  }

  h2 {
    font-size: 1.3em;
  }

  p {
    font-size: 0.9em;
  }
}
</style>

  