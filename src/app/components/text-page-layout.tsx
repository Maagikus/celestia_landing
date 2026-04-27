import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/theme-context';

interface TextPageLayoutProps {
  children: React.ReactNode;
  onBack: () => void;
}

export function TextPageLayout({ children, onBack }: TextPageLayoutProps) {
  const { getNeomorphicShadow } = useTheme();

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 sm:mb-12 px-6 py-3 rounded-xl bg-[#e0e5ec] dark:bg-[#1a1f2e] text-[#2d3748] dark:text-[#e2e8f0] flex items-center gap-2 transition-all duration-300 hover:text-[#ff8c42] dark:hover:text-[#ff8c42] font-semibold"
          style={{ boxShadow: getNeomorphicShadow('convex') }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = getNeomorphicShadow('pressed');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = getNeomorphicShadow('convex');
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* Content Container with Neomorphic Style */}
        <div
          className="p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl bg-[#e0e5ec] dark:bg-[#1a1f2e] transition-all duration-500"
          style={{ boxShadow: getNeomorphicShadow('convex') }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Styled Text Components for different templates

// Template 1: Technical/Documentation Style
export function TechHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-[#2d3748] dark:text-[#e2e8f0] font-bold">
      {children}
    </h1>
  );
}

export function TechSubheading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl mt-8 sm:mt-10 mb-4 sm:mb-6 text-[#2d3748] dark:text-[#ff8c42] font-bold">
      {children}
    </h2>
  );
}

export function TechSection({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl sm:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4 text-[#4a5568] dark:text-[#e2e8f0] font-semibold">
      {children}
    </h3>
  );
}

export function TechParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed text-[#4a5568] dark:text-[#cbd5e0]">
      {children}
    </p>
  );
}

export function TechList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-inside space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-[#4a5568] dark:text-[#cbd5e0]">
      {children}
    </ul>
  );
}

export function TechListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base sm:text-lg leading-relaxed ml-4">
      {children}
    </li>
  );
}

export function TechCode({ children }: { children: React.ReactNode }) {
  const { getNeomorphicShadow } = useTheme();
  return (
    <code
      className="block p-4 sm:p-6 my-4 sm:my-6 rounded-xl bg-[#e0e5ec] dark:bg-[#0f1419] text-[#2d3748] dark:text-[#ff8c42] font-mono text-sm sm:text-base overflow-x-auto"
      style={{ boxShadow: getNeomorphicShadow('pressed') }}
    >
      {children}
    </code>
  );
}

export function TechHighlight({ children }: { children: React.ReactNode }) {
  const { getNeomorphicShadow } = useTheme();
  return (
    <span
      className="inline-block px-2 py-1 mx-1 rounded-lg bg-[#e0e5ec] dark:bg-[#0f1419] text-[#ff8c42] dark:text-[#ff8c42] font-mono text-sm"
      style={{ boxShadow: getNeomorphicShadow('pressed') }}
    >
      {children}
    </span>
  );
}

// Template 2: Formal/Legal Style
export function FormalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 text-center text-[#2d3748] dark:text-[#e2e8f0] font-bold">
      {children}
    </h1>
  );
}

export function FormalSubheading({ children }: { children: React.ReactNode }) {
  const { getNeomorphicShadow } = useTheme();
  return (
    <h2
      className="text-xl sm:text-2xl mt-10 sm:mt-12 mb-5 sm:mb-6 p-4 sm:p-5 rounded-xl text-[#2d3748] dark:text-[#ff8c42] font-bold bg-[#e0e5ec] dark:bg-[#1a1f2e]"
      style={{ boxShadow: getNeomorphicShadow('pressed') }}
    >
      {children}
    </h2>
  );
}

export function FormalParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-lg mb-5 sm:mb-6 leading-loose text-justify text-[#4a5568] dark:text-[#cbd5e0]">
      {children}
    </p>
  );
}

export function FormalList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal list-inside space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-[#4a5568] dark:text-[#cbd5e0]">
      {children}
    </ol>
  );
}

export function FormalListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base sm:text-lg leading-loose">
      {children}
    </li>
  );
}

export function FormalQuote({ children }: { children: React.ReactNode }) {
  const { getNeomorphicShadow } = useTheme();
  return (
    <blockquote
      className="my-6 sm:my-8 p-6 sm:p-8 border-l-4 border-[#ff8c42] rounded-r-xl bg-[#e0e5ec] dark:bg-[#0f1419] text-[#4a5568] dark:text-[#cbd5e0] italic"
      style={{ boxShadow: getNeomorphicShadow('pressed') }}
    >
      {children}
    </blockquote>
  );
}

export function FormalDate({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm sm:text-base text-center mb-6 sm:mb-8 text-[#718096] dark:text-[#a0aec0] italic">
      {children}
    </p>
  );
}

export function FormalDivider() {
  return (
    <hr className="my-8 sm:my-10 border-t-2 border-[#cbd5e0] dark:border-[#4a5568] opacity-30" />
  );
}
