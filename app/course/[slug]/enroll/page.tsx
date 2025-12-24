import { notFound, redirect } from "next/navigation";
import { getCourseBySlug } from "../../../data/courses";

export default async function EnrollPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const isFree = course.price.toLowerCase() === "free";

  // If it's not a free course, redirect to checkout
  if (!isFree) {
    redirect(`/checkout?course=${course.slug}`);
  }

  // For free courses, redirect directly to dashboard
  // In a real app, this would enroll the user in the course first
  redirect("/dashboard");
}

