import ReactPlayer from "react-player";
import { Modal } from "ui/atoms";

const videos = {
  food: "https://www.youtube.com/watch?v=uIW-aYHE60k",
  fiber: "https://www.youtube.com/watch?v=Nf3VgIiymKw",
  filter: "https://www.youtube.com/watch?v=7g67sI-kAPs",
  foundations: "https://www.youtube.com/watch?v=VLv67zkZWgM",
  farmaceuticals: "https://www.youtube.com/watch?v=fXsvGdt27Y0",
  fun: "https://www.youtube.com/watch?v=_xer83m6vzU",
} as const;

export function WebOfSoilsVideoPlayer({
  video,
  isVideoModalOpen,
  setIsVideoModalOpen,
}: {
  video: keyof typeof videos;
  isVideoModalOpen: boolean;
  setIsVideoModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      handleClose={() => {
        setIsVideoModalOpen(false);
      }}
      isOpen={isVideoModalOpen}
      slides={{ count: 1, activeSlideIndex: 0 }}
    >
      <div className="aspect-h-9 aspect-w-16">
        <ReactPlayer
          controls={true}
          height={"90%"}
          width={"90%"}
          url={videos[video]}
          style={{
            margin: "0 auto",
          }}
        />
      </div>
    </Modal>
  );
}
