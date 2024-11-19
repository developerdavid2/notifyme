import { FiSettings, FiStar, FiZap } from "react-icons/fi";

import { FaBell, FaFilter, FaLock } from "react-icons/fa";
/* eslint-disable react-refresh/only-export-components */
export const navItems = [
  {
    label: "Features",
    href: "features",
    icon: <FiSettings />,
    isLink: true,
  },
  {
    label: "How it works",
    href: "how-it-works",
    icon: <FiZap />,
    isLink: true,
  },
  {
    label: "Reviews",
    href: "reviews",
    icon: <FiStar />,
    isLink: true,
  },
];

export const howItWorksSteps = [
  {
    id: 0,
    title: "Download & Install",
    image: "/assets/htw1.svg",
    description:
      "Get started in seconds. Download notifyME from the Google Play Store and install it on your device.",
    altText: "Google Play Store Logo",
  },
  {
    id: 1,
    title: "Set Your Preferences",
    image: "/assets/htw2.svg",
    description:
      "Customize your experience. Set your preferred job categories to receive targeted notifications.",
    altText: "App Settings",
  },
  {
    id: 2,
    title: "Activate Upwork",
    image: "/assets/htw3.svg",
    description:
      "Connect notifyME with your Upwork account to unlock real-time job alerts.",
    altText: "Upwork Activation",
  },
  {
    id: 3,
    title: "Receive Instant Alerts",
    image: "/assets/htw4.svg",
    description:
      "Get real-time alerts for new Upwork job postings straight to your phone.",
    altText: "Phone Notification",
  },
];

export const spotlightData = [
  {
    id: 1,
    title: "Real-Time Notifications",
    description:
      "Get instant alerts for new Upwork job postings that match your preferences.",
    icon: FaBell, // React Icon component
    altText: "Notification Icon",
  },
  {
    id: 2,
    title: "Customizable Filters",
    description:
      "Tailor your notifications to specific skills, categories, and job types.",
    icon: FaFilter, // React Icon component
    altText: "Filter Icon",
  },
  {
    id: 3,
    title: "Stay Logged-In",
    description:
      "Keep your account active without repeated sign-ins, ensuring uninterrupted access to your dashboard.",
    icon: FaLock, // React Icon component
    altText: "Lock Icon",
  },
];

export const faq = [
  {
    id: "0",
    question: "What is NotifyME?",
    answer:
      "NotifyME is a notification platform that keeps you informed of real-time updates and alerts directly to your preferred devices.",
  },
  {
    id: "1",
    question: "How can I set up NotifyME?",
    answer:
      "Setting up NotifyME is simple! Sign up, customize your notification preferences, and start receiving updates instantly.",
  },
  {
    id: "2",
    question: "Can NotifyME send notifications to multiple devices?",
    answer:
      "Yes, NotifyME allows you to connect multiple devices and ensures you stay updated no matter where you are.",
  },
  {
    id: "3",
    question: "Does NotifyME support integrations with other apps?",
    answer:
      "Absolutely! NotifyME integrates seamlessly with popular platforms like Slack, Email, and SMS to keep you in the loop.",
  },
  {
    id: "4",
    question: "Is NotifyME secure?",
    answer:
      "Your privacy and security are our priority. NotifyME uses end-to-end encryption to protect your data and notifications.",
  },
  {
    id: "5",
    question: "What types of notifications can I receive with NotifyME?",
    answer:
      "You can receive notifications for task updates, calendar reminders, alerts from apps, and more. Customize them based on your needs.",
  },
  {
    id: "6",
    question: "How do I manage notification preferences?",
    answer:
      "You can easily manage your preferences in the NotifyME dashboard, allowing you to control what and how you are notified.",
  },
  {
    id: "7",
    question: "Can I pause or snooze notifications?",
    answer:
      "Yes, NotifyME provides a snooze feature, allowing you to temporarily pause notifications and stay focused when needed.",
  },
];

