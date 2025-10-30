import ContactClient from "@/components/ContactClient";

// This file is now a Server Component, so exporting metadata is allowed.
export const metadata = {
  title: "Contact Us",
};

// This page now just renders the Client Component
export default function ContactPage() {
  return <ContactClient />;
}