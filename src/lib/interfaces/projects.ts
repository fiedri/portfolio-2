export interface Project {
  id: string,
  title: string,
  description: string,
  stack: Array<string>,
  status: string,
  github_link: string | undefined,
  view_link: string | undefined
}
