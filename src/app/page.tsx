import Head from "next/head"

type Link = {
  label: string
  href: string
}

const links: Link[] = [
  { label: "GitHub", href: "https://github.com/OskarMichalak" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oskar-michalak/" },
  { label: "Email", href: "mailto:OskarMichalakDev@gmail.com" },
]

const header = "👋 Hi, I'm Oskar Michalak"
const subHeader = "Android Developer"
const avatarPath = "/avatar.jpeg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Moje Linki</title>
        <meta name="description" content="LinkTree-style minimalist page" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="text-center w-full max-w-md space-y-6">
          {/* Avatar */}
          <div className="flex justify-center">
            <img
              src={avatarPath}
              alt="Avatar"
              className="w-24 h-24 rounded-full border-4 border-base-300 shadow-md"
            />
          </div>

          {/* Headers */}
          <div>
            <p className="text-3xl font-bold text-base-content">{header}</p>
            <p className="text-2xl text-base-content mt-1">{subHeader}</p>
          </div>

          {/* Link buttons */}
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full shadow-md hover:scale-105 transition-transform"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Footer */}
          <p className="text-xs text-base-content/50 pt-8">
            Made with ❤️ using Next.js & DaisyUI
          </p>
        </div>
      </main>
    </>
  )
}
