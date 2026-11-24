# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Unceuh/makefun-promote-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Unceuh/makefun-promote-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for make.fun's bounty
[Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is one public X post from [@kozexoshoes](https://x.com/kozexoshoes)
that quotes make.fun's make-your-own-bounty post, with a photo of its own
attached: a bounty card for a $20 bounty on an agent that reads 4,000 unread
emails and tells me the 3 that actually matter. The post asks readers what
bounty they would make, and carries the make.fun link, the @makefunai tag and
the entrant's play code in its text.

Places go by the post's score — its replies plus its reposts plus its quotes,
read at the deadline. Views and likes move nothing.

## Files

- `main.ts` — the program the grader runs (Node 22). It reads `POST.json`
  from the repository, checks it is a JSON object naming one X post, copies
  it to `/output/POST.json`, and reads the copy back to confirm it is
  byte-identical.
- `POST.json` — the address of the entry post on X.
- `LICENSE` — MIT.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.
