import { cn } from "@/lib/utils";

interface PaperclipLockupProps {
  decorative?: boolean;
  title?: string;
  className?: string;
}

/**
 * lukethomas brand: the wordmark is always lowercase "lukethomas" in Inter 300
 * with -0.04em tracking. There is no logo mark. Component names are kept from
 * upstream Paperclip so merges stay small.
 *
 * Callers size it with a height class (`h-5 w-auto`); the text scales to it.
 */
export function PaperclipLockup({ decorative = false, title = "lukethomas", className }: PaperclipLockupProps) {
  return (
    <span
      className={cn("lt-wordmark inline-flex items-center text-[22px] leading-none text-foreground", className)}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
    >
      lukethomas
    </span>
  );
}

/** Square mark for small spaces: a lowercase "l" set in the wordmark style. */
export function PaperclipMark({ decorative = false, title = "lukethomas", className }: PaperclipLockupProps) {
  return (
    <span
      className={cn("lt-wordmark inline-flex items-center justify-center leading-none text-foreground", className)}
      style={{ fontSize: "1.6em" }}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
    >
      l
    </span>
  );
}
