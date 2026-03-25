# Agent-Maintainable Repo Structure

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Community (well-cited practitioners)

---

## 10 Core Practices

**Source:** [Ben Houston - Agentic Coding Best Practices](https://benhouston3d.com/blog/agentic-coding-best-practices)
**Accessed:** 2026-03-24 | **Confidence:** Community (well-cited) | **Method:** WebSearch + WebFetch

1. **Documentation as Code** -- README files and CONTRIBUTING guides become your AI instruction set.
2. **Minimize Package Explosion** -- Avoid micropackages. Keep lean structure with clear boundaries.
3. **Simplify Project Structure** -- Flatter directory hierarchies. Group related functionality together.
4. **Limit Re-exports and Indirection** -- Restrict index.ts re-export chains to package-level only. Direct imports help agents trace dependencies.
5. **Compile-Time Over Runtime Validation** -- TypeScript with strict type checking improved AI success rate from ~60% to nearly 100% for route-related tasks.
6. **Centralized Linting Configuration** -- Root-level ESLint/Prettier configs eliminate inconsistencies.
7. **Independent Configuration Files** -- Self-contained config per package, not complex inheritance chains.
8. **Type-Driven Development** -- Discriminated unions and exhaustive type definitions guide correct implementation.
9. **Consistent File Organization** -- Predictable patterns for tests, types, utilities in standardized locations.
10. **Test-Driven Documentation** -- Tests as living documentation showing inputs, outputs, expected behavior.

Key insight: **"Practices benefiting AI also improve human developer experience, especially for newcomers."**

---

## Agents Meta-Repository Pattern

**Source:** [Seylox - Agents Meta-Repo Pattern](https://seylox.github.io/2026/03/05/blog-agents-meta-repo-pattern.html)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch

A dedicated repo that serves as an AI agent's knowledge base for multi-repo codebases:

```
AGENTS.md              # Entry point with repo map and conventions
repos.yaml             # Machine-readable config with paths, build commands
conventions/           # Standards for commits, branching, releases
workflows/             # Step-by-step playbooks for cross-repo operations
scripts/               # Standardized tooling
active-work/           # Multi-session epic tracking
archive/               # Completed work as reference
```

Not directly applicable to our single-repo project, but the `conventions/` and `workflows/` patterns are worth borrowing.

---

## Key Takeaways for Our Project

1. **TypeScript strict mode is the single biggest win** for agent code quality. Non-negotiable.
2. **Flat directory structure** -- group by feature, not by type. Agents trace code better in flat trees.
3. **No re-export chains** -- direct imports only. `index.ts` barrel files confuse agents.
4. **Tests as documentation** -- agents learn expected behavior from tests, not comments.
5. **Centralized config** -- one ESLint, one Prettier, one tsconfig at root.
6. **Content separate from code** -- `/content/` directory with MDX files, separate from `/src/` components. Agents updating content shouldn't need to understand component internals.
