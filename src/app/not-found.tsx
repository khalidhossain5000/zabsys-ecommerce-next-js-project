

import Button from '@/components/shared/Button/Button';
import Link from 'next/link';
import { FaFrown } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background px-4 py-12 lg:py-24 z-0">
      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-accent-soft via-background to-background" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <FaFrown size={40} strokeWidth={1.75} className="text-accent py-6" />
        {/* 404 number with gradient text */}
        <h1 className="text-4xl md:text-5xl lg:text-8xl xl:text-9xl font-lora font-black tracking-tighter bg-linear-to-br from-accent to-accent-soft bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-primary font-inter lg:font-bold">
          Page not found
        </h2>
        <p className="mt-3 max-w-lg mx-auto text-accent">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8">
          <Link href="/">
            <Button className="px-5 rounded-full">Go Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;