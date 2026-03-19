import type { MajorData } from './types'

export const marketingData: MajorData = {
  title: 'AI in Marketing',
  subtitle:
    'How AI supports market analysis, customer insights, and targeted marketing strategies.',
  sections: [
    {
      title: 'Where AI Appears',
      caption:
        'AI appears in marketing where firms study consumers, segment audiences, and personalize at scale.',
      concepts: [
        {
          title: 'Consumer Behavior and Segmentation',
          paragraphs: [
            'In marketing, AI appears most visibly in how organizations study consumer behavior and segment audiences. Students usually encounter this in consumer behavior, marketing research, and analytics courses where broad market theory is connected to individual-level patterns.',
            'In practice, teams use AI-supported segmentation to group customers by needs, purchase history, response behavior, and channel activity. This allows campaigns to be designed around more precise audience profiles instead of one-size-fits-all assumptions.',
            'For undergraduates, this topic shows that segmentation is now both conceptual and computational. Marketers still define meaningful segments, but AI expands how quickly and how often segment boundaries can be evaluated.',
            'For professors, this concept supports assignments where students compare classical segmentation frameworks with data-driven clustering approaches and evaluate when each approach is more defensible.',
          ],
          keyPoints: [
            'AI is widely used to detect and update customer segments at scale.',
            'Segmentation quality still depends on sound marketing logic and interpretation.',
            'Students should connect model outputs to consumer theory, not treat them as self-explanatory.',
          ],
        },
        {
          title: 'Digital Advertising and Campaign Optimization',
          paragraphs: [
            'AI is also central in digital advertising, where marketers manage bids, placements, creative versions, and channel performance across large campaign portfolios. This is a common topic in digital marketing and integrated marketing communications courses.',
            'Organizations use AI-assisted systems to identify which audiences, messages, and timing windows produce stronger engagement and conversion outcomes. These tools support ongoing optimization rather than occasional campaign review.',
            'For undergraduates, this highlights that modern campaign management is iterative and data-intensive. Marketers are expected to monitor performance continuously and adjust creative strategy using both metrics and judgment.',
            'For professors, campaign optimization provides a practical context for teaching causal inference limits, attribution uncertainty, and the difference between short-term performance lift and long-term brand health.',
          ],
          keyPoints: [
            'AI helps optimize campaign decisions across channels in near real time.',
            'Performance improvement depends on disciplined experimentation and interpretation.',
            'Short-term optimization should be balanced with long-term brand strategy.',
          ],
        },
        {
          title: 'Customer Journey and CRM Analytics',
          paragraphs: [
            'Marketing teams increasingly apply AI to customer journey analysis and CRM workflows to understand how people move from awareness to purchase and retention. Students often see this in customer analytics and relationship marketing discussions.',
            'AI-supported CRM systems can highlight drop-off points, predict churn risk, and suggest next-best actions for sales or service teams. The operational goal is more relevant engagement across lifecycle stages.',
            'For undergraduates, this area demonstrates how marketing decisions are linked to cross-functional systems that include service, sales, and operations. Customer outcomes depend on coordination, not only messaging.',
            'For professors, journey analytics offers strong case material for evaluating retention strategy, lifetime value assumptions, and how organizational silos affect the quality of customer experiences.',
          ],
          keyPoints: [
            'AI supports lifecycle analysis across awareness, conversion, and retention stages.',
            'CRM insights are most useful when combined with cross-functional execution.',
            'Journey metrics require interpretation within broader customer experience strategy.',
          ],
        },
        {
          title: 'Social Listening and Brand Monitoring',
          paragraphs: [
            'AI appears in marketing when teams monitor brand perception across reviews, social platforms, and public conversations. This is often discussed in brand management and marketing intelligence coursework.',
            'Natural language and sentiment tools are used to track emerging topics, detect reputation risk signals, and summarize large volumes of unstructured feedback. This helps teams react faster to changing public responses.',
            'For undergraduates, the key lesson is that brand monitoring is now continuous rather than periodic. Marketers must distinguish between noisy short-term spikes and meaningful shifts in consumer perception.',
            'For professors, social listening examples can support instruction on measurement validity, sampling bias, and how digital sentiment indicators should be integrated with traditional brand equity analysis.',
          ],
          keyPoints: [
            'AI enables continuous monitoring of large-scale consumer feedback streams.',
            'Sentiment indicators should be validated before strategic use.',
            'Brand interpretation still requires context, theory, and managerial judgment.',
          ],
        },
      ],
    },
    {
      title: 'What AI Helps With',
      caption:
        'AI is expected to improve personalization, testing speed, and insight generation from customer data.',
      concepts: [
        {
          title: 'Personalize Content and Offers',
          paragraphs: [
            'A core expectation in marketing is that AI will improve personalization so customers receive more relevant content, recommendations, and offers. This expectation appears across e-commerce, media, and service-focused industries.',
            'Marketing teams expect personalization systems to match message, timing, and channel selection to observed customer behavior while maintaining consistency with brand positioning. Relevance is treated as both a performance and relationship objective.',
            'For undergraduates, this topic reframes targeting as an ongoing decision process rather than a single campaign setup step. Students need to interpret how personalization rules influence what consumers actually experience.',
            'For professors, personalization cases provide opportunities to teach precision versus privacy tradeoffs and how overfitting can reduce practical campaign effectiveness despite strong historical metrics.',
          ],
          keyPoints: [
            'AI is expected to improve relevance through adaptive personalization.',
            'Personalization design must align with brand tone and customer trust.',
            'Effectiveness depends on both data quality and strategic restraint.',
          ],
        },
        {
          title: 'Automate Testing and Optimization',
          paragraphs: [
            'Marketing organizations expect AI to automate repetitive testing and optimization tasks such as creative rotation, audience split evaluation, and budget adjustment recommendations. This can accelerate learning cycles.',
            'Instead of relying only on occasional A/B tests, teams use AI-supported experimentation frameworks that continuously compare alternatives under changing traffic and market conditions. The promise is faster evidence generation.',
            'For undergraduates, this means campaign analysis increasingly involves understanding experimentation logic, not just reading summary dashboards. Sound conclusions require attention to design quality and statistical discipline.',
            'For professors, automated testing workflows are useful for teaching experimental validity, metric selection, and the risks of optimizing to proxy indicators that do not reflect true customer value.',
          ],
          keyPoints: [
            'AI can speed campaign learning by automating test iteration cycles.',
            'Optimization quality depends on valid experiment design and metrics.',
            'Automation supports, but does not replace, analytical reasoning.',
          ],
        },
        {
          title: 'Improve Forecasting and Budget Allocation',
          paragraphs: [
            'Another expectation is that AI improves demand forecasting and budget allocation across channels, products, and customer segments. Marketing leaders use these outputs to plan spending under uncertainty.',
            'AI-assisted forecasting can compare scenarios more quickly and highlight which assumptions most influence expected outcomes. This helps teams evaluate risk before committing large media or promotion budgets.',
            'For undergraduates, this shows that forecasting is not only numerical projection but assumption management. Students should examine model sensitivity, data windows, and whether historical patterns remain relevant.',
            'For professors, this concept supports advanced instruction on planning under uncertainty, including error interpretation, scenario stress-testing, and strategic reallocation when market signals shift.',
          ],
          keyPoints: [
            'AI is expected to improve budget planning through richer forecast scenarios.',
            'Allocation decisions remain sensitive to assumptions and market volatility.',
            'Forecast outputs must be tested before strategic commitment.',
          ],
        },
        {
          title: 'Accelerate Unstructured Insight Generation',
          paragraphs: [
            'Marketing teams also expect AI to accelerate insight generation from unstructured sources such as reviews, chats, social comments, and open-ended survey responses. Manual review alone is often too slow at scale.',
            'AI tools are used to summarize themes, flag emerging concerns, and identify message resonance patterns that may not appear in structured KPI reports. This broadens the evidence base for marketing decisions.',
            'For undergraduates, this highlights why communication-focused fields now require stronger data interpretation skills. Text and media analytics must be connected to business context and customer psychology.',
            'For professors, unstructured data use cases are valuable for teaching method triangulation, where qualitative interpretation and quantitative metrics are combined to produce more defensible conclusions.',
          ],
          keyPoints: [
            'AI can surface patterns from large volumes of unstructured customer feedback.',
            'Insight quality improves when text signals are paired with business context.',
            'Marketers should combine qualitative and quantitative evidence streams.',
          ],
        },
      ],
    },
    {
      title: 'Where AI Falls Short',
      caption:
        'Consumer motivation, creative strategy, and trust remain beyond what models can fully capture.',
      concepts: [
        {
          title: 'AI Does Not Fully Explain Consumer Motivation',
          paragraphs: [
            'A common misunderstanding is that AI can fully explain why consumers make choices. In reality, many drivers of behavior involve identity, emotion, social influence, and context that are only partially captured in data.',
            'Pattern detection can describe likely outcomes, but explanation is harder when underlying motivations are ambiguous or rapidly changing. Marketing interpretation remains essential for meaningful strategy.',
            'For undergraduates, this is a reminder that consumer theory still matters in an analytics-rich environment. Data should inform interpretation, not replace conceptual reasoning about human behavior.',
            'For professors, this topic can anchor discussions on the difference between prediction and explanation, especially when students evaluate model confidence alongside behavioral assumptions.',
          ],
          keyPoints: [
            'Predictive strength does not guarantee deep explanation of consumer motives.',
            'Human behavior includes emotional and social factors not fully modeled.',
            'Marketing theory remains necessary for defensible interpretation.',
          ],
        },
        {
          title: 'Personalization Can Feel Intrusive',
          paragraphs: [
            'Another misconception is that more personalization is always better. In marketing practice, highly targeted experiences can feel invasive when consumers do not understand how their data is being used.',
            'Even technically accurate recommendations may reduce trust if frequency, tone, or context is poorly managed. Relevance without respect can harm long-term customer relationships.',
            'For undergraduates, this illustrates that effectiveness includes customer perception, not only click-through or conversion rates. Metrics should be evaluated alongside trust and satisfaction indicators.',
            'For professors, this area supports critical analysis of personalization ethics, consent frameworks, and the tradeoff between near-term lift and long-term brand equity.',
          ],
          keyPoints: [
            'Over-targeting can reduce trust even when models are accurate.',
            'Customer perception is a core outcome variable in personalization strategy.',
            'Respectful design is necessary for sustainable marketing performance.',
          ],
        },
        {
          title: 'Models Struggle When Markets Shift',
          paragraphs: [
            'AI models in marketing are often trained on historical behavior, which can become unreliable during rapid market change. Trend shifts, platform changes, and macro events can quickly alter consumer response patterns.',
            'When environments shift, models may continue recommending actions that performed well in older conditions but are no longer effective. Ongoing validation is required to prevent stale decision logic.',
            'For undergraduates, this reinforces the importance of monitoring model drift and asking whether observed behavior still reflects current customer priorities. Stability cannot be assumed.',
            'For professors, this topic is useful for teaching adaptive strategy, stress-testing assumptions, and designing review cycles that combine statistical monitoring with managerial context checks.',
          ],
          keyPoints: [
            'Historical training data can lose relevance during fast market changes.',
            'Model outputs require continuous validation and recalibration.',
            'Adaptive governance is critical in dynamic marketing environments.',
          ],
        },
        {
          title: 'Creativity and Brand Strategy Remain Human-Led',
          paragraphs: [
            'AI is sometimes framed as if it can replace core creative and strategic marketing work. In practice, successful marketing still depends on narrative design, positioning choices, and cultural understanding.',
            'Automated tools can generate options and optimize distribution, but brand meaning and long-term differentiation require human direction. Strategic coherence does not emerge from optimization alone.',
            'For undergraduates, this highlights that technical fluency should be paired with creative thinking and audience empathy. Career readiness in marketing requires both analytical and storytelling capability.',
            'For professors, this concept supports curriculum designs that integrate analytics projects with brand strategy and communication exercises rather than isolating them into separate silos.',
          ],
          keyPoints: [
            'AI supports creative workflows but does not define brand meaning by itself.',
            'Differentiation requires human-led positioning and narrative judgment.',
            'Marketing education should develop analytical and creative capabilities together.',
          ],
        },
      ],
    },
    {
      title: 'What to Keep in Mind',
      caption:
        'Privacy, transparency, and brand consistency shape how AI is evaluated in marketing practice.',
      concepts: [
        {
          title: 'Trust, Privacy, and Consent',
          paragraphs: [
            'A central consideration in AI-enabled marketing is how data use affects trust. Because marketing directly interacts with consumers, privacy expectations and consent quality strongly influence brand credibility.',
            'Organizations must ensure collection and targeting practices are understandable, proportionate, and aligned with customer expectations. Compliance alone is insufficient if practices feel opaque or manipulative.',
            'For undergraduates, this means ethical reasoning is a practical marketing skill, not an abstract add-on. Strong decisions consider legal requirements, customer perception, and long-term relationship impact together.',
            'For professors, privacy and consent scenarios provide a strong foundation for teaching governance, stakeholder analysis, and responsible value creation in data-driven marketing systems.',
          ],
          keyPoints: [
            'Consumer trust depends on transparent and respectful data practices.',
            'Consent quality is a strategic factor, not only a legal checkbox.',
            'Privacy-aware design supports durable brand relationships.',
          ],
        },
        {
          title: 'Transparency and Measurement Integrity',
          paragraphs: [
            'Marketing teams need transparency into how AI systems produce recommendations, rankings, and optimization decisions. Without this, it becomes difficult to explain outcomes or diagnose unexpected performance swings.',
            'Measurement integrity also matters because dashboards can create false confidence when underlying metrics are incomplete or poorly aligned with business goals. Clear definitions and auditability are essential.',
            'For undergraduates, this topic highlights why metric literacy is a core management skill in marketing analytics. Students must understand what indicators mean and what they fail to capture.',
            'For professors, transparent measurement systems offer concrete material for teaching accountability frameworks, reproducibility standards, and evidence-based decision communication.',
          ],
          keyPoints: [
            'Transparent model behavior improves accountability in marketing decisions.',
            'Reliable measurement requires clear definitions and audit-ready workflows.',
            'Metric literacy is essential for students and practitioners.',
          ],
        },
        {
          title: 'Brand Consistency Across Automated Channels',
          paragraphs: [
            'As automation expands, marketers must protect consistency in voice, values, and customer experience across channels. Fragmented automated decisions can weaken brand coherence if governance is weak.',
            'AI systems often optimize channel-level outcomes, but brand strength depends on cumulative perception across touchpoints. Local optimization can conflict with enterprise-level positioning goals.',
            'For undergraduates, this demonstrates that strong marketing requires systems thinking. Campaign decisions should be evaluated for their cross-channel and long-term brand effects.',
            'For professors, this concept supports advanced projects where students design governance rules that align channel experimentation with brand architecture and strategic positioning.',
          ],
          keyPoints: [
            'Automated channel optimization must remain aligned with overall brand strategy.',
            'Consistency across touchpoints is a long-term competitive asset.',
            'Governance is needed to prevent fragmented, short-term decision patterns.',
          ],
        },
        {
          title: 'Skills for Students, Faculty, and Marketing Teams',
          paragraphs: [
            'Preparing for AI-enabled marketing requires combined strengths in analytics, consumer psychology, communication, and ethical reasoning. High-performing teams integrate these areas rather than treating them as separate tracks.',
            'Marketing professionals increasingly need to translate between technical model outputs and practical brand decisions. This translation work is central to managerial value creation.',
            'For undergraduates, this means building applied fluency: ask better analytical questions, interpret uncertainty clearly, and communicate decisions in customer-centered language.',
            'For professors, curriculum design can emphasize interdisciplinary projects that combine experimentation, strategic framing, and governance review so students practice realistic decision workflows.',
          ],
          keyPoints: [
            'Marketing-AI readiness combines technical, behavioral, and communication skills.',
            'Translation between analytics and strategy is a core professional capability.',
            'Interdisciplinary training improves decision quality in real-world settings.',
          ],
        },
      ],
    },
  ],
}
