// This file stores all static site content, as requested.
export const SITE = {
    title: "DPV Offshore & Marine Services LLC",
    tagline: "Your partner at Sea for all Your Integrated Marine Engineering Solutions",
    email: "info@dpvoffshore.com",
    phoneSupport: "+971 56 706 0326",
    locations: {
      uae: {
        name: "D P V Offshore & Marine Services LLC",
        address:
          "PO Box 75287, W306, Workshop 05, Dubai Maritime City, Dubai, UAE",
        phones: ["+971 56 706 0326", "+971 4 580 4314", "+971 4 580 4317"],
      },
      sriLanka: {
        name: "D P V Offshore & Marine Services (PVT) Ltd",
        address:
          "9th Floor, Orion Tower, Orion City, No. 736, Dr. Danister De Silva Mawatha, Colombo-09, Sri Lanka",
        phones: ["+94 77 774 3023"],
      },
      india: {
        name: "D P V Offshore & Marine Services (PVT) Ltd",
        address: "l56/23 75, Mumbai, India",
        phones: ["+91 90378 20675"],
      },
    },
    about: `We at DPV Offshore & Marine Services LLC, add technical competence with a highly skilled professional team in all ships & boats repairs. Established in 2018, we are one of UAE's reputed and fastest-growing product suppliers & service providers to marine offshore, oil & gas, power generation and industrial production sectors. With quality kept at the forefront and of utmost importance we provide the best service in the industry to all our valued customers.`,
    aboutTagline: "Your Satisfaction is our Desire",
    services: [
      {
        group: "SHIP REPAIR",
        items: [
          "MAIN & AUX. ENGINES",
          "REFRIGERATION & AC",
          "PROPULSION",
          "ELECTRICAL & AUTOMATION",
          "MACHINING & FABRICATION",
        ],
        icon: "FaShip", // Placeholder for icon
      },
      {
        group: "MARINE & OFFSHORE SUPPLIES",
        items: [
          "ENGINE SPARE PARTS",
          "EQUIPMENT",
          "USED PROPULSION ENGINE",
        ],
        icon: "FaAnchor",
      },
      {
        group: "DOCKING & AFLOAT REPAIRS",
        items: [
          "DOCKING SERVICES",
          "HULL & TANK TREATMENT",
          "CLASS APPROVED WELDING",
          "FABRICATION & TURNKEY PROJECTS",
          "AFLOAT REPAIRS",
        ],
        icon: "FaHardHat",
      },
      {
        group: "DIVING SERVICES",
        items: [
          "INSHORE DIVING SERVICES - MARINE & SHIPPING",
          "OFFSHORE DIVING SERVICES",
        ],
        icon: "FaSwimmer",
      },
      {
        group: "OIL & GAS POWERPLANT",
        items: [
          "ENGINE SERVICES",
          "INHOUSE RECONDITIONING & REPAIRS",
          "IN-SITU MACHINING & REPAIR SERVICES",
          "POWER PLANT ENGINE SERVICES",
        ],
        icon: "FaGasPump",
      },
    ],
  };
  
  export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];