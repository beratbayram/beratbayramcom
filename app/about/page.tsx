import auLogo from "@/lib/assets/au.webp";
import css from "@/lib/assets/css.svg";
import lit from "@/lib/assets/lit.svg";
import nextJS from "@/lib/assets/next.svg";
import react from "@/lib/assets/react.svg";
import sass from "@/lib/assets/sass.svg";
import TS from "@/lib/assets/ts.svg";
import tailwind from "@/lib/assets/tw.svg";
import uefLogo from "@/lib/assets/uef.webp";
import wc from "@/lib/assets/wc.svg";
import BrPdfDownloadButton from "@/lib/components/BrPdfDownloadButton";
import BrPrintButton from "@/lib/components/BrPrintButton";
import CertificateItem from "@/lib/components/CertificateItem";
import EducationItem from "@/lib/components/EducationItem";
import ExperienceItem from "@/lib/components/ExperienceItem";
import PageHeader from "@/lib/components/PageHeader";
import Section from "@/lib/components/Section";
import Skill from "@/lib/components/Skill";
import SkillsGrid from "@/lib/components/SkillsGrid";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";
import { Groups, Psychology, RecordVoiceOver } from "@mui/icons-material";
import { ButtonGroup } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Experience, Skills & Background",
  description:
    "Learn about Berat BAYRAM's professional journey as a Front-End Engineer at TÜBİTAK. Explore my experience building UI libraries, leading Micro Front-End Architecture, mentoring teams, and expertise in React, Next.js, TypeScript, and Lit.",
  keywords: getKeywords.page("about"),
  openGraph: {
    title: "About Berat BAYRAM - Front-End Engineer & Team Lead",
    description:
      "Professional journey and expertise of Berat BAYRAM, Front-End Engineer specializing in React, TypeScript, and UI architecture at TÜBİTAK.",
    url: "https://beratbayram.com/about",
  },
};

