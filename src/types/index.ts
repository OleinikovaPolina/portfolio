export type HeaderLinkType = {
  readonly name: string,
  readonly path: string,
  readonly icon: string,
}

export type TechnologyType = {
  readonly name: string,
  readonly img?: string
}

export type ProjectType = {
  title?: string,
  descriptionShort?: string,
  descriptionLong?: string,
  readonly technologies: TechnologyType[],
  readonly images: string[],
  readonly categories: string[],
  readonly links: LinkType[],
  readonly date: string
}

export type LinkType = {
  readonly href: string,
  readonly icon?: string,
  readonly name?: string,
  readonly color?: string
}

export type AchievementType = {
  title?: string,
  content?: string[],
  readonly image: string,
  readonly file: string
}

export type ContributionType = {
  date: string,
  count: number
}
