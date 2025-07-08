import { z } from "zod";

export const productSchema = z.object({
  product: z.object({
    article: z.string(),
    remote_id: z.number(),
    description: z.string(),
    balance: z.string().or(z.null()),
    brand: z.object({ title: z.string() }),
  }),
  features: z.array(
    z.object({
      title: z.string(),
      unit: z.string().or(z.null()),
      value: z.string().or(z.null()),
    })
  ),
  mediaFiles: z.array(
    z.object({
      url: z.string().url(),
      type: z.string(),
    })
  ),
  files: z
    .record(
      z.record(
        z.object({
          file: z.string(),
          name: z.string(),
        })
      )
    )
    .or(z.array(z.any()))
    .optional(),
  accesories: z
    .object({})
    .extend({
      інше: z
        .array(
          z.object({
            remote_id: z.number(),
            article: z.string(),
            name: z.string(),
          })
        )
        .optional(),
    })
    .catchall(
      z.array(
        z.object({
          remote_id: z.number(),
          article: z.string(),
          name: z.string(),
        })
      )
    ),
  analogs: z.array(z.any()),
});

export const productSchemaShort = z.object({
  article: z.string(),
  remote_id: z.number(),
  description: z.string(),
  image: z.string().or(z.null()),
  balance: z.string().or(z.null()),
  brand: z.object({ title: z.string() }),
});

export const productSchemaById = z.object({
  remote_id: z.number(),
});

export type ProductSchema = z.infer<typeof productSchema>;
export type ProductSchemaShort = z.infer<typeof productSchemaShort>;
export type ProductSchemaById = z.infer<typeof productSchemaById>;
