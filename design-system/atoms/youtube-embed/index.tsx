import { YoutubeEmbedProps } from './youtube-embed.interfaces';

export function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${embedId}?rel=0&showinfo=0&showsearch=0`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
}
