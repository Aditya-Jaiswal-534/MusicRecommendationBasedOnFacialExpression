import React from "react"
const Embed = (props) => {
   return (
    <>
     <div className="embed-container fixed bottom-0 left-20 w-[90%] h-22 flex flex-row justify-center items-center bg-sidebar-back bg-opacity-90 box-border rounded">
     <iframe style={{borderRadius:"10px"}} src={`https://open.spotify.com/embed/track/${props.link}?utm_source=generator`}
      width="100%" height="200"  allowFullScreen="True"
       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
     </div>
    </>
   )
}

export default Embed;