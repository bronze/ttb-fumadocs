# Content Import Tracker

Tracks moving the archived **Thompson Total Branding** site (`http://jura.com.br/jwt/`, entry page [`Fset001.htm`](https://web.archive.org/web/20180716190000/http://jura.com.br/jwt/Fset001.htm)) into `content/docs`.

**How this was built (2026-10-18, updated as sections are imported):** I got the Wayback Machine's capture list (CDX index) for every `jura.com.br/jwt/*` capture across all snapshots (2015–2022), which covers the 2018-07 and 2018-10 entry points too. I downloaded all **113 archived HTML pages** and checked every sentence of each one against the text in `content/docs`. A page is ticked when everything except its "Go to …" navigation links is present locally. Each title links to the archived capture it was compared against.

**Legend**
- `[x]` imported
- `[ ]` not imported yet
- 🟡 stub: a local file exists but has only a title or headings
- ⚠ ~~struck~~: linked from the site but **never archived**, so it can't be recovered from the Wayback Machine
- `123w`: approximate word count of the archived page
- `(88%)`: share of the archived page's sentences found locally. The "Go to …" navigation lines count too, so ticked pages can show 50–98% and still be complete.

## Summary

| Status | Pages | Archived words |
|---|---|---|
| Imported `[x]` | 110 | 17065 |
| Stub file exists 🟡 | 0 | 0 |
| No local page `[ ]` | 1 | 27 |
| Never archived ⚠ | 12 + 67 brief/vehicle sub-pages | — |

**Every archived page has been imported.** The only unticked row is the Day One Structure Diagram: that page was only an image, and the image was never archived. The ⚠ rows were never captured by the Wayback Machine, so they can't be recovered from it.

## Introduction

- [x] [**Welcome to TTB**](https://web.archive.org/web/20150323054908/http://jura.com.br/jwt/S000BRND.HTM) `S000BRND.HTM` · 154w → `index.mdx` (88%)
- [x] [**The Planning Cycle**](https://web.archive.org/web/20150323064323/http://jura.com.br/jwt/T000HOME.HTM) `T000HOME.HTM` · 47w → `the-planning-cycle.mdx` (83%) — Text done. The diagram `PlanCyc.GIF` was never archived, so the page still says "Missing Image". `toolkit.gif` is archived.
- [x] [**TTB Overview**](https://web.archive.org/web/20150315103731/http://jura.com.br/jwt/T000TTB.HTM) `T000TTB.HTM` · 890w → `ttb-overview.mdx` (98%)

## Where Are We Now (N)

- [x] [**Where Are We Now?**](https://web.archive.org/web/20150323155155/http://jura.com.br/jwt/N000NOW.HTM) `N000NOW.HTM` · 82w → `where-are-we-now/index.md` (83%)
  - [x] [**Category and Market Dynamics**](https://web.archive.org/web/20150323175344/http://jura.com.br/jwt/N100CTMK.HTM) `N100CTMK.HTM` · 114w → `where-are-we-now/category-checklist.mdx` (80%)
  - [x] [**Brand Performance Checklist**](https://web.archive.org/web/20150323174511/http://jura.com.br/jwt/N200BRPF.HTM) `N200BRPF.HTM` · 84w → `where-are-we-now/brand-performance-checklist.md` (80%)
  - [x] [**Brand User Checklist**](https://web.archive.org/web/20150323160034/http://jura.com.br/jwt/N300BRUS.HTM) `N300BRUS.HTM` · 84w → `where-are-we-now/brand-user-checklist.md` (75%)
  - [x] [**Client Business Checklist**](https://web.archive.org/web/20150323183001/http://jura.com.br/jwt/N500CLRS.HTM) `N500CLRS.HTM` · 112w → `where-are-we-now/client-business-checklist.md` (88%)
  - [x] [**Brand Assessor & Consumer Research**](https://web.archive.org/web/20150323180411/http://jura.com.br/jwt/N400BRAS.HTM) `N400BRAS.HTM` · 227w → `where-are-we-now/brand-assessor-checklist/index.md` (93%)
    - [x] [**Current Brand Situation**](https://web.archive.org/web/20170423094726/http://jura.com.br/jwt/W210CPOS.HTM) `W210CPOS.HTM` · 344w → `where-are-we-now/brand-assessor-checklist/current-brand.md` (95%) — `where-are-we-now/assets/current_brand_situation.md` is a duplicate copy (hidden from the sidebar).
    - [x] [**Research Guidelines (1)**](https://web.archive.org/web/20150323184729/http://jura.com.br/jwt/N410BRAS.HTM) `N410BRAS.HTM` · 141w → `where-are-we-now/brand-assessor-checklist/research-guidelines-1.md` (87%)
    - [x] [**Research Guidelines (2)**](https://web.archive.org/web/20150323185347/http://jura.com.br/jwt/N4100BRA.HTM) `N4100BRA.HTM` · 234w → `where-are-we-now/brand-assessor-checklist/research-guidelines-2.md` (93%)
    - [x] [**Consumers' Relationship with Category**](https://web.archive.org/web/20150323162201/http://jura.com.br/jwt/N420BRAS.HTM) `N420BRAS.HTM` · 90w → `where-are-we-now/brand-assessor-checklist/consumers-vs-category.md` (82%)
    - [x] [**Brand Positioning**](https://web.archive.org/web/20150323162410/http://jura.com.br/jwt/N430BRAS.HTM) `N430BRAS.HTM` · 157w → `where-are-we-now/brand-assessor-checklist/brand-positioning.md` (91%)
    - [x] [**Brand Personality**](https://web.archive.org/web/20150323161930/http://jura.com.br/jwt/N440BRAS.HTM) `N440BRAS.HTM` · 185w → `where-are-we-now/brand-assessor-checklist/brand-personality.md` (96%)
    - [x] [**Communications Associated with the Brand**](https://web.archive.org/web/20150323154632/http://jura.com.br/jwt/N450BRAS.HTM) `N450BRAS.HTM` · 128w → `where-are-we-now/brand-assessor-checklist/associated-communications.md` (89%)

## Why Are We There (W)

- [x] [**Why Are We There?**](https://web.archive.org/web/20150323184438/http://jura.com.br/jwt/W000WHY.HTM) `W000WHY.HTM` · 58w → `why-are-we-there/index.md` (67%)
  - [x] [**Category & Market Discoveries Checklist**](https://web.archive.org/web/20150323180853/http://jura.com.br/jwt/W100CTMK.HTM) `W100CTMK.HTM` · 123w → `why-are-we-there/category-checklist.md` (94%)
  - [x] [**Brand Discoveries Tools**](https://web.archive.org/web/20150323162014/http://jura.com.br/jwt/W200BRND.HTM) `W200BRND.HTM` · 141w → `why-are-we-there/brand-tools/index.md` (88%)
    - [x] [**SWOT Analysis**](https://web.archive.org/web/20150324042903/http://jura.com.br/jwt/W220SWOT.HTM) `W220SWOT.HTM` · 120w → `why-are-we-there/brand-tools/swot-analysis.md` (95%)
    - [x] [**Brand Map**](https://web.archive.org/web/20150323161017/http://jura.com.br/jwt/W230BMAP.HTM) `W230BMAP.HTM` · 138w → `why-are-we-there/brand-tools/brand-map.md` (94%)
  - [x] [**Consumer Discoveries**](https://web.archive.org/web/20150323164431/http://jura.com.br/jwt/W300CONS.HTM) `W300CONS.HTM` · 147w → `why-are-we-there/consumer-discoveries/index.md` (94%)
    - [x] [**Target Audience Analysis**](https://web.archive.org/web/20150324042750/http://jura.com.br/jwt/W350TARG.HTM) `W350TARG.HTM` · 435w → `why-are-we-there/consumer-discoveries/target-audience-analysis.md` (98%)
    - [x] [**Consumer Buying System**](https://web.archive.org/web/20150324042908/http://jura.com.br/jwt/W310CBS1.HTM) `W310CBS1.HTM` · 401w → `why-are-we-there/consumer-discoveries/consumer-buying-system/index.md` (100%)
      - [x] [**CBS: Trigger Stage**](https://web.archive.org/web/20150607203929/http://jura.com.br/jwt/W311CBS1.HTM) `W311CBS1.HTM` · 135w → `why-are-we-there/consumer-discoveries/consumer-buying-system/trigger.md` (94%)
      - [x] [**CBS: Considering Stage**](https://web.archive.org/web/20150607092709/http://jura.com.br/jwt/W312CBS1.HTM) `W312CBS1.HTM` · 104w → `why-are-we-there/consumer-discoveries/consumer-buying-system/considering.md` (87%)
      - [x] [**CBS: Searching Stage**](https://web.archive.org/web/20150607084913/http://jura.com.br/jwt/W313CBS1.HTM) `W313CBS1.HTM` · 88w → `why-are-we-there/consumer-discoveries/consumer-buying-system/searching.md` (89%)
      - [x] [**CBS: Choosing Stage**](https://web.archive.org/web/20150607203922/http://jura.com.br/jwt/W314CBS1.HTM) `W314CBS1.HTM` · 96w → `why-are-we-there/consumer-discoveries/consumer-buying-system/choosing.md` (91%)
      - [x] [**CBS: Acquiring Stage**](https://web.archive.org/web/20150607083250/http://jura.com.br/jwt/W315CBS1.HTM) `W315CBS1.HTM` · 115w → `why-are-we-there/consumer-discoveries/consumer-buying-system/acquiring.md` (92%)
      - [x] [**CBS: Experiencing Stage**](https://web.archive.org/web/20150607101249/http://jura.com.br/jwt/W316CBS1.HTM) `W316CBS1.HTM` · 107w → `why-are-we-there/consumer-discoveries/consumer-buying-system/experiencing.md` (92%)
    - [x] [**The Consumer Relationship System**](https://web.archive.org/web/20150323170651/http://jura.com.br/jwt/W330CRS1.HTM) `W330CRS1.HTM` · 370w → `why-are-we-there/consumer-discoveries/customer-relationship-system/index.md` (100%)
      - [x] [**CRS: Introduction**](https://web.archive.org/web/20150602135257/http://jura.com.br/jwt/W331CRS1.HTM) `W331CRS1.HTM` · 82w → `why-are-we-there/consumer-discoveries/customer-relationship-system/introduction.md` (100%)
      - ⚠ ~~CRS: Trying out~~ `W332CRS1.HTM`: never archived
      - [x] [**CRS: Appreciating**](https://web.archive.org/web/20150602160402/http://jura.com.br/jwt/W333CRS1.HTM) `W333CRS1.HTM` · 136w → `why-are-we-there/consumer-discoveries/customer-relationship-system/appreciating.md` (100%)
      - [x] [**CRS: Deepening**](https://web.archive.org/web/20150602163739/http://jura.com.br/jwt/W334CRS1.HTM) `W334CRS1.HTM` · 163w → `why-are-we-there/consumer-discoveries/customer-relationship-system/deepening.md` (100%)
      - [x] [**CRS: Loyalty**](https://web.archive.org/web/20150602154051/http://jura.com.br/jwt/W335CRS1.HTM) `W335CRS1.HTM` · 137w → `why-are-we-there/consumer-discoveries/customer-relationship-system/loyalty.md` (100%)
  - [x] [**Branding Properties Audit**](https://web.archive.org/web/20150323175824/http://jura.com.br/jwt/W421PROP.HTM) `W421PROP.HTM` · 358w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (98%)
    - [x] [**BPA: 1. Logo**](https://web.archive.org/web/20150602225943/http://jura.com.br/jwt/W4219PRO.HTM) `W4219PRO.HTM` · 28w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 2. Vocabulary**](https://web.archive.org/web/20150603003638/http://jura.com.br/jwt/W4210PRO.HTM) `W4210PRO.HTM` · 109w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 3. Action & Body Language**](https://web.archive.org/web/20150603002408/http://jura.com.br/jwt/W4211PRO.HTM) `W4211PRO.HTM` · 79w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 4. Spokesperson**](https://web.archive.org/web/20150603001128/http://jura.com.br/jwt/W4212PRO.HTM) `W4212PRO.HTM` · 41w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 5. Music or Jingle**](https://web.archive.org/web/20150603000356/http://jura.com.br/jwt/W4213PRO.HTM) `W4213PRO.HTM` · 53w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - ⚠ ~~character~~ `W4214PRO.HTM`: never archived
    - [x] [**BPA: 7. Using**](https://web.archive.org/web/20150602235329/http://jura.com.br/jwt/W4215PRO.HTM) `W4215PRO.HTM` · 30w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 8. Show**](https://web.archive.org/web/20150602233004/http://jura.com.br/jwt/W4216PRO.HTM) `W4216PRO.HTM` · 38w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - ⚠ ~~demonstration~~ `W4217PRO.HTM`: never archived
    - [x] [**BPA: Mnemonics & Devices**](https://web.archive.org/web/20150602225116/http://jura.com.br/jwt/W4218PRO.HTM) `W4218PRO.HTM` · 65w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 11. Core Product**](https://web.archive.org/web/20150602222241/http://jura.com.br/jwt/W421DPRO.HTM) `W421DPRO.HTM` · 36w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 12. Promotional Activies**](https://web.archive.org/web/20150602215917/http://jura.com.br/jwt/W421FPRO.HTM) `W421FPRO.HTM` · 29w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 13. Service**](https://web.archive.org/web/20150602223227/http://jura.com.br/jwt/W421EPRO.HTM) `W421EPRO.HTM` · 31w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 14. Direct Marketing & Loyalty Schemes**](https://web.archive.org/web/20150603000821/http://jura.com.br/jwt/W421HPRO.HTM) `W421HPRO.HTM` · 36w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 15. Sponsorship**](https://web.archive.org/web/20150602221800/http://jura.com.br/jwt/W421GPRO.HTM) `W421GPRO.HTM` · 22w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 16. Design**](https://web.archive.org/web/20150602230948/http://jura.com.br/jwt/W421APRO.HTM) `W421APRO.HTM` · 33w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 17. Colours**](https://web.archive.org/web/20150602224617/http://jura.com.br/jwt/W421CPRO.HTM) `W421CPRO.HTM` · 36w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 18. Packaging**](https://web.archive.org/web/20150603002017/http://jura.com.br/jwt/W421JPRO.HTM) `W421JPRO.HTM` · 46w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 19. Real Estate**](https://web.archive.org/web/20150603001415/http://jura.com.br/jwt/W421IPRO.HTM) `W421IPRO.HTM` · 47w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
    - [x] [**BPA: 20. Mythology**](https://web.archive.org/web/20150602225318/http://jura.com.br/jwt/W421BPRO.HTM) `W421BPRO.HTM` · 91w → `why-are-we-there/communication-discoveries/branding-properties-audit.md` (100%)
  - [x] [**Communications Audit**](https://web.archive.org/web/20150323182151/http://jura.com.br/jwt/W420CAUD.HTM) `W420CAUD.HTM` · 236w → `why-are-we-there/communication-discoveries/communications-audit/index.md` (100%)
    - [x] [**Current Activity**](https://web.archive.org/web/20150603060847/http://jura.com.br/jwt/W422AUD1.HTM) `W422AUD1.HTM` · 82w → `why-are-we-there/communication-discoveries/communications-audit/current-activity.md` (100%)
    - [x] [**External Influencers**](https://web.archive.org/web/20150603071637/http://jura.com.br/jwt/W424AUD2.HTM) `W424AUD2.HTM` · 139w → `why-are-we-there/communication-discoveries/communications-audit/external-influencers.md` (100%)
    - [x] [**Evaluation Summary**](https://web.archive.org/web/20150603063736/http://jura.com.br/jwt/W423AUD3.HTM) `W423AUD3.HTM` · 120w → `why-are-we-there/communication-discoveries/communications-audit/evaluation-summary.md` (100%)
    - [x] [**CommAssessor Research**](https://web.archive.org/web/20150603034022/http://jura.com.br/jwt/W425ASSR.HTM) `W425ASSR.HTM` · 272w → `why-are-we-there/communication-discoveries/communications-audit/commassessor-research.md` (97%)
  - [x] [**Semiotics**](https://web.archive.org/web/20150323161658/http://jura.com.br/jwt/W410SEMT.HTM) `W410SEMT.HTM` · 253w → `why-are-we-there/communication-discoveries/semiotics/index.md` (96%)
    - ⚠ ~~Semiotic Codes~~ `W411CODE.HTM`: never archived
    - [x] [**Semiotic Brand Myth**](https://web.archive.org/web/20150602075925/http://jura.com.br/jwt/W412MYTH.HTM) `W412MYTH.HTM` · 181w → `why-are-we-there/communication-discoveries/semiotics/brand-myth.md` (94%)
      - ⚠ ~~Myths~~ `W414MYTH.HTM`: never archived
  - [x] [**Client Discoveries**](https://web.archive.org/web/20150323154036/http://jura.com.br/jwt/W500CLNT.HTM) `W500CLNT.HTM` · 318w → `why-are-we-there/communication-discoveries/client-discoveries.md` (97%)
  - [x] [**Key Discoveries Summary**](https://web.archive.org/web/20150323162652/http://jura.com.br/jwt/W600SUMM.HTM) `W600SUMM.HTM` · 267w → `why-are-we-there/communication-discoveries/key-discoveries.md` (100%)

## Where Could We Be (B)

- [x] [**Where Could We Be?**](https://web.archive.org/web/20150323175339/http://jura.com.br/jwt/B000BE.HTM) `B000BE.HTM` · 46w → `where-could-we-be/index.mdx` (100%)
  - [x] [**Day One Brandstorm**](https://web.archive.org/web/20150323170432/http://jura.com.br/jwt/B100STRM.HTM) `B100STRM.HTM` · 285w → `where-could-we-be/day-one-brandstorm/index.md` (100%)
    - [x] [**Day One Structure**](https://web.archive.org/web/20150323155658/http://jura.com.br/jwt/B110STRM.HTM) `B110STRM.HTM` · 347w → `where-could-we-be/day-one-brandstorm/day-one-structure.md` (98%)
      - [ ] [**Day One Structure Diagram**](https://web.archive.org/web/20150602070157/http://jura.com.br/jwt/B111STRM.HTM) `B111STRM.HTM` · 27w → *no local page* — Image-only page. Its diagram `S1STRCT.BMP` was never archived.
    - ⚠ ~~Day One Worksheet~~ `B120STRM.HTM`: never archived — The old stub `consumer-strategy-worksheet.md` was removed; the Day One pages mark it as not archived.
    - [x] [**Practical Guidelines for How To Run a Day One**](https://web.archive.org/web/20150323172845/http://jura.com.br/jwt/B130STRM.HTM) `B130STRM.HTM` · 212w → `where-could-we-be/day-one-brandstorm/practical-guidelines/index.md` (95%)
      - [x] [**Gathering: Preparation for the Session**](https://web.archive.org/web/20150602175722/http://jura.com.br/jwt/B1300STR.HTM) `B1300STR.HTM` · 87w → `where-could-we-be/day-one-brandstorm/practical-guidelines/gathering.md` (100%)
      - [x] [**Conducting the Session**](https://web.archive.org/web/20150602175159/http://jura.com.br/jwt/B1301STR.HTM) `B1301STR.HTM` · 122w → `where-could-we-be/day-one-brandstorm/practical-guidelines/conducting-the-session.md` (100%)
      - [x] [**Synthesizing Results**](https://web.archive.org/web/20150602173527/http://jura.com.br/jwt/B1302STR.HTM) `B1302STR.HTM` · 55w → `where-could-we-be/day-one-brandstorm/practical-guidelines/synthesizing-results.md` (100%)
      - [x] [**The Rooms**](https://web.archive.org/web/20150602172311/http://jura.com.br/jwt/B1303STR.HTM) `B1303STR.HTM` · 403w → `where-could-we-be/day-one-brandstorm/practical-guidelines/the-rooms.md` (96%)
      - ⚠ ~~The People~~ `B1304STR.HTM`: never archived
      - ⚠ ~~Facilitating Group Discussion in the Immersion Session~~ `B1305STR.HTM`: never archived
      - [x] [**Facilitating Break-Out Teams**](https://web.archive.org/web/20150602180816/http://jura.com.br/jwt/B1306STR.HTM) `B1306STR.HTM` · 222w → `where-could-we-be/day-one-brandstorm/practical-guidelines/facilitating-break-out-teams.md` (96%)
      - [x] [**Facilitating General Discussion of Briefs**](https://web.archive.org/web/20150602181710/http://jura.com.br/jwt/B1307STR.HTM) `B1307STR.HTM` · 241w → `where-could-we-be/day-one-brandstorm/practical-guidelines/facilitating-discussion-of-briefs.md` (96%)
  - [x] [**BrandCepts Overview**](https://web.archive.org/web/20150323162406/http://jura.com.br/jwt/B200OVRV.HTM) `B200OVRV.HTM` · 132w → `where-could-we-be/brandcepts-overview.md` (100%)
  - [x] [**BrandCept Research**](https://web.archive.org/web/20150323162411/http://jura.com.br/jwt/B300RESR.HTM) `B300RESR.HTM` · 190w → `where-could-we-be/brandcepts-research.md` (100%)
  - [x] [**Brand Vision**](https://web.archive.org/web/20150323181245/http://jura.com.br/jwt/B400VISN.HTM) `B400VISN.HTM` · 598w → `where-could-we-be/brand-vision.md` (98%)

## How Can We Get There (H)

- [x] [**How Can We Get There?**](https://web.archive.org/web/20150323162009/http://jura.com.br/jwt/H000HOW.HTM) `H000HOW.HTM` · 79w → `how-can-we-get-there/index.md` (75%)
  - [x] [**Communications Planning**](https://web.archive.org/web/20150323183657/http://jura.com.br/jwt/H100COMM.HTM) `H100COMM.HTM` · 394w → `how-can-we-get-there/communications-planning/index.md` (95%)
    - ⚠ ~~What is it?~~ `H101COMM.HTM`: never archived
    - [x] [**Communications Plan**](https://web.archive.org/web/20150323183240/http://jura.com.br/jwt/H140PLAN.HTM) `H140PLAN.HTM` · 136w → `how-can-we-get-there/communications-planning/communications-plan.md` (94%)
    - [x] [**Communication Task Analysis**](https://web.archive.org/web/20150323162047/http://jura.com.br/jwt/H120TASK.HTM) `H120TASK.HTM` · 195w → `how-can-we-get-there/communications-planning/communication-task-analysis.md` (95%)
      - [x] [**Concise Statemet of the Communications Objective**](https://web.archive.org/web/20150602082816/http://jura.com.br/jwt/H1200TAS.HTM) `H1200TAS.HTM` · 106w → `how-can-we-get-there/communications-planning/communication-task-analysis.md` (93%)
      - [x] [**Target Market: the Right Group of Customers**](https://web.archive.org/web/20150602083528/http://jura.com.br/jwt/H1201TAS.HTM) `H1201TAS.HTM` · 44w → `how-can-we-get-there/communications-planning/communication-task-analysis.md` (75%)
      - [x] [**Specific Communications Tasks**](https://web.archive.org/web/20150602083850/http://jura.com.br/jwt/H1202TAS.HTM) `H1202TAS.HTM` · 63w → `how-can-we-get-there/communications-planning/communication-task-analysis.md` (86%)
      - [x] [**Opportunities for Contact with Target Customer**](https://web.archive.org/web/20190920144619/http://jura.com.br/jwt/H1203TAS.HTM) `H1203TAS.HTM` · 114w → `how-can-we-get-there/communications-planning/communication-task-analysis.md` (92%)
      - [x] [**Key Contact Opportunities**](https://web.archive.org/web/20150602085638/http://jura.com.br/jwt/H1204TAS.HTM) `H1204TAS.HTM` · 145w → `how-can-we-get-there/communications-planning/communication-task-analysis.md` (93%)
    - [x] [**Communication Roles**](https://web.archive.org/web/20150323155113/http://jura.com.br/jwt/H121ROLE.HTM) `H121ROLE.HTM` · 88w → `how-can-we-get-there/communications-planning/communication-roles.md` (60%)
    - [x] [**Vehicle Evaluation**](https://web.archive.org/web/20150323181156/http://jura.com.br/jwt/H130VEHC.HTM) `H130VEHC.HTM` · 72w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (78%)
      - [x] [**Advertising**](https://web.archive.org/web/20150603024851/http://jura.com.br/jwt/H131ADVT.HTM) `H131ADVT.HTM` · 48w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (0%)
      - [x] [**Direct Marketing/Relationship Marketing**](https://web.archive.org/web/20150603030113/http://jura.com.br/jwt/H132MARK.HTM) `H132MARK.HTM` · 61w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (60%)
      - ⚠ ~~Digital Media~~ `H133DIGT.HTM`: never archived
      - [x] [**Sponsorship**](https://web.archive.org/web/20150603010903/http://jura.com.br/jwt/H134EVSP.HTM) `H134EVSP.HTM` · 11w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (None%)
      - [x] [**Public Relations**](https://web.archive.org/web/20150603004551/http://jura.com.br/jwt/H135PREL.HTM) `H135PREL.HTM` · 46w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (100%)
      - [x] [**Design**](https://web.archive.org/web/20150603023220/http://jura.com.br/jwt/H136DESN.HTM) `H136DESN.HTM` · 36w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (100%)
      - [x] [**Sales Promotion**](https://web.archive.org/web/20150602232341/http://jura.com.br/jwt/H137SLPR.HTM) `H137SLPR.HTM` · 43w → `how-can-we-get-there/communications-planning/vehicle-evaluation.md` (100%)
  - [x] [**Branding Idea-1: What Is It**](https://web.archive.org/web/20150324042755/http://jura.com.br/jwt/H400IDEA.HTM) `H400IDEA.HTM` · 367w → `how-can-we-get-there/branding-idea.md` (98%)
  - [x] [**Creative Briefs**](https://web.archive.org/web/20150324042912/http://jura.com.br/jwt/H200BREF.HTM) `H200BREF.HTM` · 69w → `how-can-we-get-there/creative-briefs/index.md` (86%)
    - [x] [**Sales Promotion Brief**](https://web.archive.org/web/20150607102509/http://jura.com.br/jwt/H210SPBF.HTM) `H210SPBF.HTM` · 140w → `how-can-we-get-there/creative-briefs/sales-promotion-brief.md` (93%)
    - [x] [**Digital Brief**](https://web.archive.org/web/20150607203925/http://jura.com.br/jwt/H220DIBR.HTM) `H220DIBR.HTM` · 153w → `how-can-we-get-there/creative-briefs/digital-brief.md` (95%)
    - ⚠ ~~Design Brief~~ `H230DSBF.HTM`: never archived
    - [x] [**PR Brief**](https://web.archive.org/web/20150607203932/http://jura.com.br/jwt/H240PRBR.HTM) `H240PRBR.HTM` · 26w → `how-can-we-get-there/creative-briefs/pr-brief.md` (50%)
    - [x] [**Advertising Brief**](https://web.archive.org/web/20150607090624/http://jura.com.br/jwt/H250ADBF.HTM) `H250ADBF.HTM` · 312w → `how-can-we-get-there/creative-briefs/advertising-brief.md` (93%)
    - [x] [**Direct Brief**](https://web.archive.org/web/20150607100639/http://jura.com.br/jwt/H260DRBR.HTM) `H260DRBR.HTM` · 226w → `how-can-we-get-there/creative-briefs/direct-brief.md` (87%)
  - [x] [**Creative Develop. Rsch.**](https://web.archive.org/web/20150323181056/http://jura.com.br/jwt/H300RESH.HTM) `H300RESH.HTM` · 82w → `how-can-we-get-there/creative-research/index.md` (86%)
    - [x] [**Research Preceding Creative Briefs**](https://web.archive.org/web/20150603025034/http://jura.com.br/jwt/H310RESH.HTM) `H310RESH.HTM` · 437w → `how-can-we-get-there/creative-research/research-preceding-briefs.md` (98%)
    - [x] [**Creative Development Research**](https://web.archive.org/web/20150602223117/http://jura.com.br/jwt/H320RESH.HTM) `H320RESH.HTM` · 247w → `how-can-we-get-there/creative-research/creative-development-research.md` (96%)
    - [x] [**Research Briefing Checklist**](https://web.archive.org/web/20150602234201/http://jura.com.br/jwt/H330RESH.HTM) `H330RESH.HTM` · 127w → `how-can-we-get-there/creative-research/research-checklist.md` (94%)

## Are We Getting There (A)

- [x] [**Are We Getting There?**](https://web.archive.org/web/20150323174532/http://jura.com.br/jwt/A000ARE.HTM) `A000ARE.HTM` · 59w → `are-we-getting-there/index.md` (67%)
  - [x] [**Performance Evaluation Introduction**](https://web.archive.org/web/20150323182708/http://jura.com.br/jwt/A100TOO1.HTM) `A100TOO1.HTM` · 268w → `are-we-getting-there/performance-introduction/index.md` (100%) — Includes the `PEOVER.BMP` diagram.
    - ⚠ ~~Action~~ `A110TOO1.HTM`: never archived
    - [x] [**Involvement**](https://web.archive.org/web/20150603055257/http://jura.com.br/jwt/A120TOO1.HTM) `A120TOO1.HTM` · 121w → `are-we-getting-there/performance-introduction/involvement.md` (100%)
    - [x] [**Communication**](https://web.archive.org/web/20150603042524/http://jura.com.br/jwt/A130TOO1.HTM) `A130TOO1.HTM` · 92w → `are-we-getting-there/performance-introduction/communication.md` (100%)
  - [x] [**Performance Evaluation Checklist**](https://web.archive.org/web/20150323161348/http://jura.com.br/jwt/A140TOO1.HTM) `A140TOO1.HTM` · 218w → `are-we-getting-there/performance-checklist.md` (87%)
  - [x] [**Performance Evaluation Workplan**](https://web.archive.org/web/20150323165750/http://jura.com.br/jwt/A150TOO1.HTM) `A150TOO1.HTM` · 255w → `are-we-getting-there/performance-workplan.md` (90%)

## Never archived: vehicle and brief sub-pages

These are linked from the vehicle pages (H131–H137) and the brief pages (H210–H260), but none of them were ever captured:

`H1311ADV.HTM`, `H1312ADV.HTM`, `H1313ADV.HTM`, `H1314ADV.HTM`, `H1315ADV.HTM`, `H1316ADV.HTM`, `H1321DRM.HTM`, `H1322REL.HTM`, `H1323TAR.HTM`, `H1324DAT.HTM`, `H1341ESP.HTM`, `H1342PSP.HTM`, `H1351PR.HTM`, `H1352PR.HTM`, `H1353PR.HTM`, `H1354PR.HTM`, `H1355PR.HTM`, `H1356PR.HTM`, `H1357PR.HTM`, `H1361DES.HTM`, `H1362DES.HTM`, `H1363DES.HTM`, `H1364DES.HTM`, `H1365DES.HTM`, `H1366DES.HTM`, `H1371SP.HTM`, `H1372SP.HTM`, `H1373SP.HTM`, `H1374SP.HTM`, `H1375SP.HTM`, `H1376SP.HTM`, `H2100SPB.HTM`, `H2101SPB.HTM`, `H2102SPB.HTM`, `H2103SPB.HTM`, `H2104SPB.HTM`, `H2105SPB.HTM`, `H2106SPB.HTM`, `H2107SPB.HTM`, `H2200DIB.HTM`, `H2201DIB.HTM`, `H2202DIB.HTM`, `H2203DIB.HTM`, `H2204DIB.HTM`, `H2205DIB.HTM`, `H2206DIB.HTM`, `H2207DIB.HTM`, `H2208DIB.HTM`, `H2500ADB.HTM`, `H2501ADB.HTM`, `H2502ADB.HTM`, `H2503ADB.HTM`, `H2504ADB.HTM`, `H2505ADB.HTM`, `H2506ADB.HTM`, `H2600DRB.HTM`, `H2601DRB.HTM`, `H2602DRB.HTM`, `H2603DRB.HTM`, `H2604DRB.HTM`, `H2605DRB.HTM`, `H2606DRB.HTM`, `H2607DRB.HTM`, `H2608DRB.HTM`, `H2609DRB.HTM`, `H4000IDE.HTM`, `H4001IDE.HTM`

## Local files with no archive source / cleanup notes

- `test.mdx`: component playground, hidden from the sidebar with `!test`.
- `where-are-we-now/assets/current_brand_situation.md`: duplicate of `brand-assessor-checklist/current-brand.md`.
- `why-are-we-there/communication-discoveries/index.md`: local grouping page; the original site has no matching page.

## Images

Imported: `PEOVER.BMP` (Performance Evaluation), `DayOne.GIF` (Day One Brandstorm), `BMAXIS`/`BMPROD`/`BMMOVE.BMP` (Brand Map), `N_CAP2`–`N_CAP4.BMP` (Communication Roles).

Archived but not used (decorative): `N_D1LG.BMP` (Day One logo), `N_START.BMP`, `N_WALL.BMP`, `toolkit.gif`, `jwalter.gif`.

Never archived: `PlanCyc.GIF` (Planning Cycle diagram), `S1STRCT.BMP` (Day One diagram), `N_CAP1.BMP`, `N_CAP5.BMP`, `N_PINV.BMP`, `N_PCOM.BMP`, `Mag1.gif`, `audivide.gif`, `viewTv.gif`.

## Possibly incomplete

The `www.jura.com.br` host could not be checked because the Internet Archive was temporarily offline during the crawl. If a page listed above as "never archived" turns up there, update its row.
