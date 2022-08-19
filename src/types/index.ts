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
  readonly title: string,
  readonly descriptionShort: string,
  readonly descriptionLong: string,
  readonly technologies: TechnologyType[],
  readonly images: string[],
  readonly categories: string[],
  readonly links: LinkType[]
}

export type LinkType = {
  readonly href: string,
  readonly icon?: string,
  readonly name?: string,
  readonly color?: string
}

export type InfoType = {
  readonly name: string,
  readonly content: string[],
  readonly date: string
}

export type AchievementType = {
  title?: string,
  content?: string[],
  readonly image: string,
  readonly file: string
}
