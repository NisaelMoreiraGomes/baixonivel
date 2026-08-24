export interface Link {
  readonly page: string;
  readonly content: string;
  readonly title: string;
  readonly description: string;
  readonly link_description: string;
  readonly thumb?: {
    readonly description: string;
  };
}