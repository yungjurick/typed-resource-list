type ResourceType = "url" | "image";

interface BaseResource {
  id: string;
  title: string;
  createdAt: string;
}

interface UrlResource extends BaseResource {
  type: "url";
  url: string;
}

interface ImageResource extends BaseResource {
  type: "image";
  file: Blob;
}

type Resource = UrlResource | ImageResource;
