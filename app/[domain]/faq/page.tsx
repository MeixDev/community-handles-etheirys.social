import { Collapse } from "@/components/ui/collapse"

export const metadata = {
    title: "FAQ",
    description: "Frequently Asked Questions",
}

export default function CommunityPage() {
    return (
        <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="mx-auto mb-10 flex max-w-[980px] flex-col items-start gap-4">
                <h1 className="text-center text-2xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="mx-auto max-w-4xl">
                <Collapse
                    items={[
                        {
                            title: "Will this affect people who follow me?",
                            content:
                                "You will keep all the followers you currently have, however you may need to update starter packs that you appear in with your new handle.",
                        },
                        {
                            title: "Can I change back to my old handle?",
                            content: (
                                <div>
                                    <p className="mb-2">
                                        Yes, you can change back to your old [name].bsky.social at
                                        any time as follows:
                                    </p>
                                    <ol className="list-decimal pl-5">
                                        <li>Open the Bluesky App (or webpage on computer)</li>
                                        <li>
                                            Go to Settings {">"} Advanced {">"} Change Handle
                                        </li>
                                        <li>Then simply enter the handle you want (old or new)</li>
                                    </ol>
                                </div>
                            ),
                        },
                        {
                            title:
                                'It says "Handle not found" when I enter my existing handle in step 1?',
                            content: (
                                <div>
                                    <p>
                                        Make sure you copied your existing handle exactly as it
                                        appears, without the &apos;@&apos; before it. Your handle is
                                        also case-sensitive, so make sure you enter it exactly as it is.
                                    </p>
                                    <p>
                                        If the BlueSky are experiencing high demand and issues (as they are
                                        as I&apos;m writing this), you may need to try again later.
                                    </p>
                                </div>
                            ),
                        },
                        {
                            title: "How do I know this is trustworthy?",
                            content: (
                                <div>
                                    <p className="mb-2">
                                        This project is open-source, and you can check the repository <a
                                            href="https://github.com/ChrisRid/community-handles"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >at this address</a>
                                    </p>
                                    <p className="mb-2">
                                        If you still have concerns, you can contact me at @meineeds.rest,
                                        or just avoid using the project. Do what feels safe for you first
                                        and foremost!
                                    </p>
                                </div>
                            ),
                        },
                        {
                            title: "What happens if you lose the domain?",
                            content: (
                                <div>
                                    <p className="mb-2">
                                        I have absolutely no idea so let&apos;s try to make this not happen.~
                                    </p>
                                </div>
                            ),
                        },
                        {
                            title:
                                "Can I make my own custom handles for my community on BlueSky?",
                            content: (
                                <div>
                                    <p className="mb-2">
                                        You absolutely can! This is based on a project made by mozzius (a
                                        Bluesky developer) which is open-source, and he kindly
                                        provided plenty of guidance so that others can create their
                                        own iterations. Check out his <a
                                            href="https://github.com/mozzius/community-handles"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >GitHub</a> for more information, and if you
                                        do use his project, consider sponsoring him!
                                    </p>
                                    <a href="/create-your-own" className="underline">
                                        Original &quot;Create your own handle&quot; page
                                    </a>
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
        </main>
    )
}

