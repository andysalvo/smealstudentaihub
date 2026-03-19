import type { MajorData } from './types'

export const supplyChainData: MajorData = {
  title: 'AI in Supply Chain and Information Systems',
  subtitle:
    'How AI supports supply chain optimization, logistics planning, and data driven operations.',
  sections: [
    {
      title: 'Where AI Appears',
      caption:
        'AI surfaces where data and technology integrate with the flow of goods across global networks.',
      concepts: [
        {
          title: 'End-to-End Network Planning and Coordination',
          paragraphs: [
            'In Supply Chain and Information Systems, AI appears where firms coordinate sourcing, production, transportation, and fulfillment across interconnected networks. Students see this in supply chain strategy and systems courses that connect physical flows with information architecture.',
            'Organizations use AI-supported planning tools to evaluate network constraints, model service-risk tradeoffs, and synchronize decisions across functions that historically operated in silos.',
            'For undergraduates, this topic demonstrates that supply chains are information systems as much as logistics systems. Coordination quality depends on both process design and shared data visibility.',
            'For professors, network-level AI cases offer a strong framework for teaching systems thinking, where analytical outputs are assessed against operational feasibility and organizational alignment.',
          ],
          keyPoints: [
            'AI in SCIS frequently appears in cross-functional network planning decisions.',
            'Information quality and process alignment determine coordination outcomes.',
            'Students should evaluate both analytical insight and operational feasibility.',
          ],
        },
        {
          title: 'Demand Planning and S&OP Analytics',
          paragraphs: [
            'AI is also central in demand planning and Sales and Operations Planning (S&OP), where teams align forecasts with procurement, production, and distribution decisions.',
            'In practice, organizations use AI to process historical demand patterns, market indicators, and promotional signals to improve forecast granularity and planning cadence.',
            'For undergraduates, this shows that forecasting is not only a technical task but a coordination mechanism that links commercial assumptions to operational execution.',
            'For professors, S&OP analytics provides rich material for teaching forecast bias, assumption discipline, and how organizational incentives influence planning quality.',
          ],
          keyPoints: [
            'AI supports more granular and frequent demand-planning cycles.',
            'Forecast value depends on assumption quality and cross-functional use.',
            'Planning systems must connect analytics to executable decisions.',
          ],
        },
        {
          title: 'Inventory, Logistics, and Transport Optimization',
          paragraphs: [
            'Within SCIS, AI appears in inventory and logistics operations where organizations optimize stock levels, replenishment rules, and transportation routing under changing conditions.',
            'AI-enabled systems help evaluate cost-service tradeoffs at scale by combining demand signals, capacity constraints, and lead-time variability across regions and channels.',
            'For undergraduates, this clarifies that optimization outputs are context-dependent recommendations, not universal solutions. Policy constraints and service commitments still shape decisions.',
            'For professors, logistics optimization is a practical context for teaching model assumptions, objective-function design, and the managerial implications of optimization tradeoffs.',
          ],
          keyPoints: [
            'AI can improve routing and inventory decisions in dynamic environments.',
            'Cost-service outcomes depend on objective design and operational constraints.',
            'Optimization should be interpreted within business policy and risk context.',
          ],
        },
        {
          title: 'Supplier Risk and Multi-Tier Visibility',
          paragraphs: [
            'AI appears in supplier and resilience management where firms monitor disruptions, assess supplier risk, and improve visibility beyond first-tier partners.',
            'Organizations use analytics to detect anomaly signals in delivery performance, quality variance, geopolitical exposure, and upstream dependency concentration.',
            'For undergraduates, this highlights that resilience depends on data-sharing quality and governance across partners, not only internal forecasting accuracy.',
            'For professors, supplier-risk analytics supports advanced instruction on vulnerability mapping, resilience metrics, and how information systems shape risk response capability.',
          ],
          keyPoints: [
            'AI supports earlier disruption detection in supplier ecosystems.',
            'Multi-tier visibility is essential for resilient supply network decisions.',
            'Governance and partner data standards affect risk-monitoring quality.',
          ],
        },
      ],
    },
    {
      title: 'What AI Helps With',
      caption:
        'AI is expected to improve forecasting, optimization, and monitoring across supply chain operations.',
      concepts: [
        {
          title: 'Improve Forecasting and Plan Alignment',
          paragraphs: [
            'A core expectation in SCIS is that AI improves forecast accuracy and helps align procurement, production, and distribution plans around shared assumptions.',
            'Teams expect AI systems to surface demand shifts earlier and reduce planning latency so operational decisions can adapt before costs and service failures escalate.',
            'For undergraduates, this emphasizes that better forecasting creates value only when planning decisions actually change in response to new signals.',
            'For professors, this concept supports teaching on forecast consumption, bias correction, and how planning governance affects whether analytical gains are realized.',
          ],
          keyPoints: [
            'AI is expected to improve demand-signal quality and planning responsiveness.',
            'Forecast improvements must translate into changed operational decisions.',
            'Governance determines whether forecasting gains become business value.',
          ],
        },
        {
          title: 'Optimize Inventory, Routing, and Allocation Decisions',
          paragraphs: [
            'Another expectation is that AI can optimize inventory positioning, transportation routing, and allocation choices across complex networks with competing constraints.',
            'SCIS teams use these tools to evaluate multiple decision paths quickly and identify strategies that balance cost efficiency with service-level commitments.',
            'For undergraduates, this shows that optimization is a decision-support process requiring clear objectives and constraint definitions, not merely automated math.',
            'For professors, optimization cases provide strong teaching opportunities around model formulation, sensitivity analysis, and real-world policy tradeoffs.',
          ],
          keyPoints: [
            'AI can accelerate large-scale optimization across supply chain decisions.',
            'Outcome quality depends on objective clarity and realistic constraints.',
            'Optimization should be stress-tested before operational rollout.',
          ],
        },
        {
          title: 'Enable Real-Time Monitoring and Anomaly Response',
          paragraphs: [
            'SCIS programs also expect AI to support real-time monitoring by detecting anomalies in fulfillment, supplier performance, inventory flow, and logistics execution.',
            'Instead of relying only on periodic reports, organizations use AI-driven alerting to identify performance deviations sooner and prioritize response actions.',
            'For undergraduates, this highlights that monitoring value depends on response design: alerts are useful only when escalation paths and decision authority are clear.',
            'For professors, anomaly-response scenarios support applied teaching on control systems, alert fatigue risk, and intervention prioritization under operational pressure.',
          ],
          keyPoints: [
            'AI is expected to reduce response latency through continuous monitoring.',
            'Alert systems require clear ownership and escalation mechanisms.',
            'Monitoring effectiveness depends on intervention discipline.',
          ],
        },
        {
          title: 'Support Tradeoff Analysis for Managers',
          paragraphs: [
            'A broader expectation is that AI improves managerial tradeoff analysis by presenting clearer implications across cost, service, resilience, and capacity dimensions.',
            'SCIS professionals use decision-support outputs to compare scenarios and communicate consequences to stakeholders across operations, finance, and commercial teams.',
            'For undergraduates, this reinforces that AI does not remove managerial judgment; it expands the evidence base available for difficult cross-functional choices.',
            'For professors, tradeoff-analysis cases are useful for teaching decision quality criteria, transparency standards, and cross-functional communication in analytics-driven environments.',
          ],
          keyPoints: [
            'AI is expected to improve visibility into multi-objective tradeoffs.',
            'Managerial judgment remains central in selecting among scenarios.',
            'Decision support must be interpretable across stakeholder groups.',
          ],
        },
      ],
    },
    {
      title: 'Where AI Falls Short',
      caption:
        'Supply chains face structural uncertainty that no model can fully capture or eliminate.',
      concepts: [
        {
          title: 'AI Cannot Eliminate Structural Uncertainty',
          paragraphs: [
            'A common misconception is that AI can remove supply chain uncertainty. In reality, SCIS environments face structural volatility from geopolitical events, regulation, weather shocks, and demand regime changes.',
            'Models built on historical data can underperform when conditions shift abruptly or when unprecedented disruptions alter system behavior.',
            'For undergraduates, this clarifies that uncertainty management is a strategic discipline, not a prediction contest. Robustness and adaptability remain critical.',
            'For professors, this concept supports instruction on model fragility, scenario stress design, and resilience planning under deep uncertainty.',
          ],
          keyPoints: [
            'AI improves signal processing but cannot remove external uncertainty.',
            'Historical patterns may break under structural disruption.',
            'Resilience design remains essential in SCIS decision frameworks.',
          ],
        },
        {
          title: 'Recommendations Are Not Autonomous Decisions',
          paragraphs: [
            'Another oversimplification is assuming AI recommendations can be executed automatically without context. SCIS decisions are constrained by contracts, service commitments, regulations, and strategic priorities.',
            'Even high-quality recommendations require human interpretation, stakeholder alignment, and policy checks before implementation.',
            'For undergraduates, this shows that professional value lies in translation between analytical output and operationally feasible decisions.',
            'For professors, this topic helps reinforce governance-oriented teaching where automation is treated as support to accountable management rather than a substitute for it.',
          ],
          keyPoints: [
            'AI outputs are recommendations, not independent executive authority.',
            'Operational and contractual constraints shape feasible actions.',
            'Human accountability remains central in implementation decisions.',
          ],
        },
        {
          title: 'Complexity Can Reduce Explainability and Trust',
          paragraphs: [
            'There is also a tendency to assume more complex models are always better. In SCIS practice, excessive complexity can reduce interpretability and weaken stakeholder trust in outputs.',
            'When decision logic is unclear, adoption can decline and governance risk can increase, particularly in regulated or partner-facing supply processes.',
            'For undergraduates, this emphasizes that model selection should consider explainability, communication needs, and decision context alongside predictive performance.',
            'For professors, this creates a valuable framework for teaching performance-interpretability tradeoffs and transparency standards in operational analytics.',
          ],
          keyPoints: [
            'Higher model complexity does not guarantee better business decisions.',
            'Explainability is necessary for adoption and accountable governance.',
            'Model choice should balance accuracy, transparency, and use context.',
          ],
        },
        {
          title: 'Data Quality and Interoperability Limit Results',
          paragraphs: [
            'AI outcomes in SCIS are often constrained by fragmented data standards across internal systems and external partners. Inconsistent data can distort recommendations.',
            'Without strong interoperability and governance protocols, even sophisticated analytics can produce unreliable or misleading outputs.',
            'For undergraduates, this demonstrates that data engineering and standards alignment are strategic capabilities in supply chain performance improvement.',
            'For professors, interoperability challenges offer realistic case settings for teaching system integration, data contracts, and multi-party information governance.',
          ],
          keyPoints: [
            'Data quality and partner interoperability strongly affect AI reliability.',
            'Weak information standards can propagate error across decisions.',
            'SCIS performance depends on disciplined data architecture.',
          ],
        },
      ],
    },
    {
      title: 'What to Keep in Mind',
      caption:
        'Integration, governance, and resilience shape how AI is evaluated in this discipline.',
      concepts: [
        {
          title: 'Enterprise Systems Integration and Process Fit',
          paragraphs: [
            'A central SCIS consideration is integration: AI capabilities must fit ERP, planning, and execution systems that coordinate physical and information flows.',
            'Poor integration can create fragmented decision signals and reduce cross-functional coordination, even when analytical models are strong.',
            'For undergraduates, this highlights that systems fit is a business issue as much as a technical one. Adoption depends on workflow compatibility.',
            'For professors, integration-focused projects help students evaluate architecture choices, process dependencies, and implementation sequencing in enterprise environments.',
          ],
          keyPoints: [
            'AI value in SCIS depends on enterprise system and workflow integration.',
            'Process fit determines whether insights become executable action.',
            'Architecture and operations design must be aligned.',
          ],
        },
        {
          title: 'Data Governance and Partner Information Standards',
          paragraphs: [
            'SCIS involves multi-party ecosystems, so governance and shared data standards are fundamental to reliable analytics across suppliers, logistics providers, and internal units.',
            'Organizations need clear ownership, lineage controls, and protocol consistency to maintain trust in system outputs over time.',
            'For undergraduates, this means governance literacy is part of core professional readiness in supply chain analytics roles.',
            'For professors, partner-data standards provide practical teaching contexts for information stewardship, platform governance, and inter-organizational coordination.',
          ],
          keyPoints: [
            'Shared standards are required for reliable cross-partner analytics.',
            'Governance controls preserve trust and consistency over time.',
            'Stewardship capability is central to SCIS performance.',
          ],
        },
        {
          title: 'Efficiency vs Resilience Strategy Balance',
          paragraphs: [
            'Another key SCIS consideration is balancing efficiency and resilience. AI models may favor leaner configurations, while strategy may require buffers for disruption tolerance.',
            'This tension requires explicit decision frameworks that weigh cost targets against service continuity and risk exposure.',
            'For undergraduates, this underscores that optimization goals are managerial choices, not purely technical outcomes.',
            'For professors, this topic supports advanced instruction on multi-objective strategy design and resilience-aware performance management.',
          ],
          keyPoints: [
            'AI recommendations should be evaluated against resilience objectives.',
            'Cost efficiency and robustness often require explicit tradeoff decisions.',
            'Strategy determines how optimization outputs are interpreted.',
          ],
        },
        {
          title: 'Skills for Students, Faculty, and SCIS Teams',
          paragraphs: [
            'Preparing for AI-enabled SCIS work requires combined capability in analytics, operations, systems design, governance, and communication.',
            'Professionals increasingly need to translate model outputs into process decisions that stakeholders across procurement, logistics, finance, and IT can trust and execute.',
            'For undergraduates, this means building interdisciplinary fluency: ask stronger analytical questions, interpret uncertainty, and communicate implications clearly.',
            'For professors, curriculum design can emphasize integrated projects where students practice decision support, governance reasoning, and cross-functional coordination under realistic constraints.',
          ],
          keyPoints: [
            'SCIS-AI readiness combines technical, operational, and communication skills.',
            'Translation across business and technical teams is a core capability.',
            'Interdisciplinary training improves real-world decision quality.',
          ],
        },
      ],
    },
  ],
}
