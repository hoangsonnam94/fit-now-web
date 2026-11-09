export default function FitNowHero() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative flex h-screen min-h-[640px] w-full flex-col overflow-hidden bg-[#0A0A0A] text-[#F5F5F5]"
    >
      {/* Background photo — real after-class shot, right half */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/media/afterclass-01.jpg"
          alt=""
          fetchPriority="high"
          decoding="sync"
          width={1526}
          height={2035}
          className="absolute right-0 top-0 h-full w-full object-cover object-[75%_top] md:w-[58%]"
        />
        {/* Scrim — pure black, no colour wash, no background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0A0A 0%, #0A0A0A 40%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0) 84%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.35) 18%, rgba(10,10,10,0) 38%)",
          }}
        />
      </div>

      {/* ── Top bar ── */}
      <header className="relative z-10 flex shrink-0 items-center justify-between px-6 py-6 md:px-16">
        <a
          href="#top"
          className="flex min-h-[44px] items-center gap-3"
          aria-label="FIT NOW — về đầu trang"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#FDF201]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" fill="#0A0A0A" />
            </svg>
          </span>
          <span
            className="text-[15px] font-black uppercase leading-none tracking-[0.18em] text-[#F5F5F5] md:text-base"
            style={{ fontFamily: "'Oswald', 'Archivo Black', system-ui, sans-serif" }}
          >
            Fit<span className="text-[#FDF201]">Now</span>
          </span>
        </a>

        <div className="hidden items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F5F5]/60 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FDF201]" aria-hidden="true" />
          Ocean Park 1 · Hà Nội
        </div>
      </header>

      {/* ── Headline block ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-6 md:px-16">
        <div className="max-w-[1000px]">
          <div className="mb-6 inline-flex items-center gap-2.5 border border-[#FDF201]/30 bg-[#0A0A0A]/55 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FDF201]" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FDF201] md:text-[11px]">
              Group X · Kết quả đo được
            </span>
          </div>

          <h1
            id="hero-headline"
            className="text-[clamp(3.25rem,11.5vw,8.5rem)] font-black uppercase leading-[0.87] tracking-[-0.03em] text-[#F5F5F5]"
            style={{ fontFamily: "'Oswald', 'Archivo Black', system-ui, sans-serif" }}
          >
            Tìm phòng tập,
            <br />
            <span className="text-[#FDF201]">giảm cân thật.</span>
          </h1>

          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.4] text-[#F5F5F5]/80 md:text-lg">
            Phòng Group X ở Hà Nội: tập nhóm, có dinh dưỡng, có người đẩy bạn
            đến đích.
          </p>

          <div className="mt-6 flex flex-row items-center gap-5">
            <a
              href="#lien-he"
              className="inline-flex min-h-[56px] items-center justify-center gap-3 bg-[#FDF201] px-7 text-[13px] font-black uppercase tracking-[0.18em] text-[#0A0A0A] transition-colors duration-150 hover:bg-[#F5E400] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FDF201] md:px-8 md:text-sm"
            >
              Đăng ký 3 buổi thử miễn phí
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#0A0A0A"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </a>
            <span className="hidden text-[11px] font-semibold uppercase leading-snug tracking-[0.2em] text-[#F5F5F5]/50 sm:block">
              Không cần thẻ hội viên
            </span>
          </div>
        </div>
      </div>

      {/* ── Meta line — single row, not a card grid ── */}
      <div className="relative z-10 shrink-0 border-t border-[#FDF201]/15 bg-[#0A0A0A]/85 px-6 py-6 backdrop-blur-sm md:px-16">
        <div className="flex max-w-[1000px] flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F5F5]/55 md:text-[11px]">
          <span>05 khung giờ mỗi ngày</span>
          <span className="h-3 w-px bg-[#FDF201]/30" aria-hidden="true" />
          <span>100% hội viên có kết quả</span>
          <span className="h-3 w-px bg-[#FDF201]/30" aria-hidden="true" />
          <span className="text-[#FDF201]">Buổi đầu miễn phí</span>
        </div>
      </div>
    </section>
  );
}
