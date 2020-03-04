export class GoogleResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: YoutubeItem[];
}

export class PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export class YoutubeItem {
  kind: string;
  etag: string;
  id: YoutubeId;
  snippet: YoutubeSnippet;
}

export class YoutubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export class ThumbnailInfo {
  url: string;
  width: number;
  height: number;
}

export class YoutubeThumbnails {
  default: ThumbnailInfo;
  medium: ThumbnailInfo;
  high: ThumbnailInfo;
}

export class YoutubeId {
  kind: string;
  videoId: string;
}
