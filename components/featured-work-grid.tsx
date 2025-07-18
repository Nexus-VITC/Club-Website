"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ImageIcon, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Event {
  id: string
  title: string
  date: string
  image: string
  status: "past" | "upcoming"
}

interface Magazine {
  id: string
  title: string
  issue: string
  date: string
  thumbnail?: string
}

interface GalleryItem {
  id: string
  title: string
  coverImage: string
  photoCount: number
}

export function FeaturedWorkGrid() {
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);

  useEffect(() => {
    // Mock data
    setPastEvents([
      {
        id: '1',
        title: 'Annual Hackathon 2023',
        date: '2023-11-15',
        image: '/placeholder.svg?height=200&width=300',
        status: 'past',
      },
      {
        id: '2',
        title: 'Tech Talk: Future of AI',
        date: '2023-10-20',
        image: '/placeholder.svg?height=200&width=300',
        status: 'past',
      },
      {
        id: '3',
        title: 'Web Development Bootcamp',
        date: '2023-09-10',
        image: '/placeholder.svg?height=200&width=300',
        status: 'past',
      },
    ]);

    setUpcomingEvents([
      {
        id: '4',
        title: 'Annual Tech Symposium 2024',
        date: '2024-12-25',
        image: '/placeholder.svg?height=200&width=300',
        status: 'upcoming',
      },
      {
        id: '5',
        title: 'React Workshop',
        date: '2024-02-15',
        image: '/placeholder.svg?height=200&width=300',
        status: 'upcoming',
      },
    ]);

    setMagazines([
      { id: '1', title: 'Tech Weekly', issue: '#15', date: '2024-01-15' },
      { id: '2', title: 'Innovation Digest', issue: '#12', date: '2024-01-08' },
      { id: '3', title: 'Code Chronicles', issue: '#8', date: '2024-01-01' },
    ]);

    setGalleries([
      { id: '1', title: 'Hackathon 2023', coverImage: '/placeholder.svg?height=150&width=200', photoCount: 45 },
      { id: '2', title: 'Tech Talk Series', coverImage: '/placeholder.svg?height=150&width=200', photoCount: 28 },
      { id: '3', title: 'Workshop Sessions', coverImage: '/placeholder.svg?height=150&width=200', photoCount: 32 },
    ]);
  }, []);

  const EventCard = ({ event }: { event: Event }) => (
    <Link href={`/events/${event.id}`}>
      <Card className="backdrop-panel border-primary/20 glow-hover cursor-pointer mb-4 transition-all duration-300">
        <div className="relative h-32 overflow-hidden rounded-t-lg">
          <Image src={event.image || '/placeholder.svg'} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-2">
            <Badge variant="outline" className="border-primary text-primary bg-black/50">
              {new Date(event.date).toLocaleDateString()}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-white line-clamp-2 hover:text-primary transition-colors">{event.title}</h3>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Adjusted grid for responsiveness: default to 1 column, md:2, lg:3. Removed fixed height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Past Events Box */}
          <div className="backdrop-panel rounded-2xl p-6 glow-effect">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold gradient-text">🕰 Past Events</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                <Link href="/past-events">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            {/* Adjusted height for responsiveness: h-96 for mobile, lg:h-[480px] for larger screens */}
            <div className="overflow-y-auto h-96 lg:h-[480px] pr-2 space-y-4">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Upcoming Events Box */}
          <div className="backdrop-panel rounded-2xl p-6 glow-effect">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold gradient-text">🔮 What's Coming Up?</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                <Link href="/upcoming">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            {/* Adjusted height for responsiveness: h-96 for mobile, lg:h-[480px] for larger screens */}
            <div className="overflow-y-auto h-96 lg:h-[480px] pr-2 space-y-4">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Split Box - Magazines & Gallery */}
          {/* On smaller screens, these will stack. On medium and larger, they will be side-by-side or fill the column. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"> {/* Changed to grid for better stacking on smaller screens and consistent gap */}
            {/* Magazines Section */}
            <div className="backdrop-panel rounded-2xl p-6 glow-effect h-[280px]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold gradient-text">📚 Magazines & Publications</h2>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                  <Link href="/publications">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="overflow-y-auto h-[200px] pr-2 space-y-3">
                {magazines.map((magazine) => (
                  <Card key={magazine.id} className="backdrop-panel border-primary/20 glow-hover cursor-pointer p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white text-sm">{magazine.title}</h4>
                        <p className="text-xs text-gray-400">
                          {magazine.issue} • {new Date(magazine.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="backdrop-panel rounded-2xl p-6 glow-effect h-[280px]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold gradient-text">📸 Explore Gallery</h2>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                  <Link href="/publications">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="overflow-y-auto h-[200px] pr-2 space-y-3">
                {galleries.map((gallery) => (
                  <Card key={gallery.id} className="backdrop-panel border-primary/20 glow-hover cursor-pointer">
                    <div className="flex items-center gap-3 p-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={gallery.coverImage || '/placeholder.svg'}
                          alt={gallery.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white text-sm">{gallery.title}</h4>
                        <p className="text-xs text-gray-400">{gallery.photoCount} photos</p>
                      </div>
                      <ImageIcon className="h-4 w-4 text-primary" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}