const ICON_SX = {
  fontSize: 48,
  mb: 2,
  color: "primary.main",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PageHeader
          title="About Me"
          printTitle="Berat BAYRAM"
          description="Front-End Engineer with expertise in React, Next.js, TypeScript, and
          Lit. Built UI libraries, led architecture, and mentored teams at
          TÜBİTAK BİLGEM YTE. Strong in scalable front-end systems and
          cross-team leadership."
          action={
            <div className="text-shadow-none print:hidden">
              <ButtonGroup variant="contained" className="m-1">
                <BrPdfDownloadButton />
                <BrPrintButton variant="outlined" />
              </ButtonGroup>
            </div>
          }
        />
        <Section title="Work Experience">
          <ExperienceItem
            title="Frontend Web Developer"
            company="TUBITAK BILGEM YTE"
            location="Ankara"
            period="Jul 2022 - Present"
            description={[
              "Built reusable UI libraries (React, Lit, TypeScript) used across projects",
              "Designed a custom Micro Front-End architecture",
              "Developed with Next.js",
              "Delivered company-wide lectures while mentoring three cohorts of interns",
            ]}
          />

          <ExperienceItem
            title="Part-Time Front-End Web Developer"
            company="TUBITAK BILGEM YTE"
            location="Cankaya, Ankara, Turkey"
            period="Jan 2022 - Jul 2022"
            description={["Refactored a huge legacy UI library"]}
          />

          <ExperienceItem
            title="Internship & Part-Time Software Support Engineer"
            company="P.I. Works, Inc."
            location="Istanbul, Turkey"
            period="Jul 2021 - Jan 2022"
            description={[
              "Optimized data pipelines",
              "Supported a multilingual team",
              "Delivered effective customer support",
            ]}
          />

          <ExperienceItem
            title="Front-end Web Development Intern"
            company="Perwatch"
            period="Jan 2021 - Jul 2021"
            description={[
              "Single-handedly developed a front-end application using React, Electron, and Sass",
            ]}
          />
        </Section>

        <Section title="Volunteer Experience">
          <ExperienceItem
            title="Co-Lead & Designer"
            company="YAZGİT - Yapay Zeka ve Görüntü İşleme Topluluğu"
            period="Sep 2019 - Present"
            url="https://instagram.com/au_yazgit/"
          />

          <ExperienceItem
            title="Google Developer Student Clubs Lead & Founder"
            company="Google"
            period="Nov 2019 - Aug 2020"
            url="https://x.com/dscankarauni"
          />

          <ExperienceItem
            title="Designer"
            company="DSCFest"
            period="Aug 2020"
            url="https://youtu.be/MK3g7f6A-P8?t=9958"
            description={[
              "DSCFest marked the finale of the 2019-2020 season, where leads showcased their yearly achievements",
              "Demonstrated design skills by hosting an online Photoshop workshop, recreating the DSCFest banner from scratch",
            ]}
          />

          <ExperienceItem
            title="Designer"
            company="ML Days"
            period="Apr 2020 - Aug 2020"
            url="https://bit.ly/mldays"
            description={[
              "ML Days is a training series featuring expert Machine Learning educators",
              "Offered guidance on advancing in the field, self-development, and learning popular ML algorithms in an engaging environment",
              "Event website available at the provided link",
            ]}
          />
        </Section>

        <Section title="Core Skills">
          <SkillsGrid title="Hard Skills:">
            <Skill
              name="React.js"
              href="https://react.dev/"
              icon={react}
              iconAlt="React Logo"
            />

            <Skill
              name="Next.js"
              href="https://nextjs.org/"
              icon={nextJS}
              iconAlt="Next.js Logo"
              iconClassName="dark:invert"
            />

            <Skill
              name="TypeScript"
              href="https://www.typescriptlang.org/"
              icon={TS}
              iconAlt="TypeScript Logo"
            />

            <Skill
              name="Lit"
              href="https://lit.dev/"
              icon={lit}
              iconAlt="Lit Logo"
            />

            <Skill
              name="Web Components"
              href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
              icon={wc}
              iconAlt="Web Components Logo"
            />

            <Skill
              name="CSS3"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              icon={css}
              iconAlt="CSS3 Logo"
            />

            <Skill
              name="SASS"
              href="https://sass-lang.com/"
              icon={sass}
              iconAlt="SASS Logo"
            />

            <Skill
              name="Tailwind CSS"
              href="https://tailwindcss.com/"
              icon={tailwind}
              iconAlt="Tailwind CSS Logo"
            />
          </SkillsGrid>

          <SkillsGrid
            title="Soft Skills:"
            gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            <Skill
              name="Community Management"
              muiIcon={<Groups sx={ICON_SX} />}
            />

            <Skill name="Leadership" muiIcon={<Psychology sx={ICON_SX} />} />

            <Skill
              name="Public Speaking"
              muiIcon={<RecordVoiceOver sx={ICON_SX} />}
            />
          </SkillsGrid>
        </Section>

        <Section title="Education">
          <EducationItem
            institution="Ankara University"
            degree="Bachelor's degree Computer Engineering"
            period="Aug 2017 - Jun 2022"
            gpa={3.69}
            logoSrc={auLogo}
            logoAlt="Ankara University Logo"
          />

          <EducationItem
            institution="University of Eastern Finland"
            degree="Erasmus+ Computer Science"
            period="Jan 2021 - Jun 2021"
            logoSrc={uefLogo}
            logoAlt="University of Eastern Finland Logo"
          />
        </Section>

        <Section title="Languages">
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>English:</strong> Professional Working Proficiency
            </li>
            <li>
              <strong>Turkish:</strong> Native Proficiency
            </li>
          </ul>
        </Section>

        <Section title="Certificates">
          <ul className="list-inside list-disc space-y-4">
            <CertificateItem
              title="UX/UI Design"
              issuer="Bahcesehir University"
              url="https://drive.google.com/file/d/1k5FNs10I7qrssCZp_eOu1T7JHEiMb7Bj/view?usp=sharing"
            />
            <CertificateItem
              title="Introduction to Front-End Development"
              issuer="Meta"
              url="https://www.coursera.org/account/accomplishments/certificate/6ABVVAPEQK7A"
            />
            <CertificateItem
              title="Erasmus Certificate of Achievement"
              issuer="Ankara University"
              url="https://drive.google.com/file/d/1S2ULACiSMlkPKGD5I3kzEkKX7ePJlDJn/view?usp=sharing"
            />
            <CertificateItem
              title="DSC lead - Certificate of Completion"
              issuer="Google Developers"
              url="https://drive.google.com/file/d/1jmDVpTuzAzyKNQ0HYkFK2NFRyf6yOtUs/view?usp=sharing"
            />
            <CertificateItem
              title="CCNA Routing and Switching: Introduction to Networks"
              issuer="Cisco Networking Academy"
              url="https://drive.google.com/file/d/1ptEhnUJvYpNb60HxtXeqjow-BacdsO0O/"
            />
          </ul>
        </Section>
      </div>
    </div>
  );
}
