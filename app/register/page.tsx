import Image from "next/image"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen bg-neutral-200 flex items-center overflow-hidden">

      {/* LOGO */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 text-lg font-bold text-black"
      >
        SLASHPRINT™
      </Link>

      {/* WRAPPER */}
      <div className="w-full flex justify-between items-stretch">

        {/* LEFT — IMAGE (BOTTOM ALIGNED) */}
        <div className="relative hidden w-1/2 md:block min-h-screen">
          <Image
            src="/login-model.png"
            alt="Model"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* RIGHT — REGISTER AREA */}
        <div className="flex  items-center justify-center pr-8">

          {/* REGISTER CARD */}
          <div className="w-full rounded-2xl bg-white px-40 py-15 shadow-xl">
            <div className="flex min-h-130 flex-col justify-center">

              <h2 className="text-2xl font-semibold text-black">
                Create Account.
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Sign up to start using this website features.
              </p>

              <form className="mt-10 space-y-4">
                <label className="flex flex-col gap-1">
                  <span className="text-sm text-neutral-600">Your email</span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-md bg-neutral-100 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-sm text-neutral-600">Password</span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="rounded-md bg-neutral-100 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
                  />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="text-sm text-neutral-600">Verify Password</span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="rounded-md bg-neutral-100 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
                  />
                </label>

                <div className="flex justify-end">
                  <Link
                    href="/login"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Already have an account?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-md bg-black py-2 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Register
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
