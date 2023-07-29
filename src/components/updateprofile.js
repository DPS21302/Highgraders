import React, { useEffect, useState } from "react";
import profilepic from './images/pic-1.jpg';
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import handleDarkMode from "./Darkmode";

function UpdateProfile() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const availableSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java"];
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setShowSkillsDropdown(false);
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((item) => item !== skill));
  };

  const [semester, setSemester] = useState(1);
  const [cpi, setCPI] = useState(7.5);
  const [hobbies, setHobbies] = useState([]);
  const [goals, setGoals] = useState("");

  useEffect(() => {
    handleDarkMode();
  }, []);

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleCpiChange = (event) => {
    setCPI(event.target.value);
  };

  const handleHobbiesChange = (event) => {
    setHobbies(event.target.value.split(",").map((hobby) => hobby.trim()));
  };

  const handleGoalsChange = (event) => {
    setGoals(event.target.value);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div class="update">
        <section class="form-container">
          <form action="" method="post" encType="multipart/form-data">
            <h3>Update Profile</h3>
            <div class="profile">
              <img src={profilepic} class="image" alt="" />
              <div>
                <div class="form-row">
                  <div class="box left-field">
                    <p>Update Name</p>
                    <input type="text" name="name" placeholder="Name" maxLength="50" class="box" />
                  </div>
                  <div class="box right-field">
                    <p>Update Email</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      maxLength="50"
                      class="box"
                      disabled
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="box left-field">
                    <p>Update College</p>
                    <input
                      type="text"
                      name="college"
                      placeholder="Enter your college name"
                      maxLength="20"
                      class="box"
                    />
                  </div>
                  <div class="box right-field">
                    <p>Update Semester</p>
                    <input type="number" name="semester" value={semester} onChange={handleSemesterChange} class="box" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="box left-field">
                    <p>Gender</p>
                    <select id="dropdown" name="gender" class="box">
                      <option value=" ">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefernottosay">Prefer Not To Say</option>
                    </select>
                  </div>
                  <div class="box right-field">
                    <p>Birthdate</p>
                    <input type="date" name="birthdate" class="box" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="box left-field">
                    <p>LinkedIn URL:</p>
                    <input type="url" name="LinkedIn url" placeholder="Enter your LinkedIn URL" class="box" />
                  </div>
                  <div class="box right-field">
                    <p>Github URL:</p>
                    <input type="url" name="Github url" placeholder="Enter your Github URL" maxLength="20" class="box" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="box left-field">
                    <p>Portfolio or Resume link:</p>
                    <input type="url" name="Profile url" placeholder="Enter Resume Link" class="box" />
                  </div>
                  <div class="box right-field">
                    <p>Coding Profile or Leetcode URL:</p>
                    <input type="url" name="Coding url" placeholder="Enter Coding url" maxLength="20" class="box" />
                  </div>
                </div>
                <p>About Me</p>
                <textarea name="aboutMe" placeholder="Write something about yourself..." class="box" />

                <div class="form-row">
                  <div class="box left-field">
                    <p>Skills</p>

                    <div class="skills-dropdown">
                      <div class="selected-skill-dropdown" onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}>
                        Select Skills <i class={`arrow ${showSkillsDropdown ? "up" : "down"}`} />
                      </div>
                      {showSkillsDropdown && (
                        <div class="skills-options">
                          {availableSkills.map((skill) => (
                            <div key={skill} class="skill-option" onClick={() => handleSkillSelect(skill)}>
                              {skill}
                            </div>
                          ))}
                        </div>
                      )}
                      <div class="selected-skills-container">
                        {selectedSkills.map((skill) => (
                          <div key={skill} class="selected-skill">
                            <span>{skill}</span>
                            <button onClick={() => handleSkillRemove(skill)}>X</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div class="box right-field">
                    <p>CPI</p>
                    <input type="number" name="cpi" value={cpi} step={0.01} onChange={handleCpiChange} class="box" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="box left-field">
                    <p>Hobbies</p>
                    <input
                      type="text"
                      name="hobbies"
                      placeholder="Enter your hobbies separated by commas"
                      class="box"
                      value={hobbies.join(", ")}
                      onChange={handleHobbiesChange}
                    />
                  </div>
                  <div class="box right-field">
                    <p>Goals/Interests</p>
                    <textarea
                      name="goals"
                      placeholder="Enter your goals/interests..."
                      value={goals}
                      onChange={handleGoalsChange}
                      class="box"
                    />
                  </div>
                </div>

                {/* Remove the "Update Pic" option */}
                {/* Your existing form elements ... */}

                <input type="submit" value="update profile" name="submit" class="btn" />
              </div>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default UpdateProfile;