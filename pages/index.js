import { useRouter } from "next/router";
import image from "./images.png";

export default function Home() {
  const router = useRouter();

  return (
    <>
  
      <div
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "1rem",
        }}
      >
        <div className="mb-5">
  <img
    src="/images.png" // Correct usage of the imported logo
    alt="Logo"
    className="h-25 w-100 rounded-full"
  />
</div>


        <div
          style={{
            width: "100%",
            maxWidth: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "2rem", // Vertical spacing between buttons
          }}
        >
          <button
            type="button"
            style={{
              width: "100%",
              height: "60px",
              color: "white",
              backgroundColor: "#EF4444",

              border: "none",
              borderRadius: "1rem",
              fontWeight: "500",
              fontSize: "1.5rem",
              padding: "0.625rem 1.25rem",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => router.push("/login/admin")} // Navigates to `/admin`
          >
            Admin
          </button>
          <button
            type="button"
            style={{
              width: "100%",
              height: "60px",
              color: "white",
              backgroundColor: "#EF4444",
              border: "none",
              borderRadius: "1rem",
              fontWeight: "500",
              fontSize: "1.5rem",
              padding: "0.625rem 1.25rem",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => router.push("/login/faculty")} // Navigates to `/faculty`
          >
            Faculty
          </button>
          <button
            type="button"
            style={{
              width: "100%",
              height: "60px",
              color: "white",
              backgroundColor: "#EF4444",
              border: "none",
              borderRadius: "1rem",
              fontWeight: "500",
              fontSize: "1.5rem",
              padding: "0.625rem 1.25rem",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => router.push("/login/student")} // Navigates to `/student`
          >
            Student
          </button>
        </div>
      </div>
    </>
  );
}