export const testimonials = [
  {
    img: "/images/testimonials/jessica-saunders.png",
    quote:
      "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
    name: "Jessie J",
    role: "Acme LTD",
  },
  {
    img: "/images/testimonials/mark-erixon.png",
    quote:
      "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
    name: "Nick V",
    role: "IMB.",
  },
  {
    img: "/images/testimonials/melanie-hurst.png",
    quote:
      "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
    name: "Amelia W",
    role: "Omni AI",
  },
  {
    img: "/images/testimonials/becky-snider.png",
    quote:
      "Switched to Notify last month, and I'm already seeing results. Best decision for our team!",
    name: "Jim Bradley",
    role: "Skrill ",
  },
];
// logoData.js
export const logoSlides = [
  { src: "/images/logos/afterpay.svg", alt: "afterpay" },
  { src: "/images/logos/sonos.svg", alt: "sonos" },
  { src: "/images/logos/amplitude.svg", alt: "amplitude" },
  { src: "/images/logos/drips.svg", alt: "drips" },
  { src: "/images/logos/maze.svg", alt: "maze" },
];

export const Ios = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.9404 17.0175C24.9566 15.791 25.2903 14.5884 25.9105 13.5217C26.5307 12.4549 27.4173 11.5586 28.4876 10.9162C27.8077 9.96818 26.9106 9.18798 25.8677 8.63759C24.8249 8.0872 23.6649 7.78178 22.48 7.74559C19.9523 7.48658 17.5019 9.22215 16.2138 9.22215C14.9009 9.22215 12.9177 7.77131 10.7822 7.8142C9.40087 7.85777 8.05467 8.2499 6.87475 8.95239C5.69483 9.65487 4.72143 10.6438 4.04939 11.8227C1.13826 16.7431 3.3097 23.9744 6.09832 27.9516C7.49352 29.8992 9.12411 32.0746 11.2577 31.9975C13.3456 31.913 14.1253 30.6978 16.6456 30.6978C19.1424 30.6978 19.874 31.9975 22.0509 31.9484C24.2912 31.9129 25.7028 29.9922 27.049 28.0262C28.0514 26.6385 28.8228 25.1048 29.3345 23.4819C28.0329 22.9445 26.9222 22.0449 26.1408 20.8954C25.3594 19.7458 24.942 18.3971 24.9404 17.0175Z"
        fill="#EAEDFF"
      />
      <path
        d="M20.829 5.12933C22.0505 3.69777 22.6523 1.85774 22.5066 0C20.6403 0.191354 18.9165 1.0621 17.6784 2.43873C17.0731 3.11126 16.6095 3.89365 16.3141 4.74119C16.0187 5.58873 15.8973 6.4848 15.9569 7.37817C16.8903 7.38755 17.8138 7.19004 18.6577 6.8005C19.5017 6.41097 20.244 5.83956 20.829 5.12933Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};
export const avatars = [
  {
    alt: "user 1",
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    alt: "user 2",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
  },
  {
    alt: "user 3",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
  },
  {
    alt: "user 4",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    alt: "user 5",
    src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
  },
];

