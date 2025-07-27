import BrPrintButton from "@/lib/components/BrPrintButton";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import react from "@/lib/assets/react.svg";
import nextJS from "@/lib/assets/next.svg";
import TS from "@/lib/assets/ts.svg";
import lit from "@/lib/assets/lit.svg";
import {
  Code as WebComponentIcon,
  Css as CssIcon,
  DesignServices as DesignIcon,
  Groups as CommunityIcon,
  Person as LeadershipIcon,
  RecordVoiceOver as SpeakingIcon,
} from "@mui/icons-material";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold print:hidden">About Me</h1>
            <h1 className="hidden text-4xl font-bold print:block">
              Berat BAYRAM
            </h1>
          </div>
          <BrPrintButton />
        </div>

        <p className="mb-8">
          Front-End Engineer with expertise in React, Next.js, TypeScript, and
          Lit. Built UI libraries, led architecture, and mentored teams at
          TÜBİTAK BİLGEM YTE. Strong in scalable front-end systems and
          cross-team leadership.
        </p>
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Work Experience</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Frontend Web Developer</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>TUBITAK BILGEM YTE | Ankara</strong>
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Jul 2022 – Present</strong>
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Developed a React UI library and Web Components library using
                Lit and Typescript and used in multiple projects
              </li>
              <li>Orchestrated a custom Micro Front-End Architecture</li>
              <li>Developed using Next.js</li>
              <li>Gave company-wide lectures</li>
              <li>Mentored 2 generations of interns</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">
              Part-Time Front-End Web Developer
            </h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>TUBITAK BILGEM YTE | Cankaya, Ankara, Turkey</strong>
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Jan 2022 – Jul 2022</strong>
            </p>
            <ul className="list-inside list-disc">
              <li>
                Worked as a Front-End Developer specializing in CSS design with
                SASS
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">
              Part-Time Software Support Intern & Engineer
            </h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>P.I. Works, Inc. | Istanbul, Turkey</strong>
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Jul 2021 – Jan 2022</strong>
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Maintained in-house data processing pipelines</li>
              <li>Worked in a multi-language environment</li>
              <li>Handled customer issues</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">
              Front-end Web Development Intern
            </h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>Perwatch</strong>
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Jan 2021 – Jul 2021</strong>
            </p>
            <ul className="list-inside list-disc">
              <li>
                Single-handedly developed a front-end application using React,
                Electron, and Sass
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Volunteer Experience</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Co-Lead & Designer</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>YAZGİT - Yapay Zeka ve Görüntü İşleme Topluluğu</strong>
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <a
                href="https://instagram.com/au_yazgit/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram.com/au_yazgit/
              </a>
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Sep 2019 – Present</strong>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">
              Google Developer Student Clubs Lead & Founder
            </h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>Google</strong>
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <a
                href="https://x.com/dscankarauni"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                x.com/dscankarauni
              </a>
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Nov 2019 – Aug 2020</strong>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Core Skills</h2>

          <div className="mb-6">
            <h3 className="mb-3 text-xl font-semibold">Hard Skills:</h3>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              <Card
                component="a"
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "transparent",
                      }}
                    >
                      <Image
                        src={react}
                        alt="React Logo"
                        width={48}
                        height={48}
                      />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      React.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                component="a"
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "transparent",
                      }}
                    >
                      <Image
                        src={nextJS}
                        alt="Next.js Logo"
                        width={48}
                        height={48}
                        className="dark:invert"
                      />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      Next.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                component="a"
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "transparent",
                      }}
                    >
                      <Image
                        src={TS}
                        alt="TypeScript Logo"
                        width={48}
                        height={48}
                      />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      TypeScript
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                component="a"
                href="https://lit.dev/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "transparent",
                      }}
                    >
                      <Image src={lit} alt="Lit Logo" width={48} height={48} />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      Lit
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                component="a"
                href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "primary.main",
                        color: "primary.contrastText",
                      }}
                    >
                      <WebComponentIcon />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      Web Components
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                component="a"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "#1572B6",
                        color: "white",
                      }}
                    >
                      <CssIcon />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      CSS3
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                component="a"
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        mb: 2,
                        backgroundColor: "#CF649A",
                        color: "white",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        S
                      </Typography>
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      color="text.primary"
                    >
                      SASS
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card
                sx={{
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      backgroundColor: "#9C27B0",
                      color: "white",
                    }}
                  >
                    <DesignIcon />
                  </Avatar>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    UI/UX
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-xl font-semibold">Soft Skills:</h3>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
              }}
            >
              <Card
                sx={{
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      backgroundColor: "#FF6F00",
                      color: "white",
                    }}
                  >
                    <CommunityIcon />
                  </Avatar>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    Community Management
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      backgroundColor: "#2E7D32",
                      color: "white",
                    }}
                  >
                    <LeadershipIcon />
                  </Avatar>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    Leadership
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 2,
                      backgroundColor: "#1976D2",
                      color: "white",
                    }}
                  >
                    <SpeakingIcon />
                  </Avatar>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    color="text.primary"
                  >
                    Public Speaking
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Education</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Ankara University</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Bachelor&apos;s degree Computer Engineering
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              <strong>GPA:</strong> 3.69
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Jan 2017 – Jan 2022</strong>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">
              University of Eastern Finland
            </h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Erasmus+ Computer Science
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              <strong>Jan 2021 – Jan 2021</strong>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Languages</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>English (PROFESSIONAL_WORKING)</li>
            <li>Turkish (NATIVE_OR_BILINGUAL)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Certificates</h2>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>
                <a
                  href="https://credential.certifyme.online/verify/2943f37414373"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Effective Presentation Techniques
                </a>
              </strong>
              <br />
              <em className="text-gray-600 dark:text-gray-400">
                ANR Business Development Academy
              </em>
            </li>
            <li>
              <strong>
                <a
                  href="https://drive.google.com/file/d/1k5FNs10I7qrssCZp_eOu1T7JHEiMb7Bj/view?usp=sharing"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UX/UI Design
                </a>
              </strong>
              <br />
              <em className="text-gray-600 dark:text-gray-400">
                Bahcesehir University
              </em>
            </li>
            <li>
              <strong>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/6ABVVAPEQK7A"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to Front-End Development
                </a>
              </strong>
              <br />
              <em className="text-gray-600 dark:text-gray-400">Meta</em>
            </li>
            <li>
              <strong>
                <a
                  href="https://drive.google.com/file/d/1S2ULACiSMlkPKGD5I3kzEkKX7ePJlDJn/view?usp=sharing"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Erasmus Certificate of Achievement
                </a>
              </strong>
              <br />
              <em className="text-gray-600 dark:text-gray-400">
                Ankara University
              </em>
            </li>
            <li>
              <strong>
                <a
                  href="https://drive.google.com/file/d/1jmDVpTuzAzyKNQ0HYkFK2NFRyf6yOtUs/view?usp=sharing"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DSC lead - Certificate of Completition
                </a>
              </strong>
              <br />
              <em className="text-gray-600 dark:text-gray-400">
                Google Developers
              </em>
            </li>
            <li>
              <strong>
                <a
                  href="https://drive.google.com/file/d/1ptEhnUJvYpNb60HxtXeqjow-BacdsO0O/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CCNA Routing and Switching: Introduction to Networks
                </a>
              </strong>
              <br />
              <em className="text-gray-600 dark:text-gray-400">
                Cisco Networking Academy
              </em>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
