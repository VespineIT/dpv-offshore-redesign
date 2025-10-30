import Image from "next/image";

// Placeholder customer logos
const customers = [
  "customers-1.jpg",
  "customers-2.jpg",
  "customers-3.jpg",
  "customers-4.jpg",
  "customers-5.jpg",
  "customers-6.jpg",
];

// Duplicate the array for a seamless loop
const allCustomers = [...customers, ...customers];

export default function CustomersCarousel() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-scroll">
        {allCustomers.map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex h-24 w-48 flex-shrink-0 items-center justify-center"
          >
            <Image
              src={`/assets/placeholders/${logo}`}
              alt={`Customer ${index + 1}`}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}