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
        <div className="row no-gutters align-items-center justify-content-center">
          <div className="col-lg-9 ftco-animate text-center">
            <h1 className="mb-3 bread">{title}</h1>
            {subtitle ? (
              <p className="ws-hero-subtitle mb-3 mx-auto">{subtitle}</p>
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
                  <span key={`${crumb.label}-${idx}`}>{crumb.label}</span>
                ),
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
