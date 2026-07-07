import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { REVIEWS_PLACEHOLDER } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Google "G" icon — inline SVG matching Google's brand colour.
 */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("w-4 h-4", className)}
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * ReviewsSection — Section 5
 *
 * Three review cards sourced from REVIEWS_PLACEHOLDER.
 * All placeholder text is clearly marked — no fake reviews.
 * Cards are structured identically to the final design so swapping in
 * real review data requires only data changes in lib/constants.ts.
 */
export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="section-padding bg-background"
      aria-labelledby="reviews-heading"
    >
      <div className="container-padded">

        {/* Heading */}
        <AnimatedWrapper>
          <SectionHeading
            label="Patient Reviews"
            heading="What Our Patients Say"
            subheading="Real experiences from families we have cared for."
            id="reviews-heading"
          />
          <div className="mt-6 flex flex-col items-center justify-center gap-1 bg-white border border-border/70 shadow-sm rounded-2xl py-3 px-6 w-fit mx-auto">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" strokeWidth={0} />
                ))}
              </div>
              <span className="text-[15px] font-bold text-foreground">4.9/5 Rating</span>
            </div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Based on 185 Google Reviews
            </p>
          </div>
        </AnimatedWrapper>

        {/* Review Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_PLACEHOLDER.map((review, index) => (
            <AnimatedWrapper key={review.id} delay={index * 0.1}>
              <article
                className={cn(
                  "flex flex-col h-full rounded-2xl border border-border/70 bg-white",
                  "p-7",
                  "hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                  "transition-shadow duration-300"
                )}
                aria-label={`Patient review by ${review.name}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  {/* Reviewer avatar */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-xs font-bold text-primary">
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Google branding */}
                  <GoogleIcon />
                </div>

                {/* Star rating */}
                <div
                  className="flex items-center gap-0.5 mb-4"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-border text-border"
                      )}
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1 line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </article>
            </AnimatedWrapper>
          ))}
        </div>

        {/* View All on Google */}
        <AnimatedWrapper className="flex justify-center mt-12">
          <Link
            href="https://www.google.com/search?sca_esv=ba3772bf42af157a&sxsrf=APpeQnvToSwuXecxYJd4Y4_CvvLGu_fnDw:1783264927020&si=APenkKnzv9m99ToiohAuzpadUwbOz34nZJ3j2Ukmo5XOUYWApmpvFMN7XFzN8hCM5Dqqam0uUaHGf2bnts0uMsiOYfOjbgIhfDWhGnQ1BxMtftLkdvI-C3sDc1MY8KAQCvAfq9ikvt61K0ChWO-Q60NUa_N23LP94PJHd_7-gqt1hx7owbdQuaQ%3D&q=Kavita+Dental+Clinic%28+SINCE+2005%29+Reviews&sa=X&ved=2ahUKEwi0uI_E67uVAxXYSmwGHVfACR8Q0bkNegQIIhAF&biw=1470&bih=772&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground",
              "border border-border rounded-xl px-6 py-3 bg-white",
              "hover:text-foreground hover:border-foreground/20",
              "transition-colors duration-150"
            )}
            aria-label="View all reviews on Google (opens in new tab)"
          >
            <GoogleIcon />
            View All Reviews on Google
            <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </AnimatedWrapper>

      </div>
    </section>
  );
}
