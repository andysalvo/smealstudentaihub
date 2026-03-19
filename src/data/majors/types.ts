export interface KeyPoint {
  text: string
}

export interface Concept {
  title: string
  paragraphs: string[]
  keyPoints: string[]
}

export interface Section {
  title: string
  caption: string
  concepts: Concept[]
}

export interface MajorData {
  title: string
  subtitle: string
  sections: Section[]
}
