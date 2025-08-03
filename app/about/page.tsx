import BrPrintButton from "@/lib/components/BrPrintButton";
import Skill from "@/lib/components/Skill";
import ExperienceItem from "@/lib/components/ExperienceItem";
import EducationItem from "@/lib/components/EducationItem";
import CertificateItem from "@/lib/components/CertificateItem";
import Section from "@/lib/components/Section";
import SkillsGrid from "@/lib/components/SkillsGrid";
import PageHeader from "@/lib/components/PageHeader";
import { Groups, Psychology, RecordVoiceOver } from "@mui/icons-material";
import react from "@/lib/assets/react.svg";
import nextJS from "@/lib/assets/next.svg";
import TS from "@/lib/assets/ts.svg";
import lit from "@/lib/assets/lit.svg";
import wc from "@/lib/assets/wc.svg";
import css from "@/lib/assets/css.svg";
import sass from "@/lib/assets/sass.svg";
import tailwind from "@/lib/assets/tw.svg";
import { Metadata } from "next";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";

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
          action={<BrPrintButton />}
        />
        <Section title="Work Experience">
          <ExperienceItem
            title="Frontend Web Developer"
            company="TUBITAK BILGEM YTE"
            location="Ankara"
            period="Jul 2022 – Present"
            description={[
              "Developed a React UI library and Web Components library using Lit and Typescript and used in multiple projects",
              "Orchestrated a custom Micro Front-End Architecture",
              "Developed using Next.js",
              "Gave company-wide lectures",
              "Mentored 2 generations of interns",
            ]}
          />

          <ExperienceItem
            title="Part-Time Front-End Web Developer"
            company="TUBITAK BILGEM YTE"
            location="Cankaya, Ankara, Turkey"
            period="Jan 2022 – Jul 2022"
            description={[
              "Worked as a Front-End Developer specializing in CSS design with SASS",
            ]}
          />

          <ExperienceItem
            title="Part-Time Software Support Intern & Engineer"
            company="P.I. Works, Inc."
            location="Istanbul, Turkey"
            period="Jul 2021 – Jan 2022"
            description={[
              "Maintained in-house data processing pipelines",
              "Worked in a multi-language environment",
              "Handled customer issues",
            ]}
          />

          <ExperienceItem
            title="Front-end Web Development Intern"
            company="Perwatch"
            period="Jan 2021 – Jul 2021"
            description={[
              "Single-handedly developed a front-end application using React, Electron, and Sass",
            ]}
          />
        </Section>

        <Section title="Volunteer Experience">
          <ExperienceItem
            title="Co-Lead & Designer"
            company="YAZGİT - Yapay Zeka ve Görüntü İşleme Topluluğu"
            period="Sep 2019 – Present"
            url="https://instagram.com/au_yazgit/"
          />

          <ExperienceItem
            title="Google Developer Student Clubs Lead & Founder"
            company="Google"
            period="Nov 2019 – Aug 2020"
            url="https://x.com/dscankarauni"
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
              muiIcon={
                <Groups
                  sx={{
                    fontSize: 48,
                    mb: 2,
                    color: "primary.main",
                  }}
                />
              }
            />

            <Skill
              name="Leadership"
              muiIcon={
                <Psychology
                  sx={{
                    fontSize: 48,
                    mb: 2,
                    color: "primary.main",
                  }}
                />
              }
            />

            <Skill
              name="Public Speaking"
              muiIcon={
                <RecordVoiceOver
                  sx={{
                    fontSize: 48,
                    mb: 2,
                    color: "primary.main",
                  }}
                />
              }
            />
          </SkillsGrid>
        </Section>

        <Section title="Education">
          <EducationItem
            institution="Ankara University"
            degree="Bachelor's Degree @ Computer Engineering"
            period="Jan 2017 – Jan 2022"
            gpa={3.69}
          />

          <EducationItem
            institution="University of Eastern Finland"
            degree="Erasmus+ @ Computer Science"
            period="Jan 2021 – Jan 2021"
          />
        </Section>

        <Section title="Languages">
          <ul className="list-inside list-disc space-y-2">
            <li>English (PROFESSIONAL_WORKING)</li>
            <li>Turkish (NATIVE_OR_BILINGUAL)</li>
          </ul>
        </Section>

        <Section title="Certificates">
          <ul className="list-inside list-disc space-y-4">
            <CertificateItem
              title="Effective Presentation Techniques"
              issuer="ANR Business Development Academy"
              url="https://credential.certifyme.online/verify/2943f37414373"
            />
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
              title="DSC lead - Certificate of Completition"
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
