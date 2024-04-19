"use client"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps, useState } from "react"

export default function Component() {

  const [tracks, setTracks] = useState([
    {
      id:1,
      title: "The River",
      artist: "John Doe",
      isPlaying: false,
      duration: "3:46",
      image: "/music.jpeg",
      audioUrl :"https://res.cloudinary.com/dzvtkbjhc/video/upload/v1713435829/Oksy_Avdalyan_-_Asa_-_Xosa___%D4%B1%D5%BD%D5%A1_-_%D4%BD%D5%B8%D5%BD%D5%A1_NEW_2022_la_la_la_li_la_la_la_iyp1ik.mp4"
    },
    {
      id:2,
      title: "The Woods",
      artist: "John Doe",
      isPlaying: false,
      duration: "4:02",
      image: "/music.jpeg",
      audioUrl :"https://res.cloudinary.com/dzvtkbjhc/video/upload/v1713435829/Oksy_Avdalyan_-_Asa_-_Xosa___%D4%B1%D5%BD%D5%A1_-_%D4%BD%D5%B8%D5%BD%D5%A1_NEW_2022_la_la_la_li_la_la_la_iyp1ik.mp4"
    },
    {
      id:3,
      title: "The Mountains",
      artist: "John Doe",
      isPlaying: false,
      duration: "3:54",
      image: "/music.jpeg",
      audioUrl :"https://res.cloudinary.com/dzvtkbjhc/video/upload/v1713435829/Oksy_Avdalyan_-_Asa_-_Xosa___%D4%B1%D5%BD%D5%A1_-_%D4%BD%D5%B8%D5%BD%D5%A1_NEW_2022_la_la_la_li_la_la_la_iyp1ik.mp4"
    },
    {
      id:4,
      title: "The Ocean",
      artist: "John Doe",
      isPlaying: false,
      duration: "4:12",
      image: "/music.jpeg",
      audioUrl :"https://res.cloudinary.com/dzvtkbjhc/video/upload/v1713435829/Oksy_Avdalyan_-_Asa_-_Xosa___%D4%B1%D5%BD%D5%A1_-_%D4%BD%D5%B8%D5%BD%D5%A1_NEW_2022_la_la_la_li_la_la_la_iyp1ik.mp4"
    },
  ])
  
 
  const playAudio = (audioUrl: string, id: number, isPlaying: boolean) => {
    const audio = new Audio(audioUrl);
    if (isPlaying) {
      audio.pause();
      setTracks(tracks.map((track) => {
        if (track.id === id) {
          return {
            ...track,
            isPlaying: false
          }
        }
        return track;
      }))
    } else {
      audio.play();
      setTracks(tracks.map((track) => {
        if (track.id === id) {
          return {
            ...track,
            isPlaying: true
          }
        }
        return track;
      }))
    }
  }



  return (
    <div className="flex flex-col">
      <section className="w-full relative py-20 bg-gray-100 bg-opacity-70 dark:bg-gray-900">
        <div className="absolute inset-0 -z-10 overflow-hidden"
        style={{backgroundImage: "url('https://image.lexica.art/full_webp/7b719498-46ea-4a14-9eee-430d2069fd87')", backgroundSize: "cover", backgroundPosition: "center"}}
        >
         
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center bg-white bg-opacity-80 py-6 sm:rounded-full">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Best Music</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                 Discover the best music from muziki. Listen to his latest tracks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Tracks</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Check out John Doe&apos;s latest singles and EPs, available now on all major streaming platforms.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tracks.map((track, index) => (
                <Card key={index} className="h-full">
                  <CardContent className=" w-full p-2">
                    <div className="">
                      <img alt={track.title} className="w-full h-48 object-cover rounded-lg
                      " src={track.image} />
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">{track.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{track.artist}</p>
                        <p className="text-gray-500 dark:text-gray-400">{track.duration}</p>
                      </div>
                     {/* controller best */}
                   {
                      track.isPlaying ? (
                        <Button onClick={() => playAudio(track.audioUrl, track.id, track.isPlaying)} className="w-full mt-4"  color="primary">
                        <PlayIcon className="w-6 h-6 mr-2" />
                        Pause
                      </Button>
                      ) : (
                        <Button onClick={() => playAudio(track.audioUrl, track.id, track.isPlaying)} className="w-full mt-4"  color="primary">
                        <PlayIcon className="w-6 h-6 mr-2" />
                        Play
                      </Button>
                      )
                   }
                    </div>
                  </CardContent>
                </Card>
              ))}
             
           
            
            </div>
          </div>
        </div>
      </section>
   
    </div>
  )
}

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}