import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { collections } from "@/lib/data/collections"
import { projects } from "@/lib/data/projects"
import { OrnateGoldFrame } from "@/components/FrameDesigns"

type Props = { params: Promise<{ slug: string; collection: string }> }

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: "design-projects",
    collection: collection.slug
  }))
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug, collection: collectionSlug } = await params
  const collection = collections.find((c) => c.slug === collectionSlug)

  if (!collection) {
    return notFound()
  }

  // Get projects in this collection
  const collectionProjects = projects.filter((project) =>
    collection.projects.includes(project.slug)
  )

  return (
    <main style={{ backgroundColor: '#1f1f1f' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-sm font-medium tracking-wider uppercase mb-4" style={{ color: '#D4AF37' }}>
              {collection.season}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ color: '#D4AF37' }}>
              {collection.name}
            </h1>
            <p className="font-sans text-xl leading-relaxed mb-6" style={{ color: '#D4AF37', opacity: 0.9 }}>
              {collection.description}
            </p>

            {/* Mood and Inspiration */}
            <div className="flex flex-col items-center gap-4 text-base mb-6" style={{ color: '#D4AF37', opacity: 0.8 }}>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="font-sans">
                  <span className="font-semibold">Mood:</span> {collection.mood}
                </div>
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
                <div className="font-sans">
                  <span className="font-semibold">{collectionProjects.length}</span> Pieces
                </div>
              </div>

              {/* Inspiration */}
              <div className="max-w-2xl">
                <p className="font-sans leading-relaxed" style={{ color: '#D4AF37', opacity: 0.8 }}>
                  <span className="font-semibold">Inspiration:</span> {collection.inspiration}
                </p>
              </div>
            </div>

            <div className="w-24 h-1 mx-auto mt-8" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </div>
      </section>

      {/* Collection Pieces */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-center mb-16" style={{ color: '#D4AF37' }}>
            The Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {collectionProjects.map((project, index) => (
              <Link key={project.slug} href={`/project/${project.slug}`} className="group block">
                {/* Premium Frame Container */}
                <OrnateGoldFrame className="shadow-xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Inner frame with image */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg ring-1 ring-stone-200">
                    <Image
                      src={project.coverImage}
                      alt={project.name}
                      width={600}
                      height={800}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Project name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-display text-xl font-medium text-white">
                        {project.name}
                      </h3>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-sans px-5 py-2 bg-white text-sm font-medium rounded-full shadow-lg">
                        View Details
                      </span>
                    </div>
                  </div>
                </OrnateGoldFrame>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href={`/category/${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: '#D4AF37',
                color: '#1f1f1f',
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
