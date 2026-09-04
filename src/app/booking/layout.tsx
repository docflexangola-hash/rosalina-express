import { BookingProvider, BookingHeader } from "@/components/booking";

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <BookingHeader />
      <main className="pt-0">{children}</main>
    </BookingProvider>
  );
}
