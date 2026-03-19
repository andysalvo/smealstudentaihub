import type { MajorData } from './types'

export const riskManagementData: MajorData = {
  title: 'AI in Risk Management',
  subtitle: 'How AI supports risk analysis, threat detection, and data driven decision making.',
  sections: [
    {
      title: 'Where AI Appears',
      caption:
        'AI enters risk management where organizations work with large datasets to assess exposures and model uncertain outcomes.',
      concepts: [
        {
          title: 'Insurance Underwriting and Claims',
          paragraphs: [
            'In risk management, one of the most visible areas where AI appears is insurance. Underwriting involves evaluating risk characteristics to decide whether to accept coverage and at what price. AI enters this process when carriers work with large volumes of submission data and need to assess risk across many applicants or portfolios.',
            'Claims management is a related context. When insurers process thousands of claims, AI is discussed as a way to identify patterns that may indicate fraud, accelerate straightforward claims, or route complex cases to experienced adjusters.',
            'Students encounter these ideas in coursework on insurance principles, loss modeling, and risk analytics. The connection between data analysis and business decisions is direct and concrete in insurance settings.',
            'For professors, insurance AI cases offer clear illustrations of how quantitative tools operate inside regulated, high-stakes decision environments where outcomes affect real people.',
          ],
          keyPoints: [
            'AI appears in underwriting where carriers evaluate risk across large submission volumes.',
            'Claims processing uses AI for fraud detection, triage, and routing decisions.',
            'Insurance contexts connect data analysis directly to regulated business outcomes.',
          ],
        },
        {
          title: 'Financial and Credit Risk Modeling',
          paragraphs: [
            'AI also appears in financial risk management, where institutions model credit risk, market volatility, and counterparty exposure. Banks and asset managers use quantitative models to estimate potential losses and manage capital under regulatory requirements.',
            'Credit scoring is a specific area where AI has gained traction. Lenders process high volumes of applications and use models to assess default probability based on borrower characteristics, payment history, and economic indicators.',
            'Students typically see these concepts in courses on financial markets, probability, and risk analytics. The relationship between model assumptions and business consequences is a recurring theme.',
            'For professors, credit risk modeling is useful for teaching how model design choices affect outcomes, and how regulatory frameworks constrain what automated systems can do in lending contexts.',
          ],
          keyPoints: [
            'AI supports credit risk assessment, market risk modeling, and exposure monitoring.',
            'Lending decisions increasingly involve automated scoring alongside human review.',
            'Regulatory requirements shape how financial institutions deploy risk models.',
          ],
        },
        {
          title: 'Enterprise Risk Management and Compliance',
          paragraphs: [
            'In enterprise risk management, AI appears when organizations attempt to monitor risk indicators across departments and business units. ERM frameworks typically involve identifying, assessing, mitigating, and reporting risks at an organizational level.',
            'AI is discussed as a way to aggregate signals from different systems and flag areas where exposure may be increasing. Compliance monitoring is a related application, where tools scan transactions or activities against regulatory rules and internal policies.',
            'Students encounter ERM concepts in courses that bridge strategy, operations, and governance. The challenge is not just measurement but coordination across functions that may use different data and different definitions of risk.',
            'For professors, ERM provides a natural setting for teaching systems thinking. Risks do not stay in neat categories, and managing them requires both analytical tools and organizational processes.',
          ],
          keyPoints: [
            'ERM uses AI to aggregate and monitor risk signals across organizational functions.',
            'Compliance monitoring applies automated checks against regulatory and policy rules.',
            'Cross-functional coordination is as important as analytical capability in ERM.',
          ],
        },
        {
          title: 'Catastrophe Modeling and Emerging Risks',
          paragraphs: [
            'Catastrophe modeling is a specialized area where AI appears in connection with estimating losses from natural disasters, climate events, and other large-scale disruptions. These models combine geographic, structural, and meteorological data to project potential damage across property portfolios.',
            'Emerging risk categories like cybersecurity and climate exposure also draw on AI. Organizations use analytical tools to assess threats that have limited historical precedent but significant potential impact.',
            'Students may encounter catastrophe modeling in courses on insurance, property risk, or environmental economics. These topics show how risk professionals deal with events that are rare but consequential.',
            'For professors, emerging risks offer a valuable teaching context because they force students to think about what happens when historical data is sparse and uncertainty is high.',
          ],
          keyPoints: [
            'Catastrophe models use AI to estimate losses from natural disasters across portfolios.',
            'Emerging risks like cyber and climate have limited history but growing exposure.',
            'These contexts highlight how risk professionals manage deep uncertainty.',
          ],
        },
      ],
    },
    {
      title: 'What AI Helps With',
      caption:
        'AI is expected to improve the speed and coverage of risk identification across structured and unstructured data.',
      concepts: [
        {
          title: 'Faster Risk Identification and Measurement',
          paragraphs: [
            'AI is commonly expected to improve the speed and precision of risk identification. Organizations deal with large volumes of structured and unstructured data, and AI can scan for patterns that may signal emerging threats, fraud indicators, or shifts in exposure.',
            'In practice, this shows up in how risk teams think about their analytical workload. Instead of reviewing every report or data feed manually, AI can highlight the items that appear to deviate from expected patterns.',
            'For students, this is a useful way to think about efficiency in risk work. The goal is not to automate judgment but to direct attention more deliberately toward the areas that warrant closer investigation.',
            'For professors, faster identification raises important questions about how organizations act on early signals and whether speed improvements translate into better risk decisions.',
          ],
          keyPoints: [
            'AI can scan large datasets for signals that may indicate emerging risk.',
            'Faster identification helps direct attention toward higher-priority exposures.',
            'Speed matters only when it leads to better-informed risk decisions.',
          ],
        },
        {
          title: 'Early-Warning and Continuous Monitoring',
          paragraphs: [
            'Rather than relying on periodic reviews, organizations increasingly discuss AI as a way to monitor risk indicators continuously. The idea is that ongoing surveillance can detect shifts before they become losses.',
            'This is discussed in insurance, financial services, and operational risk contexts. Real-time monitoring systems track metrics and generate alerts when thresholds are approached or breached.',
            'For students, this introduces the concept of moving from retrospective analysis to proactive risk detection. The practical challenge is not just building alerts but designing response processes that act on them.',
            'For professors, continuous monitoring raises teaching opportunities around alert fatigue, threshold design, and how organizations balance sensitivity with false-positive management.',
          ],
          keyPoints: [
            'AI supports continuous monitoring rather than periodic risk reviews.',
            'Alert systems must be paired with clear escalation and response processes.',
            'Monitoring effectiveness depends on intervention discipline, not just detection.',
          ],
        },
        {
          title: 'Fraud and Anomaly Detection',
          paragraphs: [
            'Fraud detection is one of the most established applications of AI in risk management. Insurance carriers, banks, and payment processors use models to identify patterns that deviate from normal behavior and may indicate fraudulent activity.',
            'These systems learn from historical fraud cases and apply that learning to new transactions. The models look for combinations of characteristics that differ from legitimate patterns, even when the specific fraud scheme has not been seen before.',
            'For students, fraud detection illustrates how AI moves beyond rule-based checking. It is less about matching known red flags and more about identifying statistical anomalies across large populations.',
            'For professors, fraud detection cases are useful for teaching the tradeoff between catching more fraud and generating more false positives, and how that balance affects operational cost and customer experience.',
          ],
          keyPoints: [
            'Fraud detection applies AI to identify behavioral patterns that deviate from norms.',
            'Models learn from historical cases but can also flag novel anomaly combinations.',
            'False-positive management is a practical concern alongside detection accuracy.',
          ],
        },
        {
          title: 'Decision Support Under Uncertainty',
          paragraphs: [
            'More broadly, AI is expected to support risk managers by organizing complex information and highlighting relationships that may not be obvious through manual review. The emphasis is on strengthening the evidence base for decisions made under uncertainty.',
            'This includes scenario analysis, stress testing, and portfolio-level exposure assessment. AI can run more scenarios, test more assumptions, and present results in ways that help managers compare options.',
            'For students, this reinforces that risk management is fundamentally about making decisions with incomplete information. AI expands what can be evaluated but does not remove the need for judgment about which scenarios matter most.',
            'For professors, decision-support cases are strong vehicles for teaching how managers use analytical outputs and where organizational context shapes which recommendations are actually followed.',
          ],
          keyPoints: [
            'AI supports scenario analysis and stress testing at broader scale.',
            'Decision support expands the evidence base without replacing judgment.',
            'How managers interpret and act on outputs matters as much as model quality.',
          ],
        },
      ],
    },
    {
      title: 'Where AI Falls Short',
      caption:
        'Risk management operates in environments where uncertainty is irreducible and governance remains essential.',
      concepts: [
        {
          title: 'AI Cannot Eliminate Uncertainty',
          paragraphs: [
            'A common misunderstanding is that AI can remove uncertainty from risk management. By definition, the field operates where outcomes are probabilistic and information is incomplete. AI can model patterns based on historical data, but it cannot eliminate the underlying uncertainty that defines risk exposure.',
            'Structural shifts such as economic crises, regulatory changes, pandemics, or rare catastrophic events can make historical patterns unreliable as predictors. Models trained on past data may perform poorly when conditions change in ways the data does not represent.',
            'For students, this is an important conceptual point. Uncertainty management is a strategic discipline, not a prediction contest. The goal is not to forecast perfectly but to prepare for a range of outcomes.',
            'For professors, this distinction supports teaching on model fragility, scenario stress design, and why resilience planning matters alongside analytical precision.',
          ],
          keyPoints: [
            'Risk management operates where uncertainty is irreducible.',
            'Historical patterns may break during structural shifts or rare events.',
            'Preparing for a range of outcomes matters more than forecasting one.',
          ],
        },
        {
          title: 'More Data Does Not Guarantee Better Assessments',
          paragraphs: [
            'Another oversimplification is assuming that more data automatically produces better risk assessments. Risk models depend not only on data volume but on data quality, relevance, and stability over time.',
            'If the data reflects a period of unusual calm, models may understate risk. If data definitions change across systems or partners, inconsistencies can distort results. Volume alone does not compensate for gaps in representativeness or reliability.',
            'For students, this clarifies that data work in risk management is not just collection but curation. Understanding what the data represents and what it misses is part of professional competence.',
            'For professors, data quality discussions ground AI instruction in the practical realities of enterprise data environments, where clean and consistent data is the exception rather than the rule.',
          ],
          keyPoints: [
            'Data quality, relevance, and stability matter more than volume alone.',
            'Unrepresentative or inconsistent data can produce misleading risk assessments.',
            'Curation and understanding of data limitations are professional skills.',
          ],
        },
        {
          title: 'Predictive Accuracy Is Not the Same as Governance',
          paragraphs: [
            'There is a tendency to equate predictive accuracy with sound risk management. In practice, risk governance involves documentation, model validation, regulatory compliance, and accountability. A model that predicts well but cannot be explained or audited creates its own risks.',
            'Complex AI models can introduce opacity into risk processes. When stakeholders, regulators, or auditors ask how a risk score was generated, the answer needs to be clear and defensible.',
            'For students, this introduces the idea that accuracy is necessary but not sufficient. The institutional context in which a model operates determines whether its outputs are trustworthy and usable.',
            'For professors, this concept supports instruction on model risk management, where the tools themselves are treated as sources of risk that require governance, testing, and oversight.',
          ],
          keyPoints: [
            'Predictive accuracy alone does not satisfy governance requirements.',
            'Risk models must be explainable, auditable, and defensible to stakeholders.',
            'Model risk is a recognized category requiring its own governance.',
          ],
        },
        {
          title: 'AI Does Not Replace Existing Risk Frameworks',
          paragraphs: [
            'AI is sometimes described as replacing traditional risk models or approaches. In practice, it is integrated into existing quantitative frameworks. Risk professionals continue to rely on defined assumptions, stress testing, scenario analysis, and human review processes.',
            'The value of AI is in strengthening parts of these frameworks, not in bypassing them. Automated outputs still need to be validated, documented, and reviewed before they inform decisions that affect pricing, coverage, capital, or compliance.',
            'For students, this means understanding existing risk frameworks is a prerequisite for understanding how AI fits within them. The tool does not make the framework optional.',
            'For professors, this framing helps keep AI instruction connected to foundational risk management principles rather than treating it as a separate topic.',
          ],
          keyPoints: [
            'AI is integrated into existing risk frameworks, not a replacement for them.',
            'Automated outputs still require validation and human review.',
            'Understanding risk fundamentals is prerequisite to effective AI use.',
          ],
        },
      ],
    },
    {
      title: 'What to Keep in Mind',
      caption:
        'AI is evaluated in terms of how it affects measurement, governance, and organizational resilience.',
      concepts: [
        {
          title: 'Balancing Precision and Interpretability',
          paragraphs: [
            'In risk management, a central tension is between analytical precision and interpretability. More complex models may capture finer patterns, but they can also become harder to explain, validate, and trust.',
            'This matters because risk decisions often affect pricing, lending access, insurance coverage, and capital allocation. When outcomes affect people and organizations, the reasoning behind those outcomes needs to be visible.',
            'For students, this tradeoff is a useful lens for evaluating any analytical tool. The question is not just whether it works but whether the people using it can understand and defend its results.',
            'For professors, precision-interpretability tradeoffs are a natural framework for teaching model selection criteria that extend beyond technical performance.',
          ],
          keyPoints: [
            'Complex models may be accurate but harder to explain and validate.',
            'Risk decisions that affect people require transparent reasoning.',
            'Model selection should weigh interpretability alongside predictive power.',
          ],
        },
        {
          title: 'Model Risk Is a Category of Its Own',
          paragraphs: [
            'AI systems used in risk management are themselves sources of risk. If a model is poorly designed, inadequately tested, or insufficiently governed, it can produce outcomes that distort rather than improve risk management.',
            'This creates a layered challenge: organizations must manage both the risks they are modeling and the risks introduced by the modeling tools. Model validation, ongoing monitoring, and clear ownership are standard expectations.',
            'For students, model risk is a concrete example of how technology adoption introduces new responsibilities. The tool does not manage itself.',
            'For professors, model risk provides a compelling case for teaching governance, validation protocols, and accountability in analytical work.',
          ],
          keyPoints: [
            'AI risk models can themselves become sources of organizational risk.',
            'Model validation and governance are ongoing, not one-time activities.',
            'Technology adoption creates new responsibilities alongside new capabilities.',
          ],
        },
        {
          title: 'Transparency and Explainability Requirements',
          paragraphs: [
            'Risk decisions often face scrutiny from regulators, auditors, and stakeholders. In insurance and finance, organizations must be able to explain how risk scores, pricing decisions, or coverage determinations were reached.',
            'As AI becomes more embedded in these processes, the demand for explainability grows. Black-box models that produce results without transparent logic create compliance risk in regulated industries.',
            'For students, this means that working with AI in risk management involves communication and documentation as much as technical skill. Being able to explain a result matters as much as producing it.',
            'For professors, explainability requirements connect AI instruction to professional practice standards in insurance, finance, and enterprise risk management.',
          ],
          keyPoints: [
            'Regulated industries require that risk decisions be explainable.',
            'Black-box models create compliance risk when transparency is expected.',
            'Communication and documentation are core professional skills in risk work.',
          ],
        },
        {
          title: 'AI Within Established Governance Frameworks',
          paragraphs: [
            'In risk management, AI is discussed as an extension of quantitative analysis within established governance frameworks. It is evaluated in terms of how it affects measurement accuracy, control structures, regulatory compliance, and organizational resilience.',
            'This framing matters because it keeps the conversation grounded. AI is not a standalone advancement. It is a capability embedded in processes that already have defined standards, accountability structures, and oversight requirements.',
            'For students, this means understanding risk governance is part of understanding AI in risk management. The technology operates inside a system of checks, not outside of it.',
            'For professors, governance-centered AI instruction connects naturally to existing curricula on ERM, insurance regulation, financial oversight, and professional standards.',
          ],
          keyPoints: [
            'AI is evaluated within existing governance, compliance, and oversight frameworks.',
            'Risk management processes have established standards that AI must fit within.',
            'Governance literacy is essential for professionals working with AI in this field.',
          ],
        },
      ],
    },
  ],
}
