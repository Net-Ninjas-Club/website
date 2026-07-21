import fs from 'fs';
import path from 'path';
import Image from 'next/image';

const GALLERY_DIR = 'public/images/gallery';
const SLOT_COUNT = 6;

function getGalleryFiles(): string[] {
  const dir = path.join(process.cwd(), GALLERY_DIR);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .slice(0, SLOT_COUNT);
  } catch {
    return [];
  }
}

export default function Gallery() {
  const files = getGalleryFiles();
  const emptySlots = Math.max(0, SLOT_COUNT - files.length);

  return (
    <section id="gallery" className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-ember">On court</p>
        <h2 className="mt-3 font-display text-4xl text-chalk sm:text-5xl">FROM THE HALL</h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {files.map((file) => (
            <div key={file} className="relative aspect-square overflow-hidden border border-white/10">
              <Image
                src={`/images/gallery/${file}`}
                alt="Net Ninjas juniors playing badminton at Broadclyst Sports Hall"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="belt flex aspect-square flex-col items-center justify-center gap-2 border border-dashed border-ember/40 bg-smoke text-center"
            >
              <span className="font-display text-sm tracking-wide text-ember">PHOTO SLOT</span>
              <span className="max-w-[10rem] text-xs text-steelDark">
                Add a file to /public/images/gallery
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
