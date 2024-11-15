import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
    title: "Use the FFXIV Job & World Labeler",
    description: "Adding even more to your profile",
}

export default function CommunityPage() {
    return (
        <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-4">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                    Use the FFXIV WOL Labeling<br className="hidden sm:inline" />
                    to tell more about your character
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    A project by <a href="https://bsky.app/profile/did:plc:rgdcflm4ylsl6udghmtblydc" className="underline">@usounds.work</a> that
                    allows you to showcase the World you play on, your jobs, as well as protect yourself from spoilers.<br />
                </p>
            </div>
            <div>
                <Stage title="Subscribe to the service" number={1}>
                    <p className="max-w-lg">
                        Subscribe to the labeler at {" "}
                        <a
                            href="https://bsky.app/profile/label.wol.blue"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @label.wol.blue
                        </a>{" "}
                        in order to be able to use the moderation service.<br /><br />
                        Once subscribed, you&apos;ll be able to tweak its settings
                        (Mostly in order to label spoilers with the first set of options).
                    </p>
                </Stage>
                <Stage title="Post the Labels you want" number={2} last>
                    <p className="max-w-lg">You need to do a post tagging the labeler in the following way:</p>
                    <p className="mt-4 max-w-lg">
                        @label.wol.blue add badge WAR Louisoix
                    </p>
                    <p className="mt-4 max-w-lg">
                        For jobs, you use the 3-letter abbreviations, and for worlds, the full name (Without Data Centers),
                        each separated by a space.
                    </p>
                    <p className="mt-4 max-w-lg">
                        If you want to remove badges, do the same post, but using &quot;remove badge&quot; instead of &quot;add badge&quot;.
                    </p>
                    <p className="mt-8 max-w-lg text-muted-foreground">
                        Notes
                    </p>
                    <p className="mt-4 max-w-lg text-sm text-muted-foreground">
                        • Badges can only be seen by those who have subscribed to the &quot;FFXIV WoL Labeling&quot;.<br />
                        • Only jobs are supported, and classes are not.<br />
                        <br />
                        <a href="https://blog.usounds.work/posts/bluesky-job-labeling#English" className="underline">Original blog post for the labeler by @usounds.work</a>
                    </p>
                </Stage>
            </div>
        </main>
    )
}
