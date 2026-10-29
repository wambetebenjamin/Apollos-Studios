import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "/images/page-banner.jpg",
}: {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  backgroundImage?: string;
}) {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center">
            <h1 className="mb-2 bread">{title}</h1>
            {subtitle ? (
              <p
                className="mb-3 mx-auto"
                style={{
                  maxWidth: "42rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "16px",
                }}
              >
                {subtitle}
              </p>
            ) : null}
            <p className="breadcrumbs">
              <span className="mr-2">
                <Link href="/">
                  Home <i className="ion-ios-arrow-forward" aria-hidden="true" />
                </Link>
              </span>
              {breadcrumbs.map((crumb, idx) =>
                crumb.href ? (
                  <span key={`${crumb.label}-${idx}`} className="mr-2">
                    <Link href={crumb.href}>
                      {crumb.label}{" "}
                      <i className="ion-ios-arrow-forward" aria-hidden="true" />
                    </Link>
                  </span>
                ) : (
                  <span key={`${crumb.label}-${idx}`}>
                    {crumb.label}{" "}
                    <i className="ion-ios-arrow-forward" aria-hidden="true" />
                  </span>
                ),
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
