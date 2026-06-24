# Notes — working scratchpad

## Source material

- The course is built from `docs/business-engine-outline.md` (Part 3) and
  `docs/balance-sheet-outline.md` (Part 4). These are the user's own curriculum.
- Central metaphor the user likes: **a company is a machine** —
  `Revenue → Costs → Profit → Cash flow → Margins → Reinvestment`.
- The user already understands stock prices; this course bridges to fundamentals.

## Teaching sequence (from the outlines)

Part 3 — Business Engine:

1. Revenue → 2. Costs → 3. Gross profit → 4. Operating profit → 5. Net profit →
2. Cash flow → 7. Free cash flow → 8. Margins → 9. Reinvestment
   Then Part 4 — Balance Sheet: Assets → Liabilities → Equity → Debt → Cash →
   Net debt → Enterprise value, and finally valuation ratios + the four quadrants.

## Preferences observed

- Likes intuitive-before-abstract ("money comes in, money goes out…").
- Euro (€) examples.
- Derive ratios from the engine rather than memorising formulas.
- Short, single-sitting lessons.

## TEACHING DIRECTIVE (from user, 2026-06-22) — important

- Treat `docs/*-outline.md` as a **structural outline only**, NOT a script.
  Develop, explain, deepen, and add examples freely within that structure.
- **Never introduce a term or concept as a bare list/name.** Each time a new
  term appears, ask: "does the student already know this? how do I teach it
  effectively?" Then give a one-line intuitive explanation and/or a concrete
  example. (User's cited failure: lesson 2 listed direct-cost types without
  explaining the non-obvious ones.)
- Use the tools of a GREAT teacher: relatable examples, analogies, intuition,
  conceptual framing — but stay concise. Clarify meaning without being verbose.
- Don't change the structure or fundamentals — only enrich the teaching.

### Signature device: the "litmus test" (user loves this — use often)

When a concept's whole point is telling members from non-members (direct vs.
operating cost, asset vs. liability, capex vs. opex, debt vs. equity…), give the
learner a short **decision heuristic** they can apply themselves, ideally as a
**counterfactual probe**:

- Direct cost: "If you sold ONE MORE unit, would this cost rise? → direct."
- Operating cost: "Would it still hit you in a week you sold ZERO? → operating."
  Why it works (pedagogy to keep reusing):
- **Concept discrimination** — isolates the _defining attribute_, not a list.
- **Counterfactual probe** — "what if one more / zero?" forces active testing.
- **Contrasting cases** (Schwartz & Bransford) — present the matched OPPOSITE
  test right after, so the distinguishing feature pops out. Always pair them.
  Make these tests memorable one-liners; let the learner do the sorting.

### Other high-value teaching devices (use where best suited)
1. **Activate prior knowledge** — anchor a new concept to something the learner
   already lives, before any jargon. Ex (L3): a company's three profit layers
   taught via the payslip the learner sees monthly (gross pay vs. net pay).
   Use when: the concept has a strong everyday analogue.
2. **Contrasting cases** (Schwartz & Bransford) — present two pointed opposites
   side by side so the distinguishing feature pops out. Ex (L3): software vs.
   supermarket, both €100 revenue, €95 vs. €25 gross profit. Use when: a concept
   is best understood by what makes two things differ.
3. **Spaced callback / retrieval** — re-use an earlier example to teach the next
   idea, forcing recall of prior material. Ex (L3): the two-cafés example from
   L2 reused to explain operating profit. Use when: a new layer builds directly
   on a prior one.
4. **Derivation over memorisation** — make a "formula" fall out of the engine in
   small steps rather than handing it over. Ex (L3): P/E derived as net profit →
   EPS → price ÷ EPS, ending in plain words ("price in years-of-profit"). Use
   when: a famous ratio/metric appears — never present it as a thing to memorise.

(Bonus already in use: **interleaving** — quizzes that mix in earlier lessons'
material for durable recall, not just same-lesson fluency.)

## Resolved with the user (2026-06-22)

1. **Mission "why": financial literacy** — understand companies in the news,
   _not_ (yet) to pick stocks. MISSION.md updated accordingly. Keep lessons
   tied to "what does this mean when I read it in an article."
2. **Communities: solo for now.** Don't push forums. Damodaran's blog parked as
   optional reading, not participation.
