"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function ProfDavidMorrisPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById("custom-cursor")
      if (cursor) {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white relative md:cursor-none">
      {/* Custom Cursor - Hidden on mobile */}
      <div
        id="custom-cursor"
        className="fixed w-auto h-6 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <img src="/mouse.png" alt="Blue arrow cursor" className="w-auto h-full object-contain" />
      </div>

      {/* Header */}
      <header className="px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo/Name */}
          <div>
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-serif text-black hover:text-gray-600 transition-colors">
                elizabeth hong
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-16">
            <Link
              href="/articles"
              className="text-sm md:text-xl font-serif text-black hover:text-gray-600 transition-colors"
            >
              articles
            </Link>
            <Link
              href="/projects"
              className="text-sm md:text-xl font-serif text-black hover:text-gray-600 transition-colors"
            >
              projects
            </Link>
            <Link href="/interviews" className="text-sm md:text-xl font-serif text-black underline">
              interviews
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-4 pb-[120px] md:pb-[200px]">
        <div className="max-w-[65ch] mx-auto px-4 md:px-8">
          <h1 className="text-lg md:text-xl font-serif text-black mb-2 text-left">Prof. David Morris</h1>
          <p className="font-serif text-gray-600 text-xs md:text-sm mb-6 md:mb-8 text-left">15th of August, 2025</p>

          <div className="space-y-4 md:space-y-6 font-serif text-black leading-relaxed text-xs md:text-sm text-left">
            <p>I decided on my first day of Liver Surgery that I would interview Professor Morris.</p>

            <p>
              It was that curious glint in his eye through the day, and a child-like excitement to parts of his work he
              must have seen thousands of times. I can't say that this is a common attitude in the hospital environment,
              and I wanted to know what drove it.
            </p>

            <p>
              I wanted to know, because I recently decided a career in medicine (at least in its traditional form) is
              not for me. As I settle into that decision I have a nagging sense that there is something special here in
              medicine that I am missing the essence of. It's people like Prof. Morris that give me that sense.
            </p>

            <p>
              Prof's career is legendary, and to me represents an exciting possibility of achieving both concentration
              and scale of impact in the medical field. He is adored by his patients and the broader academic community
              alike, and he clearly is having quite a bit of fun doing it. So I wanted to hear a bit more about his
              life.
            </p>

            <p>
              Professor David Morris is a world-renown surgical oncologist, as well as a drug developer, researcher and
              has:
            </p>

            <ul className="list-disc list-inside ml-2 md:ml-4 space-y-1">
              <li>Pioneered the treatment of hydatid disease with Albendazole.</li>
              <li>Developed 4 anti-cancer drugs.</li>
              <li>Pioneered multiple surgical techniques in surgical oncology.</li>
              <li>And much, much more.</li>
            </ul>

            <p>On top of all this he is a farm-owner (new life goal unlocked), where he has over 2000 sheep!!!</p>

            <p>Talk about an over-achiever.</p>

            <p>
              I wasn't sure what to expect from this chat. I have my foot out the door of an establishment that he is a
              towering figure in. Would we reach an understanding?
            </p>

            <p>
              Despite my worries I left feeling a kind of kindred spirit in Prof. He was no different in his passions,
              commitment and love for his work to the startup + alternative-other crowd I have come to associate with.
            </p>

            <p>And I'd love to share this chat with you.</p>

            <p>Read more for for:</p>

            <ul className="list-disc list-inside ml-2 md:ml-4 space-y-1">
              <li>Prof's 'self-indulgent' approach to wayfinding</li>
              <li>How to become an expert in a field within just a few years.</li>
              <li>
                How Prof started a lab and developing a cure for hydatid cysts during registrar (early training) years
              </li>
              <li>The big mistakes being made by medical school students and young doctors today</li>
              <li>The 'human' aspects of medicine - What cannot be replaced</li>
            </ul>

            <hr className="my-6 md:my-8 border-gray-300" />

            <p>
              He spoke to me in his office, level three in a small building adjacent to the hospital. The shelves were
              filled to the brim and stacked all the way to the ceiling and a table, stacked with a similar kind of
              fervor sat between me and Prof.
            </p>

            <p>And so the chat began.</p>

            <h3 className="text-base md:text-lg font-serif font-semibold mt-6 md:mt-8 mb-3 md:mb-4">
              Self-indulgence as a strategy for wayfinding
            </h3>

            <p>
              <strong>Liz:</strong> It's difficult to imagine you as a medical student. What were you like? Were you
              very serious?
            </p>

            <p>
              <strong>Prof. Morris:</strong> Well, as a medical student, I was bored to tears. And the first two years
              in medical school, I seriously thought about giving up and going back to the farm. I found the kind of
              lecture-type education that we had in those days, the first two years, was just dreadfully boring.
              Fortunately, when I got on to the third year, which was clinical, the first day I was on a surgical term.
              I went to theatre, and I stayed in theatre all day - and all night - and all the next day. And I thought,
              "Hmm, this might do". I think that the thing to try and find in life is what you enjoy. And I really enjoy
              surgery. Now, psychoanalysing yourself about why you enjoy things, I'm not clever enough to do, but I
              certainly find fixing things is kind of pleasing. It feels good when you fix things.
            </p>

            <p>
              <strong>Liz:</strong> So it sounds like a lot of it came from this discovery of what you enjoyed. Would
              you say that was the primary driving force early in your career? And is that different to your approach
              now?
            </p>

            <p>
              <strong>Prof. Morris:</strong> No, I think I've gone on being very self-indulgent and doing things that I
              enjoy doing.
            </p>

            <p>
              But in terms of why have I gone on doing the things that I have done and why I still enjoy it every day
              when I'm 73 years old and come to work and so on, is that I've changed what I've done over the years. I
              used to do a lot of colorectal surgery back in the UK. When I came here to Australia, I thought that there
              was a bit of an absence of interest in liver cancer, and I could do liver surgery, and so I concentrated
              on that. I think I operated on a bit over 5,000 people with liver cancer and we developed some new
              techniques. I find that kind of interesting. Doing stuff that's new is a buzz. You only have to get one
              thing right every now and again. It's a huge buzz and I've developed a few drugs over the years. It's
              really sort of exciting but also quite humbling that you can become an expert in an area within a few
              years. I still really enjoy that feeling.
            </p>

            <p>
              <strong>Liz:</strong> I think what has been unique about your career is the way that you've constantly,
              proactively shifted and explored, in contrast to how treadmill-like and straightforward the medical path
              can be. What has led you to deviate from what could have been a very straight path, so to speak?
            </p>

            <p>
              <strong>Prof. Morris:</strong> I think you could also think that I'm awkward and kind of self-indulgent in
              that I really like to work on things that I'm interested in. And I kind of justify that because often
              those things are not things that other people are interested in. And so it's been useful for patients, not
              just for me. And again, it's good to try and find things that are both useful and enjoyable. I think
              there'd be nothing worse than doing a job that you really don't enjoy. If you can find what you like, then
              life's much easier.
            </p>

            <h3 className="text-base md:text-lg font-serif font-semibold mt-6 md:mt-8 mb-3 md:mb-4">
              Beginner to expert - Developing a cure for hydatid disease
            </h3>

            <p>
              <strong>Liz:</strong> So then let's say that you've identified a new area that you're interested in and
              that you'd like to be an expert in it in a couple of years. How do you begin this process of learning?
            </p>

            <p>
              <strong>Prof. Morris:</strong> For me, it's often started in the lab in that, you know, we find something
              that's not been noticed before, that's interesting, and I can see could be of potential value. Then you
              really have to understand the disease that you're going to try to use that device or drug in, because lots
              of scientists will develop things that actually are very clever, but don't have much clinical application.
              So I guess I'm very focused on what we do actually have a clinical need for.
            </p>

            <p>
              So first of all, find a good problem. If you have a good problem, then it's worth working on that. And put
              simply, the things that I've worked on are: liver cancer, which had an absolutely dismal prognosis when I
              started and then peritoneal cancer, and now I'm interested in drug development for mucin-related disease.
              And that's really taken me into respiratory medicine, which is quite a change, but very interesting and
              very exciting. And again, we recently put some papers into the European Respiratory Society, and had five
              papers accepted. I thought, "That's interesting, other people seem to find <em>our</em> work to be
              interesting (Despite us not being from this field primarily). I guess that we all tend to limit ourselves.
            </p>

            <p>
              I've been very surprised at how discoveries can occur and how you can actually <em>do</em> those things. I
              think the best thing that I did was albendosol for Hydatid disease, <em>echinococcus</em>. And that was
              when I was a registrar. That has stood the test of time and we did the basic laboratory and animal testing
              as well as the first clinical series. It was really quite eye-opening that I could do that and I couldn't
              really understand why other people hadn't.
            </p>

            <p>
              <strong>Liz:</strong> Can you describe what the process of drug discovery was like for you?
            </p>

            <p>
              <strong>Prof. Morris:</strong> Well, with Hydatid disease, the drug that I was interested in had rather
              better pharmacokinetics than any previous agents that had been used for it. It encouraged me to think that
              it might be useful. And because it was useful in granulosis, we went on to look at it in the laboratory
              and in animals in multilocularis, which was pretty much uniformly fatal before the drug came along. And it
              was just very exciting.
            </p>

            <p>
              <strong>Liz:</strong> And as a registrar, in what capacity did you do this research? Had you set up your
              own lab?
            </p>

            <p>
              <strong>Prof. Morris:</strong> Yeah, well there were some great people that I knew, and they were very
              supportive and helpful, even if they weren't experts in that area. They had enough enthusiasm and they
              challenged the existing dogma and in that they really taught me something.
            </p>

            <p>
              <strong>Liz:</strong> Right. Stupid question, but how does one start a lab?
            </p>

            <p>
              <strong>Prof. Morris:</strong> You don't need very much really. A lab is a bit of bench space and then a
              little bit of planning about what you're going to need and what you're going to do and so on. And then you
              kind of graduate to wanting to have people help you do things and then you have to raise money and you
              have to get grants. find money from other sources. I never actually robbed anybody to do research, but I
              suppose I've come pretty close to it.
            </p>

            <p>
              <strong>Liz:</strong> What would you say is your favourite or least, and least favorite part of your job
              currently?
            </p>

            <p>
              <strong>Prof. Morris:</strong> Well, the least favorite part is really easy, and that's administration. I
              hate administration. I know that it has to happen, and people do have to be administrators, and it's a
              thankless job, and I'm not prepared to do that. Really. What's the most exciting bit? Ah, the most
              exciting bit is helping people. And I get a real buzz out of seeing people, say from 20 years ago, when
              everyone thought I was totally mad for doing peritonectomy. And I've still got patients alive from 20 or
              even 30 years ago who have benefited from that.
            </p>

            <h3 className="text-base md:text-lg font-serif font-semibold mt-6 md:mt-8 mb-3 md:mb-4">
              The trap in medicine - What to optimise for
            </h3>

            <p>
              <strong>Liz:</strong> That easily sounds like what would be the most rewarding part. What would you say,
              if you look back in your career, were some mistakes that you made along the way or some things that you
              see young doctors doing now that you think is something that you'd advise against?
            </p>

            <p>
              <strong>Prof. Morris:</strong> Okay, now as a drug developer and the at least partial owner of a drug
              company, this may sound a bit funny, but I think one of the great problems in medicine is money. And I
              think that one can become completely focused on money and I think that's actually not good for anybody,
              including you. And we all have to earn money, but it's a shame when it kind of takes over your life,
              because there's much more interesting things to do, and much more rewarding things to do. So I think
              that's a great problem in medicine, and I don't think our system provides much of an alternative to that.
              life is making a lot of money and so I think that's a shame and I'm not a communist but I think that it's
              it's a trap right and in in the drug company that I've developed It's still a trap and we have to have
              money in order to do development and to do trials and to do the regulatory. But the focus must always
              remain the patient and providing patients with a useful treatment.
            </p>

            <p>
              <strong>Liz:</strong> Nowadays, I also see a growing trend where many, at least students around me,
              optimise for work-life balance - I've heard that many specialties that have been more demanding They have
              gone down in popularity and more lifestyle specialties so to speak have increased demand. What are your
              thoughts on this?
            </p>

            <p>
              <strong>Prof. Morris:</strong> I've been thrown out of various meetings before now, including the careers
              night here, because my idea of work-life balance is not quite the conventional one. I love work, and I
              really, really enjoy it. I also think it's a pretty important thing, looking after patients. And you
              probably want to try and do it pretty well. And I don't think it's very hard, at least in our specialty,
              which you understand, to kind of half do it.
            </p>

            <p>
              <strong>Liz:</strong> What do you think are some things that one could do to catalyse this process of
              discovery - To find work that you love?
            </p>

            <p>
              <strong>Prof. Morris:</strong> Well, I think it's It's underrated. In medical school, I think that
              probably one of the most important things is to try and find what you want to do. And I don't think that
              in medical school we put much effort into that. And that's a pity. It seems to me that we don't actually
              prepare our students very well for their lives after they get out of medical school. And I'm afraid the
              only way that you kind of find these things at the moment is just by rotating around different disciplines
              and finding things that you enjoy. And it's sometimes that you enjoy the team, or there's a good coffee
              shop, or the nurses were nice on that team. And of course, that isn't enough, because that isn't what
              you're going to be doing when you're a boss. So you have to do a little bit of psychoanalysis about what
              turns you on. And what's gonna last.
            </p>

            <p>
              I guess for me, and I don't understand people who don't get this buzz. I think the buzz in research
              happens every day. There are always new things happening. Not just your research, but other people's
              research. is kind of, it's good fun.
            </p>

            <p>
              <strong>Liz:</strong> A lot of medical students have worries, doubts about the future of their careers,
              especially now at a time when knowledge work is at risk and is questioned. What is it to be a doctor in
              this future?
            </p>

            <p>
              <strong>Prof. Morris:</strong> I think that AI is our servant. I think it's going to help us. I don't
              think it's going to actually replace many of the things that we do as doctors. It might be very helpful to
              us, but it doesn't worry me a bit. I think you're going to find your ability to interact with another
              human being and to spot who's sick. When we go around in the morning, often it's not the odd spots and
              tubes that tell us who's sick. You just look at them and you can see.
            </p>

            <h3 className="text-base md:text-lg font-serif font-semibold mt-6 md:mt-8 mb-3 md:mb-4">
              Being a human doctor in the age of AI.
            </h3>

            <p>
              <strong>Liz:</strong> I feel that it is an exciting time though, because discussing what can and can't be
              replaced makes us question what parts of the work are inherently human. What other aspects of being a
              doctor have you felt are fundamentally human in this way?
            </p>

            <p>
              <strong>Prof. Morris:</strong> I think that the human elements of being a doctor are absolutely central to
              what we do. You've seen our peritonectomy patients and how they come in to our office not knowing much and
              we talk to them about their disease, tell them the options, listen to their take on that, work out if
              they're appropriate for the procedure, work out if they're fit for the procedure, and at the end of the
              day work out if they're going to consent to it. And again, I think that's a very human thing and that's
              because before somebody can decide, they've got to understand. And although we do give them written
              material about outcomes, I think that they listen to what you say. Also, they have a feeling that you as a
              human being are looking after them. And I don't think that that's something that's easily replaced. They
              trust you to look after them. And they kind of need that feeling.
            </p>

            <p>
              <strong>Liz:</strong> And finally, do you have any book recommendations?
            </p>

            <p>
              <strong>Prof. Morris:</strong> The House of God. So the House of God is about kind of full-on very busy
              clinical practice for juniors in the US and it's kind of the bad old days when people worked absolutely
              ridiculous hours, never set a foot outside the hospital and you know, got told by their mothers that they
              look pale. And I did all that. And to be honest, although there is a negative side to that, there is also
              a very positive side to that. And it's kind of a bit like the feeling that people get in a war, that you
              actually feel part of a team. Anyway, it's a good book.
            </p>

            <p>
              <strong>Liz:</strong> I'll definitely have a read. Thanks so much for the chat.
            </p>

            <p>
              Among other article-types I'll be posting more interviews with people with that glint, just like Prof
              Morris. I have a diverse list planned - of bakers, baristas, pastors, founders, mothers, gardeners,
              retirees… So stay tuned!
            </p>

            <p>You can subscribe to my substack to receive these straight in your inbox:</p>

            <div className="mt-6 md:mt-8 flex justify-center">
              <iframe
                src="https://elizhong.substack.com/embed"
                width="100%"
                height="320"
                className="max-w-[480px] w-full"
                style={{ border: "1px solid #EEE", background: "white" }}
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Cityscape Footer */}
      <div className="fixed bottom-0 left-0 w-full">
        <img
          src="/updated-cityscape.png"
          alt="Hand-drawn cityscape illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
