# Series: Becoming an AI-Native Team

Planning notes for the blog series. Not published (excluded in `_config.yml`).
Parked text below is prose cut from Part 1 for length. Anything marked "Suggested by Claude"
still needs Zhi's approval. Re-run the humanizer and the VOICE.md check when turning it into a post.

## Structure

| Part | Title (working) | What it covers | Status |
|---|---|---|---|
| Prequel | The Boring Secret to Building with AI Agents | One person, one agent, documents as memory | Live |
| 1 | Every Team Needs Its Own Memory | The thesis and the design: context foundation, a layer per team, a shared layer cleared by a legal agent, the ten-decision test | Draft |
| 2 | The Unit Is the Decision | Decision-record template, capture (ETL for context), sources stay the evidence, incentives and the labor bill | Parked text below |
| 3 | Rolling It Out | Before-week-1 legal setup, four-week plan, ten-decision test in depth, governance at scale | Parked text below |
| 4 (optional) | I Built It | Small demo on synthetic data; what broke | Not started; only promise it once Zhi commits |

Every part: 800 to 1,000 words, one big idea, one main diagram, one thing readers can use on
Monday, the series box at the bottom, and the views-my-own disclaimer.

## Parked for Part 2

## The unit is the decision

Software teams solved part of this years ago with architecture decision records: one short file per decision, kept next to the code. I'd borrow the idea for every team. Each decision gets one record, in the same format across every layer, so an agent with access to two layers reads both the same way. Here's the template I'd start with:

```markdown
# Decision: [short title]

Date:         YYYY-MM-DD
Status:       draft | approved | superseded by [link]
Owner:        [name or role]
Layer:        team | shared
Cleared by:   legal agent (rule [id]) | Legal, after escalation

## What we decided
One or two sentences.

## Why
The reasoning, in plain words.

## What we considered and dropped
- Option, and why not

## Sources
- [meeting, thread, or deck, with a link to the moment]
```

## Incentives: where every attempt died

Why would anyone write the docs? Every earlier attempt at knowledge management died on that question.

My answer: nobody should have to write them as a chore. The docs should be a byproduct of work that's already happening. The agent drafts the decision record from the transcript and a person gives it a quick review. The captured path has to be the easiest path, and the work has to be recognized and measured like any other output.

This plan does create a labor bill. Someone has to run the sampling audits, curate the layer, handle disputes, and, for the shared layer, keep Legal's rules current and answer what the legal agent escalates. Reviewing a draft is much cheaper than writing from scratch, though, and a lot of that review already happens informally today, every time someone says "ask the person who was there."

The rubber-stamp worry is real, too. Approvals nobody reads are theater. The sampling audits are the answer: check enough publishes that the agent and the people both know someone is looking.

## Inside a team layer

This is a retrieval and workflow pattern, not a model-building project. You don't need an AI team. You need pipes and permissions. Each team layer has three parts, and the guardrails in the first come before anything else.

#### Part 1: Capture

Guardrails come before a single transcript lands. Decide what the agent may never see before you feed it anything, and keep legal, HR, and other sensitive meetings out by default. In a regulated company, consent to record, retention schedules, and legal holds apply to the layer just as they do to the source.

Then run ETL for context. Extract the raw material (recordings, threads, decks), transform it (transcribe, summarize, reduce it to decisions and reasons), and load it as markdown linked back to its source.

#### Part 2: Interchange

Markdown is the common format everything converts into. The original records stay the evidence. The markdown is the index and the summary, and only approved decision records count as the team's answer. An agent's draft never feeds the next draft until a person has approved it, so one bad summary can't turn into accepted fact.

#### Part 3: Read-write loop

The agent maintains the layer: drafting updates, linking notes, flagging what's stale. It writes freely to a draft space, and anything published needs a person's approval. Key claims link back to the moment they came from, which gives you traceability, though not a guarantee of correctness. Sampling audits catch the rest, so when the agent gets something wrong, someone finds it and undoes it.

## Parked for Part 3

## The ten-decision test

Before you build anything, get a baseline. Pick ten decisions your team made last quarter. For each one, ask your agent (or a new hire) why it was made, and count how many answers come back with a source. That's your score. Run it again after a month.

Here's how I'd start:

- **Before week 1:** Clear it. Agree with Legal, Privacy, and IT on what may be captured, what stays out, who has to consent to recording, and how long records are kept. Run the ten-decision test.
- **Week 1:** Capture. Pick one team. Turn on transcription where it's approved and start archiving threads and decks. Almost no behavior change; the layer grows on its own.
- **Week 2:** Point the agent at it. Let people ask what was decided about X and why Y changed. There's nothing new to learn; it's one more place to ask.
- **Week 3:** Let evidence do the convincing. My bet is that the first time it answers something nobody could find, the holdouts come around. Start the byproduct loop: the agent drafts decision records, people review.
- **Week 4:** Make it official. Rerun the ten-decision test, recognize the curators, and write the layer into how the team works. Then pick the first cross-team project, have Legal write its crossing rules, and turn on the legal agent for its shared layer.

> Nobody adopts a system on a promise. They adopt it after it answers a question they couldn't answer themselves.

## Keeping it honest at scale

**Disputes.** When two accounts of the same decision collide, and with several people's recollections in a layer they will, the layer shouldn't pick one. It tags the dispute, cites both sources, and sends it to the record's owner to settle.

> (Suggested by Claude, not yet approved by Zhi.)

**Rollback.** Every agent edit can be traced to who approved it and undone if it turns out wrong.

**Access.** A record inherits the permissions of its sources. If you couldn't open the original email, you can't read its summary either.

**Retention.** Records follow the same retention and legal-hold rules as the material they came from, in every team layer and in the shared one.

## Cut entirely (the Tuesday test; reuse if a part needs it)

So what is an AI-native team? My test is what the team does differently on an ordinary Tuesday:

1. Decisions get written down as markdown by default.
2. The agent reads the team's layer, and writes to it through approval.
3. A new hire's first week runs on the same layer the agent reads.
