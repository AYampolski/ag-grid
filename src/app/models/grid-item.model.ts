export class GridItem {
  thumbnails: string;
  publishedAt: string;
  title: string;
  description: string;
  select: boolean;

  constructor(
    thumbnails = null,
    publishedAt = null,
    title = null,
    description = null,
    select = false
  ) {
    this.thumbnails = thumbnails;
    this.publishedAt = publishedAt;
    this.title = title;
    this.description = description;
    this.select = select;
  }
}