3. **Worked example: stick with fictional "Company Alpha"** from the outline
   until the basics are solid. No real filings yet.

## Status

- Workspace scaffolded. Stylesheet (`assets/course.css`) + quiz widget
  (`assets/quiz.js`) built. Glossary reference done.
- Lessons 0001 (Revenue), 0002 (Costs), 0003 (Profit) authored, on Company
  Alpha, framed for financial literacy. Alpha's canonical numbers:
  rev €1,000 / direct €400 / gross €600 / opex €300 / op €300 / int €50 /
  tax €50 / net €200. Now extended: 100 shares, price €25 → market cap €2,500,
  EPS €2, P/E 12.5 (keep consistent everywhere).
- Devices used in 0003: payslip analogy (activate prior knowledge), software-vs-
  supermarket contrasting case (gross profit), derivation-over-memorisation
  (P/E falls out of the engine), interleaved quizzes (recall from L1/L2).
- Lesson 0004 (Cash flow) authored. New canonical Alpha numbers: operating cash
  flow €250, depreciation €50 (the gap vs net profit €200), capex €80. Financing
  cash flow shown as "−€100 (illustrative)" — NOT canonical, don't lock it in.
  Devices: freelancer analogy + "profit is an opinion, cash is a fact" aphorism,
  litmus test ("did real money change hands this period?"), two-reasons framing
  (timing/accruals + spreading/depreciation), three-bucket classification.
- Lesson 0005 (Free cash flow) authored. Alpha: FCF = €250 − €80 = €170;
  FCF yield = €170 / €2,500 = 6.8%. Contrasting pair introduced (not canonical):
  "Steady Co" (capex €30 → FCF €220) vs "Grow Co" (capex €240 → FCF €10) to teach
  that negative/low FCF can be growth, not failure. Devices: paycheck analogy,
  derivation (FCF & FCF yield fall out of prior pieces), contrasting cases,
  maintenance-vs-growth capex nuance, interleaved quizzes.
- ORDERING DECIDED (with user): Reinvestment BEFORE Margins (flows from FCF's
  six uses). So: 0006 Reinvestment ✅, then 0007 Margins next.
- Lesson 0006 (Reinvestment / capital allocation) authored. Devices: CEO-as-
  steward analogy, capital-allocation menu (6 doors, recall from L5), litmus test
  ("does a reinvested euro earn more inside than handed back?"), ROIC taught
  intuitively ("interest rate the business earns on its capital", shop €1,000→
  €200 = 20%), COMPOUNDING TABLE (€100 at 20% vs 3% over 10 yrs → €619 vs €134)
  to land "quality compounder", contrasting cases (high-ROIC reinvest vs mature
  return-cash; empire-building = low-ROIC reinvest). Aphorism: "profitability =
  machine today; reinvestment = machine tomorrow."
- Added Buffett shareholder letters to RESOURCES.md (capital-allocation source).
- ROE deliberately deferred to balance-sheet module (teased in ask-teacher).
- Lesson 0007 (Margins) authored — COMPLETES THE BUSINESS ENGINE MODULE
  (Part 3). Alpha margin ladder: gross 60% / operating 30% / net 20% / FCF 17%
  (all from canonical numbers). Devices: savings-rate analogy (why %), the
  descending "margin ladder" visual (ties back to L2 cost layers), within-
  industry comparison rule (teaching point + contrasting case), across-rivals vs
  over-time framing, interleaved quizzes. Primary source: Damodaran "Margins by
  Sector" dataset.
- MODULE STATUS: Business Engine (Part 3) DONE = lessons 0001–0007
  (Revenue, Costs, Profit, Cash flow, FCF, Reinvestment, Margins).
- Next: Part 4 — Balance Sheet, starting Lesson 0008 Assets. Sequence per
  balance-sheet-outline: Assets → Liabilities → Equity → Debt → Cash → Net debt
  → Enterprise value, then valuation ratios + the four quadrants (engine ×
  balance sheet). Reframe: engine = earning power; balance sheet = financial
  structure ("flow vs stock"). Keep Company Alpha (balance-sheet figures from the
  outline: assets €2,000 / liabilities €800 / equity €1,200 / debt €500 / cash
  €200 / net debt €300; market cap €2,500 → EV €2,800).
- Consider: write a learning record once the user demonstrates understanding
  (e.g. via the offered recap quiz) — none written yet beyond 0001 starting point.
