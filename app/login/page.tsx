import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#818181] to-[#000000] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Masuk
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Masuk untuk melanjutkan ke dashboard Anda
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm text-white/60">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="
                  rounded-md
                  border
                  border-white/10
                  bg-white/10
                  px-3
                  py-2
                  text-sm
                  text-white
                  placeholder:text-white/40
                  outline-none
                  transition
                  focus:border-white/30
                "
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-white/60">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="
                  rounded-md
                  border
                  border-white/10
                  bg-white/10
                  px-3
                  py-2
                  text-sm
                  text-white
                  placeholder:text-white/40
                  outline-none
                  transition
                  focus:border-white/30
                "
              />
            </label>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/70">
                <input
                  type="checkbox"
                  className="accent-white"
                />
                Ingat saya
              </label>
              <Link href="#" className="text-white/70 underline hover:text-white">
                Lupa password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                mt-4
                w-full
                rounded-md
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-white/90
              "
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
