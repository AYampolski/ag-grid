export class GridItem {
  thumbnails: string;
  publishedAt: string;
  title: string;
  description: string;

  constructor(
    thumbnails = null,
    publishedAt = null,
    title = null,
    description = null
  ) {
    this.thumbnails = thumbnails;
    this.publishedAt = publishedAt;
    this.title = title;
    this.description = description;
  }
}
