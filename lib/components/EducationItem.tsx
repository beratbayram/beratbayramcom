interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: number;
}

export default function EducationItem({
  institution,
  degree,
  period,
  gpa,
}: EducationItemProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold">{institution}</h3>
      <p className="mb-2 text-gray-600 dark:text-gray-400">{degree}</p>
      {gpa && (
        <p className="mb-2 text-gray-600 dark:text-gray-400">
          <strong>GPA:</strong> {gpa}
        </p>
      )}
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        <strong>{period}</strong>
      </p>
    </div>
  );
}
