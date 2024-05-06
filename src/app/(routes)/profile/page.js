"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "../../../components/index";
import { RES } from "../bigfivepersonalitytest/page";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default function Profile() {
  const { data: session, status } = useSession({});
  const router = useRouter();
  const data = RES();

  console.log(data);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
    if (data === undefined) {
      router.push("/bigfivepersonalitytest");
      return;
    }
  }, [session, status, router, data]);

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#191A1C]">
      <Navbar />

      <div className="flex w-full h-1/2 text-white mt-28 justify-evenly">
        <div className="flex flex-col w-2/5 h-2/5">
          {/**This is where the bar chart will be */}
          <h1 className="text-2xl block mx-auto my-4 font-bold">
            Your Personality Scores
          </h1>
          <BarChart interMData={data} />
        </div>

        <div className="flex flex-col w-2/5 h-2/5 items-center">
          <h1 className="text-2xl block mx-auto my-4 font-bold">
            Know your traits
          </h1>
          <p className="text-xl">
            <span className="font-semibold">Openness to Experience</span>
            : This trait reflects a person&apos;s general interest in novelty,
            variety, and intellectual stimulation. Individuals high in openness
            are: Curious and eager to learn new things. Open to trying new
            experiences and exploring different ideas. Imaginative and creative.
            Appreciative of art, beauty, and new cultures. Comfortable with
            ambiguity and change.
            <br />
            <br />
            <span className="font-semibold">Conscientiousness</span>: This trait
            encompasses a person&apos;s level of organization, self-discipline,
            and goal-oriented behavior. Individuals high in conscientiousness
            are: Careful and thorough in their work. Reliable and dependable.
            Planful and organized. Good at self-control and delaying
            gratification. Driven to achieve their goals.
            <br />
            <br />
            <span className="font-semibold">Extraversion</span>: This trait
            reflects a person&apos;s preference for social interaction and
            stimulation. Individuals high in extraversion are: Outgoing and
            sociable. Energetic and enthusiastic. Talkative and enjoy being the
            center of attention. Seek out social interaction and thrive in group
            settings. Feel comfortable expressing their feelings and opinions
            <br />
            <br />
            <span className="font-semibold">Agreeableness</span>: This trait
            reflects a person&apos;s tendency to be cooperative, empathetic, and
            trusting. Individuals high in agreeableness are: Kind,
            compassionate, and helpful. Cooperative and willing to compromise.
            Trusting and easygoing. Dislike conflict and prefer harmony. Put the
            needs of others before their own.
            <br />
            <br />
            <span className="font-semibold">Neuroticism</span>: This trait
            reflects a person&apos;s tendency to experience negative emotions
            and anxiety. Individuals high in neuroticism are: Prone to worry,
            anxiety, and stress. Moody and easily upset. Self-conscious and
            sensitive to criticism. Have a negative outlook on life and tend to
            focus on the bad. May have difficulty coping with stress.
          </p>
        </div>
      </div>

      <div className="flex text-white mt-10 w-[40%]">
        <PieChart interMData={data} />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
