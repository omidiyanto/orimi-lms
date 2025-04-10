import React , {FC} from "react"

interface RoadmapPageProps {
}

const RoadmapPage : FC<RoadmapPageProps> = ({}) => {
  return (
    <main className=" mt-24 md:mt-40 lg:mt-48 h-[55vh]">
        <section className="container flex flex-col justify-center items-center w-full h-full">
            <p className="text-xl lg:text-3xl font-bold">Roadmap Feature</p>
            <p className="text-xl lg:text-3xl font-medium">Will be available soon...</p>
        </section>

    </main>
  );
}

export default RoadmapPage