export const Android = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.74 0.0459256L22.8329 10.1427L18.5589 14.2804L4.37614 0.543765C4.12087 0.295202 4.41704 -0.131925 4.72872 0.0394973L4.74 0.0459256Z"
        fill="#EAEDFF"
      />
      <path
        d="M1.8335 30.0342V1.96373C1.83368 1.90283 1.85161 1.84334 1.88505 1.79272C1.91848 1.7421 1.96592 1.70261 2.02142 1.67919C2.07692 1.65577 2.13801 1.64947 2.19703 1.66108C2.25606 1.67269 2.31038 1.70169 2.3532 1.74445L16.7828 15.9997L2.3532 30.2534C2.31038 30.2962 2.25606 30.3252 2.19703 30.3368C2.13801 30.3484 2.07692 30.3421 2.02142 30.3187C1.96592 30.2953 1.91848 30.2558 1.88505 30.2052C1.85161 30.1545 1.83368 30.0951 1.8335 30.0342Z"
        fill="#EAEDFF"
      />
      <path
        d="M4.37775 31.4555C4.12108 31.7041 4.41724 32.1312 4.73033 31.9598L4.74161 31.9534L22.8331 21.8566L18.5591 17.7175L4.37775 31.4555Z"
        fill="#EAEDFF"
      />
      <path
        d="M25.0844 11.3955L30.1368 14.214C31.5112 14.9832 31.5112 17.016 30.1368 17.7853L25.0844 20.6016L20.3338 15.9996L25.0844 11.3955Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Windows = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.674 2.64859L29.4077 0.0307338C30.3171 -0.165605 31.1678 0.603406 31.1678 1.63418V12.7273C31.1678 13.6272 30.5078 14.3635 29.7011 14.3635H17.9674C17.1607 14.3635 16.5006 13.6272 16.5006 12.7273V4.25204C16.5006 3.46669 16.9846 2.79585 17.674 2.64859Z"
        fill="#EAEDFF"
      />
      <path
        d="M17.674 29.3507L29.4077 31.9686C30.3171 32.1649 31.1678 31.3959 31.1678 30.3651V19.272C31.1678 18.3721 30.5078 17.6358 29.7011 17.6358H17.9674C17.1607 17.6358 16.5006 18.3721 16.5006 19.272V27.7473C16.5006 28.5326 16.9846 29.2035 17.674 29.3507Z"
        fill="#EAEDFF"
      />
      <path
        d="M11.7925 3.82676L2.99217 5.90466C2.31748 6.06827 1.8335 6.73912 1.8335 7.50811V12.7275C1.8335 13.6273 2.49352 14.3636 3.30021 14.3636H12.1005C12.9072 14.3636 13.5672 13.6273 13.5672 12.7275V5.41383C13.5672 4.38305 12.7018 3.5977 11.7925 3.82676Z"
        fill="#EAEDFF"
      />
      <path
        d="M2.99217 26.0948L11.7925 28.1727C12.7018 28.4018 13.5672 27.6164 13.5672 26.5856V19.272C13.5672 18.3721 12.9072 17.6358 12.1005 17.6358H3.30021C2.49352 17.6358 1.8335 18.3721 1.8335 19.272V24.4913C1.8335 25.2603 2.31748 25.9312 2.99217 26.0948Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Web = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5484 0.847986C11.8284 2.95995 11.3164 5.15192 10.9164 7.34388C14.6285 6.92789 18.3727 6.92789 22.0848 7.34388C21.6848 5.15192 21.1728 2.97595 20.4528 0.847986C20.4307 0.759613 20.4238 0.686493 20.4164 0.607564C20.4131 0.572174 20.4097 0.535616 20.4048 0.495992C19.1567 0.191997 17.8447 0 16.5006 0C15.1405 0 13.8445 0.191997 12.5804 0.495992C12.5741 0.546895 12.5728 0.592737 12.5715 0.637543C12.5696 0.7054 12.5677 0.770896 12.5484 0.847986Z"
        fill="#EAEDFF"
      />
      <path
        d="M24.8211 7.67982C26.8852 8.03181 28.9172 8.52781 30.9333 9.1358C29.3493 5.82385 26.6771 3.15189 23.365 1.56792C23.989 3.56789 24.485 5.61585 24.8211 7.67982Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54034 30.2556C9.51633 30.2556 9.48833 30.2636 9.46033 30.2716C9.43233 30.2796 9.40433 30.2876 9.38033 30.2876C6.27619 28.7517 3.74809 26.2077 2.19602 23.1037C2.19602 23.0797 2.20402 23.0517 2.21202 23.0237C2.22002 22.9957 2.22802 22.9677 2.22802 22.9437C4.1801 23.5197 6.19619 23.9517 8.19628 24.2877C8.54829 26.3037 8.96431 28.3037 9.54034 30.2556Z"
        fill="#EAEDFF"
      />
      <path
        d="M30.8053 23.1197C29.2213 26.3037 26.5811 28.8797 23.365 30.4316C23.973 28.3997 24.485 26.3517 24.8211 24.2877C26.8372 23.9517 28.8212 23.5197 30.7733 22.9437C30.7637 22.9823 30.7772 23.0208 30.7896 23.0558C30.7977 23.079 30.8053 23.1006 30.8053 23.1197Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54041 1.74401C8.96438 3.69598 8.54836 5.67994 8.21235 7.69591C6.14826 8.01591 4.10017 8.5279 2.06808 9.13589C3.62015 5.91994 6.19626 3.27998 9.3804 1.69601C9.4044 1.69601 9.4324 1.70801 9.4604 1.72001C9.4884 1.73201 9.51641 1.74401 9.54041 1.74401Z"
        fill="#EAEDFF"
      />
      <path
        d="M7.84432 21.5836C5.63622 21.1836 3.46013 20.6716 1.34804 19.9516C1.27094 19.9324 1.20545 19.9305 1.13759 19.9286C1.09278 19.9273 1.04693 19.926 0.996021 19.9196C0.692008 18.6557 0.5 17.3597 0.5 15.9997C0.5 14.6557 0.692008 13.3437 0.996021 12.0958C1.03565 12.0908 1.07221 12.0874 1.1076 12.0841C1.18653 12.0767 1.25966 12.0699 1.34804 12.0478C3.47613 11.3438 5.63622 10.8158 7.84432 10.4158C7.4443 14.1277 7.4443 17.8717 7.84432 21.5836Z"
        fill="#EAEDFF"
      />
      <path
        d="M32.005 19.9196C32.309 18.6557 32.501 17.3597 32.501 15.9997C32.501 14.6557 32.309 13.3597 32.005 12.0958C31.877 12.0958 31.781 12.0798 31.653 12.0478C29.5409 11.3278 27.3488 10.8158 25.1567 10.4158C25.5727 14.1277 25.5727 17.8717 25.1567 21.5836C27.3488 21.1836 29.5249 20.6556 31.653 19.9516C31.7301 19.9324 31.7956 19.9305 31.8635 19.9286C31.9083 19.9273 31.9541 19.926 32.005 19.9196Z"
        fill="#EAEDFF"
      />
      <path
        d="M22.0848 24.6554C21.6848 26.8633 21.1728 29.0393 20.4528 31.1513C20.4307 31.2396 20.4238 31.3128 20.4164 31.3917C20.4131 31.4271 20.4097 31.4636 20.4048 31.5033C19.1567 31.8073 17.8447 31.9993 16.5006 31.9993C15.1405 31.9993 13.8445 31.8073 12.5804 31.5033C12.5741 31.4524 12.5728 31.4065 12.5715 31.3617C12.5696 31.2939 12.5677 31.2284 12.5484 31.1513C11.8444 29.0233 11.3164 26.8633 10.9164 24.6554C12.7724 24.8634 14.6285 25.0074 16.5006 25.0074C18.3727 25.0074 20.2448 24.8634 22.0848 24.6554Z"
        fill="#EAEDFF"
      />
      <path
        d="M10.4793 22.0209C14.4812 22.5258 18.5205 22.5258 22.5224 22.0209C23.0274 18.0192 23.0274 13.9802 22.5224 9.97847C18.5205 9.47358 14.4812 9.47358 10.4793 9.97847C9.97434 13.9802 9.97434 18.0192 10.4793 22.0209Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};
