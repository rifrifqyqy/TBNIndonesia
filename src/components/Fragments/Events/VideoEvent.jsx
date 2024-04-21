export default function VideoEvent(props) {
  const { src } = props;
  return (
    <section className="rounded-lg aspect-video h-[400px] w-[600px]">
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg w-full h-full aspect-w-16 aspect-h-9"
      ></iframe>
    </section>
  );
}
