import { z } from "zod";

export const DataSchema = z.array(
  z.object({
    width: z
      .number({
        required_error: "Ширина шини має бути вказана",
      })
      .int()
      .gt(10, { message: "Невалідний розмір" })
      .lt(200, { message: "Невалідний розмір" }),
    thickness: z
      .number({
        required_error: "Товщина шини має бути вказана",
      })
      .int()
      .gt(2, { message: "Невалідний розмір" })
      .lt(12, { message: "Невалідний розмір" }),
    current: z.object({
      x1: z
        .number({
          required_error: "Поле х1 має бути вказане",
        })
        .int(),
      x2: z
        .number({
          required_error: "Поле х2 має бути вказане",
        })
        .nullable()
        .optional(),
      x3: z
        .number({
          required_error: "Поле х3 має бути вказане",
        })
        .nullable()
        .optional(),
    }),
    currentRange: z.object({
      x1: z
        .string({
          required_error: "Поле х1 має бути вказане",
        })
        .nullable()
        .optional(),
      x2: z
        .string({
          required_error: "Поле х2 має бути вказане",
        })
        .nullable()
        .optional(),
      x3: z
        .string({
          required_error: "Поле х3 має бути вказане",
        })
        .nullable()
        .optional(),
    }),
  })
);
