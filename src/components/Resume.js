import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Box, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";

// Skills
const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 70 },
];

// Experience & Education
const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    duration: "Jan 2023 - Present",
    description: "Developed responsive web applications using React and Tailwind CSS.",
  },
  {
    role: "Junior Web Developer",
    company: "Creative Labs",
    duration: "Jun 2021 - Dec 2022",
    description: "Worked on UI/UX improvements and implemented dynamic components.",
  },
];

const education = [
  {
    degree: "MCA",
    institute: "ABC University",
    year: "2021",
    description: "Focused on frontend development and modern JavaScript frameworks.",
  },
  {
    degree: "BSc Computer Science",
    institute: "XYZ College",
    year: "2019",
    description: "Learned foundational CS concepts and programming skills.",
  },
];

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Resume() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #020617, #020617)",
        p: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          bgcolor: "#020617",
          borderRadius: 3,
          boxShadow: 5,
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Left Column */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} style={{ flex: 1 }}>
          <Box
            sx={{
              backgroundColor: "#020617",
              color: "white",
              p: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: { md: "1px solid #1f2933" },
            }}
          >
            <motion.img
              src="https://via.placeholder.com/150"
              alt="Profile"
              style={{
                width: 130,
                height: 130,
                borderRadius: "50%",
                marginBottom: "1.5rem",
                border: "4px solid #facc15",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Sudeshna
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8, textAlign: "center", mb: 4 }}>
              Frontend Developer | React & Tailwind Enthusiast
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: "#facc15",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Skills
            </Typography>

            {/* Skills */}
            {skills.map((skill) => (
              <Box key={skill.name} sx={{ width: "100%", mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {skill.icon}
                    <Typography>{skill.name}</Typography>
                  </Box>
                  <Typography>{skill.level}%</Typography>
                </Box>

                <Box sx={{ width: "100%", maxWidth: "250px" }}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: "rgba(148,163,184,0.4)",
                      "& .MuiLinearProgress-bar": { backgroundColor: "#facc15" },
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Right Column */}
        <Box sx={{ flex: 2, p: 5 }}>
          {/* EXPERIENCE */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#facc15",
              textTransform: "uppercase",
            }}
          >
            Experience
          </Typography>

          <Timeline
            position="right"
            sx={{
              "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 },
            }}
          >
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "#facc15",
                      boxShadow: "0 0 0 4px #111827",
                    }}
                  />
                  {/* ALWAYS render connector */}
                  <TimelineConnector sx={{ backgroundColor: "#4b5563", width: 2 }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", ml: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    {exp.duration}
                  </Typography>
                  <Typography sx={{ mt: 1, color: "#d1d5db" }}>{exp.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          {/* EDUCATION */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 5,
              mb: 3,
              color: "#facc15",
              textTransform: "uppercase",
            }}
          >
            Education
          </Typography>

          <Timeline
            position="right"
            sx={{
              "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 },
            }}
          >
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "#facc15",
                      boxShadow: "0 0 0 4px #111827",
                    }}
                  />
                  {/* ALWAYS render connector */}
                  <TimelineConnector sx={{ backgroundColor: "#4b5563", width: 2 }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", ml: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {edu.institute}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#e5e7eb" }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    {edu.year}
                  </Typography>
                  <Typography sx={{ mt: 1, color: "#d1d5db" }}>{edu.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
}

export default Resume;
