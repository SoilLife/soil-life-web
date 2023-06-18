import { Button, YoutubeEmbed } from "ui/atoms";
import Link from "next/link";

export function SoilGenesisSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen snap-start">
      <div className="w-full mx-auto mb-8 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        <YoutubeEmbed embedId="_ZRw6ZzY3Dk" />
      </div>
      <div className="flex justify-center">
        <Link href="/media">
          <Button size="md" type="neutral" label="watch more" />
        </Link>
      </div>
    </div>
  );
}
