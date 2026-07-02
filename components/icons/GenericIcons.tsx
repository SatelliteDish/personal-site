import type { SVGProps } from "react";

/**
 * Generic, non-trademarked icons used alongside real brand marks (from
 * react-icons/si) in the skill marquee. These stand in for services or
 * concepts that either don't have an official simple-icons mark (AWS
 * doesn't publish one — see simple-icons/simple-icons#1111) or that
 * span multiple products (e.g. "Cloud Architecture").
 */

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98 5.5 5.5 0 0 1 10.6-1.94A4.5 4.5 0 0 1 17.5 19h-11Z" />
    </svg>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
      <path d="M2.5 12 12 17l9.5-5-2.2-1.16L12 14.7l-7.3-3.86L2.5 12Z" />
      <path d="M2.5 16 12 21l9.5-5-2.2-1.16L12 18.7l-7.3-3.86L2.5 16Z" />
    </svg>
  );
}

export function ArchitectureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M6.4 7.6 10.8 16l-1.7.9L4.7 8.5l1.7-.9Z" />
      <path d="M17.6 7.6 13.2 16l1.7.9L19.3 8.5l-1.7-.9Z" />
      <path d="M6.7 5.2h10.6v1.8H6.7z" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5 4.5 5.4v6.1c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10V5.4L12 2.5Zm-1.4 12.3-3-3 1.3-1.3 1.7 1.7 4.5-4.5 1.3 1.3-5.8 5.8Z" />
    </svg>
  );
}
