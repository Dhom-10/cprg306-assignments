import Link from "next/link";
export default function StudentInfo() {
  return (
    <div>
      <h1>Student Information</h1>
      <h2>NAME: Abdulrahman Nasser</h2>
      <p>
        GitHub Repository Link:{" "}
        <Link href="https://github.com/Dhom-10/cprg306-assignments">
        "https://github.com/Dhom-10/cprg306-assignments""https://github.com/Dhom-10/cprg306-assignments"
        </Link>


      </p>
    </div>
  );
}