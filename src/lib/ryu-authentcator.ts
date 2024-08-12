import { useSession } from "next-auth/react";
import { horizonmail } from "@/lib/data";
export function RyuAuthenticator() {
  const { data: session, status } = useSession();
  let studentId = "";
  if (session) {
    studentId =
      session.user?.email && session.user.email.includes("@")
        ? session.user.email.split("@")[0]
        : "";
  }
  if (status === "authenticated" && horizonmail.includes(studentId)) {
    return true;
  } else {
    return false;
  }
}
