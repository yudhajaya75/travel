import { MediaType, MetaData } from "./StrapiGlobal";

export type Logo = {
    id: number;
    attributes: {
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        BackgroundLogo: MediaType;
    };
};

