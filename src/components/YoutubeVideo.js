export default function YoutubeVideo ({ link }) {
  let new_link = link.replace("https://youtu.be/", "https://www.youtube.com/embed/")
  return (
    <div class="video-responsive">
      <iframe 
        width="560" 
        height="315" 
        src={new_link}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  )};