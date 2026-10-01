import { Link } from "react-router-dom";

function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      aria-label="ResumeLy home"
      className="
        group
        inline-flex
        items-center
        outline-none
        select-none
        transition-transform
        duration-300
        active:scale-[0.98]
        focus-visible:rounded-md
        focus-visible:ring-2
        focus-visible:ring-[#b08d57]/30
        focus-visible:ring-offset-4
      "
    >
      <span
        className="
          relative
          inline-block
          overflow-hidden
          bg-[linear-gradient(110deg,#171717_0%,#171717_25%,#9b7848_38%,#f1dcae_48%,#b8955d_56%,#171717_72%,#171717_100%)]
          bg-[length:250%_100%]
          bg-clip-text
          font-serif
          font-semibold
          italic
          leading-none
          tracking-[-0.055em]
          text-transparent
          animate-[luxuryShimmer_7s_ease-in-out_infinite]
          drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]
          transition-all
          duration-500
          group-hover:bg-[length:180%_100%]
          group-hover:drop-shadow-[0_3px_8px_rgba(176,141,87,0.18)]
        "
        style={{
          fontFamily:
            '"Cormorant Garamond", "Bodoni 72", "Didot", Georgia, serif',
        }}
      >
        <span
          className="
            inline-block
            text-[25px]
            sm:text-[27px]
            md:text-[29px]
          "
        >
          Resume
        </span>

        <span
          className="
            relative
            ml-[1px]
            bg-[linear-gradient(120deg,#8c6838,#d8bd82,#fff0c5,#ad8750,#76552d)]
            bg-[length:220%_100%]
            bg-clip-text
            text-transparent
            animate-[goldFlow_5s_ease-in-out_infinite]
          "
        >
          Ly
        </span>

        {/* Moving luxury highlight */}
        <span
          className="
            pointer-events-none
            absolute
            -inset-y-2
            -left-[80%]
            w-[35%]
            skew-x-[-18deg]
            bg-gradient-to-r
            from-transparent
            via-white/35
            to-transparent
            blur-[5px]
            animate-[lightSweep_6s_ease-in-out_infinite]
          "
        />
      </span>

      {/* Custom animation styles */}
      <style>
        {`
          @keyframes luxuryShimmer {
            0% {
              background-position: 220% 50%;
            }

            50% {
              background-position: 40% 50%;
            }

            100% {
              background-position: -120% 50%;
            }
          }

          @keyframes goldFlow {
            0% {
              background-position: 180% 50%;
            }

            50% {
              background-position: 20% 50%;
            }

            100% {
              background-position: -140% 50%;
            }
          }

          @keyframes lightSweep {
            0% {
              left: -80%;
              opacity: 0;
            }

            18% {
              opacity: 0;
            }

            38% {
              opacity: 1;
            }

            55% {
              left: 145%;
              opacity: 0;
            }

            100% {
              left: 145%;
              opacity: 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .group span {
              animation: none !important;
            }
          }
        `}
      </style>
    </Link>
  );
}

export default Logo;
