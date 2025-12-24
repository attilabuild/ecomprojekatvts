import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCourseBySlug } from "../../data/courses";

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const isFree = course.price.toLowerCase() === "free";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="bg-blue-600 px-3 py-1 rounded text-sm font-semibold">
                {course.level}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{course.fullDescription}</p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What You&apos;ll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-800">
                        Module {moduleIndex + 1}: {module.module}
                      </h3>
                    </div>
                    <div className="px-6 py-4">
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start gap-3 text-gray-700">
                            <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {course.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {course.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <div className="px-6 py-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-4xl font-bold ${isFree ? 'text-green-600' : 'text-[#1a1a2e]'}`}>
                        {isFree ? 'Free' : `$${course.price}`}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">Lifetime access</p>
                  </div>
                  {isFree ? (
                    <Link
                      href={`/course/${course.slug}/enroll`}
                      className="block w-full text-center py-3 px-6 rounded font-semibold transition-colors mb-4 bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                    >
                      Get Course for Free
                    </Link>
                  ) : (
                    <Link
                      href={`/checkout?course=${course.slug}`}
                      className="block w-full text-center py-3 px-6 rounded font-semibold transition-colors mb-4 bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Buy Now
                    </Link>
                  )}
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

