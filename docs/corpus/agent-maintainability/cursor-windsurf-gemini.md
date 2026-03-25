# Cursor Rules, Windsurf Rules, and GEMINI.md

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (vendor docs)

---

## Cursor Rules

**Source:** [Cursor Docs - Rules](https://cursor.com/docs/rules)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

### Current Format

The legacy `.cursorrules` file is deprecated. Rules now live in `.cursor/rules/` directory as `.mdc` (Markdown with frontmatter) or `.md` files.

```
.cursor/rules/
  ├── rule-name.mdc          # Structured rule with metadata
  ├── simple-rule.md          # Plain markdown rule
  └── frontend/
      └── components.md       # Organizational folders
```

### .mdc File Format

```markdown
---
description: 'Rule purpose'
alwaysApply: false
globs: ['pattern/**/*.ts']
---

Rule content here
```

### Four Activation Modes

1. **Always Apply** -- Apply to every chat session
2. **Apply Intelligently** -- AI decides based on description relevance
3. **Apply to Specific Files** -- Triggered by glob-pattern file matches
4. **Apply Manually** -- Via `@rule-name` mentions in chat

### Also Reads AGENTS.md

Cursor reads AGENTS.md natively as a simpler alternative for straightforward cases.

**Source:** [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) (Community, 16k+ stars) -- large collection of community-contributed rule examples organized by framework and language.

---

## Windsurf Rules (.windsurfrules)

**Source:** [Windsurf Docs - Cascade Memories](https://docs.windsurf.com/windsurf/cascade/memories)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

### Current Format

Legacy `.windsurfrules` file in project root still works. New format uses `.windsurf/rules/*.md` directory.

### Storage Locations

- Global: `~/.codeium/windsurf/memories/global_rules.md`
- Workspace: `.windsurf/rules/*.md`
- System (Enterprise): OS-specific paths

### Character Limits

- Global rules: 6,000 characters max
- Workspace rules: 12,000 characters per file
- Content beyond limits is truncated

### Four Activation Modes

| Mode           | Trigger          | Behavior                                                           |
| -------------- | ---------------- | ------------------------------------------------------------------ |
| Always On      | `always_on`      | Included in system prompt on every message                         |
| Model Decision | `model_decision` | Only description shown initially; full content loads when relevant |
| Glob           | `glob`           | Applied when matching file patterns                                |
| Manual         | `manual`         | Activated via `@rule-name` mention                                 |

### YAML Frontmatter Format

```markdown
---
trigger: always_on
description: 'Project coding standards'
---

Rule content here
```

### Also Reads AGENTS.md

Windsurf reads AGENTS.md natively.

**Source:** [Windsurf Rules Directory](https://windsurf.com/editor/directory) -- curated rule templates from the Windsurf team.

---

## GEMINI.md (Gemini CLI)

**Source:** [Gemini CLI - GEMINI.md Documentation](https://geminicli.com/docs/cli/gemini-md/)
**Source:** [GitHub - google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md)
**Accessed:** 2026-03-24 | **Confidence:** Official (Google) | **Method:** WebSearch + WebFetch

### Purpose

Context files (default name GEMINI.md) provide instructional context to the Gemini model. Instead of repeating instructions in every prompt, define them once.

### Three-Level Hierarchy

1. **Global:** `~/.gemini/GEMINI.md` -- default instructions for all projects
2. **Workspace:** GEMINI.md files in configured workspace directories and parent directories
3. **Just-in-time (JIT):** When a tool accesses a file, the CLI auto-scans that directory and ancestors for GEMINI.md files up to a trusted root

All found files are concatenated and sent with every prompt.

### Management Commands

- `/memory show` -- display all loaded context
- `/memory reload` -- rescan and reload all GEMINI.md files
- `/memory add <text>` -- append text to global context

### Modularization

Supports `@./path/to/file.md` import syntax for breaking large files into components.

### Customization

The filename can be changed from GEMINI.md via `context.fileName` in `settings.json`. You can even specify multiple filenames.

### Also Reads AGENTS.md

Gemini CLI reads AGENTS.md files natively.

---

## Key Takeaways for Our Project

1. All three tools (Cursor, Windsurf, Gemini CLI) read AGENTS.md natively.
2. We don't need to maintain separate rule files for each tool unless we want tool-specific behavior.
3. If we add Cursor/Windsurf rules later, use them for glob-based file-specific rules only (e.g., different rules for components vs. content files).
4. GEMINI.md should be thin like CLAUDE.md -- reference AGENTS.md for shared context, add only Gemini-specific task guides.