export const footerNav = [
  {
    label: "Features",
    href: "features",
    isLink: false, // Scroll to section on the homepage
  },
  {
    label: "How it works",
    href: "how-it-works",
    isLink: false, // Scroll to section on the homepage
  },
  {
    label: "Testimonials",
    href: "testimonials",
    isLink: false, // Scroll to section on the homepage
  },
  {
    label: "FAQ",
    href: "faq",
    isLink: false, // Scroll to section on the homepage
  },
  {
    label: "Waitlist",
    href: "/waitlist",
    isLink: true, // Redirect to a different page
  },
];

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

export const GlassIcons = () => {
  const iconBaseStyle =
    "p-15 rounded-full glass-container transition-transform duration-300 ";
  const iconGlowStyle =
    "text-blue-gray-300 text-[4rem] drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]";

  return (
    <div className="flex space-x-6 justify-center items-center py-10">
      {/* Notification Icon */}
      <div className={iconBaseStyle}>
        <FaBell className={iconGlowStyle} />
      </div>

      {/* Filter Icon */}
      <div className={iconBaseStyle}>
        <FaFilter className={iconGlowStyle} />
      </div>

      {/* Padlock Icon */}
      <div className={iconBaseStyle}>
        <FaLock className={iconGlowStyle} />
      </div>
    </div>
  );
};
