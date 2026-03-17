import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-brand-blue/20">404</div>
      <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>
      <p className="font-khmer mt-2 text-lg text-brand-red dark:text-brand-red-300">
        រកមិនឃើញទំព័រ
      </p>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button render={<Link href="/" />}>Go Home</Button>
        <Button variant="outline" render={<Link href="/contact" />}>
          Contact Us
        </Button>
      </div>
    </div>
  );
}
